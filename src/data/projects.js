// projects.js - Your portfolio projects
// REPLACE: dummy links, images, and add your real project details

export const projectsData = [
    {
        id: 1,
        title: "Solo Leveling Fitness Tracker",
        description: "A comprehensive fitness tracking application that helps users monitor their workouts, set goals, and track progress over time. Features include workout logging, progress visualization, and personalized recommendations.",
        technologies: ["Node.js", "Express", "EJS", "SSR", "MongoDB", "Tailwind CSS"],
        liveLinks: {
            primary: "https://solo-levelling-fitness-model-app.onrender.com", // REPLACE WITH YOUR PRIMARY LIVE LINK
            secondary: "https://solo-levelling-fitness-model-app.onrender.com", // REPLACE WITH YOUR SECONDARY LIVE LINK
        },
        githubLink: "https://github.com/vikash1630/Solo-Levelling-Fitness-Model-App.git", // REPLACE WITH YOUR ACTUAL GITHUB REPO LINK
        image: "/src/assets/icons/solo.jpg", // REPLACE WITH YOUR ACTUAL PROJECT IMAGE
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce application with shopping cart functionality, payment integration, user authentication, and admin dashboard for managing products and orders.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "JWT Auth", "Google Auth", "Tailwind CSS"]
        ,
        liveLinks: {
            primary: "https://local-lynk.vercel.app", // REPLACE WITH YOUR PRIMARY LIVE LINK
            secondary: "https://local-lynk.vercel.app", // REPLACE WITH YOUR SECONDARY LIVE LINK
        },
        githubLink: "https://github.com/vikash1630/Local-Lynk.git", // REPLACE WITH YOUR ACTUAL GITHUB REPO LINK
        image: "/src/assets/icons/ecommerce.png", // REPLACE WITH YOUR ACTUAL PROJECT IMAGE
    },
    {
        id: 3,
        title: "IPL Analytics Dashboard",
        description:
            "A powerful analytics dashboard built with Flask and React, designed to visualize IPL match statistics, team performance trends, player insights, win probability, and season-wise comparisons. Includes interactive charts, advanced filtering, and rich visual analytics for cricket fans and data enthusiasts.",
        technologies: [
            "Flask",
            "Python",
            "Pandas",
            "NumPy",
            "React",
            "Tailwind CSS",
            "Chart.js",
            "REST API"
        ],
        liveLinks: {
            primary: "https://ipl-analytics-dashboard-htof.onrender.com", // REPLACE
            secondary: "https://ipl-analytics-dashboard-htof.onrender.com", // REPLACE
        },
        githubLink: "https://github.com/vikash1630/IPL-analytics-dashboard.git", // REPLACE
        image: "/src/assets/icons/ipl.png", // REPLACE
    },

    {
        id: 4,
        title: "Student Assessment Report System",
        description:
            "A lightweight and responsive web application for generating, managing, and visualizing student performance reports. Includes marks input, grade calculation, performance graphs, printable report cards, and real-time validation.",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        liveLinks: {
            primary: "https://your-domain.com/student-report", // REPLACE WITH YOUR PRIMARY LIVE LINK
            secondary: "https://student-report-backup.com", // REPLACE WITH YOUR SECONDARY LIVE LINK
        },
        githubLink: "https://github.com/yourusername/student-report", // REPLACE WITH YOUR ACTUAL GITHUB REPO LINK
        image: "/src/assets/icons/speakingassessment.jpg", // REPLACE IMAGE
    },

    //  {
    //     id: 4,
    //     title: "Weather Dashboard",
    //     description: "An interactive weather dashboard that displays current weather conditions, 7-day forecasts, and weather maps using external API integration. Features location search and geolocation support.",
    //     technologies: ["React", "OpenWeather API", "Tailwind CSS", "Chart.js"],
    //     liveLinks: {
    //       primary: "https://your-domain.com/weather", // REPLACE WITH YOUR PRIMARY LIVE LINK
    //       secondary: "https://weather-dashboard-backup.com", // REPLACE WITH YOUR SECONDARY LIVE LINK
    //     },
    //     githubLink: "https://github.com/yourusername/weather-dashboard", // REPLACE WITH YOUR ACTUAL GITHUB REPO LINK
    //     image: "https://via.placeholder.com/600x400/FF6B35/FFFFFF?text=Weather+Dashboard", // REPLACE WITH YOUR ACTUAL PROJECT IMAGE
    //   },
    //   {
    //     id: 5,
    //     title: "Task Management System",
    //     description: "A collaborative task management tool with drag-and-drop functionality, deadline tracking, team collaboration features, and productivity analytics dashboard.",
    //     technologies: ["React", "Flask", "PostgreSQL", "React DnD", "Material UI"],
    //     liveLinks: {
    //       primary: "https://your-domain.com/task-manager", // REPLACE WITH YOUR PRIMARY LIVE LINK
    //       secondary: "https://task-manager-backup.com", // REPLACE WITH YOUR SECONDARY LIVE LINK
    //     },
    //     githubLink: "https://github.com/yourusername/task-manager", // REPLACE WITH YOUR ACTUAL GITHUB REPO LINK
    //     image: "https://via.placeholder.com/600x400/87CEEB/000000?text=Task+Manager", // REPLACE WITH YOUR ACTUAL PROJECT IMAGE
    //   },
];

// ADD MORE PROJECTS IN THE FUTURE BY COPYING THE STRUCTURE ABOVE
// Example:
// {
//   id: 6,
//   title: "Your New Project",
//   description: "Description here",
//   technologies: ["Tech1", "Tech2"],
//   liveLinks: {
//     primary: "your-primary-link",
//     secondary: "your-secondary-link",
//   },
//   githubLink: "your-github-link",
//   image: "your-image-url",
// }, 