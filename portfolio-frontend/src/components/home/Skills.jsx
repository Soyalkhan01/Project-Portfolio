import skillData from "../../data/skill";

function Skill() {


    return (
        <section
            id="skills"
            className="relative scroll-mt-16 py-20 md:py-24 px-4 md:px-6 lg:px-0 bg-slate-950 overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>


            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-14">

                    <p className="text-indigo-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3">
                        {skillData.section.heading}
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        {skillData.section.title}
                    </h2>

                    <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto mt-5 mb-6"></div>

                    <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-8">
                        {skillData.section.description}
                    </p>

                </div>


                {/* Skill Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">

                    {skillData.skills.map((category) => (

                        <div
                            key={category.category}
                            className="group relative p-5 sm:p-6 md:p-7 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm hover:border-indigo-400/30 hover:bg-indigo-500/3 transition-all duration-300"
                        >

                            {/* Small Accent Dot */}
                            <span className="absolute top-5 right-5 w-2 h-2 rounded-full bg-indigo-400 opacity-70"></span>


                            {/* Category Heading */}
                            <div className="flex items-center gap-3 mb-6">

                                <span className="w-1 h-7 rounded-full bg-indigo-500"></span>

                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                    {category.category}
                                </h3>

                            </div>


                            {/* Skills */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

    {category.skills.map((skill) => {
        const Icon = skill.icon;

        return (
            <div
                key={skill.name}
                className="group/skill w-full min-w-0 flex items-center justify-between px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-gray-300 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/5 transition-all duration-300"
            >

                <div className="flex items-center gap-3 min-w-0">

                    <Icon
                        className={`${skill.color} text-xl shrink-0 group-hover/skill:scale-110 transition-transform duration-300`}
                    />

                    <div className="flex flex-col min-w-0">

                        <span className="text-sm md:text-base font-medium truncate">
                            {skill.name}
                        </span>

                        <span className="text-xs text-gray-500 mt-0.5">
                            {skill.level}
                        </span>

                    </div>

                </div>

                <span className="text-indigo-400 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 ml-2 shrink-0">
                    →
                </span>

            </div>
        );
    })}

</div>
                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skill;