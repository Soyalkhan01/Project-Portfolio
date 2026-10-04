import aboutData from "../../data/about";
import ScrollReveal from "./ScrollReveal";

function About() {
    return (
        <div
            id="about"
className="relative scroll-mt-16 z-10 max-w-7xl mx-auto w-full flex flex-col py-16 md:py-18 px-4 md:px-6 lg:px-0 overflow-visible"        >
            {/* ================= SECTION HEADING ================= */}
            <ScrollReveal
                direction="up"
                className="w-full text-center mb-10 md:mb-12"
            >
                <p className="text-indigo-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
                    {aboutData.heading}
                </p>

                <div className="w-20 h-1 bg-indigo-950 rounded-full mx-auto mt-2" />
            </ScrollReveal>

            {/* ================= MAIN CONTENT ================= */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16">

                {/* =====================================================
                    LEFT CONTENT
                ====================================================== */}
                <ScrollReveal
                    direction="left"
                    className="w-full md:w-[52%] lg:w-1/2 max-w-2xl px-4 md:px-6 lg:px-0"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-950 mb-4 text-left">
                        {aboutData.title}
                    </h2>

                    <div className="w-20 h-1 bg-indigo-950 rounded-full mb-8" />

                    {/* Description */}
                    <div className="max-w-2xl space-y-4">
                        {aboutData.description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-gray-400 text-base md:text-lg leading-8 text-left"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* ================= STATS ================= */}
                    <div className="mt-10 flex flex-wrap gap-4 justify-start">
                        {aboutData.stats.map((stat, index) => (
                            <ScrollReveal
                                key={stat.value}
                                direction="up"
                                delay={index * 120}
                            >
                                <div
                                    className="
                                        group
                                        relative
                                        px-5 py-4
                                        rounded-2xl
                                        border border-white/10
                                        bg-white/4
                                        shadow-lg
                                        shadow-black/10
                                        transition-transform
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-indigo-400/40
                                        hover:bg-indigo-500/6
                                        hover:shadow-xl
                                        hover:shadow-indigo-950/10
                                    "
                                >
                                    {/* Small light */}
                                    <span
                                        className="
                                            absolute
                                            top-3
                                            right-3
                                            w-1.5
                                            h-1.5
                                            rounded-full
                                            bg-indigo-400
                                        "
                                    />

                                    <p className="text-2xl font-bold text-indigo-950">
                                        {stat.value}
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* ================= TECHNOLOGIES ================= */}
                    <div className="mt-8">
                        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 mb-4 text-left">
                            {aboutData.technologiesTitle}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                            {aboutData.technologies.map(
                                (technology, index) => {
                                    const Icon = technology.icon;

                                    return (
                                        <ScrollReveal
                                            key={technology.name}
                                            direction="up"
                                            delay={index * 70}
                                        >
                                            <div
                                                className="
                                                    group
                                                    relative
                                                "
                                            >
                                                {/* Glow behind icon */}
                                                <div
                                                    className="
                                                        absolute
                                                        -inset-2
                                                        rounded-2xl
                                                        bg-indigo-500/20
                                                        blur-xl
                                                        opacity-0
                                                        transition-transform    
                                                        duration-500
                                                    "
                                                />

                                                {/* 3D Technology Card */}
                                                <div
                                                    title={technology.name}
                                                    className={`
                                                        relative
                                                        w-10 h-10
                                                        md:w-11 md:h-11
                                                        rounded-xl
                                                        border
                                                        border-white/10
                                                        bg-linear-to-br
                                                        from-white/10
                                                        via-white/4
                                                        to-transparent
                                                        flex
                                                        items-center
                                                        justify-center

                                                        ${technology.color}

                                                        shadow-[0_8px_18px_rgba(0,0,0,0.12)]
                                                        transition-transform    
                                                        duration-500
                                                        ease-out

                                                        hover:-translate-y-2
                                                        hover:scale-110

                                                    `}
                                                >
                                                    {/* Top reflection */}
                                                    <span
                                                        className="
                                                            absolute
                                                            top-1
                                                            left-2
                                                            right-2
                                                            h-px
                                                            rounded-full
                                                            bg-white/30
                                                        "
                                                    />

                                                    {/* Bottom depth */}
                                                        <span
                                                            className="
                                                                absolute
                                                                -bottom-0.5
                                                                left-2
                                                                right-2
                                                                h-0.5
                                                                rounded-b-lg
                                                                bg-indigo-950/15
                                                                blur-[1px]
                                                                -z-10
                                                            "
                                                        />

                                                    <Icon
                                                        className="
                                                            relative
                                                            z-10
                                                            text-xl
                                                            md:text-2xl
                                                            drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]
                                                            group-hover:scale-110
                                                            transition-transform
                                                            duration-500
                                                        "
                                                    />
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </ScrollReveal>

                {/* =====================================================
                    RIGHT 3D PROFILE
                ====================================================== */}
                <ScrollReveal
                    direction="right"
                    className="w-full md:w-[48%] lg:w-1/2 flex justify-center relative md:mb-30"
                >
                    <div
                        className="
                            relative
                            flex
                            items-center
                            justify-center
                            lg:translate-x-16
                        "
                    >

                        {/* ================= AMBIENT GLOW ================= */}
                        <div
                            className="
                                absolute
                                w-64
                                h-64
                                md:w-80
                                md:h-80
                                rounded-full
                                bg-indigo-600/15
                                blur-lg
                                "
                        />

                        {/* ================= ORBIT RING 1 ================= */}
                        <div
                            className="
                                absolute
                                w-72
                                h-72
                                md:w-88
                                md:h-88
                                rounded-full
                                border
                                border-indigo-400/10
                            "
                        />

                        {/* ================= ORBIT RING 2 ================= */}
                        <div
                            className="
                                absolute
                                w-64
                                h-64
                                md:w-80
                                md:h-80
                                rounded-full
                                border
                                border-purple-400/10
                            "
                        />

                        {/* ================= FLOATING DOTS ================= */}
                        <span
                            className="
                                absolute
                                -top-5
                                left-8
                                w-3
                                h-3
                                rounded-full
                                bg-indigo-400
                               
                            "
                        />

                        <span
                            className="
                                absolute
                                bottom-8
                                -left-5
                                w-2
                                h-2
                                rounded-full
                                bg-purple-400
                                shadow-[0_0_15px_rgba(192,132,252,0.9)]
                                smooth-float                            "
                        />

                        <span
                            className="
                                absolute
                                top-20
                                -right-5
                                w-2.5
                                h-2.5
                                rounded-full
                                bg-cyan-400
                                shadow-[0_0_15px_rgba(34,211,238,0.9)]
                                smooth-float                            "
                        />

                        {/* ================= 3D PROFILE GROUP ================= */}
                        {/* ================= 3D PROFILE GROUP ================= */}
<div
    className="
        group
        relative
        transition-transform
        duration-200
        ease-out
    "
    onMouseMove={(e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    card.style.transform = `
        perspective(1400px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
    `;
}}
onMouseLeave={(e) => {
    e.currentTarget.style.transform = `
        perspective(1400px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
    `;
}}
>

                            {/* ================= BACK 3D FRAME ================= */}
                            <div
                                className="
                                    absolute
                                    -inset-3
                                    rounded-4xl
                                    border
                                    border-indigo-400/20
                                    bg-indigo-500/3
                                    transform: translateZ(-25px);

                                "
                            />

                            {/* ================= DEPTH FRAME ================= */}
                            <div
                                className="
                                    absolute
                                    -inset-1
                                    rounded-4xl
                                    bg-linear-to-br
                                    from-indigo-500/20
                                    via-transparent
                                    to-purple-500/20
                                    transform: translateZ(-12px);

                                "
                            />

                            {/* ================= MAIN IMAGE ================= */}
                            <div
                                className="
                                    relative
                                    z-10
                                    w-64
                                    h-74
                                    md:w-72
                                    md:h-82
                                    lg:w-85
                                    lg:h-95
                                    rounded-3xl
                                    overflow-hidden
                                    border
                                    border-indigo-400/30
                                    bg-slate-950
                                    transform: translateZ(25px);

                                "
                            >
                                <img
                                    src={aboutData.image}
                                    alt="Soyal Khan, Software Engineer and Full Stack Developer"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-transform
                                        duration-300
                                        group-hover:scale-105
                                    "
                                />

                                {/* Glass overlay */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-linear-to-br
                                        from-white/15
                                        via-transparent
                                        to-indigo-950/30
                                        pointer-events-none
                                    "
                                />

                                {/* Shine */}
                                <div
                                    className="
                                        absolute
                                        left-[-120%]
                                        top-0
                                        w-1/2
                                        h-full
                                        rotate-20
                                        bg-linear-to-r
                                        from-transparent
                                        via-white/20
                                        to-transparent
                                        group-hover:left-[150%]
                                        transition-all
                                        duration-1000
                                        pointer-events-none
                                    "
                                />
                            </div>

                           {/* ================= FLOATING STATUS ================= */}
<div
    className="
        absolute
        z-100
        -bottom-5
        -right-3
        md:-right-8
        px-4
        py-2.5
        rounded-2xl
        border
        border-white/10
        bg-slate-950/95
        backdrop-blur-md
        shadow-[0_18px_35px_rgba(0,0,0,0.3)]
        transform: translateZ(100px);
        transition-transform
        duration-500
        group-hover:-translate-y-2
        whitespace-nowrap
    "
>
    <div className="flex items-center gap-2">

        <span className="relative flex w-2.5 h-2.5 shrink-0">

            <span
                className="
                    absolute
                    inline-flex
                    w-full
                    h-full
                    rounded-full
                    bg-green-400
                    opacity-60
                "
            />

            <span
                className="
                    relative
                    inline-flex
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-green-400
                    shadow-[0_0_10px_rgba(74,222,128,0.9)]
                    animate-ping
                "
            />

        </span>

        <span
            className="
                text-sm
                font-medium
                text-gray-300
                whitespace-nowrap
            "
        >
            {aboutData.badge.text}
        </span>

    </div>
</div>

{/* ================= FLOATING CODE CHIP ================= */}
<div
    className="
        flex
        absolute
        -top-5
        -left-6
        md:-left-10
        items-center
        gap-2
        px-3
        py-2
        rounded-xl
        border
        border-white/10
        bg-slate-950/90
        shadow-xl
        text-xs
        text-indigo-300
        transform-[translateZ(70px)]
        smooth-float
        whitespace-nowrap
    "
>
    <span className="text-green-400">&lt;/&gt;</span>
    <span>Build • Deploy • Scale</span>
</div>

                            {/* ================= BOTTOM 3D SHADOW ================= */}
                            <div
                                className="
                                    absolute
                                    -bottom-10
                                    left-10
                                    right-10
                                    h-8
                                    rounded-[50%]
                                    bg-indigo-950/30
                                    blur-md
                                    transform-[translateZ(-30px)]
                                "
                            />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}

export default About;