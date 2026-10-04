import educationData from "../../data/education";
import { FaGraduationCap } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

function Education() {
    return (
        <section
            id="education"
            aria-labelledby="education-heading"
            className="scroll-mt-20 px-6 py-14 md:py-16"
        >
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <ScrollReveal
                    direction="up"
                    delay={0}
                    className="text-center"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                        {educationData.section.heading}
                    </span>

                    <h2
                        id="education-heading"
                        className="mt-4 text-4xl sm:text-5xl font-bold text-indigo-950"
                    >
                        {educationData.section.title}
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
                        {educationData.section.description}
                    </p>
                </ScrollReveal>


                {/* Education Card */}
                <ScrollReveal
                    direction="up"
                    delay={80}
                    className="mt-10"
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

                            shadow-sm

                            transform-gpu
                            perspective-distant
                            transition-all
                            duration-500
                            ease-out

                            hover:-translate-y-2
                            hover:transform: perspective(1200px) rotateX(2deg) rotateY(-2deg) translateZ(8px);

                            hover:shadow-2xl
                            hover:shadow-indigo-950/10
                            hover:border-indigo-200
                        "
                    >

                        {/* Decorative Glow */}
                        <div
                            className="
                                absolute
                                -top-20
                                -right-20
                                w-44
                                h-44
                                rounded-full
                                bg-indigo-100/60
                                blur-3xl
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                duration-500
                            "
                        ></div>


                        {/* Top 3D Highlight */}
                        <div
                            className="
                                absolute
                                top-0
                                left-10
                                right-10
                                h-px
                                bg-linear-to-r
                                from-transparent
                                via-indigo-200
                                to-transparent
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                duration-500
                            "
                        ></div>


                        {educationData.education.map((education, index) => (
                            <div
                                key={`${education.degree}-${index}`}
                                className="relative"
                            >

                                <div className="relative flex flex-col sm:flex-row sm:items-center gap-6 px-4 py-6">


                                    {/* Icon */}
                                    <div
                                        className="
                                            shrink-0
                                            w-16
                                            h-16
                                            rounded-2xl

                                            bg-indigo-50
                                            text-indigo-600
                                            border
                                            border-indigo-100

                                            flex
                                            items-center
                                            justify-center

                                            transform-gpu
                                            transition-all
                                            duration-500

                                            shadow-[0_6px_15px_rgba(79,70,229,0.08)]

                                            group-hover:bg-indigo-600
                                            group-hover:text-white
                                            group-hover:-translate-y-1
                                            group-hover:scale-105
                                            group-hover:      transform: perspective(600px) rotateX(8deg) rotateY(-8deg) translateZ(8px);

                                            group-hover:shadow-[0_12px_25px_rgba(79,70,229,0.25)]
                                        "
                                    >
                                        <FaGraduationCap className="text-2xl drop-shadow-sm" />
                                    </div>


                                    {/* Education Details */}
                                    <div className="flex-1">

                                        <h3
                                            className="
                                                text-xl
                                                sm:text-2xl
                                                font-bold
                                                text-indigo-950

                                                transition-transform
                                                duration-500

                                                group-hover:translate-x-1
                                            "
                                        >
                                            {education.degree}
                                        </h3>

                                        <p className="mt-2 text-gray-600 font-medium">
                                            {education.institution}
                                        </p>

                                    </div>


                                    {/* Status */}
                                    <span
                                        className="
                                            w-fit
                                            shrink-0
                                            px-4
                                            py-2
                                            rounded-full

                                            bg-indigo-50
                                            text-indigo-700
                                            border
                                            border-indigo-100

                                            text-sm
                                            font-semibold

                                            transform-gpu
                                            transition-all
                                            duration-500

                                            group-hover:-translate-y-1
                                            group-hover:scale-105
                                            group-hover:shadow-[0_8px_18px_rgba(79,70,229,0.15)]
                                        "
                                    >
                                        {education.status}
                                    </span>

                                </div>

                            </div>
                        ))}


                        {/* Bottom 3D Reflection */}
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
                                duration-500
                            "
                        ></div>

                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}

export default Education;
