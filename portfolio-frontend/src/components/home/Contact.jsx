import contactData from "../../data/contact";
import { useState, useEffect, useRef  } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaClock,FaLaptopHouse, } from "react-icons/fa";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaGlobe,
    FaWhatsapp
} from "react-icons/fa";

import { Turnstile } from "@marsidev/react-turnstile";

function Contact(){
    
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});
    const [turnstileToken, setTurnstileToken] = useState("");
    const turnstileRef = useRef(null);

    const validateForm = () => {
        const errors = {};
    
        if (formData.name.trim().length < 2) {
            errors.name = "Name must be at least 2 characters.";
        }
    
        if (!/^[0-9]{10}$/.test(formData.phone)) {
            errors.phone = "Phone number must be exactly 10 digits.";
        }
    
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Please enter a valid email address.";
        }
    
        if (formData.message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters.";
        }
    
        return errors;
    };

const handleSubmit = async (event) => {
    event.preventDefault();


    setError("");
    setFieldErrors({});

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
        setFieldErrors(validationErrors);
        return;
    }

    if (!turnstileToken) {
        setError("Please complete the CAPTCHA verification.");
        return;
    }

    console.log(formData);

    setSending(true);
    setSubmitted(false)

    setError("")
    
  try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formData,
                turnstileToken,
            }),
        });

    if (response.status === 429){
        throw new Error("Too many submissions. Please try again after a minute.")
    }
if (!response.ok) {
    const errorData = await response.json();

    if (response.status === 422 && Array.isArray(errorData.detail)) {
        const backendErrors = {};

        errorData.detail.forEach((item) => {
            const fieldName = item.loc?.[1];

            if (fieldName) {
                backendErrors[fieldName] = item.msg;
            }
        });

        setFieldErrors(backendErrors);
        return;
    }

    throw new Error(
        errorData.detail || "Failed to send contact"
    );
}

    const data = await response.json();
    console.log("FastAPI Response:", data);

     setSubmitted(true);

     setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
     });
    setTurnstileToken("");
    turnstileRef.current?.reset();
  }

