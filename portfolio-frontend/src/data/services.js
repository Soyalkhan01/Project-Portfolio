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
    // =========================================================
    // SECTION CONTENT
    // =========================================================
    section: {
        eyebrow: "What I Can Build",
        title: "Website Development & AI Services",
        description:
            "I provide professional website development and custom web solutions for businesses, startups, professionals and growing brands, from business websites to full-stack, e-commerce and AI-powered applications.",

        eyebrow2: "Selected Work",
        title2: "Recent Website Projects",
        description2:
            "A few examples of websites and applications developed using modern frontend, backend, API and database technologies.",

        eyebrow3: "Website Packages",
        title3: "Choose the Right Website for Your Business",
        description3:
            "Choose a package based on your business goals, website size and required functionality. Custom features can be added when needed.",

        eyebrow4: "How It Works",
        title4: "From Idea to Live Website",
    },

    // =========================================================
    // SERVICES
    // =========================================================
    service: [
        {
            title: "Full Stack Web Development",
            description:
                "Custom full-stack web development with responsive frontend interfaces, backend APIs, authentication, databases and scalable web applications.",
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
                "Admin dashboard development",
                "Custom business workflows",
            ],
        },

        {
            title: "Business & Custom Website Development",
            description:
                "Professional business and custom websites for companies, startups, professionals and personal brands with responsive design and SEO-friendly structure.",
            icon: FaGlobe,
            technologies: [
                "React.js",
                "JavaScript",
                "Python",
                "FastAPI",
                "REST APIs",
                "MongoDB",
                "Tailwind CSS",
            ],
            details: [
                "One-page business websites",
                "Multi-page business websites",
                "Personal and professional websites",
                "Responsive UI/UX design",
                "WhatsApp, call and Google Maps integration",
                "SEO-friendly website structure",
            ],
        },

        {
            title: "E-Commerce Website Development",
            description:
                "Professional online stores with product catalogues, categories, shopping cart, checkout, orders, customer accounts and admin functionality.",
            icon: FaShoppingCart,
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "Python",
                "FastAPI",
                "MongoDB",
                "PostgreSQL",
            ],
            details: [
                "Product catalogue",
                "Categories and product search",
                "Shopping cart",
                "Checkout integration",
                "Customer accounts",
                "Order management",
                "Admin panel",
            ],
        },

        {
            title: "AI, ML & Python Development",
            description:
                "Python-based AI, machine learning, data analysis and intelligent web solutions for practical business and technical applications.",
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
                "Machine learning solutions",
                "Data analysis and visualization",
                "AI-powered APIs",
                "LLM integrations",
                "Custom Python automation",
            ],
        },
    ],

    // =========================================================
    // PROJECTS
    // =========================================================
    projects: [
        {
            title: "Business Website",
            category: "Business Website",
            description:
                "Modern responsive business website developed for a local business with professional services, contact information and customer-focused design.",
            image: businessImage,
            link: "https://client-business-website-alpha.vercel.app",
        },

        {
            title: "E-Commerce Website",
            category: "E-Commerce",
            description:
                "Responsive e-commerce website with product listings, shopping cart, checkout and modern online shopping functionality.",
            image: ecommerceImage,
            link: "https://my-ecommerce-website-gamma.vercel.app/",
        },

        {
            title: "Weather Application",
            category: "React + Python",
            description:
                "Weather web application built with React and Python featuring API integration, city search, forecasts and dynamic weather data.",
            image: weatherImage,
            link: "https://weather-app-sigma-three-70.vercel.app",
        },
    ],

    // =========================================================
    // WEBSITE PACKAGES
    // =========================================================
    packages: [
        // -----------------------------------------------------
        // 1. STARTER
        // -----------------------------------------------------
        {
            name: "Starter",
            icon: "⭐",
            type: "One-Page Website",
            pages: "1 Page",
            delivery: "5-7 Working Days",
            support: "7 Days Support",

            oldPrice: null,
            price: "₹3,999",

            subtitle: "Simple Business Website",

            description:
                "A clean and professional one-page website for small businesses and professionals who need a strong online presence.",

            recommended: false,

            offer: null,
            offerNote: "null",

            highlights: [
                "One-page professional website",
                "Responsive mobile-friendly design",
                "Business information & services",
                "WhatsApp & direct call buttons",
                "Google Maps integration",
                "Basic SEO structure",
                "Website deployment",
                "5 minor revisions",
                "7 days basic support",
            ],

            features: [
                "Professional one-page website",
                "Home section",
                "About section",
                "Services section",
                "Gallery / photo section",
                "Testimonials section where required",
                "Contact section",
                "WhatsApp chat button",
                "Direct call button",
                "Google Maps integration",
                "Social media links",
                "Responsive design for mobile, tablet and desktop",
                "Basic SEO-friendly structure",
                "SEO-friendly heading structure",
                "Client-provided text, photos and logo integration",
                "Website deployment and live setup",
                "5 minor design/content revisions",
                "7 days basic bug-fixing support",
            ],
        },

        // -----------------------------------------------------
        // 2. BUSINESS
        // -----------------------------------------------------
        {
            name: "Business",
            icon: "💎",
            type: "Multi-Page Website",
            pages: "Up to 5 Pages",
            delivery: "7-10 Working Days",
            support: "15 Days Support",

            oldPrice: "₹5,999",
            price: "₹5,399",

            subtitle: "Professional Business Website",

            description:
                "The ideal package for businesses that want a professional multi-page website to showcase services, build trust and generate customer enquiries.",

            recommended: true,

            offer: "10% OFF",
            offerNote: "Limited-time pricing",

            highlights: [
                "Up to 5 professional pages",
                "Modern responsive design",
                "Services, pricing & packages",
                "Gallery & testimonials",
                "WhatsApp, call & Google Maps",
                "Contact / enquiry form",
                "Basic on-page SEO",
                "Basic speed optimization",
                "2 revision rounds",
                "15 days support",
            ],

            features: [
                "Modern custom business website",
                "Home page",
                "About page",
                "Services page",
                "Gallery page",
                "Contact page",
                "Services, packages and pricing display",
                "Professional image gallery",
                "Customer testimonials section",
                "FAQ section where required",
                "WhatsApp chat integration",
                "Direct call button",
                "Google Maps integration",
                "Instagram / Facebook links",
                "Contact / enquiry form",
                "Responsive mobile, tablet and desktop design",
                "SEO-friendly page structure",
                "Meta title and meta description setup",
                "Proper H1, H2 and H3 heading structure",
                "Image alt-text optimization",
                "SEO-friendly URL structure",
                "Basic on-page SEO setup",
                "Basic performance optimization",
                "Client content integration",
                "Website deployment and live setup",
                "2 rounds of minor revisions",
                "15 days basic bug-fixing support",
            ],
        },

        // -----------------------------------------------------
        // 3. PROFESSIONAL
        // -----------------------------------------------------
        {
            name: "Professional",
            icon: "👑",
            type: "Advanced Multi-Page Website",
            pages: "8–10 Pages",
            delivery: "10-14 Working Days",
            support: "30 Days Support",

            oldPrice: null,
            price: "₹9,999",

            subtitle: "Advanced Business Website",

            description:
                "For growing businesses that need more pages, stronger SEO structure, advanced enquiry features and a premium website experience.",

            recommended: false,

            offer: null,
            offerNote: null,

            highlights: [
                "8–10 professionally designed pages",
                "Premium custom UI/UX",
                "Advanced services & gallery",
                "Testimonials & FAQ",
                "Offers / promotional sections",
                "Advanced SEO setup",
                "Analytics & Search Console setup",
                "Performance optimization",
                "3 revision rounds",
                "30 days support",
            ],

            features: [
                "Everything included in the Business Package",
                "Up to 8–10 professionally designed pages",
                "Premium custom UI/UX design",
                "Advanced service presentation",
                "Detailed packages and pricing",
                "Advanced gallery / portfolio section",
                "Testimonials section",
                "FAQ section",
                "Offers and promotional sections",
                "Advanced contact / enquiry forms",
                "WhatsApp integration",
                "Google Maps integration",
                "Social media integration",
                "Advanced on-page SEO setup",
                "Meta title and meta description optimization",
                "Heading structure optimization",
                "Image alt-text optimization",
                "SEO-friendly URL structure",
                "XML sitemap setup",
                "robots.txt configuration",
                "Open Graph / social sharing metadata",
                "Basic structured data / schema where applicable",
                "Google Analytics setup",
                "Google Search Console setup",
                "Basic Search Console configuration",
                "Mobile performance optimization",
                "Website speed optimization",
                "SSL / HTTPS setup support",
                "Domain and hosting deployment support",
                "Client content integration",
                "3 revision rounds",
                "30 days basic bug-fixing support",
            ],
        },

        // -----------------------------------------------------
        // 4. DYNAMIC CMS
        // -----------------------------------------------------
        {
            name: "Dynamic CMS",
            icon: "⚙️",
            type: "Dynamic Website + Admin",
            pages: "Custom Scope",
            delivery: "14–21 Working Days",
            support: "30 Days Support",

            oldPrice: null,
            price: "₹17,999+",

            subtitle: "Dynamic Website with Admin Panel",

            description:
                "For businesses that need a backend, database and admin dashboard to manage website content, services, gallery, products or customer enquiries.",

            recommended: false,

            offer: null,
            offerNote: "Final price depends on functionality",

            highlights: [
                "Custom dynamic website",
                "Backend API",
                "Database integration",
                "Admin login",
                "Admin dashboard",
                "Manage website content",
                "Manage services & gallery",
                "Customer enquiry management",
                "Secure authentication",
                "30 days support",
            ],

            features: [
                "Custom responsive frontend",
                "Dynamic website content",
                "Backend API development",
                "Database integration",
                "Admin authentication",
                "Secure admin login",
                "Admin dashboard",
                "Manage services",
                "Manage packages and pricing",
                "Manage gallery images",
                "Manage testimonials",
                "Manage customer enquiries",
                "Dynamic contact / enquiry system",
                "Form validation",
                "Backend input validation",
                "Authentication and authorization",
                "REST API integration",
                "MongoDB or PostgreSQL integration",
                "Basic database management",
                "Deployment of frontend and backend",
                "SSL / HTTPS configuration support",
                "Basic security practices",
                "Performance optimization according to scope",
                "Custom business workflows where required",
                "30 days basic bug-fixing support",
                "Final functionality and price confirmed after requirements",
            ],
        },

        // -----------------------------------------------------
        // 5. E-COMMERCE
        // -----------------------------------------------------
        {
            name: "E-Commerce",
            icon: "🛒",
            type: "Online Store",
            pages: "Custom Scope",
            delivery: "21–30+ Working Days",
            support: "30 Days Support",

            oldPrice: null,
            price: "₹29,999+",

            subtitle: "Complete Online Store",

            description:
                "A complete e-commerce solution for businesses that want to sell products online with catalogue, cart, checkout, orders and administration.",

            recommended: false,

            offer: null,
            offerNote: "Final price depends on store requirements",

            highlights: [
                "Complete online store",
                "Product catalogue",
                "Categories & search",
                "Product details",
                "Shopping cart",
                "Checkout system",
                "Customer accounts",
                "Order management",
                "Admin dashboard",
                "Payment gateway integration",
                "Inventory management",
                "30 days support",
            ],

            features: [
                "Everything required for a professional online store",
                "Responsive e-commerce frontend",
                "Product catalogue",
                "Product categories",
                "Product search",
                "Product filtering",
                "Product detail pages",
                "Product images and information",
                "Shopping cart",
                "Wishlist where required",
                "Customer registration and login",
                "Customer profile",
                "Address management",
                "Checkout system",
                "Payment gateway integration",
                "Order placement",
                "Order management",
                "Order status management",
                "Admin dashboard",
                "Product management",
                "Category management",
                "Product image management",
                "Basic inventory management",
                "Customer order management",
                "Customer enquiry management",
                "Email notification integration where required",
                "SEO-friendly product structure",
                "Responsive mobile, tablet and desktop design",
                "SSL / HTTPS configuration support",
                "Frontend and backend deployment",
                "Database integration",
                "Basic security practices",
                "Performance optimization according to scope",
                "30 days basic bug-fixing support",
                "Payment provider and third-party charges are separate",
                "Final price confirmed after store requirements",
            ],
        },
    ],

    // =========================================================
    // ADDITIONAL FEATURES / ADD-ONS
    // =========================================================
    additionalFeatures: [
        {
            title: "Extra Website Page",
            description:
                "Add an additional professionally designed page outside the selected package.",
            price: "₹799+",
        },

        {
            title: "Appointment / Booking System",
            description:
                "Allow customers to submit appointment or booking requests through the website.",
            price: "₹2,999+",
        },

        {
            title: "Admin Dashboard",
            description:
                "Manage website content, services, gallery or enquiries through an admin panel.",
            price: "₹6,999+",
        },

        {
            title: "Blog / CMS Module",
            description:
                "Add a manageable blog or content section for regular website updates.",
            price: "₹4,999+",
        },

        {
            title: "Payment Gateway",
            description:
                "Integrate a payment gateway such as Razorpay or another supported provider.",
            price: "₹2,999+",
        },

        {
            title: "Product Catalogue",
            description:
                "Add products with images, categories, pricing and product information.",
            price: "₹2,499+",
        },

        {
            title: "Advanced SEO Setup",
            description:
                "Technical SEO improvements, sitemap, structured data and search setup.",
            price: "₹2,999+",
        },

        {
            title: "Analytics & Search Console",
            description:
                "Setup Google Analytics and Search Console for website monitoring.",
            price: "₹999+",
        },

        {
            title: "Additional Language",
            description:
                "Add another language to the website with a suitable content structure.",
            price: "₹2,499+",
        },

        {
            title: "Website Speed Optimization",
            description:
                "Improve website loading performance and optimize assets for a better user experience.",
            price: "₹1,499+",
        },

        {
            title: "Custom API Integration",
            description:
                "Connect external APIs and third-party services according to business requirements.",
            price: "₹1,999+",
        },

        {
            title: "AI Chatbot",
            description:
                "Add an AI-powered chatbot to answer customer questions and assist website visitors.",
            price: "₹4,999+",
        },

        {
            title: "Website Maintenance",
            description:
                "Post-launch technical updates, minor changes and maintenance support.",
            price: "₹799/month+",
        },

        {
            title: "Domain & Hosting Setup",
            description:
                "Technical setup of client-owned domain, hosting, DNS and website deployment.",
            price: "₹999+",
        },

        {
            title: "Custom Feature",
            description:
                "Need something not listed? Get a custom quotation based on the required functionality.",
            price: "Custom Quote",
        },
    ],

    // =========================================================
    // INCLUDED
    // =========================================================
    include: {
        title: "Included",
        subtitle: "Every Website Is Built With Care",
        description:
            "Every project follows a professional development approach with responsive design, clean structure, security-conscious implementation and deployment support.",
    },

    included: [
        "Responsive design",
        "Mobile, tablet and desktop compatibility",
        "Modern UI structure",
        "Client content integration",
        "SEO-friendly structure",
        "Basic security practices",
        "Performance optimization according to package",
        "SSL / HTTPS setup support",
        "Website deployment support",
    ],

    // =========================================================
    // DEVELOPMENT PROCESS
    // =========================================================
    process: [
        {
            number: "01",
            title: "Requirement",
            description:
                "Discuss your business, goals, pages, content and required functionality.",
        },

        {
            number: "02",
            title: "Planning",
            description:
                "Plan the website structure, content hierarchy, design direction and user experience.",
        },

        {
            number: "03",
            title: "Design & Development",
            description:
                "Build the website using modern frontend, backend and API technologies according to the selected scope.",
        },

        {
            number: "04",
            title: "Review",
            description:
                "Share the website for review and complete the revisions included in the selected package.",
        },

        {
            number: "05",
            title: "Testing",
            description:
                "Check responsiveness, forms, links, performance and important functionality before launch.",
        },

        {
            number: "06",
            title: "Launch",
            description:
                "Deploy the website, connect the domain and make the final website ready for customers.",
        },
    ],

    // =========================================================
    // CONSULTATION
    // =========================================================
    consulation: {
        title: "Free Consultation",
        subtitle: "Have a Website Idea?",
        description:
            "Tell me about your business and requirements. We can discuss the right website solution, package and features for your project.",
    },

    button2: {
        text2: "Discuss Your Website",
        text3: "Chat on WhatsApp",
    },

    // =========================================================
    // TERMS
    // =========================================================
    ConditionButton: {
    text: "View Terms & Conditions →",
},

