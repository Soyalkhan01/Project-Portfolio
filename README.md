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

## 🔍 SEO & Website Optimization

Implemented essential SEO practices to improve website visibility,
search engine understanding, indexing, and discoverability.

### On-Page SEO

- Added SEO-friendly page title:
  `Soyal Khan | Software Engineer`
- Added meta description.
- Added meta keywords.
- Added author meta tag.
- Added `robots` meta tag with `index, follow`.
- Added canonical URL.
- Added relevant professional keywords.
- Optimized portfolio content for Software Engineering,
  Full Stack Development, React.js, JavaScript, Python, FastAPI,
  MongoDB, and AI-powered web applications.
- Added professional information in the Hero and About sections.
- Added project descriptions and technical skills.
- Added meaningful image `alt` text.

### Technical SEO

- Created and configured `robots.txt`.
- Created `sitemap.xml`.
- Submitted the sitemap through Google Search Console.
- Added a canonical URL to the website.
- Configured the mobile viewport.
- Added browser theme color.
- Added a website favicon.
- Verified the live website source.
- Checked the website's crawlability and indexing status.
- Deployed the optimized website on Vercel.

### Structured Data / Schema Markup

- Implemented JSON-LD structured data.
- Added the `Person` schema.
- Included the following information in the schema:
  - Name
  - Job title
  - Portfolio URL
  - GitHub profile
  - LinkedIn profile
  - Technical skills
  - Areas of professional expertise

### Social Media SEO

- Added Open Graph title.
- Added Open Graph description.
- Added Open Graph URL.
- Added Open Graph website type.
- Added Open Graph site name.
- Added Twitter Card metadata.
- Added Twitter title and description for social sharing previews.

### Google Search Console

- Verified the portfolio website in Google Search Console.
- Submitted the website sitemap.
- Inspected the homepage URL.
- Checked the homepage indexing status.
- Requested indexing for updated website content.
- Verified the crawled HTML source.
- Compared the live website source with Google's crawled page.
- Monitored the website's search visibility and indexing information.

### Google Analytics

- Integrated Google Analytics 4.
- Added Google Analytics Measurement ID.
- Enabled website activity tracking.
- Verified real-time website activity.
- Prepared the website for monitoring visitors and traffic sources.

### Professional Profile Optimization

- Added GitHub profile link.
- Added LinkedIn profile link.
- Maintained consistent professional branding across the portfolio.
- Added the portfolio website link to relevant professional profiles.
- Used consistent Software Engineer and Full Stack Developer branding.

### SEO Status

The basic SEO implementation of the portfolio website has been completed.

The website is now configured for search engine crawling, indexing,
social sharing, analytics tracking, and basic search visibility monitoring.

Future SEO improvements may include keyword research, advanced content
optimization, image compression, Core Web Vitals optimization, and
building relevant quality backlinks.

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
- Resend email integration

### Tools & Deployment

- Git
- GitHub
- VS Code
- Postman
- Vercel
- Render

---

## ⚙️ CI/CD pipeline

This project uses GitHub Actions for Continuous Integration (CI).

### Frontend CI
- Installs frontend dependencies
- Runs ESLint
- Builds the React/Vite application

### Backend CI
- Sets up Python
- Installs backend dependencies
- Checks Python syntax

### Deployment
- Frontend: Vercel
- Backend: Render

Every push to the `main` branch triggers automated CI checks.

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

## 📂 Project Structure

```text
Project-Portfolio/
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

- Cloudflare Turnstile CAPTCHA
- API rate limiting
- Backend input validation
- Input sanitization
- Request size validation
- Security headers
- Environment variable protection
- `.gitignore` protection
- Logging and monitoring
- Production CORS
- MongoDB production network access
- HTTPS and production configuration

---

## 🔑 Environment Variables

Sensitive credentials are stored in environment variables and are not
committed to GitHub.

### Example

```env
MONGODB_URI=your_mongodb_connection_string

SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USERNAME=your_email
SMTP_PASSWORD=your_app_password
CONTACT_RECEIVER=your_receiver_email

TURNSTILE_SECRET_KEY=your_turnstile_secret
```

---

## 💻 Local Setup

### Frontend

```bash
cd portfolio-frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

### Backend

```bash
cd portfolio-backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r ../requirements.txt
python -m uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

API Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 🚀 Deployment

The project is deployed using:

| Service | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

### Live Deployment

- Frontend: [Portfolio Website](https://soyal-khan-portfolio.vercel.app)
- Backend: [Backend API](https://portfolio-backend-thn5.onrender.com)

---

## ✅ Project Status

### Completed

- Portfolio frontend
- Responsive UI
- FastAPI backend
- MongoDB Atlas integration
- Contact form
- Email notification
- Resend email integration
- Cloudflare Turnstile
- Server-side CAPTCHA verification
- Rate limiting
- Input validation
- Email validation
- Input sanitization
- Request size validation
- Security headers
- HSTS
- Production CORS
- HTTP method restriction
- MongoDB production network restriction
- HTTPS configuration
- Environment variable protection
- `.gitignore`
- `requirements.txt`
- Git repository
- GitHub repository
- Backend deployment
- Frontend deployment
- Production testing
- Error handling and logging

---

## 📈 Future Improvements

- Admin dashboard
- Dynamic portfolio content management
- Improved AI assistant
- Advanced monitoring
- Authentication and authorization
- CI/CD pipeline

---

## 👨‍💻 Author

**Soyal Khan**

Full Stack Developer | MERN Stack & Python  
Aspiring AI/ML Engineer

---

## 📄 License

This project is created for personal portfolio and professional showcase
purposes.