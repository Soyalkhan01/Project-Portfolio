import heroData from "../../data/hero";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaExternalLinkAlt,
} from "react-icons/fa";

import {
    SiMongodb,
    SiTailwindcss,
    SiPostgresql,
    SiFastapi,
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

    const roles = heroData.title;

    const [roleText, setRoleText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    /* ================= HERO VISIBILITY ================= */

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

    /* ================= TYPING EFFECT ================= */

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const timer = setTimeout(
            () => {
                if (!isDeleting) {
                    setRoleText(
                        currentRole.substring(0, roleText.length + 1)
                    );

                    if (roleText.length + 1 === currentRole.length) {
                        setTimeout(() => {
                            setIsDeleting(true);
                        }, 1500);
                    }
                } else {
                    setRoleText(
                        currentRole.substring(0, roleText.length - 1)
                    );

                    if (roleText.length === 0) {
                        setIsDeleting(false);
                        setRoleIndex(
                            (prev) => (prev + 1) % roles.length
                        );
                    }
                }
            },
            isDeleting ? 60 : 100
        );

        return () => clearTimeout(timer);
    }, [roleText, roleIndex, isDeleting, roles]);

    return (
        <section
            id="home"
            className="
                relative
                min-h-100vh
                flex
                items-center
                pt-25
                md:pt-32
                sm:pt-25
                lg:pt-21
                pb-17
                bg-slate-950
                overflow-hidden
                perspective-[1400px]
            "
        >
            {/* =====================================================
                BACKGROUND 3D LIGHT
            ====================================================== */}

            <div className="
                absolute
                -top-40
                -left-40
                w-120
                h-120
                bg-indigo-900/20
                rounded-full
                blur-2xl
                pointer-events-none
            " />

            <div className="
                absolute
                -bottom-48
                -right-32
                w-120
                h-120
                bg-purple-600/20
                rounded-full
                blur-3xl
                pointer-events-none
            " />

            {/* 3D grid glow */}
            <div
                className="
                    absolute
                    inset-0
                    pointer-events-none
                    opacity-[0.12]
                "
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(99,102,241,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.25) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                    maskImage:
                        "radial-gradient(circle at center, black, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(circle at center, black, transparent 75%)",
                }}
            />

            <div
                className="
                    relative
                    z-10
                    max-w-7xl
                    mx-auto
                    w-full
                    px-4
                    md:px-6
                    lg:px-0
                    md:mt-6
                    lg:mt-0
                "
            >
                {/* =====================================================
                    MAIN HERO
                ====================================================== */}

                <div className="
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    justify-between
                    gap-14
                    lg:gap-16
                ">
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div
                        className={`
                            w-full
                            md:w-[58%]
                            md:text-left
                            translate-y-6
                            md:translate-y-0
                            transition-all
                            duration-1800
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${
                                isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-12"
                            }
                        `}
                    >
                        {/* Greeting */}

                        <p
                            className={`
                                text-indigo-400
                                text-sm
                                md:text-base
                                font-semibold
                                tracking-[0.2em]
                                uppercase
                                mb-4
                                lg:ml-2
                                transition-all
                                duration-1400
                                ease-out
                                ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                }
                            `}
                        >
                            {heroData.greeting}
                        </p>

                        {/* Name */}

                        <h1
                            className={`
                                text-5xl
                                md:text-7xl
                                font-extrabold
                                tracking-tight
                                text-white
                                mb-4
                                transition-all
                                duration-1700
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }
                            `}
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

                            <span
                                className="
                                    inline-block
                                    ml-1
                                    w-0.5
                                    h-5
                                    bg-indigo-400
                                    align-middle
                                    smooth-float
                                "
                            />
                        </h2>

                        {/* Description */}

                        <p
                            className={`
                                max-w-2xl
                                text-gray-400
                                text-base
                                md:text-lg
                                leading-7
                                mb-8
                                transition-all
                                duration-2000
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                delay-150
                                ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }
                            `}
                        >
                            {heroData.description}
                        </p>

                        {/* Buttons */}

                        <div
                            className={`
                                flex
                                flex-wrap
                                gap-4
                                mt-2
                                transition-all
                                duration-2100
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                delay-200
                                ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }
                            `}
                        >
                            {heroData.button.map((button) => (
                                <a
                                    key={button.text}
                                    href={button.link}
                                    download={
                                        button.download || undefined
                                    }
                                    className={
                                        button.variant === "primary"
                                            ? `
                                                bg-indigo-600
                                                text-white
                                                px-5
                                                md:px-7
                                                py-3
                                                md:py-3.5
                                                rounded-xl
                                                font-semibold
                                                hover:bg-indigo-900
                                                hover:scale-105
                                                transition
                                                duration-300
                                                shadow-lg
                                                shadow-indigo-900/20
                                                flex
                                                items-center
                                                justify-center
                                            `
                                            : `
                                                border
                                                border-gray-600
                                                text-gray-200
                                                px-5
                                                md:px-7
                                                py-3
                                                md:py-3.5
                                                rounded-xl
                                                font-semibold
                                                hover:border-indigo-400
                                                hover:text-white
                                                hover:bg-indigo-950/40
                                                hover:scale-105
                                                transition
                                                duration-300
                                                flex
                                                items-center
                                                justify-center
                                            `
                                    }
                                >
                                    {button.text}

                                    {button.external && (
                                        <FaExternalLinkAlt className="ml-2 text-sm" />
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* =================================================
                        3D IMAGE SECTION
                    ================================================= */}

                    <div
                        className={`
                            w-full
                            md:w-1/2
                            flex
                            justify-center
                            relative
                            lg:translate-y-18
                            lg:ml-25
                            translate-y-3
                            md:translate-y-6                            
                            ${
                                isVisible
                                    ? "opacity-100 translate-x-0 scale-100"
                                    : "opacity-0 translate-x-12 scale-[0.96]"
                            }
                        `}
                    >
                        <div
                            className="
                                relative
                                w-75
                                sm:w-85
                                md:w-105
                                h-97.5
                                sm:h-107.5
                                md:h-125
                                flex
                                items-center
                                justify-center
                            "
                        >
                            {/* =========================================
                                3D ROTATING RINGS
                            ========================================== */}

                            <div
                                className="
                                    absolute
                                    w-67.5
                                    h-67.5
                                    sm:w-[320px]
                                    sm:h-80
                                    md:w-97.5
                                    md:h-97.5
                                    rounded-full
                                    border
                                    border-indigo-400/20
                                    rotate-12
                                    
                                "
                            />

                            <div
                                className="
                                    absolute
                                    w-60
                                    h-60
                                    sm:w-71.25
                                    sm:h-71.25
                                    md:w-87.5
                                    md:h-87.5
                                    rounded-full
                                    border
                                    border-purple-400/20
                                    -rotate-12
                                    animate-[spin_25s_linear_infinite_reverse]
                                "
                            />

                            {/* =========================================
                                MAIN 3D IMAGE WRAPPER
                            ========================================== */}

                            <div
                                className="
                                    group
                                    relative
                                    z-10
                                    transform-style: preserve-3d;
                                   
                                    hover:transform: perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1.02);

                                    transition-all
                                    duration-700
                                    ease-out
                                "
                            >
                                {/* Back depth layers */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        translate-x-5
                                        translate-y-5
                                        rounded-4xl
                                        bg-indigo-600/20
                                        border
                                        border-indigo-400/10
                                        blur-[1px]
                                        transform: translateZ(-35px);

                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        translate-x-3
                                        translate-y-3
                                        rounded-4xl
                                        bg-indigo-500/10
                                        border
                                        border-indigo-400/10
                                        transform: translateZ(-20px);

                                    "
                                />

                                {/* Glow */}

                                <div
                                    className="
                                        absolute
                                        -inset-8
                                        bg-indigo-600/25
                                        rounded-full
                                        blur-2xl
                                        opacity-70
                                        group-hover:opacity-100
                                        transition
                                        duration-700
                                    "
                                />

                                {/* Image */}

                                <div
                                    className="
                                        relative
                                        w-64
                                        h-80
                                        sm:w-72
                                        sm:h-88
                                        md:w-[320px]
                                        md:h-102.5
                                        rounded-4xl
                                        overflow-hidden
                                        border
                                        border-indigo-300/30
                                        bg-slate-900
                                        
                                        transform: translateZ(25px);

                                    "
                                >
                                    <img
                                        src={heroData.image}
                                        alt="Soyal Khan - Software Engineer and Full Stack Developer"
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                            transition-all
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />

                                    {/* Image shine */}

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-linear-to-br
                                            from-white/15
                                            via-transparent
                                            to-indigo-900/30
                                            pointer-events-none
                                        "
                                    />

                                    {/* Bottom glass */}

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            right-0
                                            h-20
                                            bg-linear-to-t
                                            from-slate-950/70
                                            to-transparent
                                            pointer-events-none
                                        "
                                    />
                                </div>
                            </div>

                            {/* =================================================
                                3D FLOATING TECH BADGES
                            ================================================= */}

                            {/* React + AI */}

                            <div
                                className="
                                    absolute
                                    z-30
                                    top-5
                                    lg:top-10
                                    md:top-10
                                    -right-1
                                    sm:right-0
                                    md:-right-2
                                    px-3
                                    py-2
                                    rounded-xl
                                    border
                                    border-cyan-400/30
                                    bg-slate-900/80
                                    smooth-float
                                
                                "
                            >
                                <div className="flex items-center gap-2">
                                    <FaReact className="text-cyan-400 text-xl" />

                                    <span className="text-xs font-bold text-white">
                                        React + AI
                                    </span>
                                </div>
                            </div>

                            {/* Python */}

                            <div
                                className="
                                    absolute
                                    z-30
                                    top-32
                                    -left-2
                                    sm:-left-4
                                    md:-left-8
                                    px-3
                                    py-2
                                    rounded-xl
                                    border
                                    border-yellow-400/25
                                    bg-slate-900/80
                                    smooth-float
                                    
                                     
                                "
                            >
                                <div className="flex items-center gap-2">
                                    <FaPython className="text-yellow-400 text-xl" />

                                    <span className="text-xs font-bold text-white">
                                        Python
                                    </span>
                                </div>
                            </div>

                            {/* Tailwind CSS */}

                            <div
                                className="
                                    absolute
                                    z-30
                                    bottom-28
                                    -right-2
                                    sm:right-0
                                    md:-right-4
                                    px-3
                                    py-2
                                    rounded-xl
                                    border
                                    border-cyan-400/25
                                    bg-slate-900/80
                                    smooth-float
                                
                                "
                            >
                                <div className="flex items-center gap-2">
                                    <SiTailwindcss className="text-cyan-400 text-xl" />

                                    <span className="text-xs font-bold text-white">
                                        Tailwind CSS
                                    </span>
                                </div>
                            </div>

                            {/* =================================================
                                DEVELOPER CODE CARD
                            ================================================= */}

                            <div
                                className={`
                                    absolute
                                    z-40
                                    -bottom-4
                                    -left-2
                                    sm:-left-8
                                    md:-left-10
                                    hidden
                                    sm:block
                                    w-52
                                    md:w-56
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-slate-900/90
                                    backdrop-blur-md
                                    p-4
                                    shadow-[0_25px_60px_rgba(0,0,0,0.55)]
                                    transform-[perspective(900px)_rotateY(10deg)_rotateX(5deg)_translateZ(40px)]
                                    hover:transform-[perspective(900px)_rotateY(0deg)_rotateX(0deg)_translateZ(50px)]
                                    transition-all
                                    duration-500
                                    ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-12"
                                    }
                                `}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.6)]" />

                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]" />

                                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
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
                                    </span>
                                    ,
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

                {/* =====================================================
                    TECHNOLOGIES
                ====================================================== */}

                <div className="w-full mt-12 md:mt-16 lg:ml-0 lg:mt-0">
                    <p
                        className={`
                            text-xs
                            md:text-sm
                            font-semibold
                            tracking-[0.2em]
                            uppercase
                            text-gray-500
                            mb-5
                            text-center
                            md:text-left
                            transition-all
                            duration-1800
                            ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }
                        `}
                    >
                        {heroData.technologiesTitle}
                    </p>

                    <div className="
                        flex
                        flex-wrap
                        gap-3
                        justify-center
                        md:justify-start
                    ">
                        {heroData.technologies.map(
                            (technology, index) => {
                                const {
                                    icon: Icon,
                                    color,
                                } =
                                    technologyIcons[
                                        technology.icon
                                    ];

                                return (
                                    <div
                                        key={technology.name}
                                        className={`
    group
    relative
    flex
    items-center
    justify-center
    w-14
    h-14
    rounded-xl
    border
    border-white/10
    bg-white/4
    perspective-[600px]
    hover:transform-[perspective(600px)_rotateX(8deg)_rotateY(-8deg)_translateZ(18px)_scale(1.08)]
    hover:border-indigo-400/50
    hover:bg-indigo-950/50
    transition-all
    duration-500
    ease-out

    ${
        isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
    }
`}
                                        style={{
                                            transitionDelay: isVisible
                                                ? `${250 + index * 100}ms`
                                                : "0ms",
                                        }}
                                        title={technology.name}
                                    >
                                        {/* Icon glow */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                rounded-xl
                                                bg-indigo-500/0
                                                group-hover:bg-indigo-500/10
                                                blur-xl
                                                transition-all
                                                duration-500
                                            "
                                        />

                                        <Icon
                                            className={`
                                                relative
                                                z-10
                                                ${color}
                                                group-hover:scale-125
                                                [0_0_10px_currentColor]
                                                transition-all
                                                duration-500
                                            `}
                                            size={28}
                                        />

                                        {/* Bottom 3D edge */}

                                        <span
                                            className="
                                                absolute
                                                bottom-0
                                                left-2
                                                right-2
                                                h-px
                                                bg-linear-to-r
                                                from-transparent
                                                via-indigo-400/40
                                                to-transparent
                                            "
                                        />
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>

            {/* =========================================================
                CUSTOM ANIMATION
            ========================================================== */}

            <style>{`
                @keyframes floatOne {
                    0%, 100% {
                        transform:
                            perspective(700px)
                            rotateY(-12deg)
                            rotateX(8deg)
                            translate3d(0, 0, 30px);
                    }

                    50% {
                        transform:
                            perspective(700px)
                            rotateY(-5deg)
                            rotateX(2deg)
                            translate3d(0, -12px, 45px);
                    }
                }

                @keyframes floatTwo {
                    0%, 100% {
                        transform:
                            perspective(700px)
                            rotateY(12deg)
                            rotateX(8deg)
                            translate3d(0, 0, 25px);
                    }

                    50% {
                        transform:
                            perspective(700px)
                            rotateY(5deg)
                            rotateX(0deg)
                            translate3d(0, -14px, 40px);
                    }
                }

                @keyframes floatThree {
                    0%, 100% {
                        transform:
                            perspective(700px)
                            rotateY(-10deg)
                            rotateX(-7deg)
                            translate3d(0, 0, 25px);
                    }

                    50% {
                        transform:
                            perspective(700px)
                            rotateY(-3deg)
                            rotateX(0deg)
                            translate3d(0, -10px, 42px);
                    }
                }

                @media (max-width: 767px) {
                    @keyframes floatOne {
                        0%, 100% {
                            transform:
                                perspective(600px)
                                rotateY(-6deg)
                                rotateX(4deg)
                                translate3d(0, 0, 20px);
                        }

                        50% {
                            transform:
                                perspective(600px)
                                rotateY(0deg)
                                rotateX(0deg)
                                translate3d(0, -7px, 30px);
                        }
                    }

                    @keyframes floatTwo {
                        0%, 100% {
                            transform:
                                perspective(600px)
                                rotateY(6deg)
                                rotateX(4deg)
                                translate3d(0, 0, 20px);
                        }

                        50% {
                            transform:
                                perspective(600px)
                                rotateY(0deg)
                                rotateX(0deg)
                                translate3d(0, -7px, 30px);
                        }
                    }

                    @keyframes floatThree {
                        0%, 100% {
                            transform:
                                perspective(600px)
                                rotateY(-6deg)
                                rotateX(-4deg)
                                translate3d(0, 0, 20px);
                        }

                        50% {
                            transform:
                                perspective(600px)
                                rotateY(0deg)
                                rotateX(0deg)
                                translate3d(0, -7px, 30px);
                        }
                    }
                }
            `}</style>
        </section>
    );
}

export default Hero;
