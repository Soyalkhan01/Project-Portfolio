import aboutData from "../../data/about";

function About() {
    return (
        <div
            id="about"
            className="relative scroll-mt-12 z-10 max-w-7xl mx-auto w-full flex flex-col py-16 md:py-18 px-4 md:px-6 lg:px-0 overflow-hidden"
        >

            {/* Section Heading */}
            <div className="w-full text-center mb-10 md:mb-12">

                <p className="text-indigo-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
                    {aboutData.heading}
                </p>

                <div className="w-20 h-1 bg-indigo-950 rounded-full mx-auto mt-2"></div>

            </div>


            {/* Main About Content */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16">

                {/* Left Content */}
                <div className="w-full md:w-[52%] lg:w-1/2 max-w-2xl px-4 md:px-6 lg:px-0">

                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-950 mb-4 text-left">
                        {aboutData.title}
                    </h2>

                    <div className="w-20 h-1 bg-indigo-950 rounded-full mb-8"></div>

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


                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap gap-4 justify-start">

                        {aboutData.stats.map((stat) => (
                            <div
                                key={stat.value}
                                className="relative px-5 py-4 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm shadow-lg shadow-black/10 hover:border-indigo-400/30 hover:bg-indigo-500/5 transition-colors duration-300"
                            >

                                <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-indigo-400"></span>

                                <p className="text-2xl font-bold text-indigo-950">
                                    {stat.value}
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    {stat.label}
                                </p>

                            </div>
                        ))}

                    </div>


                    {/* Technologies */}
                    <div className="mt-8">

                        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 mb-4 text-left">
                            {aboutData.technologiesTitle}
                        </p>

                        <div className="flex flex-wrap items-center gap-2">

                            {aboutData.technologies.map((technology) => {

                                const Icon = technology.icon;

                                return (
                                    <span
                                        key={technology.name}
                                        title={technology.name}
                                        className={`group inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl border border-white/10 bg-white/3 text-gray-400 ${technology.color} hover:border-indigo-400/40 hover:bg-indigo-500/5 transition-colors duration-300`}
                                    >
                                        <Icon className="text-xl md:text-2xl" />
                                    </span>
                                );

                            })}

                        </div>

                    </div>

                </div>


                {/* Right Image */}
                <div className="w-full md:w-[48%] lg:w-1/2 flex justify-center relative">

                    <div className="relative flex items-center justify-center lg:translate-x-16">

                        <div className="absolute -inset-6 bg-indigo-600/15 blur-3xl rounded-full animate-pulse"></div>

                        <img
                            className="relative w-64 h-74 md:w-72 md:h-82 lg:w-85 lg:h-95 object-cover mx-auto rounded-3xl border border-indigo-400/30 shadow-2xl shadow-indigo-950/50 hover:scale-[1.03] hover:shadow-indigo-500/20 transition duration-500"
                            src={aboutData.image}
                            alt="About Me"
                        />

                        <div className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-md shadow-xl shadow-black/20">

                            <div className="flex items-center gap-2">

                                <span className="relative flex w-2.5 h-2.5">

                                    <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-60 animate-ping"></span>

                                    <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-400"></span>

                                </span>

                                <span className="text-sm font-medium text-gray-300">
                                    {aboutData.badge.text}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;