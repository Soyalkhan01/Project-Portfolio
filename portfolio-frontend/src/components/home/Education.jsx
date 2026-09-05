import educationData from "../../data/education";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
    return (
        <section
            id="education"
            className="scroll-mt-24 px-6 py-14 md:py-16"
        >
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                        {educationData.section.heading}
                    </span>

                    <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-indigo-950">
                        {educationData.section.title}
                    </h2>
                </div>

                {/* Education Card */}
                <div className="mt-10 group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-indigo-950/10 hover:border-indigo-200 transition-all duration-300">

                    {educationData.education.map((education, index) => (
                    <div
                    key={`${education.degree}-${index}`}
                    >

                    {/* Decorative Glow */}
                    <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-indigo-100/60 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex flex-col sm:flex-row sm:items-center gap-6 px-4 py-6">

                        {/* Icon */}
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                            <FaGraduationCap className="text-2xl" />
                        </div>

                        {/* Education Details */}
                        <div className="flex-1">

                            <h3 className="text-xl sm:text-2xl font-bold text-indigo-950">
                                {education.degree}
                            </h3>

                            <p className="mt-2 text-gray-600 font-medium">
                                {education.institution}
                            </p>

                        </div>

                        {/* Status */}
                        <span className="w-fit shrink-0 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-sm font-semibold">
                            {education.status}
                        </span>

                    </div>

                </div>
                    ))}

            </div>
            </div>
        </section>
    );
}

export default Education;