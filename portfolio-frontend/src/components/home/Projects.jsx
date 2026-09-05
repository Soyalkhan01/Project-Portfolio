import projectsData from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects(){
    return(

        <section
        id="projects"
        className="relative scroll-mt-16 px-4 md:px-6 py-20 md:py-24 bg-slate-950 overflow-hidden"
        >
{/* Background Glow */}
<div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="text-center mb-14">

    <p className="text-indigo-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3">
        {projectsData.section.heading}
    </p>

    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        {projectsData.section.title}
    </h2>

    <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto mt-5 mb-6"></div>

    <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-8">
       {projectsData.section.description}
    </p>

</div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">

            {projectsData.project.map((project) => (

            <div 
            key={project.id}
            className="group relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm hover:border-indigo-400/30 hover:bg-indigo-500/3 hover:shadow-xl hover:shadow-indigo-950/20 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col flex-1"
        >

                <div className="relative aspect-video overflow-hidden rounded-xl mb-6 border border-white/10">

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"

                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>


                <span className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-indigo-300 text-xs font-semibold">

                    {project.category}
                </span>

                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 wrap-break-word group-hover:text-indigo-100 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className=" mt-3 text-gray-400 text-sm md:text-base leading-7 wrap-break-word">
                {project.description}
                </p>


            <div className="flex flex-wrap gap-2 mt-5"> 

                {project.technologies.map((teck) => (
    <span
        key={teck.name}
        className={`px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm ${teck.color} hover:border-indigo-400/30 hover:bg-indigo-500/5 transition-all duration-300`}
    >
        {teck.name}
    </span>
))}

            </div>

          <div className="flex flex-wrap gap-3 mt-auto pt-6">

    {project.liveLink && (
        <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
        >
            <FaExternalLinkAlt className="text-sm" />
            <span>{projectsData.button.liveLinkText}</span>
        </a>
    )}

    {project.githubLink && (
        <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 text-gray-300 text-sm font-semibold hover:border-indigo-400 hover:text-white hover:bg-indigo-500/5 transition-all duration-300"
        >
           <FaGithub className="text-base" />
            <span>{projectsData.button.githubLinkText}</span>
        </a>
    )}

</div>
            </div>
            ))}
        </div>

        </section>
    )
};

export default Projects;