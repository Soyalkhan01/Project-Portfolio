import dataScience from "../assets/images/certificates/data-science.jpeg";
import letterOfRecommendation from "../assets/images/certificates/letter-Of-Recommendation.jpeg";
import pythonCertificate from "../assets/images/certificates/python-certificate.jpeg";
import mernCertificate from "../assets/images/certificates/mern-stack.jpeg";
import javascriptCertificate from "../assets/images/certificates/javascript-certificate.jpeg";
import htmlCss from "../assets/images/certificates/html-css.jpeg";
import microsoftCertificate from "../assets/images/certificates/microsoft-certificate.jpeg";

const certificationData = {

    section:{
        heading:"Professional Learning",
        title:"Certifications",
        description:"Certifications and learning achievements that support my technical skills and continuous growth.",
    },

    
    certificates:[
    {
        id: "data-science",
         title: "Data Science",
         issuer: "CodeAlpha Tech Pvt. Ltd.",
         year: "July 2026", 
         image: dataScience,
    },
    {
        id: "data-science-lor",
         title: "Data Science Letter-Of-Recommendation",
         issuer: "CodeAlpha Tech Pvt. Ltd.",
         year: "July 2026", 
         image: letterOfRecommendation,
    },

    {
        id: "Python",
        title: "Python",
        issuer: "DevHub Tech Pvt. Ltd.",
        year: "Feb. 2026",
        image: pythonCertificate,
    },

    {
        id: "MERN-Stack",
        title: "MERN Stack",
        issuer: "DevHub Tech Pvt. Ltd.",
        year: "Aug. 2025",
        image: mernCertificate,
    },

    {
        id: "JavaScript",
        title: "JavaScript",
        issuer: "Codedesk IT Training Institute",
        year: "Oct. 2024",
        image: javascriptCertificate,
    },

    {
        id: "HTML-CSS",   
        title: "HTML and CSS",
        issuer: "Codedesk IT Training Institute",
        year: "Oct. 2024",
        image: htmlCss,
    },

    {
        id: "Microsoft-Excel", 
        title: "Microsoft Excel",
        issuer: "Coursera",
        year: "Nov. 2023",
        image: microsoftCertificate,
    },
],


};

// const recommendationData = [
//     {
//         title: "Letter of Recommendation",
//         issuer: "CodeAlpha",
//         year: "2026",
//         image: javascriptCertificate,
//     },
// ];

export default certificationData;