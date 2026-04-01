// projects.js - Your portfolio projects

import soloImg from "../assets/icons/solo.jpg";
import ecommerceImg from "../assets/icons/ecommerce.png";
import iplImg from "../assets/icons/ipl.png";
import assessmentImg from "../assets/icons/speakingassessment.jpg";
import financeImg from "../assets/icons/financetracker.jpg";
import notesImg from "../assets/icons/notesLogo.png";
import dashboardImg from "../assets/icons/dash.png";
import RailPulse from "../assets/icons/RailPulse.png";

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
        level: 3,
        standard: "Advanced",
    },
    {
        id: 2,
        title: "RailPulse – Railway Data Analytics Platform",
        description:
            "A full-stack railway analytics platform that visualizes train performance, demand trends, revenue insights, and infrastructure statistics across the railway network. Features interactive dashboards, route intelligence, and real-time analytics powered by a scalable backend API. Built with React and Tailwind CSS for a fast responsive UI, Flask for backend services, and MongoDB Atlas for data storage, deployed on Vercel and Render.",
        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Flask",
            "MongoDB Atlas",
            "REST API",
            "Vercel",
            "Render"
        ],
        liveLinks: {
            primary: "https://rail-pulse-5t74.vercel.app/",
            secondary: "https://rail-pulse-backend.onrender.com",
        },
        githubLink: "https://github.com/vikash1630/Rail-Pulse",
        image: RailPulse,
        level: 5,
        standard: "Industry",
    },
    {
        id: 3,
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
        level: 4,
        standard: "Production",
    },

    {
        id: 4,
        title: "Admin Analytics Dashboard",
        description:
            "A modern analytics dashboard designed to visualize system metrics and churn analysis using interactive charts. The application includes multiple chart types, theme switching, responsive UI, and real-time API data to help administrators monitor performance and make data-driven decisions.",
        technologies: [
            "React (Vite)",
            "Tailwind CSS",
            "Recharts",
            "Axios",
            "React Router",
            "Lucide Icons"
        ],
        liveLinks: {
            primary: "https://frontendhackathon-olive.vercel.app/",
            secondary: "https://frontendhackathon-olive.vercel.app/",
        },
        githubLink: "https://github.com/vikash1630/FRONTEND-HACKATHON.git",
        image: dashboardImg,
        level: 3,
        standard: "Advanced",
    },

    {
        id: 5,
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
        level: 4,
        standard: "Production",
    },
];
