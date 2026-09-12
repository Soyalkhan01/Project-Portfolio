import {
    FaCode,
    FaGlobe,
    FaShoppingCart,
    FaRobot,
} from "react-icons/fa";

const serviceData = {
    section: {
        heading: "What I Can Build",
        title: "Web Development & AI Services",
        description:
            "Explore professional web development and AI solutions by Soyal Khan, including full stack applications, business websites, e-commerce platforms, and Python-based AI and machine learning solutions.",
    },

    service: [
        {
            title: "Full Stack Web Development",
            description:
                "Build responsive and scalable full stack web applications with modern frontend interfaces, backend APIs, authentication, and database integration.",
            icon: FaCode,
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "Python",
                "REST APIs",
                "FastAPI",
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
            title: "Business & Portfolio Website Development",
            description:
                "Professional, responsive, and SEO-friendly websites for businesses, personal brands, developers, and portfolios with modern UI/UX design.",
            icon: FaGlobe,
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "Python",
                "REST APIs",
                "FastAPI",
                "MongoDB",
                "Tailwind CSS",
            ],
            details: [
                "Business website development",
                "Personal portfolio website development",
                "Responsive UI/UX design",
                "SEO-friendly website structure"
            ],
        },

        {
            title: "E-Commerce Website Development",
            description:
                "Complete e-commerce website development with product listings, shopping cart, checkout, orders, authentication, and admin panel functionality.",
            icon: FaShoppingCart,
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "Python",
                "REST APIs",
                "FastAPI",
                "MongoDB",
                "Tailwind CSS",
            ],
            details: [
                "Product listing and management",
                "Shopping cart and checkout",
                "Order management",
                "Admin panel integration"
            ],
        },

        {
            title: "AI, Machine Learning & Python Solutions",
            description:
                "Develop practical Python-based AI and machine learning applications, data analysis solutions, and intelligent APIs for data-driven projects.",
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
                "Machine learning model integration",
                "Data analysis and visualization",
                "AI-powered API development"
            ],
        },
    ],

    button: {
        text: "Let's Work Together",
    },
};

export default serviceData;