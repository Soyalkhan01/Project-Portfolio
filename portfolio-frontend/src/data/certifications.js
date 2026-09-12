import dataScience from "../assets/images/certificates/data-science.jpeg";
import letterOfRecommendation from "../assets/images/certificates/letter-Of-Recommendation.jpeg";
import pythonCertificate from "../assets/images/certificates/python-certificate.jpeg";
import mernCertificate from "../assets/images/certificates/mern-stack.jpeg";
import javascriptCertificate from "../assets/images/certificates/javascript-certificate.jpeg";
import htmlCss from "../assets/images/certificates/html-css.jpeg";
import microsoftCertificate from "../assets/images/certificates/microsoft-certificate.jpeg";

const certificationData = {
  section: {
    heading: "Professional Certifications",
    title: "Certifications & Learning Achievements",
    description:
      "Explore my professional certifications and learning achievements in data science, Python, MERN stack development, JavaScript, HTML, CSS, and Microsoft Excel.",
  },

  certificates: [
    {
      id: "data-science",
      title: "Data Science Certification",
      issuer: "CodeAlpha Tech Pvt. Ltd.",
      year: "July 2026",
      image: dataScience,
    },

    {
      id: "data-science-letter-of-recommendation",
      title: "Data Science Letter of Recommendation",
      issuer: "CodeAlpha Tech Pvt. Ltd.",
      year: "July 2026",
      image: letterOfRecommendation,
    },

    {
      id: "python",
      title: "Python Certification",
      issuer: "DevHub Tech Pvt. Ltd.",
      year: "February 2026",
      image: pythonCertificate,
    },

    {
      id: "mern-stack",
      title: "MERN Stack Development Certification",
      issuer: "DevHub Tech Pvt. Ltd.",
      year: "August 2025",
      image: mernCertificate,
    },

    {
      id: "javascript",
      title: "JavaScript Certification",
      issuer: "Codedesk IT Training Institute",
      year: "October 2024",
      image: javascriptCertificate,
    },

    {
      id: "html-css",
      title: "HTML and CSS Certification",
      issuer: "Codedesk IT Training Institute",
      year: "October 2024",
      image: htmlCss,
    },

    {
      id: "microsoft-excel",
      title: "Microsoft Excel Certification",
      issuer: "Coursera",
      year: "November 2023",
      image: microsoftCertificate,
    },
  ],
};

export default certificationData;