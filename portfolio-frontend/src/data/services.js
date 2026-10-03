import {
    FaCode,
    FaGlobe,
    FaShoppingCart,
    FaRobot,
} from "react-icons/fa";

import ecommerceImage from "../assets/images/projects/ecommerce.png";
import businessImage from "../assets/images/projects/business.png";
import weatherImage from "../assets/images/projects/weather.png";

const serviceData = {
    section: {
        eyebrow: "What I Can Build",
        title: "Web Development & AI Services",
        description:
            "Professional digital solutions for businesses, startups, personal brands and modern web applications.",
        eyebrow2: "Selected Work",
        title2: "Recent Website Projects",
        description2:
            "A few examples of websites and applications developed using modern technologies.",
        eyebrow3: "Website Packages",
        title3: "Choose Your Website Package",
        description3:
            "Transparent packages for businesses, professionals and growing brands.",
        eyebrow4: "How It Works",
        title4: "From Idea to Live Website",
    },

    service: [
        {
            title: "Full Stack Web Development",
            description:
                "Responsive and scalable web applications with modern frontend interfaces, backend APIs, authentication and database integration.",
            icon: FaCode,
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "Python",
                "FastAPI",
                "REST APIs",
                "MongoDB",
                "Tailwind CSS",
            ],
            details: [
                "Responsive web application development",
                "REST API development",
                "Authentication and authorization",
                "Database integration",
            ],
        },

        {
            title: "Business & Portfolio Websites",
            description:
                "Professional, responsive and SEO-friendly websites for businesses, personal brands, developers and professionals.",
            icon: FaGlobe,
            technologies: [
                "React.js",
                "Python",
                "FastAPI",
                "REST APIs",
                "MongoDB",
                "Tailwind CSS",
            ],
            details: [
                "Business website development",
                "Personal portfolio development",
                "Responsive UI/UX design",
                "SEO-friendly website structure",
            ],
        },

        {
            title: "E-Commerce Website Development",
            description:
                "Complete online stores with product listings, shopping cart, checkout, orders, authentication and admin functionality.",
            icon: FaShoppingCart,
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "Python",
                "FastAPI",
                "MongoDB",
            ],
            details: [
                "Product listing and management",
                "Shopping cart and checkout",
                "Order management",
                "Admin panel integration",
            ],
        },

        {
            title: "AI, ML & Python Solutions",
            description:
                "Python-based AI, machine learning, data analysis and intelligent API solutions for practical business and technical use cases.",
            icon: FaRobot,
            technologies: [
                "Python",
                "NumPy",
                "Pandas",
                "Scikit-learn",
                "Matplotlib",
                "FastAPI",
                "Ollama",
                "LLMs",
            ],
            details: [
                "Python-based AI applications",
                "Machine learning integration",
                "Data analysis and visualization",
                "AI-powered API development",
            ],
        },
    ],

    projects: [

        {
            title: "Business Website",
            category: "Business Website",
            description:
                "Modern responsive website designed for a local business and Shops.",
            image: businessImage,
            link: "https://client-business-website-alpha.vercel.app",
        },
        {
            title: "E-Commerce Website",
            category: "E-Commerce",
            description:
                "Responsive online store with product and shopping functionality.",
            image: ecommerceImage,
            link: "https://my-ecommerce-website-gamma.vercel.app/",
        },
        {
            title: "Weather Application",
            category: "React + Python",
            description:
                "Weather application with API integration, search and data visualization.",
            image: weatherImage,
            link: "https://weather-app-sigma-three-70.vercel.app",
        },
    ],