catch (error) {
    console.error("Contact submission error:", error);
    setError(error.message);
}

  finally {
    setSending(false);
  }

};

    const [ formData, setFormData ] = useState({
        name:"",
        email:"",
        phone: "",
        message:"",
    })

    const [ submitted, setSubmitted ] = useState(false);


    useEffect(() => {
        if (!submitted) return;

        const timer = setTimeout(() => {
            setSubmitted(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [submitted]);
    
    const socialIcons = {
    Github: {
        icon: FaGithub,
        color: "text-[#181717]",
    },
    LinkedIn: {
        icon: FaLinkedin,
        color: "text-[#0A66C2]",
    },
    Instagram: {
        icon: FaInstagram,
        color: "text-[#E4405F]",
    },
    WhatsApp: {
        icon: FaWhatsapp,
        color: "text-[#25D366]",
    },
};

useEffect(() => {
    if (!error) return;

    const timer = setTimeout(() => {
        setError("");
    }, 4000);

    return () => clearTimeout(timer);
}, [error]);

    return(

        <section
        id="contact"
        aria-labelledby="contact-heading" 
        className="relative scroll-mt-6 px-4 md:px-6 py-20 md:py-24 bg-white overflow-hidden">

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <h2
            id="contact-heading"
            className="text-4xl font-bold text-indigo-950 text-center"
        >
            {contactData.heading}
        </h2>

            <div className="relative z-10 max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

    {/* Contact Information */}
    <div className="group p-6 sm:p-8 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">

        <h3 className="text-2xl md:text-3xl font-bold text-indigo-950">
            {contactData.title}
        </h3>

        <p className="text-gray-600 mt-4 leading-7">
            {contactData.description}
        </p>

        <div className="mt-8 space-y-4">

            {/* Phone */}
            <div className="flex items-start gap-4">
    <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
        <FaPhone className="text-indigo-600" />
    </div>

    <div>
        <p className="text-sm font-semibold text-indigo-950">
            {contactData.phoneName}
        </p>

        <p className="mt-1 text-gray-600">
           <a href="tel:+919772627384">
            {contactData.phoneNo}
            </a>
        </p>
    </div>
</div>

            {/* Email */}
            <div className="flex items-start gap-4">
    <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
        <FaEnvelope className="text-indigo-600" />
    </div>

    <div>
        <p className="text-sm font-semibold text-indigo-950">
            {contactData.emailName}
        </p>

        <p className="mt-1 text-gray-600 break-all">
            <a href="mailto:soyalmugal143@gmail.com">
            {contactData.email}
            </a>
        </p>
    </div>
</div>

            {/* Location */}
            <div className="flex items-start gap-4">
    <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
        <FaMapMarkerAlt className="text-indigo-600" />
    </div>

    <div>
        <p className="text-sm font-semibold text-indigo-950">
            {contactData.locationName}
        </p>

        <p className="mt-1 text-gray-600">
            {contactData.location}
        </p>
    </div>
</div>

{/* Availability */}
<div className="flex items-start gap-4">
    <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
        <FaBriefcase className="text-indigo-600" />
    </div>

    <div>
        <p className="text-sm font-semibold text-indigo-950">
            {contactData.availabilityName}
        </p>

        <p className="mt-1 text-gray-600">
            {contactData.availability}
        </p>
    </div>
</div>
{/* Response Time */}
<div className="flex items-start gap-4">
    <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
        <FaClock className="text-indigo-600" />
    </div>

    <div>
        <p className="text-sm font-semibold text-indigo-950">
            {contactData.responseTimeName}
        </p>

        <p className="mt-1 text-gray-600">
            {contactData.responseTime}
        </p>
    </div>
</div>
{/* Work Mode */}
<div className="flex items-start gap-4">
    <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
        <FaLaptopHouse className="text-indigo-600" />
    </div>

    <div>
        <p className="text-sm font-semibold text-indigo-950">
            {contactData.workingModeName}
        </p>

        <p className="mt-1 text-gray-600">
            {contactData.workingMode}
        </p>
    </div>
</div>

        </div>

        {/* Social Links */}
       <div className="flex flex-wrap gap-3 mt-8">

    {contactData.socialLinks.map((link) => {

    const social = socialIcons[link.name] || {
        icon: FaGlobe,
        color: "text-gray-500",
    };

    const Icon = social.icon;

    return (
        <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.username}
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:scale-105 transition-transform duration-300"
        >
            <Icon
                className={`${social.color} text-lg group-hover:scale-110 transition-transform duration-300`}
            />

            <span>
                {link.name}
            </span>
        </a>
    );
})}

</div>

    </div>

<div className="group p-6 sm:p-8 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">


                    <form 
                        onSubmit={handleSubmit}
                        noValidate
                        className="mt-8 space-y-5"
                    >

                    {contactData.formFields.map((field) => (

                    <div key={field.name}>
                       
                        <label 
                        htmlFor={field.name}
                        className="block text-sm font-semibold text-indigo-950 mb-2"
                        >
                        
                        {field.name.charAt(0).toUpperCase() + field.name.slice(1)}

                        </label>
                        {field.type === "textarea" ? (

                            <textarea
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={(event) => {
                                setSubmitted(false);
                            
                                setFormData({
                                    ...formData,
                                    [field.name]: event.target.value
                                })
                            }}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-950"
                            rows="5"
                            />

                        ) : (

                            <input 
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            maxLength={field.name === "phone" ? 10 : undefined}
                            pattern={field.name === "phone" ? "[0-9]{10}" : undefined}
                            inputMode={field.name === "phone" ? "numeric" : undefined}
                            onChange={(event) => {
                                setSubmitted(false);
                                setFieldErrors((prev) => ({
                                    ...prev,
                                    [field.name]: "",
                                }));
                                let value = event.target.value;

                                if (field.name === "phone") {
                                    value = value.replace(/\D/g, "").slice(0, 10);
                                }

                                setFormData({
                                    ...formData,
                                    [field.name]: value,
                                });
                            }}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 shadow-sm outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"

                            
                            />
                                )}


                    {fieldErrors[field.name] && (
                        <p className="mt-1.5 text-sm text-red-600">
                            {fieldErrors[field.name]}
                        </p>
                    )}
                    </div>

                    ))}

            <Turnstile
              ref={turnstileRef}
              siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
              onSuccess={(token) => setTurnstileToken(token)}
              onExpire={() => setTurnstileToken("")}
              onError={() => setTurnstileToken("")}
            
            />

                <button
                type="submit"
                disabled={sending}
                className={`w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-semibold shadow-lg shadow-indigo-950/20 transition-all duration-300 ${
                    sending
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-indigo-950 hover:bg-indigo-900 hover:shadow-indigo-950/30 hover:-translate-y-0.5 cursor-pointer"
                }`}
            >
                   {contactData.button.text}
                </button>
                </form>


            </div>
</div>

{sending && (
    <div className="fixed top-28 right-4 left-4 sm:left-auto sm:right-6 z-100 sm:min-w-85 max-w-md">
        
        <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-indigo-200 shadow-2xl shadow-indigo-900/10">

            <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    {contactData.loadingHeading.text}
                </h4>

                <p className="mt-1 text-xs sm:text-sm text-gray-500">
                    {contactData.loadingDescription.text}
                </p>
            </div>

        </div>
    </div>
)}

{submitted && (
    <div className="contact-popup fixed top-28 right-4 left-4 sm:left-auto sm:right-6 z-100 sm:min-w-85 max-w-md">
        
        <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-green-200 shadow-2xl shadow-green-900/10">

            <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-lg sm:text-xl font-bold">
                    {contactData.popupSymbole.symbole}
                </span>
            </div>

            <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    {contactData.popupHeading.heading}
                </h4>

                <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-5">
                    {contactData.popupDescription.DescriptionText}
                </p>
            </div>

        </div>
    </div>
)}

{error && (
    <div className="fixed top-28 right-4 left-4 sm:left-auto sm:right-6 z-100 sm:min-w-85 max-w-md">
        
        <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-red-200 shadow-2xl shadow-red-900/10">

            <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-lg sm:text-xl font-bold">
                    !
                </span>
            </div>

            <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    Unable to send
                </h4>

                <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-5">
                    {error}
                </p>
            </div>

        </div>
    </div>
)}
        </section>

    )
};

export default Contact;