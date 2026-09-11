# 🚀 Project Portfolio

> A modern full-stack personal portfolio built with React.js, FastAPI, MongoDB, and an AI-powered portfolio assistant.

---

## 📌 About the Project

Project Portfolio is a full-stack personal portfolio website created to showcase my profile, technical skills, projects, education, certifications, experience, and services.

The frontend is built with React.js, Vite, JavaScript, and Tailwind CSS, while the backend is powered by FastAPI, Pydantic, and MongoDB Atlas.

The portfolio also includes an AI-powered assistant that provides information about my profile, skills, projects, experience, education, certifications, and services.

---

---

## 🌐 Live Demo

### Portfolio Website
🔗 https://soyal-khan-portfolio.vercel.app

### Backend API
🔗 https://portfolio-backend-thn5.onrender.com

---

## ✨ Features

### 🎨 Portfolio

- Responsive and mobile-friendly UI
- Hero section
- About section
- Skills section
- Services section
- Projects showcase
- Experience section
- Education section
- Certifications section
- Contact section
- Responsive navigation
- Back-to-top functionality

### 📩 Contact System

- Contact form
- Name validation
- Email validation
- Phone number validation
- Message validation
- Cloudflare Turnstile CAPTCHA
- Backend validation
- Input sanitization
- MongoDB storage
- Email notification
- Rate limiting
- Success and error handling

### 🤖 AI Portfolio Assistant

The AI assistant can provide information about:

- Profile
- Skills
- Projects
- Experience
- Education
- Certifications
- Services

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Router
- Fetch API
- React Hot Toast
- Cloudflare Turnstile

### Backend

- Python
- FastAPI
- Pydantic
- Uvicorn
- SlowAPI
- Requests
- Python-dotenv

### Database

- MongoDB
- MongoDB Atlas
- PyMongo

### Email

- SMTP
- Gmail SMTP
- FastAPI BackgroundTasks

### Tools & Deployment

- Git
- GitHub
- VS Code
- Postman
- Vercel
- Render

---

## 🏗️ Architecture

```text

                    ┌────────────────────────┐
                    │    React Frontend      │
                    │   Vite + Tailwind CSS  │
                    └────────────┬───────────┘
                                 │
                                 │ REST API
                                 ▼
                    ┌────────────────────────┐
                    │    FastAPI Backend     │
                    │                        │
                    │ Input Validation       │
                    │ Rate Limiting          │
                    │ Security               │
                    │ API Routes             │
                    │ Email Processing        │
                    └───────┬────────┬───────┘
                            │        │
                 ┌──────────┘        └──────────────┐
                 ▼                                   ▼
        ┌──────────────────┐                ┌──────────────────┐
        │  MongoDB Atlas   │                │  SMTP Email      │
        │ Contact Storage  │                │ Email Service    │
        └──────────────────┘                └──────────────────┘
---

### 📂 Project Structure

    Project-Titan/
    │
    ├── portfolio-frontend/
    │   ├── public/
    │   └── src/
    │       ├── assets/
    │       ├── components/
    │       ├── data/
    │       └── pages/
    │
    ├── portfolio-backend/
    │   ├── app/
    │   │   ├── core/
    │   │   ├── data/
    │   │   ├── database/
    │   │   ├── routes/
    │   │   └── services/
    │   └── main.py
    │
    ├── .gitignore
    ├── requirements.txt
    └── README.md
---

## 🔐 Security

The project includes multiple security measures:

Cloudflare Turnstile CAPTCHA
API rate limiting
Backend input validation
Input sanitization
Request size validation
Security headers
Environment variable protection
.gitignore protection
Logging and monitoring
 Production CORS
 MongoDB production network access
 HTTPS & production configuration

---

 ## 🔑 Environment Variables

Sensitive credentials are stored in environment variables and are not committed to GitHub.

Example:

MONGODB_URI=your_mongodb_connection_string

SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USERNAME=your_email
SMTP_PASSWORD=your_app_password
CONTACT_RECEIVER=your_receiver_email

TURNSTILE_SECRET_KEY=your_turnstile_secret

---

## 💻 Local Setup

Frontend
cd portfolio-frontend
npm install
npm run dev

Frontend:

http://localhost:5173
Backend

cd portfolio-backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r ../requirements.txt
python -m uvicorn main:app --reload

Backend:

http://127.0.0.1:8000

API Documentation:

http://127.0.0.1:8000/docs

---

##🚀 Deployment

Production deployment is planned using:

Frontend  → Vercel
Backend   → Render
Database  → MongoDB Atlas

After deployment, production configuration and security will be finalized.

---

## ✅ Project Status

Completed
Portfolio frontend
Responsive UI
FastAPI backend
MongoDB Atlas integration
Contact form
Email notification
Resend email integration
Cloudflare Turnstile
Server-side CAPTCHA verification
Rate limiting
Input validation
Email validation
Input sanitization
Request size validation
Security headers
HSTS
Production CORS
HTTP method restriction
MongoDB production network restriction
HTTPS configuration
Environment variable protection
.gitignore
requirements.txt
Git repository
GitHub repository
Backend deployment
Frontend deployment
Production testing
Error handling and logging

---

## 📈 Future Improvements

Admin dashboard
Dynamic portfolio content management
Improved AI assistant
Analytics
Advanced monitoring
Authentication and authorization
CI/CD pipeline

---

👨‍💻 Author
Soyal Khan

Full Stack Developer | MERN Stack & Python
Aspiring AI/ML Engineer

---

📄 License

This project is created for personal portfolio and professional showcase purposes.