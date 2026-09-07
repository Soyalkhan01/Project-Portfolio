import ecommerceImage from "../assets/images/projects/ecommerce.png";
import businessImage from "../assets/images/projects/business.png";
import weatherImage from "../assets/images/projects/weather.png";
import salesPredictionImage from "../assets/images/projects/sales-prediction.png";
import carPredictionImage from "../assets/images/projects/car-prediction.png";
import irisClassificationImage from "../assets/images/projects/iris-classification.png";

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

        category: "Full Stack Website",
        image: ecommerceImage,
        liveLink: "https://my-ecommerce-website-gamma.vercel.app/",
        githubLink: "https://github.com/Soyalkhan01/MyEcommerce-Website",
    },
    {
        id: "Business-Website",
        title: "Business Website-Client Project",
        description:
            "A modern, responsive Business website designed with a clean and premium user experience. The website features product browsing, detailed product pages, wishlist functionality, gallery, FAQ, contact form, newsletter subscription, and fully responsive layouts for desktop and mobile devices. Built with reusable React components and a structured frontend architecture for scalability and maintainability.",

       technologies: [
            {
                name: "React.js",
                color: "text-cyan-400",
            },
            {
                name: "Vite",
                color: "text-purple-400",
            },
            {
                name: "JavaScript",
                color: "text-yellow-400",
            },
            {
                name: "Tailwind CSS",
                color: "text-cyan-400",
            },
            {
                name: "React Router",
                color: "text-red-400",
            },
            {
                name: "EmailJS",
                color: "text-orange-400",
            },
            {
                name: "Cloudflare Turnstile",
                color: "text-orange-400",
            },
            {
                name: "React Hot Toast",
                color: "text-green-400",
            },
        ],

        category: "Business Website",
        image: businessImage,
        liveLink: "https://client-business-website-alpha.vercel.app",
        githubLink: "https://github.com/Soyalkhan01/Client-Business-Website",
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
        liveLink: "https://weather-app-sigma-three-70.vercel.app",
        githubLink: "https://github.com/Soyalkhan01/weather-app",
    },

    {
    id: "sales-prediction",
    title: "Sales Prediction Model",
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

    {
    id: "car-price-prediction",
    title: "Car Price Prediction",
    description:
        "A machine learning project that predicts used car prices based on key vehicle features such as year, mileage, fuel type, transmission, and other relevant attributes. The model uses data preprocessing and Linear Regression to estimate car prices and evaluate prediction performance.",

    technologies: [
        {
            name: "Python",
            color: "text-blue-400",
        },
        {
            name: "Pandas",
            color: "text-purple-400",
        },
        {
            name: "NumPy",
            color: "text-cyan-400",
        },
        {
            name: "Scikit-Learn",
            color: "text-orange-400",
        },
        {
            name: "Linear Regression",
            color: "text-green-400",
        },
        {
            name: "Matplotlib",
            color: "text-yellow-400",
        },
    ],

    category: "Machine Learning",
    image: carPredictionImage,
    liveLink: "#",
    githubLink: "https://github.com/Soyalkhan01/CodeAlpha_Task2_CarPricePrediction",
},

    {
    id: "iris-flower-classification",
    title: "Iris Flower Classification",
    description:
        "A machine learning project that analyzes sepal and petal measurements to accurately classify iris flowers into different species. The model uses supervised learning techniques and data preprocessing to train and evaluate the classification performance.",

    technologies: [
        {
            name: "Python",
            color: "text-blue-400",
        },
        {
            name: "Pandas",
            color: "text-purple-400",
        },
        {
            name: "NumPy",
            color: "text-cyan-400",
        },
        {
            name: "Scikit-Learn",
            color: "text-orange-400",
        },
        {
            name: "Matplotlib",
            color: "text-yellow-400",
        },
        {
            name: "Seaborn",
            color: "text-green-400",
        },
    ],

    category: "Machine Learning",
    image: irisClassificationImage,
    liveLink: "#",
    githubLink: "https://github.com/Soyalkhan01/CodeAlpha_Task1_IrisFlowerClassification",
},
    ],

    button:{
        liveLinkText:"Live Demo",
        githubLinkText:"GitHub"
    }
}

export default projectsData;