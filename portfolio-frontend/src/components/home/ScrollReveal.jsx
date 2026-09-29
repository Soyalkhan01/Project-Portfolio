import { useEffect, useRef, useState } from "react";

function ScrollReveal({
    children,
    className = "",
    direction = "up",
    delay = 0,
}) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    const hiddenClasses = {
        up: "translate-y-12",
        down: "-translate-y-12",
        left: "-translate-x-12",
        right: "translate-x-12",
        scale: "scale-90",
    };

    return (
        <div
            ref={elementRef}
            style={{
                transitionDelay: `${delay}ms`,
            }}
            className={`
                transition-all
                duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                    isVisible
                        ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                        : `opacity-0 ${hiddenClasses[direction]}`
                }
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default ScrollReveal;