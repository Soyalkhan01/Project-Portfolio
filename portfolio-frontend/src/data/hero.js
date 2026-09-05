import profileImage from "../assets/images/hero/profile.webp";

const heroData = {
 
      greeting: "Hi..i'm",
      
      name: "Soyal khan",

      title: "Full Stack + AI Developer",

    description:
    "I build fast, secure and modern web applications with AI-powered solutions.",
    
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
            text: "View Project",
            link: "#projects",
            variant: "primary"
        },

        {
            text: "Contact Me",
            link: "#contact",
            variant: "secondary"
        },
    ],
};

export default heroData;