import skillData from "../../data/skill";
import ScrollReveal from "./ScrollReveal";

function Skill() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
            className="relative scroll-mt-12 py-20 md:py-24 px-4 md:px-6 lg:px-0 bg-slate-950 overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>


            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Section Heading */}
                <ScrollReveal
                    direction="up"
                    className="text-center mb-14"
                >

                    <p className="text-indigo-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3">
                        {skillData.section.heading}
                    </p>

                    <h2
                        id="skills-heading"
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
                    >
                        {skillData.section.title}
                    </h2>

                    <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto mt-5 mb-6"></div>

                    <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-8">
                        {skillData.section.description}
                    </p>

                </ScrollReveal>


                {/* Skill Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 items-stretch">

                    {skillData.skills.map((category, index) => (
                        <ScrollReveal
                            key={category.category}
                            direction={index % 2 === 0 ? "left" : "right"}
                            delay={index * 150}
                            className="h-full"
                        >

                            {/* CATEGORY CARD */}
                            <article
                                className="
                                    group
                                    relative
                                    h-full
                                    flex
                                    flex-col
                                    p-5
                                    sm:p-6
                                    md:p-7
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/3
                                    transition-transform
                                    duration-300
                                    ease-out
                                    hover:-translate-y-1
                                    hover:border-indigo-400/30
                                    hover:bg-indigo-500/3
                                "
                            >

                                {/* 3D Glow */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -inset-px
                                        rounded-2xl
                                        bg-linear-to-br
                                        from-indigo-500/10
                                        via-transparent
                                        to-purple-500/10
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-opacity
                                        duration-500
                                    "
                                ></div>


                                {/* Small Accent Dot */}
                                <span className="absolute top-5 right-5 w-2 h-2 rounded-full bg-indigo-400 opacity-70"></span>


                                {/* Category Heading */}
                                <div className="relative z-10 flex items-center gap-3 mb-6 shrink-0">

                                    <span className="w-1 h-7 rounded-full bg-indigo-500"></span>

                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {category.category}
                                    </h3>

                                </div>


                                {/* Skills */}
                                <div
                                    className="
                                        relative
                                        z-10
                                        grid
                                        grid-cols-1
                                        lg:grid-cols-2
                                        gap-3
                                        flex-1
                                        auto-rows-max
                                    "
                                >

                                    {category.skills.map((skill, skillIndex) => {
                                        const Icon = skill.icon;

                                        return (
                                            <ScrollReveal
                                                key={skill.name}
                                                direction="up"
                                                delay={skillIndex * 80}
                                                className="w-full"
                                            >

                                                {/* INDIVIDUAL SKILL CARD */}
                                                <div
                                                    className="
                                                        group/skill
                                                        relative
                                                        w-full
                                                        min-w-0
                                                        h-full
                                                        flex
                                                        items-center
                                                        justify-between
                                                        px-4
                                                        py-3
                                                        rounded-xl
                                                        border
                                                        border-white/10
                                                        bg-slate-900/50
                                                        text-gray-300
                                                        transition-transform
                                                        duration-200
                                                        ease-out
                                                        hover:-translate-y-1
                                                        hover:border-indigo-400/40
                                                        hover:bg-indigo-500/5
                                                    "
                                                >
                                                    {/* 3D Inner Glow */}
                                                    <span
                                                        className="
                                                            pointer-events-none
                                                            absolute
                                                            inset-0
                                                            rounded-xl
                                                            bg-linear-to-br
                                                            from-white/6
                                                            via-transparent
                                                            to-indigo-500/5
                                                            opacity-0
                                                            group-hover/skill:opacity-100
                                                            transition-opacity
                                                            duration-300
                                                        "
                                                    ></span>


                                                    <div className="relative z-10 flex items-center gap-3 min-w-0">

                                                        {/* Icon */}
                                                       <div
                                                            className="
                                                                shrink-0
                                                                w-10
                                                                h-10
                                                                rounded-xl
                                                                border
                                                                border-white/10
                                                                bg-slate-800/70
                                                                flex
                                                                items-center
                                                                justify-center
                                                                transition-transform
                                                                duration-200
                                                                group-hover/skill:scale-105
                                                            "
                                                        >

                                                            <Icon
                                                                aria-hidden="true"
                                                                className={`
                                                                    ${skill.color}
                                                                    text-xl
                                                                    group-hover/skill:scale-110
                                                                    transition-transform
                                                                    duration-300
                                                                `}
                                                            />

                                                        </div>


                                                        {/* Text */}
                                                        <div className="flex flex-col min-w-0">

                                                            <span className="text-sm md:text-base font-medium truncate">
                                                                {skill.name}
                                                            </span>

                                                            <span className="text-xs text-gray-500 mt-0.5">
                                                                Skill level: {skill.level}
                                                            </span>

                                                        </div>

                                                    </div>


                                                    {/* Arrow */}
                                                    <span
                                                        aria-hidden="true"
                                                        className="
                                                            relative
                                                            z-10
                                                            text-indigo-400
                                                            opacity-0
                                                            group-hover/skill:opacity-100
                                                            transition-opacity
                                                            duration-300
                                                            ml-2
                                                            shrink-0
                                                        "
                                                    >
                                                        →
                                                    </span>

                                                </div>

                                            </ScrollReveal>
                                        );
                                    })}

                                </div>

                            </article>

                        </ScrollReveal>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skill;
