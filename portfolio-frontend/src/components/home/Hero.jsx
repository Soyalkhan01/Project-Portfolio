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

import {
    SiMongodb,
    SiTailwindcss,
    SiPostgresql,
    SiFastapi
} from "react-icons/si";

import { useEffect, useState } from "react";

const technologyIcons = {
    html: { icon: FaHtml5, color: "text-orange-500" },
    css: { icon: FaCss3Alt, color: "text-blue-500" },
    javascript: { icon: FaJs, color: "text-yellow-400" },
    react: { icon: FaReact, color: "text-cyan-400" },
    node: { icon: FaNodeJs, color: "text-green-500" },
    python: { icon: FaPython, color: "text-blue-400" },
    fastapi: { icon: SiFastapi, color: "text-teal-400" },
    mongodb: { icon: SiMongodb, color: "text-green-400" },
    tailwindcss: {
        icon: SiTailwindcss,
        color: "text-cyan-400",
    },
    postgresql: {
        icon: SiPostgresql,
        color: "text-blue-500",
    },
};

function Hero() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const heroSection = document.getElementById("home");

        if (!heroSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(heroSection);

        return () => observer.disconnect();
    }, []);

  const roles = heroData.title;

const [roleText, setRoleText] = useState("");
const [roleIndex, setRoleIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
        if (!isDeleting) {
            setRoleText(currentRole.substring(0, roleText.length + 1));

            if (roleText.length + 1 === currentRole.length) {
                setTimeout(() => {
                    setIsDeleting(true);
                }, 1500);
            }
        } else {
            setRoleText(currentRole.substring(0, roleText.length - 1));

            if (roleText.length === 0) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timer);
},);

    return (
        <section
            id="home"
            className="relative min-h-18 flex items-center pt-25 pb-17 bg-slate-950 overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-120 h-120 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="absolute -bottom-48 -right-32 w-120 h-120 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>


            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-0 md:mt-6 lg:mt-0">


                {/* ================= MAIN HERO CONTENT ================= */}

                <div className="flex flex-col md:flex-row items-center justify-between gap-14 lg:gap-16">


                    {/* ================= LEFT CONTENT ================= */}

                    <div
                        className={`w-full md:w-[58%] md:text-left translate-y-6 md:translate-y-0
                        transition-all duration-1800
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-12"
                            }`}
                    >

                        {/* Greeting */}
                        <p
                            className={`text-indigo-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 lg:ml-2
                            transition-all duration-1400
                            ease-out
                            ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                        >
                            {heroData.greeting}
                        </p>


                        {/* Name */}
                        <h1
                            className={`text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4
                            transition-all duration-1700
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                        >
                            {heroData.name}
                        </h1>


                        {/* Title */}
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
                        {roleText}
                        <span className="inline-block ml-1 w-0.5 h-5 bg-indigo-400 align-middle animate-pulse"></span>
                    </h2>


                        {/* Description */}
                        <p
                            className={`max-w-2xl text-gray-400 text-base md:text-lg leading-7 mb-8
                            transition-all duration-2000
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            delay-150
                            ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                        >
                            {heroData.description}
                        </p>


                        {/* Buttons */}
                        <div
                            className={`flex flex-wrap gap-4 mt-2
                            transition-all duration-2100
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            delay-200
                            ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                        >

                            {heroData.button.map((button) => (
                                <a
                                    className={
                                        button.variant === "primary"
                                            ? "bg-indigo-600 text-white px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold hover:bg-indigo-900 hover:scale-105 transition duration-300 shadow-lg shadow-indigo-900/20 flex items-center justify-center"
                                            : "border border-gray-600 text-gray-200 px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold hover:border-indigo-400 hover:text-white hover:bg-indigo-950/40 hover:scale-105 transition duration-300 flex items-center justify-center"
                                    }
                                    key={button.text}
                                    href={button.link}
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


                    {/* ================= IMAGE SECTION ================= */}

                    <div
                        className={`w-full md:w-1/2 flex justify-center relative lg:translate-y-18 lg:ml-25 translate-y-3 md:translate-y-6
                        transition-all duration-2200
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        delay-150
                        ${isVisible
                                ? "opacity-100 translate-x-0 scale-100"
                                : "opacity-0 translate-x-12 scale-[0.96]"
                            }`}
                    >

                        <div className="relative">

                            {/* Image Glow */}
                            <div
                                className={`absolute -inset-6 bg-indigo-600/20 blur-3xl rounded-full
                                transition-all duration-2500
                                ${isVisible
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-75"
                                    }`}
                            ></div>


                            {/* Main Image */}
                            <div className="relative w-72 h-82 md:w-105 md:h-120 rounded-3xl overflow-hidden border border-indigo-400/30 shadow-2xl shadow-indigo-950/50">

                                <img
                                    src={heroData.image}
                                    alt="Soyal Khan - Software Engineer and Full Stack Developer"
                                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                />

                            </div>


                            {/* Developer Code Card */}
                            <div
                                className={`absolute -bottom-6 -left-6 hidden md:block w-52 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-md p-4 shadow-2xl
                                transition-all duration-2400
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                delay-300
                                ${isVisible
                                        ? "opacity-100 translate-y-0 translate-x-0"
                                        : "opacity-0 translate-y-12 -translate-x-6"
                                    }`}
                            >

                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                                </div>

                                <p className="text-xs text-gray-500 mb-2">
                                    developer.js
                                </p>

                                <p className="text-sm text-indigo-400">
                                    const developer = {"{"}
                                </p>

                                <p className="text-sm text-gray-300 pl-3">
                                    name:
                                    <span className="text-purple-400">
                                        'Soyal'
                                    </span>,
                                </p>

                                <p className="text-sm text-gray-300 pl-3">
                                    role:
                                    <span className="text-purple-400">
                                        'Full Stack + AI Dev.'
                                    </span>
                                </p>

                                <p className="text-sm text-indigo-400">
                                    {"}"};
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= TECHNOLOGIES ================= */}

                <div className="w-full mt-12 md:mt-16 lg:ml-0 lg:mt-0">

                    <p
                        className={`text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5 text-center md:text-left
                        transition-all duration-1800
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        {heroData.technologiesTitle}
                    </p>


                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">

                        {heroData.technologies.map((technology, index) => {

                            const {
                                icon: Icon,
                                color
                            } = technologyIcons[technology.icon];

                            return (

                                <div
                                    key={technology.name}
                                    className={`group flex items-center justify-center w-14 h-14 rounded-xl border border-white/10 bg-white/5 hover:border-indigo-400/50 hover:bg-indigo-950/40 hover:-translate-y-1 transition duration-300
                                    transform
                                    ${isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-12"
                                        }`}
                                    style={{
                                        transitionDuration: "1800ms",
                                        transitionDelay: isVisible
                                            ? `${250 + index * 180}ms`
                                            : "0ms",
                                    }}
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
}

export default Hero;
