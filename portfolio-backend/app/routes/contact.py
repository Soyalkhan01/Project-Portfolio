from fastapi import APIRouter, HTTPException, BackgroundTasks, Request
from pydantic import BaseModel, Field, EmailStr, field_validator
import re
from app.database.connection import contacts_collection
from app.services.email_service import send_contact_email
import logging
from app.core.rate_limit import limiter
import os
import requests
from dotenv import load_dotenv 

from datetime import datetime, timezone


load_dotenv()

logger = logging.getLogger(__name__)

router= APIRouter()

class Contact(BaseModel):

    model_config = {
        "str_strip_whitespace": True
    }

    name:str = Field(...,min_length=2, max_length=50)
    phone:str = Field(...,min_length=10, max_length=10, pattern=r"^[0-9]{10}$")
    email:str = EmailStr
    message:str = Field(...,min_length=10, max_length=1000)
    turnstileToken:str
    
    @field_validator("name", "message")
    @classmethod
    def sanitize_text(cls, value: str):
        value = re.sub(r"<[^>]*>", "", value)
        return value.strip()
    
class ContactResponse(BaseModel):
    message:str
    id:str

@router.post("/contacts", status_code=201, response_model=ContactResponse)

@limiter.limit("5/minute")
def create_contact(
    request: Request,
    contact: Contact,
    background_tasks: BackgroundTasks
):
    
    secret_key = os.getenv("TURNSTILE_SECRET_KEY")

    if not secret_key:
        logger.error("TURNSTILE_SECRET_KEY is not configured")
        raise HTTPException(
            status_code=500,
            detail="Server configuration error"
        )

    try:
        verification_response = requests.post(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            data={
                "secret": secret_key,
                "response": contact.turnstileToken,
            },
            timeout=10,
        )

        verification_response.raise_for_status()
        verification_result = verification_response.json()
        

    except requests.RequestException:
        logger.exception("Turnstile verification request failed")
        raise HTTPException(
            status_code=503,
            detail="CAPTCHA verification service unavailable"
        )

    except ValueError:
        logger.exception("Invalid Turnstile response")
        raise HTTPException(
            status_code=503,
            detail="CAPTCHA verification service unavailable"
        )

    if not verification_result.get("success"):
        logger.warning(
            "Turnstile verification failed: %s",
            verification_result
        )
        raise HTTPException(
            status_code=400,
            detail="CAPTCHA verification failed. Please complete the CAPTCHA again."
        )

    contact_data = contact.model_dump(exclude={"turnstileToken"})
    
    contact_data["submitted_at"] = datetime.now(timezone.utc)

    try:
        result = contacts_collection.insert_one(contact_data)

        background_tasks.add_task(
            send_contact_email,
            contact.name,
            contact.phone,
            contact.email,
            contact.message
        )

        return {
            "message": "Contact Received Successfully",
            "id": str(result.inserted_id)
        }

    except Exception:
        logger.exception("Failed to save contact")
        raise HTTPException(
            status_code=500,
            detail="Failed to save contact"
        )