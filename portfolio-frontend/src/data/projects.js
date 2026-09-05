import ecommerceImage from "../assets/images/projects/ecommerce.png";
import weatherImage from "../assets/images/projects/weather.png";
import salesPredictionImage from "../assets/images/projects/sales-prediction.png";

const projectsData = {


    section: {
        heading:"My Work",
        title:"Projects I've Built",
        description:"A selection of projects showcasing my experience in full-stack development, APIs, databases and machine learning.",

    },

    project:[

    {
        id: "ecommerce",
        title: "E-commerce Website",
        description:
            "A full-stack e-commerce website featuring product management, user authentication, shopping functionality, and a dedicated admin dashboard. The application includes responsive interfaces, REST API integration, database management, and secure authentication for a complete end-to-end shopping experience.",

       technologies: [
            {
                name: "React.js",
                color: "text-cyan-400",
            },
            {
                name: "Python",
                color: "text-blue-400",
            },
            {
                name: "Flask",
                color: "text-blue-400",
            },
            {
                name: "REST APIs",
                color: "text-blue-400",
            },
            {
                name: "JavaScript",
                color: "text-yellow-400",
            },
            {
                name: "CSS",
                color: "text-blue-400",
            },
            {
                name: "MongoDB Atlas",
                color: "text-green-400",
            },
],

        category: "Full Stack",
        image: ecommerceImage,
        liveLink: "https://my-ecommerce-website-gamma.vercel.app/",
        githubLink: "https://github.com/Soyalkhan01/MyEcommerce-Website",
    },

    {
        id: "Weather-App",
        title: "Weather App",
        description:
            "A responsive weather application that provides real-time weather information for different cities, with a clean and intuitive interface. Users can search for cities and view current temperature, weather conditions, humidity, wind speed, and other essential weather details. It integrates a weather API to dynamically.",

        technologies: [
            {
                name: "React",
                color: "text-cyan-400",
            },
            {
                name: "JavaScript",
                color: "text-yellow-400",
            },
            {
                name: "Python",
                color: "text-blue-400",
            },
            {
                name: "FastAPI",
                color: "text-indigo-400",
            },
            {
                name: "Weather API",
                color: "text-purple-400",
            },
                        {
                name: "CSS",
                color: "text-blue-400",
            },
            {
                name: "MongoDB Atlas",
                color: "text-green-400",
            },
        ],

        category: "Web Application",
        image: weatherImage,
        liveLink: "https://weather-frontend-62ck.onrender.com/",
        githubLink: "https://github.com/Soyalkhan01/weather-app",
    },

    {
    id: "sales-prediction",
    title: "Sales Prediction",
    description:
        "A machine learning application that predicts future sales using historical sales data and selected business features. The application includes data preprocessing, feature analysis, model training, and prediction capabilities to generate data-driven sales forecasts and support better business decision-making.",

    technologies: [
            {
                name: "Python",
                color: "text-blue-400",
            },
            {
                name: "Pandas",
                color: "text-orange-400",
            }, 
            {
                name: "NumPy",
                color: "text-blue-400",
            }, 
            {
                name: "Matplotlib",
                color: "text-blue-400",
            }, 
            {
                name: "Scikit-learn",
                color: "text-orange-400",
            },
            {
                name: "PyTorch",
                color: "text-red-400",
            },
    ],

    category: "AI / Machine Learning",
    image: salesPredictionImage,
    liveLink: "#",
    githubLink: "https://github.com/Soyalkhan01/CodeAlpha_Task3_SalesPrediction",
},
    ],

    button:{
        liveLinkText:"Live Demo",
        githubLinkText:"GitHub"
    }
}

export default projectsData;