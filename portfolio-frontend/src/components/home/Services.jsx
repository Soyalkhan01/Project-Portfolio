import { useState } from "react";
import serviceData from "../../data/services";
import ScrollReveal from "./ScrollReveal";
 import ServiceHighlights from "./ServiceHighlights";

function Services() {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showTerms, setShowTerms] = useState(false);

    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="relative scroll-mt-16 py-20 md:py-28 px-4 md:px-6 bg-white overflow-hidden"
        >
            {/* Background */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ================= HEADER ================= */}
                <ScrollReveal 
                direction="up" 
                className="text-center">
                    <p 
                    id="services-build"
                    className="text-indigo-500 text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
                        {serviceData.section.eyebrow}
                    </p>

                    <h2
                        id="services-heading"
                        className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-indigo-950"
                    >
                        {serviceData.section.title}
                    </h2>

                    <div className="w-16 h-1 bg-indigo-950 rounded-full mx-auto mt-5" />

                    <p className="max-w-2xl mx-auto mt-6 text-gray-500 leading-8">
                        {serviceData.section.description}
                    </p>
                </ScrollReveal>

                {/* ================= TECHNICAL SERVICES ================= */}
                <div 
                className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {serviceData.service.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <ScrollReveal
                                key={service.title}
                                direction="up"
                                delay={index * 100}
                            >
                                <article className="group relative h-full p-6 rounded-3xl border border-indigo-950/10 bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500">

                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-950 text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                                        <Icon className="text-xl" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-indigo-950">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-500 leading-7">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {service.technologies.slice(0, 5).map(
                                            (technology) => (
                                                <span
                                                    key={technology}
                                                    className="px-2.5 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-[11px] font-semibold text-indigo-700"
                                                >
                                                    {technology}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedService(service)
                                        }
                                        className="mt-7 w-full flex items-center justify-between px-4 py-3 rounded-xl border border-indigo-950/10 text-sm font-semibold text-indigo-950 hover:bg-indigo-950 hover:text-white transition-all"
                                    >
                                        <span>Explore Service</span>
                                        <span>→</span>
                                    </button>
                                </article>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* ================= PROJECTS ================= */}
                <ScrollReveal
                    direction="up"
                    className="text-center mt-28 mb-12"
                >
                    <p 
                    id="serviceprojects"
                    className="text-indigo-500 text-xs font-bold tracking-[0.22em] uppercase">
                        {serviceData.section.eyebrow2}
                    </p>

                    <h3 className="mt-3 text-3xl md:text-4xl font-black text-indigo-950">
                        {serviceData.section.title2}
                    </h3>

                    <p className="max-w-xl mx-auto mt-4 text-gray-500">
                        {serviceData.section.description2
                        }
                    </p>
                </ScrollReveal>

              <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
    {serviceData.projects.map((project, index) => (
        <ScrollReveal
            key={project.title}
            direction="up"
            delay={index * 100}
            className="h-full"
        >
            <a
                href={project.link}
                className="group flex flex-col h-full rounded-3xl border border-indigo-950/10 bg-white p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
                {/* Project Image */}
                <div className="relative h-40 shrink-0 overflow-hidden rounded-2xl">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                    <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                        {project.category}
                    </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                    <h4 className="mt-5 text-xl font-bold text-indigo-950 group-hover:text-indigo-600 transition">
                        {project.title}
                    </h4>

                    <p className="mt-2 text-sm text-gray-500 leading-6">
                        {project.description}
                    </p>

                    <div className="mt-auto pt-5 text-sm font-bold text-indigo-600">
                        View Project →
                    </div>
                </div>
            </a>
        </ScrollReveal>
    ))}
</div>

{/* ================= PACKAGES ================= */}
<ScrollReveal
    direction="up"
    className="text-center mt-28 mb-12"
>
    <p 
    id="packages"
    className="text-indigo-500 text-xs font-bold tracking-[0.22em] uppercase">
        {serviceData.section.eyebrow3}
    </p>

    <h3 className="mt-3 text-3xl md:text-4xl font-black text-indigo-950">
        {serviceData.section.title3}
    </h3>

    <p className="max-w-2xl mx-auto mt-4 text-gray-500 leading-7">
        {serviceData.section.description3}
    </p>
</ScrollReveal>

<div
className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
    {serviceData.packages.map((pkg, index) => {
        const isStandard = pkg.name === "Standard";

        return (
            <ScrollReveal
                key={pkg.name}
                direction="up"
                delay={index * 100}
            >
                <article
                    className={`relative flex flex-col h-full rounded-3xl p-7 bg-white border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                        pkg.recommended
                            ? "border-indigo-500 ring-2 ring-indigo-500/10 md:scale-[1.03]"
                            : "border-indigo-950/10"
                    }`}
                >

                    {/* ================= POPULAR PACKAGE ================= */}
                    {pkg.recommended && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                            <span className="px-4 py-1.5 rounded-full bg-indigo-950 text-white text-[11px] font-bold tracking-wider whitespace-nowrap shadow-md">
                                POPULAR PACKAGE
                            </span>
                        </div>
                    )}

                    {/* ================= PACKAGE HEADER ================= */}
                    <div className="text-center">

                        {/* Icon */}
                        <div className="text-3xl">
                            {pkg.icon}
                        </div>

                        {/* Name */}
                        <h4 className="mt-3 text-2xl font-black text-indigo-950">
                            {pkg.name}
                        </h4>

                        {/* Subtitle */}
                        <p className="mt-2 text-sm text-gray-500">
                            {pkg.subtitle}
                        </p>

                        {/* ================= PRICING ================= */}
                        <div className="mt-5">

                            {/* LIMITED OFFER - STANDARD ONLY */}
                            {isStandard && (
                                <div className="mb-4 flex justify-center">
                                    <span
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border border-red-200
                                            bg-red-50
                                            px-4 py-1.5
                                            text-[10px]
                                            font-extrabold
                                            uppercase
                                            tracking-[0.16em]
                                            text-red-600
                                            shadow-sm
                                        "
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                                        Limited Offer
                                    </span>
                                </div>
                            )}

                            {/* OLD + NEW PRICE */}
                            <div className="flex items-center justify-center gap-3 flex-wrap">

                                {/* Old Price */}
                                <span
                                    className="
                                        text-lg
                                        sm:text-xl
                                        font-semibold
                                        text-gray-400
                                        line-through
                                        decoration-red-400
                                        decoration-2
                                    "
                                >
                                    {pkg.oldPrice}
                                </span>

                                {/* Current Price */}
                                <span
                                    className="
                                        text-4xl
                                        sm:text-5xl
                                        font-black
                                        tracking-tight
                                        text-indigo-950
                                    "
                                >
                                    {pkg.price}
                                </span>

                            </div>

                            {/* 10% OFF - STANDARD ONLY */}
                            {isStandard && (
                                <>
                                    <div className="mt-3 flex justify-center">
                                        <span
                                            className="
                                                inline-flex
                                                items-center
                                                rounded-lg
                                                bg-red-600
                                                px-3.5 py-1
                                                text-xs
                                                font-extrabold
                                                text-white
                                                shadow-sm
                                            "
                                        >
                                            10% OFF
                                        </span>
                                    </div>

                                    <p className="mt-2 text-[11px] font-medium text-gray-400">
                                        Limited-time pricing
                                    </p>
                                </>
                            )}

                        </div>
                    </div>

                    {/* ================= DESCRIPTION ================= */}
                    <p className="mt-5 text-center text-sm text-gray-500 leading-6">
                        {pkg.description}
                    </p>

                    {/* ================= HIGHLIGHTS ================= */}
                    <div className="mt-6 space-y-3">
                        {pkg.highlights.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-start gap-3 text-sm text-gray-600"
                            >
                                <span
                                    className="
                                        mt-0.5
                                        flex h-5 w-5
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-indigo-50
                                        text-xs
                                        font-bold
                                        text-indigo-600
                                    "
                                >
                                    ✓
                                </span>

                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* ================= BUTTONS ================= */}
                    <div className="mt-auto pt-7 space-y-3">

                        <button
                            type="button"
                            onClick={() => setSelectedPackage(pkg)}
                            className="
                                w-full
                                px-5 py-3
                                rounded-xl
                                border border-indigo-950/10
                                text-sm
                                font-bold
                                text-indigo-950
                                hover:bg-indigo-50
                                hover:border-indigo-200
                                transition-all
                                duration-300
                            "
                        >
                            View Full Details
                        </button>

                        <a
                            href="#contact"
                            className="
                                w-full
                                inline-flex
                                items-center
                                justify-center
                                px-5 py-3
                                rounded-xl
                                bg-indigo-950
                                text-white
                                text-sm
                                font-bold
                                hover:bg-indigo-800
                                hover:-translate-y-0.5
                                transition-all
                                duration-300
                            "
                        >
                            Get Started
                        </a>

                    </div>

                </article>
            </ScrollReveal>
        );
    })}
</div>

{/* ================= ADDITIONAL FEATURES ================= */}
<ScrollReveal
    direction="up"
    className="mt-28 mb-12"
>
    <div
    id="additional-features"
    className="text-center">
        <p className="text-indigo-500 text-xs font-bold tracking-[0.22em] uppercase">
            Optional Add-ons
        </p>

        <h3 className="mt-3 text-3xl md:text-4xl font-black text-indigo-950">
            Additional Features
        </h3>

        <p className="max-w-2xl mx-auto mt-4 text-gray-500 leading-7">
            Need something extra? Add additional features to any website
            package according to your business requirements.
        </p>
    </div>
</ScrollReveal>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {serviceData.additionalFeatures.map((feature, index) => (
        <ScrollReveal
            key={feature.title}
            direction="up"
            delay={index * 60}
        >
            <article
                className="
                    group
                    relative
                    h-full
                    rounded-3xl
                    border
                    border-indigo-950/10
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:border-indigo-200
                "
            >
                {/* Icon */}
                <div
                    className="
                        w-11
                        h-11
                        flex
                        items-center
                        justify-center
                        rounded-2xl
                        bg-indigo-50
                        border
                        border-indigo-100
                        text-indigo-600
                        text-lg
                        font-bold
                        transition-all
                        duration-300
                        group-hover:bg-indigo-950
                        group-hover:text-white
                    "
                >
                    +
                </div>

                {/* Content */}
                <h4 className="mt-5 text-lg font-bold text-indigo-950">
                    {feature.title}
                </h4>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                    {feature.description}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                            Starting From
                        </p>

                        <p className="mt-1 text-lg font-black text-indigo-950">
                            {feature.price}
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="
                            inline-flex
                            items-center
                            px-3
                            py-2
                            rounded-xl
                            bg-indigo-950
                            text-white
                            text-xs
                            font-bold
                            transition-all
                            duration-300
                            hover:bg-indigo-800
                        "
                    >
                        Add Feature →
                    </a>
                </div>
            </article>
        </ScrollReveal>
    ))}
</div>

{/* Add-on Note */}
<ScrollReveal
    direction="up"
    className="mt-6"
>
    <div
        className="
            rounded-2xl
            border
            border-indigo-100
            bg-indigo-50/60
            px-5
            py-4
            text-center
        "
    >
        <p className="text-sm text-gray-600">
            <span className="font-bold text-indigo-950">
                Note:
            </span>{" "}
            Additional feature prices are starting prices.
            Final pricing may vary depending on the feature's
            complexity and requirements.
        </p>
    </div>
</ScrollReveal>
                {/* ================= INCLUDED ================= */}
                <ScrollReveal
                    direction="up"
                    className="mt-24"
                >
                    <div 
                    id="included"
                    className="rounded-3xl bg-indigo-950 p-7 md:p-10">
                        <div className="max-w-2xl">
                            <p className="text-indigo-300 text-xs font-bold tracking-[0.22em] uppercase">
                                {serviceData.include.title}
                            </p>

                            <h3 className="mt-3 text-3xl font-black text-white">
                                {serviceData.include.subtitle}
                            </h3>

                            <p className="mt-4 text-indigo-200 leading-7">
                                {serviceData.include.description}
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {serviceData.included.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 p-4 text-sm text-white"
                                >
                                    <span className="text-indigo-300 font-bold">
                                        ✓
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

        <ServiceHighlights />

                {/* ================= PROCESS ================= */}
                <ScrollReveal
                    direction="up"
                    className="text-center mt-28 mb-12"
                >
                    <p 
                    id="process"
                    className="text-indigo-500 text-xs font-bold tracking-[0.22em] uppercase">
                        {serviceData.section.eyebrow4}
                    </p>

                    <h3 className="mt-3 text-3xl md:text-4xl font-black text-indigo-950">
                        {serviceData.section.title4}
                    </h3>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {serviceData.process.map((step, index) => (
                        <ScrollReveal
                            key={step.number}
                            direction="up"
                            delay={index * 100}
                        >
                            <div className="relative h-full rounded-3xl border border-indigo-950/10 bg-white p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all">
                                <span className="text-4xl font-black text-indigo-100">
                                    {step.number}
                                </span>

                                <h4 className="mt-4 text-lg font-bold text-indigo-950">
                                    {step.title}
                                </h4>

                                <p className="mt-2 text-sm text-gray-500 leading-6">
                                    {step.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* ================= CTA ================= */}
                <ScrollReveal
                    direction="up"
                    className="mt-24"
                >
                    <div 
                    id="consultation"
                    className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-950 to-indigo-800 p-8 md:p-12 text-center shadow-2xl">
                        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative">
                            <p className="text-indigo-300 text-xs font-bold tracking-[0.22em] uppercase">
                                {serviceData.consulation.title}
                            </p>

                            <h3 className="mt-3 text-3xl md:text-4xl font-black text-white">
                                {serviceData.consulation.subtitle}
                            </h3>

                            <p className="max-w-xl mx-auto mt-4 text-indigo-200 leading-7">
                                {serviceData.consulation.description}
                            </p>

                            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-white text-indigo-950 text-sm font-bold hover:bg-indigo-100 transition"
                                >
                                    {serviceData.button2.text2}
                                </a>

                                <a
                                    href="https://wa.me/919772627384?text=Hello%20Soyal%2C%20I%20visited%20your%20portfolio%20and%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business.%20I%27d%20like%20to%20discuss%20the%20requirements%2C%20pricing%20and%20available%20packages."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-white/20 bg-white/10 text-white text-sm font-bold hover:bg-white/20 transition"
                                >
                                    {serviceData.button2.text3}
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Terms */}
                <div
                id="terms"
                className="mt-8 text-center">
                    <button
                        type="button"
                        onClick={() => setShowTerms(true)}
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-950 underline underline-offset-4"
                    >
                        {serviceData.ConditionButton.text}
                    </button>
                </div>
            </div>

            {/* ================= SERVICE MODAL ================= */}
            {selectedService && (
                <div
                    className="fixed inset-0 z-999 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setSelectedService(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        onClick={(event) => event.stopPropagation()}
                        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl"
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 w-9 h-9 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100"
                        >
                            ×
                        </button>

                        {(() => {
                            const Icon = selectedService.icon;

                            return (
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-950 text-indigo-300">
                                    <Icon />
                                </div>
                            );
                        })()}

                        <h3 className="mt-5 pr-10 text-2xl font-bold text-indigo-950">
                            {selectedService.title}
                        </h3>

                        <p className="mt-3 text-gray-500 leading-7">
                            {selectedService.description}
                        </p>

                        <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-indigo-950">
                            What I Can Build
                        </h4>

                        <div className="mt-3 space-y-2">
                            {selectedService.details.map((detail) => (
                                <div
                                    key={detail}
                                    className="flex gap-3 text-sm text-gray-600"
                                >
                                    <span className="text-indigo-500">
                                        ✓
                                    </span>
                                    {detail}
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {selectedService.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-xs font-medium text-indigo-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            onClick={() => setSelectedService(null)}
                            className="mt-7 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-indigo-950 text-white text-sm font-semibold hover:bg-indigo-800"
                        >
                            Let's Work Together
                        </a>
                    </div>
                </div>
            )}

            {/* ================= PACKAGE MODAL ================= */}
            {selectedPackage && (
                <div
                    className="fixed inset-0 z-999 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setSelectedPackage(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        onClick={(event) => event.stopPropagation()}
                        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl"
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedPackage(null)}
                            className="absolute top-4 right-4 w-9 h-9 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100"
                        >
                            ×
                        </button>

                        <div className="text-center pr-8">
                            <div className="text-4xl">
                                {selectedPackage.icon}
                            </div>

                            <h3 className="mt-3 text-3xl font-black text-indigo-950">
                                {selectedPackage.name} Package
                            </h3>

                            <p className="mt-2 text-gray-500">
                                {selectedPackage.subtitle}
                            </p>

                            <div className="mt-4 text-4xl font-black text-indigo-950">
                                {selectedPackage.price}
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-950">
                                Package Includes
                            </h4>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {selectedPackage.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-start gap-3 rounded-xl bg-indigo-50/70 p-3 text-sm text-gray-700"
                                    >
                                        <span className="text-indigo-600 font-bold">
                                            ✓
                                        </span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a
                            href="#contact"
                            onClick={() => setSelectedPackage(null)}
                            className="mt-8 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-indigo-950 text-white text-sm font-semibold hover:bg-indigo-800"
                        >
                            Get Started with {selectedPackage.name}
                        </a>
                    </div>
                </div>
            )}

            {/* ================= TERMS MODAL ================= */}
            {showTerms && (
                <div
                    className="fixed inset-0 z-999 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setShowTerms(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        onClick={(event) => event.stopPropagation()}
                        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl"
                    >
                        <button
                            type="button"
                            onClick={() => setShowTerms(false)}
                            className="absolute top-4 right-4 w-9 h-9 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100"
                        >
                            ×
                        </button>

                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-950 pr-10">
                            {serviceData.ConditionTerm.text}
                        </h3>

                        <div className="mt-6 space-y-4">
                            {serviceData.terms.map((term, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 text-sm text-gray-600 leading-6"
                                >
                                    <span className="text-indigo-500 font-bold">
                                        •
                                    </span>
                                    <span>{term}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowTerms(false)}
                            className="mt-7 w-full px-5 py-3 rounded-xl bg-indigo-950 text-white text-sm font-semibold hover:bg-indigo-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Services;
