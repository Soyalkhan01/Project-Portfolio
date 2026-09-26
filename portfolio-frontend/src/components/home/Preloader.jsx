import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2200);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-slate-950 transition-all duration-300 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">

        {/* Background Glow */}
        <div className="absolute h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />

        {/* Developer Loader */}
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-indigo-400/20" />

          {/* Rotating Ring */}
          <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-indigo-400 border-r-purple-500" />

          {/* Inner Ring */}

          {/* Developer Icon */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-400/20 bg-white/3 shadow-lg shadow-indigo-500/10">
            <span className="font-mono text-lg font-bold text-indigo-400">
              &lt;/&gt;
            </span>
          </div>
        </div>

        {/* Name */}
        {/* <h1 className="relative text-3xl font-extrabold tracking-tight text-white">
          Soyal Khan
          <span className="text-indigo-400">.</span>
        </h1> */}

        {/* Role */}
        {/* <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-500">
          Software Engineer
        </p> */}

        {/* Small Loading Indicator */}
        {/* <div className="mt-7 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400"
            style={{ animationDelay: "300ms" }}
          />
        </div> */}

      </div>
    </div>
  );
};

export default Preloader;