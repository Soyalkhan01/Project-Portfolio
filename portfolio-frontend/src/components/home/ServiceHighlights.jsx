import serviceHighlightsData from "../../data/ServiceHighlights";

const ServiceHighlights = () => {
  return (
    <section 
    id="what-you-get"
    className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 -mb-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/6 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-indigo-500/40" />

            <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-indigo-400 sm:text-xs">
              {serviceHighlightsData.eyebrow}
            </span>

            <span className="h-px w-8 bg-indigo-500/40" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-indigo-950 sm:text-3xl lg:text-[32px]">
            {serviceHighlightsData.title}{" "}
            <span className="text-indigo-400">
              {serviceHighlightsData.highlightTitle}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-[15px]">
            {serviceHighlightsData.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {serviceHighlightsData.highlights.map((service, index) => (
            <div
              key={service.number}
              className="
                service-highlight-card
                group relative overflow-hidden
                min-h-50
                rounded-2xl
                border border-indigo-500/13
                bg-[#101328]
                p-5 sm:p-6
                transition-all duration-500
                hover:-translate-y-1
                hover:border-indigo-400/35
                hover:bg-[#141832]
                hover:shadow-[0_20px_55px_rgba(79,70,229,0.13)]
              "
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >

              {/* Animated Border Glow */}
              <div
                className="
                  pointer-events-none
                  absolute -inset-px
                  rounded-2xl
                  bg-linear-to-r
                  from-transparent
                  via-indigo-500/20
                  to-transparent
                  opacity-0
                "
              />

              {/* Top Line */}
              <div
                className="
                  absolute left-5 right-5 top-0
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-indigo-400/60
                  to-transparent
                  opacity-50
                  transition-all duration-500
                  group-hover:left-8
                  group-hover:right-8
                  group-hover:opacity-100
                "
              />

              {/* Number + Icon */}
              <div className="relative flex items-center justify-between">

                <span
                  className="
                    text-lg
                    font-bold
                    tracking-[0.2em]
                    text-indigo-500/60
                    transition-colors duration-300
                    group-hover:text-indigo-400
                  "
                >
                  {service.number}
                </span>

                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    border border-indigo-500/20
                    bg-indigo-500/[0.07]
                    font-mono text-sm
                    text-indigo-300
                    transition-all duration-500
                    group-hover:rotate-3
                    group-hover:scale-110
                    group-hover:border-indigo-400/40
                    group-hover:bg-indigo-500/[0.14]
                    group-hover:text-indigo-200
                  "
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-6">

                <h3
                  className="
                    text-base
                    font-semibold
                    leading-6
                    tracking-tight
                    text-slate-100
                    transition-colors duration-300
                    group-hover:text-indigo-100
                    sm:text-[17px]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-62.6
                    text-sm
                    leading-6
                    text-slate-500
                    transition-colors duration-300
                    group-hover:text-slate-400
                  "
                >
                  {service.description}
                </p>

              </div>

              {/* Bottom Progress Line */}
              <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6">
                <div className="h-px w-full bg-indigo-500/8">
                  <div
                    className="
                      h-px w-0
                      bg-indigo-400/70
                      transition-all duration-700
                      group-hover:w-1/3
                    "
                  />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Card Entrance Animation */}
      <style>{`
        .service-highlight-card {
          animation: serviceCardIn 0.7s ease-out both;
        }

        @keyframes serviceCardIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-highlight-card {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
};

export default ServiceHighlights;