// Skills.jsx
// SAME animation level + SAME theme + ONLY spacing fixes + official icons

import React from "react";
import { skillsData } from "../data/skills";
import tailwindLogo from "../assets/icons/tailwind.png";


// Official Tech Icons (SVG)
const icons = {
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Server Side Rendering": "https://cdn-icons-png.flaticon.com/512/103/103090.png",
    "Tailwind CSS": tailwindLogo,

    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    Postman: "https://seeklogo.com/images/P/postman-api-platform-logo-D6B8AB9B0D-seeklogo.com.png",

    MongoDB: "https://velog.velcdn.com/images/myong/post/7c8de4c9-a41f-47fc-b73c-63550f86d1f6/mongo_atlas.png",

    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Render: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",

    // 🔹 Added Missing Skills
    "Responsive Design": "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
    "REST API Integration": "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
    Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    "REST API Development": "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
    "JWT Authentication": "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    "CORS Handling": "https://cdn-icons-png.flaticon.com/512/565/565547.png",
     GitHub: "data:image/webp;base64,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",
 };

const categoryColors = {
    frontend: "from-primary to-secondary",
    backend: "from-fire to-grass",
    languages: "from-secondary to-fire",
    databases: "from-grass to-primary",
    tools: "from-primary to-fire",
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
        >
            {/* Floating Orbs Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-orb"></div>
                <div className="absolute top-1/3 right-12 w-28 h-28 bg-secondary/20 rounded-full blur-2xl animate-orb delay-300"></div>
                <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-fire/20 rounded-full blur-2xl animate-orb delay-500"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Section Title */}
                <div className="text-center space-y-3 animate-fade-up mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent">
                        Skills & Technologies
                    </h2>
                    <div className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-fire"></div>
                </div>

                {/* Skill Categories */}
                <div className="space-y-16">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <div
                            key={category}
                            className="animate-fade-up"
                            style={{ animationDelay: `${index * 180}ms` }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-8">
                                <div
                                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${categoryColors[category]} shadow-lg animate-pulse-soft`}
                                ></div>

                                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent capitalize">
                                    {category}
                                </h3>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="group flex flex-col items-center gap-3 p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200/40 dark:border-gray-700/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    >
                                        {/* Icon */}
                                        <img
                                            src={icons[skill.name]}
                                            alt={skill.name}
                                            className="w-10 h-10 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                                        />

                                        {/* Skill Name */}
                                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-18px) scale(1.1); opacity: 1; }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.04); opacity: 0.9; }
        }

        .animate-fade-up { animation: fade-up 0.9s ease-out forwards; }
        .animate-orb { animation: orb 6s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
      `}</style>

        </section>
    );
};

export default Skills;
