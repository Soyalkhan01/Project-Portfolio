import { useEffect, useState } from "react";

function BackToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const handleBackToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    if (!showButton) {
        return null;
    }

    return (
        <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top"
            className={`fixed bottom-18 right-5 sm:right-6 z-100 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-indigo-950 text-white shadow-lg flex items-center justify-center hover:bg-indigo-900 hover:-translate-y-1 transition-all duration-300 ${
                showButton
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-75 translate-y-4 pointer-events-none"
            }`}
        >
            ↑
        </button>
    );
}

export default BackToTop;