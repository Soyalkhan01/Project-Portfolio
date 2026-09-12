import { useEffect, useState } from "react";
import navbarData from "../../data/navbar";

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

        useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.documentElement.style.overflowX = "hidden";

    return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflowX = "";
    };
}, [isOpen]);

useEffect(() => {
    const sections = navbarData.links
        .map((item) => document.querySelector(item.link))
        .filter(Boolean);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 150;

        let currentSection = "#home";

        sections.forEach((section) => {
            if (section.offsetTop <= scrollPosition) {
                currentSection = `#${section.id}`;
            }
        });

        setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

    return(

        <nav 
        aria-label="Main navigation"
        className={`fixed top-0 left-0  w-full z-100 px-4 py-3.5 md:px-8 md:py-4 border-b border-white/10
        transition-colors duration-300 ${
    isScrolled
        ? "bg-slate-950/95 shadow-xl shadow-black/20"
        : "bg-slate-950/80"
}`}
        
        >

         <div className="relative w-full mx-auto flex items-center justify-between px-5 md:px-8 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">

    {/* Logo */}
    <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
    <a
        href="#home"
        aria-label="Soyal Khan home"
        onClick={() => {
            setActiveLink("#home");
            setIsOpen(false);
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

    {/* Hamburger */}
    <button
    type="button"
    onClick={() => setIsOpen(!isOpen)}
    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
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


    {/* Navigation Links */}
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

    flex-col
    lg:flex-row
    items-start
    lg:items-center
    gap-7
    lg:gap-6

    absolute
    top-full
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

       {navbarData.links.map((item) => (
   <a
    key={item.text}
    href={item.link}
    onClick={() => {
        setActiveLink(item.link);
        setIsOpen(false);
    }}
    aria-current={activeLink === item.link ? "page" : undefined}
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
))}

{/* Mobile CTA */}
<a
    href={navbarData.cta.link}
    onClick={() => setIsOpen(false)}
    className="lg:hidden flex items-center justify-center w-full px-6 py-3 mt-4 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 transition duration-300"
>
    {navbarData.cta.text}
</a>

    </div>


    {/* CTA */}
    <a
        href={navbarData.cta.link}
        onClick={() => setIsOpen(false)}
        className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 transition duration-300"
    >
        {navbarData.cta.text}
    </a>

</div>
        </nav>
    );
}

export default Navbar;