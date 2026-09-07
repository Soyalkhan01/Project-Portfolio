import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaGithub,
    FaBootstrap,
    FaServer,
    FaKey,
} from "react-icons/fa";

import {
    SiExpress,
    SiFastapi,
    SiFlask,
    SiMongodb,
    SiPostgresql,
    SiPostman,
    SiTailwindcss,
    SiVercel,
    SiRender,
    SiReactrouter,
    SiVite,
    SiAxios,
    SiSqlalchemy,
    SiPydantic
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaChartLine } from "react-icons/fa";
import {
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiGooglegemini,
  SiOllama,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import {
  FaLock,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const skillData = {

    section:{
        heading:"My Skills",
        title:"Technologies I Work With",
        description:"Technologies and tools I use to build modern, scalable and reliable applications.",
    },


skills:[
    {
        category: " 🌐 Frontend",
        skills: [
            {
                name: "HTML5",
                icon: FaHtml5,
                color: "text-orange-500",
                level: "Advanced",
            },
            {
                name: "CSS3",
                icon: FaCss3Alt,
                color: "text-blue-500",
                level: "Advanced",
            },
            {
                name: "JavaScript",
                icon: FaJs,
                color: "text-yellow-400",
                level: "Advanced",
            },
            {
                name: "React.js",
                icon: FaReact,
                color: "text-cyan-400",
                level: "Advanced",
            },
            {
                name: "Tailwindcss",
                icon: SiTailwindcss,
                color: "text-cyan-400",
                level: "Advanced",
            },
            {
                name: "Bootstrap",
                icon: FaBootstrap,
                color: "text-purple-600",
                level: "Advanced",
            },
            {
                name: "React Router",
                icon: SiReactrouter,
                color: "text-red-500",
                level: "Advanced",
            },
            {
                name: "Vite",
                icon: SiVite,
                color: "text-purple-600",
                level: "Advanced",
            },
        ],
    },

    {
        category: " ⚙️ Backend",
        skills: [
            {
                name: "Node.js",
                icon: FaNodeJs,
                color: "text-green-500",
                level: "Intermediate",
            },
            {
                name: "Express.js",
                icon: SiExpress,
                color: "text-gray-200",
                level: "Intermediate",
            },
            {
                name: "Python",
                icon: FaPython,
                color: "text-blue-400",
                level: "Advanced",
            },
            {
                name: "FastAPI",
                icon: SiFastapi,
                color: "text-teal-400",
                level: "Advanced",
            },
            {
                name: "Flask",
                icon: SiFlask,
                color: "text-gray-500",
                level: "Advanced",
            },
            
        ],
    },

    {
        category: " 🗄️ Database",
        skills: [
            {
                name: "MongoDB",
                icon: SiMongodb,
                color: "text-green-400",
                level: "Advanced",
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql,
                color: "text-blue-400",
                level: "Intermediate",
            },
            {
                name: "MongoDB Atlas",
                icon: SiMongodb,
                color: "text-green-400",
                level: "Advanced",
            },
        ],
    },
    {
        category: " 🔐 APIs & Authentication",
        skills: [
            {
                name: "REST APIs",
                icon: FaServer,
                color: "text-blue-600",
                level: "Advanced",
            },
            {
                name: "JWT Authentication",
                icon: FaKey,
                color: "text-yellow-500",
                level: "Advanced",
            },
        ],
    },
    {
        category: " 🛡️ Security & Communication",
        skills: [
            {
                name: "SSL/TLS",
                icon: FaLock,
                color: "text-green-600",
                level: "Advanced",
            },
            {
                name: "SMTP",
                icon: FaEnvelope,
                color: "text-blue-600",
                level: "Advanced",
            },
            {
                name: "Logging",
                icon: FaFileAlt,
                color: "text-gray-600",
                level: "Advanced",
            },
        ],
    },
    {
        category: " 🧩 Frameworks & Libraries",
        skills: [
            {
                name: "Axios",
                icon: SiAxios,
                color: "text-purple-600",
                level: "Advanced",
            },
            {
                name: "SQLAlchemy",
                icon: SiSqlalchemy,
                color: "text-red-600",
                level: "Advanced",
            },
            {
                name: "Pydantic",
                icon: SiPydantic,
                color: "text-red-500",
                level: "Advanced",
            },
        ],
    },

    {
        category: " 🛠️ Tools & Platforms",
        skills: [
            {
                name: "Git",
                icon: FaGitAlt,
                color: "text-orange-500",
                level: "Advanced",
            },
            {
                name: "GitHub",
                icon: FaGithub,
                color: "text-gray-300",
                level: "Advanced",
            },
            {
                name: "VS Code",
                icon: VscVscode ,
                color: "text-blue-500",
                level: "Advanced",
            },
            {
                name: "Vercel",
                icon: SiVercel,
                color: "text-blue-500",
                level: "Advanced",
            },
            {
                name: "Render",
                icon: SiRender,
                color: "text-blue-500",
                level: "Advanced",
            },
            {
                name: "Postman",
                icon: SiPostman,
                color: "text-orange-400",
                level: "Intermediate",
            },
        ],
    },
    {
        category: " 🤖 AI & Machine Learning",
        skills: [
            {
                name: "NumPy",
                icon: SiNumpy,
                color: "text-blue-600",
                level: "Advanced",
            },
            {
                name: "Pandas",
                icon: SiPandas,
                color: "text-blue-500",
                level: "Advanced",
            },
            {
                name: "Matplotlib",
                icon: FaChartLine,
                color: "text-blue-600",
                level: "Intermediate",
            },

            {
                name: "Scikit-learn",
                icon: SiScikitlearn,
                color: "text-orange-500",
                level: "Advanced",
            },
            {
                name: "PyTorch",
                icon: SiPytorch,
                color: "text-orange-600",
                level: "Advanced",
            },
            {
                name: "Google Gemini",
                icon: SiGooglegemini,
                color: "text-blue-500",
                level: "Intermediate",
            },
            {
                name: "Ollama",
                icon: SiOllama,
                color: "text-gray",
                level: "Advanced",
            },
            {
                name: "LLMs",
                icon: FaRobot,
                color: "text-purple-600",
                level: "Advanced",
            },
        ],
    },
]
};
export default skillData;