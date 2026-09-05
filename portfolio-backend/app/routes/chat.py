from fastapi import APIRouter
from pydantic import BaseModel, Field
from fastapi.responses import StreamingResponse

import os
from dotenv import load_dotenv

from google import genai

from app.data.portfolio_data import (
    about_data,
    projects_data,
    skills_data,
    experience_data,
    education_data,
    certification_data,
    contact_data,
    services_data,
)


load_dotenv()

router = APIRouter()


class ChatRequest(BaseModel):
    message: str = Field(
        ...,
        min_length=1,
        max_length=500
    )


about_context = f"""
Name:
Soyal Khan

Role:
Full Stack Developer

About Me:
{about_data["description"][0]}
{about_data["description"][1]}

Development Focus:
{about_data["stats"][2]["value"]}

Technologies:
{", ".join(about_data["technologies"])}

Availability:
{about_data["availability"]}
"""


projects_context = ""

for project in projects_data:
    projects_context += f"""
Project:
{project["title"]}

Description:
{project["description"]}

Technologies:
{", ".join(project["technologies"])}

Category:
{project["category"]}

GitHub:
{project["github"]}

---
"""


skills_context = ""

for category, skills in skills_data.items():
    skills_context += f"\n{category}:\n"

    for skill in skills:
        skills_context += (
            f"- {skill['name']} ({skill['level']})\n"
        )


experience_context = ""

for experience in experience_data:
    experience_context += f"""
Role:
{experience["role"]}

Company:
{experience["company"]}

Duration:
{experience["duration"]}

Technologies:
{", ".join(experience["technologies"])}

Responsibilities:
"""

    for responsibility in experience["responsibilities"]:
        experience_context += f"- {responsibility}\n"

    experience_context += "\n---\n"


education_context = f"""
Degree:
{education_data["degree"]}

Institution:
{education_data["institution"]}

Status:
{education_data["status"]}
"""


certification_context = ""

for certificate in certification_data:
    certification_context += f"""
Certificate:
{certificate["title"]}

Issuer:
{certificate["issuer"]}

Year:
{certificate["year"]}

---
"""


contact_context = f"""
Phone:
{contact_data["phoneNo"]}

Email:
{contact_data["email"]}

Location:
{contact_data["location"]}
"""


services_context = ""

for service in services_data:
    services_context += f"""
Service:
{service["title"]}

Description:
{service["description"]}

Technologies:
{", ".join(service["technologies"])}
"""

    if "details" in service:
        services_context += "\nDetails:\n"

        for detail in service["details"]:
            services_context += f"- {detail}\n"

    services_context += "\n---\n"


def generate_response(prompt):

    gemini_api_key = os.getenv("GEMINI_API_KEY")

    if not gemini_api_key:
        raise RuntimeError(
            "GEMINI_API_KEY is not configured"
        )

    client = genai.Client(
        api_key=gemini_api_key
    )

    response = client.models.generate_content_stream(
       model="gemini-3.5-flash-lite",
        contents=prompt,
    )

    for chunk in response:
        if chunk.text:
            yield chunk.text


@router.post("/chat")
def chat(data: ChatRequest):

    prompt = f"""
    
You are Soyal's Portfolio AI Assistant.

ASSISTANT IDENTITY:

If the user asks questions such as:
- "Who are you?"
- "Who are you to Soyal?"
- "What are you to Soyal?"
- "What is your relation with Soyal?"
- "Are you Soyal's assistant?"
- "Soyal aapko kya lagta hai?"
- "Soyal ke liye aap kaun ho?"
- "Aap Soyal ko kaise jaante ho?"

Respond naturally that you are Soyal's portfolio AI assistant.

You can say:
"I’m Soyal’s AI Assistant. I’m here to help you learn more about Soyal, his skills, projects, experience, education, services, and professional background."

Do not claim to be a real person, friend, employee, family member, or personal assistant.

You are Soyal's Portfolio AI Assistant.

Answer the user's question using ONLY the portfolio information provided below.

If the answer is not available in the portfolio information,
say that the information is not available in Soyal's portfolio.

Keep your answer short, clear and professional.


You have two types of questions:

1. PORTFOLIO QUESTIONS:

For questions about Soyal, his skills, projects, experience,
education, certifications, services, or contact information,
use ONLY the Portfolio Information provided below.

Never invent, assume, guess, or add information about Soyal.

If the requested information about Soyal is not available
in the Portfolio Information, say:

"That information is not available in Soyal's portfolio."


2. NORMAL CONVERSATION:

You may answer normal conversational questions naturally,
such as greetings, thanks, goodbyes, and casual conversation.

Examples:
- "Hello" → greet the user naturally.
- "Thank you" → respond politely.
- "How are you?" → respond naturally.
- "Bye" → say goodbye politely.

For normal conversation, keep responses short and friendly.

Keep all answers clear, professional and concise.


Portfolio Information:

About:
{about_context}

Projects:
{projects_context}

Skills:
{skills_context}

Experience:
{experience_context}

Education:
{education_context}

Certifications:
{certification_context}

Contact:
{contact_context}

Services:
{services_context}

User Question:
{data.message}
"""

    return StreamingResponse(
        generate_response(prompt),
        media_type="text/plain"
    )