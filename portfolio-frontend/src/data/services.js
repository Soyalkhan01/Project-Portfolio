import {
    FaCode,
    FaGlobe,
    FaShoppingCart,
    FaRobot,
} from "react-icons/fa";

const serviceData = {

    section:{
        heading:"What I Can Build",
        title:"Services",
        description:"Practical digital solutions built around my real development experience and technical skills."
    },

    service: [

    {
        title: "Full Stack Web Development",
        description:
            "Responsive and scalable web applications with modern frontend, backend APIs, authentication, and database integration.",
        icon: FaCode,
        technologies: ["React.js", "Node.js", "Express.js", "Python", "REST APIs", "FastAPI", "MongoDB", "TailwindCSS"],

        details: [
        "Responsive web applications",
        "REST API development",
        "Authentication and authorization",
        "Database integration"
    ]
    },

    {
        title: "Business & Portfolio Websites",
        description:
            "Professional and responsive websites for businesses, personal brands, and portfolios with a clean modern interface.",
        icon: FaGlobe,
        technologies: ["React.js", "Node.js", "Express.js", "Python", "REST APIs", "FastAPI", "MongoDB", "TailwindCSS"],
    },

    {
        title: "E-Commerce Development",
        description:
            "Complete e-commerce websites with product management, cart, orders, authentication, and admin functionality.",
        icon: FaShoppingCart,
        technologies: ["React.js", "Node.js", "Express.js", "Python", "REST APIs", "FastAPI", "MongoDB", "TailwindCSS"],
    },

    {
        title: "AI / ML & Python Solutions",
        description:
            "Python-based machine learning applications and APIs for practical data-driven solutions.",
        icon: FaRobot,
        technologies: ["Python", "NumPy", "Pandas" ,"Scikit-learn", "Matplotlib", "FastAPI", "Ollama", "LLMs"],
    },

    
],

button:{
    text:"Let's Work Together",
}
}
export default serviceData;