ConditionTerm: {
    text: "Terms & Conditions",
},

terms: [
    "Domain and hosting charges are not included unless specifically mentioned in the selected package.",

    "Domain and hosting should preferably be purchased and owned by the client.",

    "Client will provide required business information, text, photos, logo, contact details and other necessary content.",

    "50% advance payment is required before development begins.",

    "Remaining 50% payment is required before final production deployment.",

    "The selected package includes only the features listed in its scope.",

    "Additional features or functionality not listed in the selected package may have additional charges.",

    "Page count refers to individually designed website pages. Sections inside a one-page website are not counted as separate pages.",

    "One-page websites use sections such as Home, About, Services and Contact on a single page.",

    "Multi-page websites have separate pages or URLs such as Home, About, Services, Gallery and Contact.",

    "Dynamic/CMS projects may require backend, database and administrative infrastructure depending on the project requirements and therefore may have higher development and maintenance requirements.",

    "Payment gateway charges, transaction fees, SMS charges, email service charges and other third-party service fees are not included unless specifically mentioned.",

    "E-commerce product entry beyond the agreed quantity may be charged separately.",

    "Google ranking cannot be guaranteed. SEO setup improves technical readiness but does not guarantee a specific search position.",

    "Search engine indexing depends on search engine crawling, website quality, content and other external factors.",

    "Third-party services and APIs may have their own pricing, limits or terms.",

    "Maintenance after the included support period is available as an optional service.",

    "Final price and delivery time for Dynamic CMS, E-Commerce and Custom projects are confirmed after requirement analysis.",

    // Revision & Change Policy
    "The number of revision rounds included in the project depends on the selected package.",

    "A revision round means a reasonable set of changes requested together during the development or review stage. Multiple small changes requested at the same time are treated as one revision round.",

    "Revisions cover reasonable changes to the agreed design, content, layout and existing functionality within the selected package scope.",

    "Revision rounds do not include completely new features, new functionality, backend development, database integration, admin panels, payment systems or other work outside the agreed project scope.",

    "Once all included revision rounds have been completed, any additional changes or revision requests may be charged separately.",

    "Changes requested after the client has given final approval of the website may be charged separately, even if the website is still within the included support period.",

    "Minor content updates such as replacing client-provided text, images or basic information may be handled as revisions when they are within the included revision rounds and agreed project scope.",

    "New pages, new sections with significant functionality, new integrations or major design changes requested after the included revision rounds may be charged separately.",

    "Additional features requested after the project scope has been approved will be quoted separately based on their development complexity.",

    // Support & Bug Fixing
    "Included support is intended for fixing bugs or technical issues related to the agreed and delivered functionality.",

    "A bug means an existing agreed feature or functionality that does not work as intended. New feature requests or design changes are not considered bug fixes.",

    "The included support period starts from the date of final website delivery or production deployment, as applicable.",

    "Bug fixing related to the original agreed functionality is covered during the included support period.",

    "Changes, improvements, new features or additional functionality requested during the support period may still have additional charges.",

    "After the included support period expires, additional maintenance, bug fixing and technical updates may be charged separately.",

    // Final Approval
    "The client is responsible for reviewing the website, content, images, contact information, links and functionality before giving final approval.",

    "Once the client provides final approval, further changes or modifications may be treated as additional work and charged separately.",

    "Client approval may be provided through written confirmation, email, WhatsApp or another agreed communication method.",

    // Additional Work
    "If the client requests functionality that changes the original project scope, the development cost and delivery time may be revised accordingly.",

    "Examples of additional functionality include admin dashboards, booking systems, payment gateways, customer login systems, e-commerce functionality, database-driven content, custom APIs and third-party integrations.",

    "Any additional work will be discussed and approved by the client before development begins.",

    "Additional development charges may depend on the required functionality, complexity, third-party services and estimated development time.",

    "Delivery timelines may change when additional features, content delays, revisions or scope changes are requested by the client.",

    "The developer is not responsible for delays caused by delayed client content, approvals, third-party services, hosting providers, domain providers or external APIs.",
],

    // =========================================================
    // BUTTONS
    // =========================================================
    button: {
        text: "Let's Work Together",
    },

    packageButton: {
        text: "Get Started",
    },
};

export default serviceData;
