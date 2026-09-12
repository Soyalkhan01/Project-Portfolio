from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse

from app.routes.contact import router as contact_router
from app.routes.chat import router as chat_router

from app.core.rate_limit import limiter
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler

import logging


logging.basicConfig(
    level=logging.INFO,
    format="%(levelname)s: %(message)s"
)


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        response = await call_next(request)

        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["Referrer-Policy"] = (
            "strict-origin-when-cross-origin"
        )
        response.headers["Permissions-Policy"] = (
            "camera=(), microphone=(), geolocation=()"
        )
        response.headers["Strict-Transport-Security"] = (
            "max-age=31536000; includeSubDomains"
        )

        return response


class RequestSizeLimitMiddleware(BaseHTTPMiddleware):
    MAX_REQUEST_SIZE = 1 * 1024 * 1024  # 1 MB

    async def dispatch(self, request: Request, call_next):
        content_length = request.headers.get("content-length")

        if content_length:
            try:
                if int(content_length) > self.MAX_REQUEST_SIZE:
                    return JSONResponse(
                        status_code=413,
                        content={"detail": "Request body too large"}
                    )
            except ValueError:
                return JSONResponse(
                    status_code=400,
                    content={"detail": "Invalid content length"}
                )

        return await call_next(request)


app = FastAPI()

app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(RequestSizeLimitMiddleware)

app.state.limiter = limiter

app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://soyal-khan-portfolio.vercel.app",
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
        "http://127.0.0.1:5175",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"]
)


app.include_router(contact_router)
app.include_router(chat_router)


@app.get("/")
def home():
    return {
        "message": "Portfolio Backend Is Running"
    }