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
        description:        "Explore my portfolio of full-stack websites, responsive web applications, REST API projects, and machine learning solutions built using React.js, Python, FastAPI, Flask, MongoDB, and Scikit-learn.",
    },

    project:[

    {
        id: "ecommerce",
        title: "Full Stack E-commerce Website",
        description:
            "A full-stack e-commerce website built with React.js, Python, Flask, and MongoDB Atlas. The application includes product management, user authentication, shopping cart functionality, product browsing, REST API integration, database management, and a dedicated admin dashboard with responsive user interfaces.",

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
        title: "Responsive Business Website – Client Project",
        description:
            "A modern and responsive business website developed for a client using React.js, Vite, JavaScript, and Tailwind CSS. The website includes product browsing, product detail pages, wishlist functionality, gallery, FAQ, contact form, newsletter subscription, and mobile-friendly layouts with reusable React components.",

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
        title: "Weather Forecast Web Application",
        description:
            "A responsive weather forecast web application that provides real-time weather information for different cities. Users can search for cities and view temperature, weather conditions, humidity, wind speed, and other weather details. The application integrates a weather API with a React.js frontend, Python backend, and MongoDB Atlas for storing city search history.",

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
        "A machine learning project that predicts future sales using historical sales data and business-related features. The project includes data preprocessing, exploratory data analysis, feature analysis, model training, and sales prediction using Python, Pandas, NumPy, Matplotlib, Scikit-learn, and PyTorch.",

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
    liveLink: "null",
    githubLink: "https://github.com/Soyalkhan01/CodeAlpha_Task3_SalesPrediction",
},

    {
    id: "car-price-prediction",
    title: "Car Price Prediction",
    description:
        "A machine learning project that predicts used car prices based on vehicle features such as manufacturing year, mileage, fuel type, transmission, and other relevant attributes. The project uses Python, Pandas, NumPy, Scikit-learn, and Linear Regression for data preprocessing, model training, and price prediction.",

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
    liveLink: "null",
    githubLink: "https://github.com/Soyalkhan01/CodeAlpha_Task2_CarPricePrediction",
},

    {
    id: "iris-flower-classification",
    title: "Iris Flower Classification",
    description:
        "A supervised machine learning project that classifies iris flowers into different species using sepal and petal measurements. The project includes data preprocessing, exploratory data analysis, model training, and classification evaluation using Python, Pandas, NumPy, Scikit-learn, Matplotlib, and Seaborn.",

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
    liveLink: "null",
    githubLink: "https://github.com/Soyalkhan01/CodeAlpha_Task1_IrisFlowerClassification",
},
    ],

    button:{
        liveLinkText:"Live Demo",
        githubLinkText:"GitHub"
    }
}

export default projectsData;