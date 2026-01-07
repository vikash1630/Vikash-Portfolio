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

    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Render: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
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
