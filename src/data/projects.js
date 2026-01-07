// projects.js - Your portfolio projects

import soloImg from "../assets/icons/solo.jpg";
import ecommerceImg from "../assets/icons/ecommerce.png";
import iplImg from "../assets/icons/ipl.png";
import assessmentImg from "../assets/icons/speakingassessment.jpg";

export const projectsData = [
    {
        id: 1,
        title: "Solo Leveling Fitness Tracker",
        description:
            "A comprehensive fitness tracking application that helps users monitor workouts, set goals, and visualize progress. Fully server-side rendered with EJS & Express.",
        technologies: ["Node.js", "Express", "EJS", "SSR", "MongoDB", "Tailwind CSS"],
        liveLinks: {
            primary: "https://solo-levelling-fitness-model-app.onrender.com",
            secondary: "https://solo-levelling-fitness-model-app.onrender.com",
        },
        githubLink: "https://github.com/vikash1630/Solo-Levelling-Fitness-Model-App.git",
        image: soloImg,
    },

    {
        id: 2,
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce platform with cart system, payments, admin panel, product management, order management, JWT Auth, and Tailwind UI.",
        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST API",
            "JWT Auth",
            "Google Auth",
            "Tailwind CSS",
        ],
        liveLinks: {
            primary: "https://local-lynk.vercel.app",
            secondary: "https://local-lynk.vercel.app",
        },
        githubLink: "https://github.com/vikash1630/Local-Lynk.git",
        image: ecommerceImg,
    },

    {
        id: 3,
        title: "IPL Analytics Dashboard",
        description:
            "A full analytics tool with IPL match stats, team performance, player insights, win probability, interactive charts, and advanced filtering using Flask + React.",
        technologies: [
            "Flask",
            "Python",
            "Pandas",
            "NumPy",
            "React",
            "Tailwind CSS",
            "Chart.js",
            "REST API",
        ],
        liveLinks: {
            primary: "https://ipl-analytics-dashboard-htof.onrender.com",
            secondary: "https://ipl-analytics-dashboard-htof.onrender.com",
        },
        githubLink: "https://github.com/vikash1630/IPL-analytics-dashboard.git",
        image: iplImg,
    },

    {
        id: 4,
        title: "Student Assessment Report System",
        description:
            "A fast and responsive web tool for generating student performance reports. Includes grade calculation, real-time validation, and printable report cards.",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        liveLinks: {
            primary: "https://your-domain.com/student-report",
            secondary: "https://student-report-backup.com",
        },
        githubLink: "https://github.com/yourusername/student-report",
        image: assessmentImg,
    },
    
];
