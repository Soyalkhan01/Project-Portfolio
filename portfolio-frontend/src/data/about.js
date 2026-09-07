import profileImage from "../assets/images/hero/profile.webp";
import { FaReact, FaPython, FaNodeJs, FaJs, } from "react-icons/fa";
import { SiFastapi, SiMongodb, SiPostgresql, SiFlask, SiTailwindcss } from "react-icons/si";

const aboutData = {

    title: "Who I Am",
    heading: "About Me",

    description: [
    "I am a Full Stack Developer passionate about building modern, responsive and scalable web applications.",
    "I also have a strong interest in AI and Machine Learning, and I enjoy turning ideas into practical digital solutions."
],

    image: profileImage,


   stats: [
    {
        value: "1+",
        label: "Years Learning & Building"
    },
    {
        value: "10+",
        label: "Projects & Applications"
    },
    {
        value: "Full Stack & AI/ML",
        label: "Development Focus"
    }
],

    technologiesTitle:"Technologies I Work With",

    technologies: [
    {
        name: "React.js",
        icon: FaReact,
        color: "hover:text-cyan-400"
    },
    {
        name: "Python",
        icon: FaPython,
        color: "hover:text-yellow-400"
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "hover:text-green-400"
    },
    {
        name: "FastAPI",
        icon: SiFastapi,
        color: "hover:text-teal-400"
        
    },
    {
        name: "JavaScript",
        icon: FaJs,
        color: "hover:text-yellow-400",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "hover:text-green-400",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "hover:text-blue-400",
    },
    {
        name: "Flask",
        icon: SiFlask,
        color: "hover:text-gray-500",
    },
    {
        name: "Tailwindcss",
        icon: SiTailwindcss,
        color: "hover:text-cyan-400",
    },
],

    badge: {
    status: "Available",
    text: "Available for Work"
}
};
 
export default aboutData;