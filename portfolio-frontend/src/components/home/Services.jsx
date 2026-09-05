import { useState } from "react";
import serviceData from "../../data/services";

function Services() {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section
            id="services"
            className="relative py-20 md:py-24 px-4 md:px-6 lg:px-0 bg-white overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>


            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto">


                {/* Heading */}
                <div className="text-center mb-14">

                    <p className="text-indigo-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3">
                        {serviceData.section.heading}
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-950">
                        {serviceData.section.title}
                    </h2>

                    <div className="w-20 h-1 bg-indigo-950 rounded-full mx-auto mt-5 mb-6"></div>

                    <p className="max-w-2xl mx-auto text-gray-500 text-base md:text-lg leading-8">
                        {serviceData.section.description}
                    </p>

                </div>


                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

                    {serviceData.service.map((service) => {

                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="group relative flex flex-col h-full p-6 rounded-2xl border border-indigo-950/10 bg-white/70 backdrop-blur-sm shadow-lg shadow-indigo-950/5 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-950/10 transition-all duration-300"
                            >

                                {/* Accent */}
                                <span className="absolute top-5 right-5 w-2 h-2 rounded-full bg-indigo-400 opacity-70"></span>


                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-950 text-indigo-300 border border-indigo-800/50 shadow-lg shadow-indigo-950/20 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                    <Icon className="text-xl" />
                                </div>


                                {/* Content */}
                                <div className="mt-6">

                                    <h3 className="text-xl font-bold text-indigo-950 leading-snug">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-500 leading-7">
                                        {service.description}
                                    </p>

                                </div>


                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mt-5">

                                    {service.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="px-2.5 py-2 rounded-lg bg-indigo-50 border border-indigo-100 text-xs font-medium text-indigo-700"
                                        >
                                            {technology}
                                        </span>
                                    ))}

                                </div>


                                {/* Explore */}
                                <div className="mt-auto pt-7">

                                    <button
                                        type="button"
                                        onClick={() => setSelectedService(service)}
                                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-indigo-950/10 text-sm font-semibold text-indigo-950 hover:bg-indigo-950 hover:text-white hover:border-indigo-950 
                                        hover:cursor-pointer transition-all duration-300"
                                    >
                                        <span>Explore</span>

                                        <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                                            →
                                        </span>
                                    </button>

                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* CTA */}
                <div className="flex justify-center mt-12">

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-indigo-950 text-white text-sm font-semibold shadow-lg shadow-indigo-950/20 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        {serviceData.button.text}
                    </a>

                </div>

            </div>


            {/* Service Modal */}
            {selectedService && (
                <div
                    className="fixed inset-0 z-999 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setSelectedService(null)}
                >

                    <div
                        onClick={(event) => event.stopPropagation()}
                        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl"
                    >

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 w-9 h-9 rounded-xl border border-gray-200 text-gray-500 hover:text-indigo-950 hover:bg-gray-100 hover:cursor-pointer transition"
                            aria-label="Close"
                        >
                            ×
                        </button>


                        {/* Icon */}
                        {(() => {
                            const SelectedIcon = selectedService.icon;

                            return (
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-950 text-indigo-300">
                                    <SelectedIcon className="text-xl" />
                                </div>
                            );
                        })()}


                        {/* Title */}
                        <h3 className="mt-5 pr-10 text-2xl font-bold text-indigo-950">
                            {selectedService.title}
                        </h3>


                        {/* Description */}
                        <p className="mt-3 text-gray-500 leading-7">
                            {selectedService.description}
                        </p>


                        {/* Details */}
                        <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-indigo-950">
                            What I Can Build
                        </h4>

                        <div className="mt-3 space-y-2">

                            {selectedService.details?.map((detail) => (
                                <div
                                    key={detail}
                                    className="flex items-start gap-3 text-sm text-gray-600"
                                >
                                    <span className="mt-1 text-indigo-500">
                                        ✓
                                    </span>

                                    <span>
                                        {detail}
                                    </span>
                                </div>
                            ))}

                        </div>


                        {/* Technologies */}
                        <div className="mt-6 flex flex-wrap gap-2">

                            {selectedService.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-xs font-medium text-indigo-700"
                                >
                                    {technology}
                                </span>
                            ))}

                        </div>


                        {/* Contact */}
                        <a
                            href="#contact"
                            onClick={() => setSelectedService(null)}
                            className="mt-7 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-indigo-950 text-white text-sm font-semibold hover:bg-indigo-800 transition"
                        >
                            {serviceData.button.text}
                        </a>

                    </div>

                </div>
            )}

        </section>
    );
}

export default Services;