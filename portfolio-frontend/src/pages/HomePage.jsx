 import { lazy, Suspense } from "react";
 
 import Navbar from "../components/home/Navbar";
 import Hero from "../components/home/Hero";
 import About from "../components/home/About";
 import Skill from "../components/home/Skills";
 import Projects from "../components/home/Projects";
 import Contact from "../components/home/Contact";
 import Footer from "../components/home/Footer";
 import BackToTop from "../components/common/BackToTop";
 import Experience from "../components/home/Experience";
 import Services from "../components/home/Services";
 import Education from "../components/home/Education";
 import Certifications from "../components/home/Certifications";
 import Preloader from "../components/home/Preloader";

 const AIChatbot = lazy(
    () => import("../components/AIChatbot/AIChatbot")
);

function HomePage(){
    return(
        <>
        <Navbar/>
    <main>
        <Hero/>
        <About/>
        <Skill/>
        <Experience/>
        <Services/>
        <Projects/>
        <Education/>
        <Certifications/>
        <Contact/>

    </main>

        <Footer/>
        <BackToTop/>
        <Suspense fallback={null}>
            <AIChatbot />
        </Suspense>
        <Preloader/>
        </>
    );
};

export default HomePage;
