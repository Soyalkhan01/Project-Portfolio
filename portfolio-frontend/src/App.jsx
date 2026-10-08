import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
    return (
        <BrowserRouter>
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
                    preload="none"
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

                {/* Website Routes */}
                <div className="relative z-10">
                    <Routes>

                        {/* Home */}
                        <Route path="/" element={<HomePage />} />

                        {/* Privacy Policy */}
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />

                        {/* Terms & Conditions */}
                        <Route
                            path="/terms-and-conditions"
                            element={<TermsConditions />}
                        />

                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
