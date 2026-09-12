import profileImage from "../assets/images/hero/profile.webp";

const heroData = {
 
      greeting: "Hi..i'm",
      
      name: "Soyal khan",

      title: "Software Engineer | Full Stack Developer | UI/UX Designer | AI/ML Enthusiast",

    description:
    "I build modern, scalable web applications and AI-powered solutions, with a strong focus on UI/UX design and data-driven development.",
    
    image: profileImage,

    technologiesTitle:"Technologies I Work With",

    technologies: [
    {name:"HTML", icon:"html"},
    {name:"CSS", icon:"css"},
    {name:"JavaScript", icon:"javascript"},
    {name:"React", icon:"react"},
    {name:"Node.js", icon:"node"},
    {name:"Python", icon:"python"},
    {name:"FastAPI", icon:"fastapi"},
    {name:"MongoDB", icon:"mongodb"},
    {name:"Postgresql", icon:"postgresql"},
    {name:"Tailwindcss", icon:"tailwindcss"},
    ],

    button:[
        {
            text: "Explore Projects",
            link: "#projects",
            variant: "primary",
            external: true
        },

        {
            text: "Download Resume",
            link: "/Soyal Khan Resume.pdf",
            variant: "secondary",
            download: true
        },
    ],
};

export default heroData;