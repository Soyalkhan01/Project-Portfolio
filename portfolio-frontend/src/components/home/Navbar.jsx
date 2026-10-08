import { useEffect, useState } from "react";
import navbarData from "../../data/navbar";
import {
    SiPython,
    SiJavascript,
} from "react-icons/si";

import excelIcon from "../../assets/icons/excel.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");
    const [dropdownOpen, setDropdownOpen] = useState(null);

    // ================= SCROLL BACKGROUND =================
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // ================= BODY LOCK MOBILE =================
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        document.documentElement.style.overflowX = "hidden";

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflowX = "";
        };
    }, [isOpen]);

    // ================= ACTIVE SECTION =================
    useEffect(() => {
        const sections = navbarData.links
            .filter((item) => item.link)
            .map((item) => document.querySelector(item.link))
            .filter(Boolean);

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;

            let currentSection = "#home";

            sections.forEach((section) => {
                if (section.offsetTop <= scrollPosition) {
                    currentSection = `#${section.id}`;
                }
            });

            setActiveLink(currentSection);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // ================= DROPDOWN NAVIGATION =================
    const handleDropdownClick = (link) => {
    setActiveLink(link);
    setDropdownOpen(null);
    setIsOpen(false);

    setTimeout(() => {
        const element = document.querySelector(link);

        if (element) {
            const navbarOffset = 100;

            const elementPosition =
                element.getBoundingClientRect().top +
                window.scrollY -
                navbarOffset;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        }
    }, 50);
};

    return (
        <nav
            aria-label="Main navigation"
            className={`fixed top-0 left-0 w-full z-100 px-4 py-3.5 md:px-8 md:py-4 border-b border-white/10
            transition-colors duration-300 ${
                isScrolled
                    ? "bg-slate-950/95 shadow-xl shadow-black/20"
                    : "bg-slate-950/80"
            }`}
        >
            <div className="relative w-full mx-auto flex items-center justify-between px-5 md:px-8 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">

                {/* ================= LOGO ================= */}
                <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                    <a
                        href="#home"
                        aria-label="Soyal Khan home"
                        onClick={() => {
                            setActiveLink("#home");
                            setIsOpen(false);
                            setDropdownOpen(false);
                        }}
                        className="flex items-center gap-2"
                    >
                        <span
                            aria-hidden="true"
                            className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50"
                        ></span>

                        {navbarData.logo}

                        <span
                            aria-hidden="true"
                            className="text-indigo-400"
                        >
                            .
                        </span>
                    </a>
                </h1>

                {/* ================= HAMBURGER ================= */}
                <button
                    type="button"
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setDropdownOpen(false);
                    }}
                    aria-label={
                        isOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isOpen}
                    aria-controls="main-navigation"
                    className="lg:hidden relative w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
                >
                    <span
                        className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
                            isOpen
                                ? "-translate-x-1/2 -translate-y-1/2 rotate-45"
                                : "-translate-x-1/2 -translate-y-1.75"
                        }`}
                    ></span>

                    <span
                        className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
                            isOpen
                                ? "-translate-x-1/2 -translate-y-1/2 -rotate-45"
                                : "-translate-x-1/2 -translate-y-1/2"
                        }`}
                    ></span>

                    <span
                        className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
                            isOpen
                                ? "opacity-0"
                                : "-translate-x-1/2 translate-y-1.25"
                        }`}
                    ></span>
                </button>

                {/* ================= NAVIGATION ================= */}
                <div
                    id="main-navigation"
                    className={`${
                        isOpen
                            ? "flex opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-3 pointer-events-none"
                    }

                    lg:opacity-100
                    lg:pointer-events-auto
                    lg:flex
                    lg:absolute
                    lg:left-1/2
                    lg:top-1/2
                    lg:-translate-x-1/2
                    lg:-translate-y-1/2

                    rounded-2xl
                    flex-col
                    lg:flex-row
                    items-start
                    lg:items-center
                    gap-7
                    lg:gap-6

                    absolute
                    top-18
                    left-0
                    z-50
                    w-full
                    lg:w-auto
                    bg-slate-950/95
                    lg:bg-transparent
                    p-6
                    lg:p-0
                    shadow-2xl
                    lg:shadow-none
                    transition-all
                    duration-300
                    ease-out
                    max-h-[calc(100vh-64px)]
                    overflow-y-auto
                    lg:max-h-none
                    lg:overflow-visible
                `}
                >

                    {navbarData.links.map((item) => {

// ================= DROPDOWN LINKS =================
if (item.dropdown) {
    const isDropdownOpen = dropdownOpen === item.text;

    return (
        <div
            key={item.text}
            className="relative w-full lg:w-auto"
            onMouseEnter={() => {
                if (window.innerWidth >= 1024) {
                    setDropdownOpen(item.text);
                }
            }}
            onMouseLeave={() => {
                if (window.innerWidth >= 1024) {
                    setDropdownOpen(null);
                }
            }}
        >
            {/* DROPDOWN BUTTON */}
            <button
                type="button"
                onClick={() => {
                    if (window.innerWidth < 1024) {
                        setDropdownOpen(
                            isDropdownOpen ? null : item.text
                        );
                    } else {
                        handleDropdownClick(item.link);
                    }
                }}
                className={`relative w-full lg:w-auto flex items-center justify-between lg:justify-center gap-2 text-base lg:text-sm font-semibold transition-all duration-300 ${
                    activeLink === item.link
                        ? "text-indigo-400"
                        : "text-gray-300 hover:text-indigo-300"
                }`}
            >
                <span>{item.text}</span>

                {/* ARROW */}
                <span
                    className={`text-[9px] transition-transform duration-300 ${
                        isDropdownOpen
                            ? "rotate-180 text-indigo-400"
                            : "text-gray-400"
                    }`}
                >
                    ▼
                </span>

                {/* ACTIVE LINE */}
                <span
                    className={`absolute left-0 -bottom-1.5 h-0.5 bg-indigo-400 transition-all duration-300 ${
                        activeLink === item.link
                            ? "w-full"
                            : "w-0"
                    }`}
                />
            </button>

            {/* DROPDOWN */}
            <div
                className={`
                    relative

                    lg:absolute
                    lg:top-full
                    lg:left-1/2
                    lg:-translate-x-1/2
                    lg:pt-4

                    w-full
                    lg:w-170

                    mt-4
                    lg:mt-0

                    transition-all
                    duration-300
                    ease-out
                    origin-top

                    ${
                        isDropdownOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2 pointer-events-none max-h-0"
                    }

                    lg:max-h-none
                `}
            >
                <div
                    className="
                        relative
                        w-full
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-950/98
                        backdrop-blur-2xl
                        shadow-2xl
                        shadow-black/50
                    "
                >
                    {/* TOP LINE */}
                    <div
                        className="
                            absolute
                            top-0
                            left-0
                            right-0
                            h-px
                            bg-linear-to-r
                            from-transparent
                            via-indigo-400
                            to-transparent
                        "
                    />

                    {/* HEADER */}
                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-3
                            px-4
                            py-4
                            sm:px-5
                            sm:py-4
                            border-b
                            border-white/10
                        "
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            {/* ICON */}
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                    w-9
                                    h-9
                                    sm:w-10
                                    sm:h-10
                                    rounded-xl
                                    bg-indigo-500/10
                                    border
                                    border-indigo-400/20
                                    text-base
                                    sm:text-lg
                                "
                            >
                                {item.icon}
                            </div>

                            {/* TEXT */}
                            <div className="min-w-0">
                                <h3
                                    className="
                                        text-xs
                                        sm:text-sm
                                        font-bold
                                        text-white
                                        whitespace-normal
                                        leading-5
                                    "
                                >
                                    Explore {item.text}
                                </h3>

                                <p
                                    className="
                                        text-[9px]
                                        sm:text-[11px]
                                        text-gray-500
                                        mt-0.5
                                        leading-4
                                    "
                                >
                                    {item.text === "Services"
                                        ? "Everything you need for your digital presence"
                                        : "Explore my latest projects and work"}
                                </p>
                            </div>
                        </div>

                        {/* DESKTOP LABEL */}
                        <div
                            className="
                                hidden
                                sm:flex
                                shrink-0
                                items-center
                                gap-1.5
                                px-2.5
                                py-1.5
                                rounded-lg
                                bg-white/5
                                border
                                border-white/5
                            "
                        >
                            <span
                                className="
                                    w-1.5
                                    h-1.5
                                    rounded-full
                                    bg-indigo-400
                                "
                            />

                            <span
                                className="
                                    text-[8px]
                                    uppercase
                                    tracking-wider
                                    text-gray-500
                                    font-semibold
                                "
                            >
                                {item.text}
                            </span>
                        </div>
                    </div>

                    {/* DROPDOWN ITEMS */}
                    <div
                        className="
                            p-3
                            sm:p-4
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-2
                            max-h-[55vh]
                            sm:max-h-[60vh]
                            lg:max-h-[65vh]
                            overflow-y-auto
                            overscroll-contain
                            scrollbar-thin
                            scrollbar-thumb-white/10
                        "
                    >
                        {item.dropdown.map((dropItem, index) => (
                            <button
                                key={dropItem.text}
                                type="button"
                                onClick={() =>
                                    handleDropdownClick(dropItem.link)
                                }
                                className="
                                    group
                                    relative
                                    flex
                                    items-center
                                    gap-3
                                    w-full
                                    min-w-0
                                    min-h-16
                                    sm:min-h-18
                                    p-3
                                    rounded-xl
                                    text-left
                                    border
                                    border-white/[0.07]
                                    bg-white/2.5
                                    hover:bg-indigo-500/8
                                    hover:border-indigo-400/30
                                    hover:-translate-y-0.5
                                    active:scale-[0.98]
                                    transition-all
                                    duration-300
                                "
                            >
                                {/* NUMBER */}
                                <span
                                    className="
                                        absolute
                                        top-2
                                        right-2
                                        text-[7px]
                                        sm:text-[8px]
                                        font-bold
                                        text-gray-700
                                        group-hover:text-indigo-400/60
                                        transition
                                    "
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* EMOJI */}
                                <span
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                        w-9
                                        h-9
                                        sm:w-10
                                        sm:h-10
                                        rounded-xl
                                        bg-white/5
                                        border
                                        border-white/5
                                        text-base
                                        sm:text-lg
                                        group-hover:bg-indigo-500/15
                                        group-hover:border-indigo-400/20
                                        group-hover:scale-105
                                        transition-all
                                        duration-300
                                    "
                                >
                                   {dropItem.icon === "python" && (
    <SiPython className="text-2xl text-yellow-400" />
)}

{dropItem.icon === "javascript" && (
    <SiJavascript className="text-2xl text-yellow-300" />
)}

{dropItem.iconLabels && (
    <div className="flex flex-col items-center justify-center leading-none">
        {dropItem.iconLabels.map((label) => (
            <span
                key={label.text}
                className={`text-xs font-bold ${label.className}`}
            >
                {label.text}
            </span>
        ))}
    </div>
)}

{dropItem.icon === "excel" && (
    <img
        src={excelIcon}
        alt="Microsoft Excel"
        className=" ml-0.75 h-7 w-7 rounded object-contain"
    />
)}

{dropItem.emoji && (
    <span className="text-2xl">
        {dropItem.emoji}
    </span>
)}
                                </span>

                                {/* TEXT */}
                                <span
                                    className="
                                        min-w-0
                                        flex-1
                                        pr-3
                                    "
                                >
                                    <span
                                        className="
                                            block
                                            text-[10px]
                                            sm:text-[11px]
                                            font-bold
                                            text-gray-300
                                            group-hover:text-white
                                            leading-4
                                            truncate
                                            transition
                                        "
                                    >
                                        {dropItem.text}
                                    </span>

                                    <span
                                        className="
                                            block
                                            mt-1
                                            text-[8px]
                                            sm:text-[9px]
                                            text-gray-500
                                            group-hover:text-gray-400
                                            leading-3
                                            line-clamp-2
                                            transition
                                        "
                                    >
                                        {dropItem.description}
                                    </span>
                                </span>

                                {/* ARROW */}
                                <span
                                    className="
                                        absolute
                                        right-2.5
                                        bottom-2.5
                                        text-[10px]
                                        text-gray-700
                                        group-hover:text-indigo-400
                                        group-hover:translate-x-0.5
                                        transition-all
                                    "
                                >
                                    →
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* BOTTOM BUTTON */}
                    <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                        <button
                            type="button"
                            onClick={() =>
                                handleDropdownClick(item.link)
                            }
                            className="
                                w-full
                                flex
                                items-center
                                justify-center
                                gap-2
                                py-2.5
                                sm:py-3
                                rounded-xl
                                bg-indigo-600/10
                                border
                                border-indigo-500/20
                                text-indigo-300
                                text-[10px]
                                sm:text-xs
                                font-semibold
                                hover:bg-indigo-600/20
                                hover:border-indigo-400/30
                                active:scale-[0.98]
                                transition-all
                                duration-300
                            "
                        >
                            <span>
                                View All {item.text}
                            </span>

                            <span className="text-sm">
                                →
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

                        // ================= NORMAL LINKS =================
                        return (
                            <a
                                key={item.text}
                                href={item.link}
                                onClick={() => {
                                    setActiveLink(item.link);
                                    setIsOpen(false);
                                    setDropdownOpen(false);
                                }}
                                aria-current={
                                    activeLink === item.link
                                        ? "page"
                                        : undefined
                                }
                                className={`relative text-base lg:text-sm font-semibold transition duration-300
                                    ${
                                        activeLink === item.link
                                            ? "text-indigo-400"
                                            : "text-gray-300 hover:text-indigo-300"
                                    }

                                    after:content-['']
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1.5
                                    after:h-0.5
                                    after:bg-indigo-400
                                    after:transition-all
                                    after:duration-300

                                    ${
                                        activeLink === item.link
                                            ? "after:w-full"
                                            : "after:w-0 hover:after:w-full"
                                    }
                                `}
                            >
                                {item.text}
                            </a>
                        );
                    })}

                    {/* ================= MOBILE CTA ================= */}
                    <a
                        href={navbarData.cta.link}
                        onClick={() => {
                            setIsOpen(false);
                            setDropdownOpen(false);
                        }}
                        className="lg:hidden flex items-center justify-center w-full px-6 py-3 mt-4 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 transition duration-300"
                    >
                        {navbarData.cta.text}
                    </a>
                </div>

                {/* ================= DESKTOP CTA ================= */}
                <a
                    href={navbarData.cta.link}
                    onClick={() => {
                        setIsOpen(false);
                        setDropdownOpen(false);
                    }}
                    className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 transition duration-300"
                >
                    {navbarData.cta.text}
                </a>
            </div>
        </nav>
    );
}

export default Navbar;