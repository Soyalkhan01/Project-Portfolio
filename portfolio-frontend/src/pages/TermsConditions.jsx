import legalData from "../data/legal";

function TermsConditions() {
    const data = legalData.terms;

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-16 md:px-6 md:py-24">
            <div className="mx-auto max-w-4xl">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10 lg:p-12">

                    <div className="border-b border-slate-200 pb-8">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                            {data.eyebrow}
                        </p>

                        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                            {data.title}
                        </h1>

                        <p className="mt-3 text-sm text-slate-500">
                            Last updated: {data.lastUpdated}
                        </p>

                        <p className="mt-6 leading-8 text-slate-600">
                            {data.introduction}
                        </p>
                    </div>

                    <div className="mt-10 space-y-10">
                        {data.sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="text-xl font-bold text-slate-950 md:text-2xl">
                                    {section.title}
                                </h2>

                                <div className="mt-4 space-y-4">
                                    {section.content.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="leading-8 text-slate-600"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="mt-10 rounded-2xl bg-indigo-50 p-5">
                        <h2 className="text-lg font-bold text-indigo-950">
                            {data.contact.title}
                        </h2>

                        <p className="mt-2 leading-7 text-slate-600">
                            {data.contact.description}
                        </p>

                        <a
                            href={`mailto:${data.contact.email}`}
                            className="mt-3 inline-block font-semibold text-indigo-600 hover:text-indigo-950"
                        >
                            {data.contact.email}
                        </a>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default TermsConditions;