packages: [
    {
        name: "Basic",
        icon: "⭐",
        oldPrice: "₹4,999",
        price: "₹3,999",
        subtitle: "Simple Business Website",
        description:
            "A clean and professional website for businesses that need a strong online presence.",
        highlights: [
            "Clean professional design",
            "Fully responsive layout",
            "Home, About, Services & Contact",
            "WhatsApp & direct call buttons",
            "Google Maps integration",
            "Basic SEO structure",
            "Website deployment",
            "5 minor design revisions",
            "7 days bug-fixing support",
        ],
        features: [
            "Clean and professional website design",
            "Fully responsive layout",
            "Home, About, Services and Contact sections",
            "Business details and service information",
            "WhatsApp chat button",
            "Direct call button",
            "Google Maps integration",
            "Basic photo section",
            "Social media links",
            "Basic SEO-friendly page structure",
            "SEO-friendly headings and content structure",
            "Client-provided text, photos and logo integration",
            "Website deployment and live setup",
            "5 minor design revisions",
            "7 days basic bug-fixing support",
        ],
    },

    {
        name: "Standard",
        icon: "💎",
        oldPrice: "₹6,999",
        price: "₹5,999",
        subtitle: "Professional Business Website",
        recommended: true,
        description:
            "A professional business website with essential features and basic SEO setup.",
        highlights: [
            "Modern responsive design",
            "Home, About, Services, Gallery & Contact",
            "Services, packages & pricing",
            "Gallery & testimonials",
            "Contact/appointment form",
            "Basic on-page SEO",
            "Mobile performance optimization",
            "15 days bug-fixing support",
        ],
        features: [
            "Modern, attractive and fully responsive design",
            "Home, About, Services, Gallery and Contact pages",
            "Services, packages and pricing display",
            "Attractive photo gallery",
            "WhatsApp chat and direct call buttons",
            "Google Maps integration",
            "Customer testimonials section",
            "Instagram/Facebook integration",
            "Contact or appointment inquiry form",
            "Fast-loading and user-friendly layout",
            "SEO-friendly meta title and meta description",
            "Proper heading structure (H1, H2, H3)",
            "Image alt-text optimization",
            "SEO-friendly URL structure",
            "Basic on-page SEO setup",
            "Basic mobile performance optimization",
            "Client-provided text, photos and logo integration",
            "Website deployment and live setup",
            "Minor design revisions",
            "15 days basic bug-fixing support",
        ],
    },

    {
        name: "Premium",
        icon: "👑",
        oldPrice: "₹12,999",
        price: "₹10,999",
        subtitle: "Advanced Business Website",
        description:
            "A complete business website with advanced functionality, admin panel and advanced SEO setup.",
        highlights: [
            "Everything in Standard",
            "Premium custom UI/UX",
            "Admin panel",
            "Content management",
            "Inquiry management",
            "Basic order management",
            "Advanced SEO setup",
            "Google Search Console setup",
            "30 days bug-fixing support",
        ],
        features: [
            "Everything included in the Standard Package",
            "Premium custom UI/UX design",
            "Advanced gallery and special offers section",
            "Detailed services and packages presentation",
            "Professional inquiry form",
            "Admin panel for managing website content",
            "Manage services, packages and gallery images",
            "Customer inquiry management",
            "Basic delivery/order management system",
            "Order status management",
            "Advanced on-page SEO setup",
            "Google Search Console setup",
            "XML sitemap creation and submission",
            "robots.txt configuration",
            "Indexing request for important pages",
            "SEO-friendly meta title and meta description",
            "Image alt-text optimization",
            "Proper heading and content structure",
            "Canonical URL setup",
            "Open Graph and social media meta tags",
            "Basic structured data/schema markup",
            "Mobile performance and speed optimization",
            "SSL/HTTPS configuration support",
            "Google Search indexing status checking",
            "Domain/hosting deployment support",
            "Extra minor revisions",
            "30 days basic bug-fixing support",
            "Priority support during development",
        ],
    },
],

    include:{
        title: "Included",
        subtitle: "Every Website Is Built With Care",
        description:
            "Regardless of the selected package, every project follows a professional development approach.",
    },

    included: [
        "Responsive design",
        "Modern UI structure",
        "Mobile-friendly layout",
        "Client content integration",
        "Basic security practices",
        "Website deployment support",
    ],

    process: [
        {
            number: "01",
            title: "Requirement",
            description:
                "Discuss your business, goals, pages and required features.",
        },
        {
            number: "02",
            title: "Planning",
            description:
                "Plan the website structure, content and user experience.",
        },
        {
            number: "03",
            title: "Development",
            description:
                "Build the website using modern frontend and backend technologies.",
        },
        {
            number: "04",
            title: "Review",
            description:
                "Review the website and request the included revisions.",
        },
        {
            number: "05",
            title: "Launch",
            description:
                "Deploy the website and make it ready for your customers.",
        },
    ],

    consulation:{
         title: "Free Consultation",
        subtitle: "Have a Website Idea?",
        description:
            "Tell me about your business and requirements. We can discuss the right website solution for you.",
    },

    button2:{
        text2:"Discuss Your Website",
        text3:"Chat on WhatsApp"

    },

    ConditionButton:{
        text:"View Terms & Conditions"
    },
    ConditionTerm:{
        text:"Terms & Conditions"
    },

    terms: [
        "Domain and hosting charges are not included.",
        "Domain and hosting will be purchased and owned by the client.",
        "Client will provide required text, photos, logo and business details.",
        "50% advance payment is required before development.",
        "Remaining 50% payment is required before final deployment.",
        "Additional features not mentioned in the selected package may have extra charges.",
        "Google ranking or guaranteed indexing is not included.",
        "SEO setup does not guarantee a specific position on Google.",
        "Delivery management is limited to basic order and status management.",
        "Online payment gateway and live delivery tracking are not included unless agreed separately.",
        "SEO results depend on competition, content quality, website performance and Google's algorithms.",
    ],

    button: {
        text: "Let's Work Together",
    },

    packageButton: {
        text: "Get Started",
    },
};

export default serviceData;
