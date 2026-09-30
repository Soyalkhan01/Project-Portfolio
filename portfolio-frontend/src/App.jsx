import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* Global 3D Background */}
            <video
                className="
                    fixed
                    inset-0
                    w-full
                    h-full
                    object-cover
                    pointer-events-none
                    select-none
                    z-0
                    opacity-20
                    mt-13
                "
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
            >
                <source
                    src="/3d-background.webm"
                    type="video/webm"
                />
            </video>

            {/* Soft Overlay */}
            <div
                className="
                    fixed
                    inset-0
                    z-1
                    pointer-events-none
                    bg-slate-150/20
                "
            />

            {/* Website Content */}
            <div className="relative z-10">
                <HomePage />
            </div>

        </div>
    );
}

export default App;