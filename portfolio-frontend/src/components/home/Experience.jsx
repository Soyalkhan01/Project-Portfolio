import experienceData from "../../data/experience";
import ScrollReveal from "./ScrollReveal";

function Experience() {
    return (
        <section
            id="experience"
            aria-labelledby="experience-heading"
            className="scroll-mt-16 px-6 py-16 md:py-20"
        >
            <div className="max-w-5xl mx-auto">

                {/* ================= SECTION HEADING ================= */}
                <ScrollReveal
                    direction="up"
                    className="text-center"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                        {experienceData.section.heading}
                    </span>

                    <h2
                        id="experience-heading"
                        className="mt-4 text-4xl sm:text-5xl font-bold text-indigo-950"
                    >
                        {experienceData.section.title}
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
                        {experienceData.section.description}
                    </p>
                </ScrollReveal>


                {/* ================= EXPERIENCE TIMELINE ================= */}
                <div className="relative mt-12">

                    {/* Timeline Line */}
                    <div
                        className="
                            absolute
                            left-4
                            sm:left-6
                            top-0
                            bottom-0
                            w-px
                            bg-linear-to-b
                            from-indigo-400
                            via-indigo-200
                            to-transparent
                        "
                    />

                    {experienceData.experiences.map((experience, index) => (
                        <div
                            key={`${experience.company}-${experience.role}`}
                            className="relative pl-12 sm:pl-16"
                        >

                            {/* ================= TIMELINE DOT ================= */}
                            <ScrollReveal
                                direction="up"
                                delay={index * 120}
                                className="absolute left-0 sm:left-2 top-7 z-10"
                            >
                                <div
                                    className="
                                        w-9
                                        h-9
                                        rounded-full
                                        bg-white
                                        border-4
                                        border-indigo-100
                                        shadow-md
                                        flex
                                        items-center
                                        justify-center

                                        transition-transform
                                        duration-300
                                        ease-out

                                        hover:scale-110
                                    "
                                >
                                    <div
                                        className="
                                            w-2.5
                                            h-2.5
                                            rounded-full
                                            bg-indigo-600

                                            transition-transform
                                            duration-300

                                            hover:scale-125
                                        "
                                    />
                                </div>
                            </ScrollReveal>


                            {/* ================= EXPERIENCE CARD ================= */}
                            <ScrollReveal
                                direction="right"
                                delay={index * 120 + 80}
                            >
                                <div
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-3xl
                                        border
                                        border-gray-200
                                        bg-white
                                        p-6
                                        sm:p-8
                                        mt-3

                                        shadow-sm

                                        transition-all
                                        duration-300
                                        ease-out

                                        hover:-translate-y-1
                                        hover:scale-[1.01]
                                        hover:shadow-xl
                                        hover:shadow-indigo-950/10
                                        hover:border-indigo-200
                                    "
                                >

                                    {/* ================= LIGHT HOVER EFFECT ================= */}
                                    <div
                                        className="
                                            absolute
                                            top-0
                                            left-8
                                            right-8
                                            h-px
                                            bg-linear-to-r
                                            from-transparent
                                            via-indigo-300
                                            to-transparent
                                            opacity-0

                                            group-hover:opacity-100

                                            transition-opacity
                                            duration-300
                                        "
                                    />


                                    <div className="relative">

                                        {/* ================= HEADER ================= */}
                                        <div
                                            className="
                                                flex
                                                flex-col
                                                lg:flex-row
                                                lg:items-start
                                                lg:justify-between
                                                gap-4
                                            "
                                        >

                                            <div>

                                                <span
                                                    className="
                                                        text-sm
                                                        font-semibold
                                                        text-indigo-600
                                                    "
                                                >
                                                    Professional Experience
                                                </span>

                                                <h3
                                                    className="
                                                        mt-2
                                                        text-2xl
                                                        sm:text-3xl
                                                        font-bold
                                                        text-indigo-950

                                                        transition-transform
                                                        duration-300

                                                        group-hover:translate-x-1
                                                    "
                                                >
                                                    {experience.role}
                                                </h3>

                                                <p
                                                    className="
                                                        mt-2
                                                        text-base
                                                        sm:text-lg
                                                        font-medium
                                                        text-gray-600
                                                    "
                                                >
                                                    {experience.company}
                                                </p>

                                            </div>


                                            {/* ================= BADGES ================= */}
                                            <div className="flex flex-wrap items-center gap-2">

                                                {/* Duration */}
                                                <time
                                                    className="
                                                        w-fit
                                                        px-3
                                                        py-2
                                                        rounded-full
                                                        bg-indigo-50
                                                        text-indigo-700
                                                        border
                                                        border-indigo-100
                                                        text-sm
                                                        font-semibold
                                                        whitespace-nowrap

                                                        transition-transform
                                                        duration-300

                                                        group-hover:-translate-y-1
                                                    "
                                                >
                                                    {experience.duration}
                                                </time>


                                                {/* Work Mode */}
                                                <span
                                                    className="
                                                        w-fit
                                                        px-3
                                                        py-2
                                                        rounded-full
                                                        bg-gray-50
                                                        text-gray-700
                                                        border
                                                        border-gray-200
                                                        text-sm
                                                        font-semibold
                                                        whitespace-nowrap

                                                        transition-transform
                                                        duration-300

                                                        group-hover:-translate-y-1
                                                    "
                                                >
                                                    {experience.workMode}
                                                </span>

                                            </div>

                                        </div>


                                        {/* ================= DIVIDER ================= */}
                                        <div
                                            className="
                                                my-6
                                                h-px
                                                bg-gray-100

                                                transition-colors
                                                duration-300

                                                group-hover:bg-indigo-100
                                            "
                                        />


                                        {/* ================= RESPONSIBILITIES ================= */}
                                        <ul className="space-y-3">

                                            {experience.responsibilities.map(
                                                (item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="
                                                            flex
                                                            items-start
                                                            gap-3
                                                            text-gray-600
                                                            leading-relaxed

                                                            transition-transform
                                                            duration-200

                                                            hover:translate-x-1
                                                        "
                                                    >

                                                        <span
                                                            className="
                                                                mt-2.5
                                                                w-1.5
                                                                h-1.5
                                                                shrink-0
                                                                rounded-full
                                                                bg-indigo-500
                                                            "
                                                        />

                                                        <span>
                                                            {item}
                                                        </span>

                                                    </li>
                                                )
                                            )}

                                        </ul>


                                        {/* ================= TECHNOLOGIES ================= */}
                                        <div className="mt-7 flex flex-wrap gap-2">

                                            {experience.technologies.map(
                                                (technology) => (
                                                    <span
                                                        key={technology}
                                                        className="
                                                            px-3.5
                                                            py-1.5
                                                            rounded-full
                                                            bg-gray-50
                                                            text-gray-700
                                                            border
                                                            border-gray-200
                                                            text-xs
                                                            sm:text-sm
                                                            font-medium

                                                            transition-all
                                                            duration-200

                                                            hover:-translate-y-0.5
                                                            hover:bg-indigo-50
                                                            hover:text-indigo-700
                                                            hover:border-indigo-100
                                                        "
                                                    >
                                                        {technology}
                                                    </span>
                                                )
                                            )}

                                        </div>

                                    </div>


                                    {/* ================= BOTTOM LIGHT ================= */}
                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-12
                                            right-12
                                            h-px
                                            bg-linear-to-r
                                            from-transparent
                                            via-indigo-200
                                            to-transparent
                                            opacity-0

                                            group-hover:opacity-100

                                            transition-opacity
                                            duration-300
                                        "
                                    />

                                </div>
                            </ScrollReveal>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Experience;
