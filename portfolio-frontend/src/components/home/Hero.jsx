import heroData from "../../data/hero";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaExternalLinkAlt
} from "react-icons/fa";

import { SiMongodb, SiTailwindcss, SiPostgresql, SiFastapi} from "react-icons/si";

const technologyIcons = {
  html: { icon: FaHtml5, color: "text-orange-500" },
  css: { icon: FaCss3Alt, color: "text-blue-500" },
  javascript: { icon: FaJs, color: "text-yellow-400" },
  react: { icon: FaReact, color: "text-cyan-400" },
  node: { icon: FaNodeJs, color: "text-green-500" },
  python: { icon: FaPython, color: "text-blue-400" },
  fastapi: { icon: SiFastapi, color: "text-teal-400" },
  mongodb: { icon: SiMongodb, color: "text-green-400" },
  tailwindcss: { icon: SiTailwindcss, color: "text-cyan-400",},
  postgresql: { icon: SiPostgresql, color: "text-blue-500",},
};
 
function Hero(){
    return(
         <section 
         id="home"
         className="relative min-h-18 flex items-center pt-25 pb-15 bg-slate-950 overflow-hidden">

            <div className="absolute -top-40 -left-40 w-120 h-120 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="absolute -bottom-48 -right-32 w-120 h-120 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

           <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-0 md:mt-6 lg:mt-0">

            <div className="flex flex-col md:flex-row items-center justify-between gap-14 lg:gap-16">

                <div className="w-full md:w-[58%] md:text-left translate-y-6 md:translate-y-0">

                    <p className="text-indigo-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 lg:ml-2">{heroData.greeting}</p>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
                    {heroData.name}</h1>

<h2
  className="
    text-[17px]
    sm:text-sm
    md:text-[15px]
    lg:text-[16px]
    font-medium
    tracking-[0.09em]
    sm:tracking-widest
    lg:tracking-[0.12em]
    text-gray-300
    mb-2
    py-3
    leading-relaxed
    text-left
    whitespace-normal
    md:whitespace-normal
    lg:whitespace-nowrap
  "
>
  {heroData.title}
</h2>

                    <p className="max-w-2xl text-gray-400 text-base md:text-lg leading-7 mb-8"> 
                       {heroData.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                       {heroData.button.map((button) =>(
                        <a 
                        className={
                        button.variant === "primary"
                        ? "bg-indigo-600 text-white px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold hover:bg-indigo-900 hover:scale-105 transition duration-300 shadow-lg shadow-indigo-900/20 flex items-center justify-center"
                        : "border border-gray-600 text-gray-200 px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold hover:border-indigo-400 hover:text-white hover:bg-indigo-950/40 hover:scale-105 transition duration-300 flex items-center justify-center"
                    }

                        key={button.text} href={button.link}
                        download={button.download || undefined}
                        >

                            {button.text}
{button.external && (
    <FaExternalLinkAlt className="ml-2 text-sm" />
)}

                        </a>

                       ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center relative lg:translate-y-18 lg:ml-25 translate-y-3 md:translate-y-6 ">
                
                    <div className="relative">

                    <div className="absolute -inset-6 bg-indigo-600/20 blur-3xl rounded-full"></div>

                    <div className="relative w-72 h-82 md:w-105 md:h-120 rounded-3xl overflow-hidden border border-indigo-400/30 shadow-2xl shadow-indigo-950/50">
                        <img
                        src={heroData.image}
                        alt={heroData.name}
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="absolute -bottom-6 -left-6 hidden md:block w-52 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-md p-4 shadow-2xl">
                    
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    </div>

                    <p className="text-xs text-gray-500 mb-2">developer.js</p>

                    <p className="text-sm text-indigo-400">
                        const developer = {"{"}
                    </p>

                    <p className="text-sm text-gray-300 pl-3">
                        name: 
                        <span className="text-purple-400">'Soyal'</span>,
                    </p>

                    <p className="text-sm text-gray-300 pl-3">
                        role: 
                        <span className="text-purple-400">'Full Stack + AI Dev.'</span>
                    </p>

                    <p className="text-sm text-indigo-400">
                        {"}"};
                    </p>
                    </div>

                    </div>
                </div>

             </div>

             <div className="w-full mt-12 md:mt-16 lg:ml-0 lg:mt-0">

            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5 text-center md:text-left">
                {heroData.technologiesTitle}
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {heroData.technologies.map((technology) => {
                const { icon: Icon, color } = technologyIcons[technology.icon];
                return (
                    <div
                    key={technology.name}
                    className="group flex items-center justify-center w-14 h-14 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-indigo-400/50 hover:bg-indigo-950/40 hover:-translate-y-1 transition duration-300"
                    title={technology.name}
                    >
                    <Icon
                        className={`${color} group-hover:scale-110 transition duration-300`}
                        size={28}
                    />
                    </div>
                );
                })}
            </div>

            </div>
            </div>
       
         </section>
    );
};

export default Hero;