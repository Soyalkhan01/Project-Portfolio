import certificationsData from "../../data/certifications";
import { FaTrophy } from "react-icons/fa";
import { useState } from "react";

function Certifications() {

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section
            id="certifications"
            className="scroll-mt-8 relative py-20 md:py-24 px-4 md:px-6 lg:px-0 bg-slate-950 overflow-hidden"
        >

            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center">

                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
                        {certificationsData.section.heading}
                    </span>

                    <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
                        {certificationsData.section.title}
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-400 leading-relaxed">
                        {certificationsData.section.description}
                    </p>

                </div>        



                {/* Certifications Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 mt-10">

                    {certificationsData.certificates.map((certification) => (

                        <div
                            key={certification.id}
                            onClick={() => setSelectedCertificate(certification)}
                            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-950/10 hover:border-indigo-200 transition-all duration-300 cursor-pointer"
                        >

                            {/* Glow */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-indigo-100 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


                            <div className="relative">

                                {/* Icon */}
                                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">

                                    <FaTrophy className="text-lg group-hover:scale-110 transition-transform duration-300" />

                                </div>


                                {/* Certificate Name */}
                                <h3 className="mt-4 text-sm sm:text-base font-semibold text-indigo-950 leading-snug">
                                    {certification.title}
                                </h3>
                                <p className="mt-4 text-sm sm:text-base font-semibold text-indigo-950 leading-snug">
                                    {certification.issuer}
                                </p>
                                <span className="mt-4 text-sm sm:text-base font-semibold text-indigo-950 leading-snug">
                                    {certification.year}
                                </span>


                                {/* Bottom Accent */}
                                <div className="mt-4 flex items-center gap-2">

                                    <span className="w-5 h-px bg-indigo-400 group-hover:w-8 transition-all duration-300"></span>

                                    <span className="text-xs font-medium text-gray-500">
                                        View Certificate
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>


            {/* Certificate Modal */}
           {/* Certificate Modal */}
{selectedCertificate && (
    <div
        className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
        onClick={() => setSelectedCertificate(null)}
    >
        <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[95vh] rounded-2xl bg-white p-2 sm:p-4 shadow-2xl overflow-y-auto"
        >
            {/* Close Button */}
            <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="sticky mb-4 ml-auto z-20 w-10 h-10 rounded-xl bg-black/70 text-white text-xl hover:bg-black transition flex items-center justify-center"
                aria-label="Close certificate"
            >
                ×
            </button>

            {/* Certificate */}
            <div className="w-full flex justify-center">
                <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="block w-full h-auto max-h-[82vh] object-contain rounded-xl"
                />
            </div>
        </div>
    </div>
)}

        </section>
    );
}

export default Certifications;