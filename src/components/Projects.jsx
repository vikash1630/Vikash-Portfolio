// Projects.jsx
// Improved Mobile View + High-Quality Placeholder Images + Same CSS Theme

import React from "react";
import { projectsData } from "../data/projects";

const defaultPlaceholder =
  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop"; // Beautiful tech-art placeholder

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/25 rounded-full blur-3xl animate-orb"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/25 rounded-full blur-3xl animate-orb delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-fire/25 rounded-full blur-2xl animate-orb delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 animate-fade-up mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-fire"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 border border-gray-200/40 dark:border-gray-700/40 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="overflow-hidden h-56 sm:h-64 md:h-60 lg:h-56">
                <img
                  src={project.image || defaultPlaceholder}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-7 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-gray-800 dark:text-gray-100 border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">

                  {/* Live Link 1 */}
                  <a
                    href={project.liveLinks.primary}
                    target="_blank"
                    className="w-full sm:w-auto text-center px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-gray-900 font-semibold shadow-md hover:scale-105 transition-all"
                  >
                    Live Demo ⚡
                  </a>

                  {/* Live Link 2 */}
                  <a
                    href={project.liveLinks.secondary}
                    target="_blank"
                    className="w-full sm:w-auto text-center px-5 py-2 rounded-full bg-white dark:bg-gray-800 border-2 border-primary font-semibold text-gray-900 dark:text-gray-100 hover:bg-primary hover:text-gray-900 hover:scale-105 transition-all"
                  >
                    Alternate Link 🔗
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="w-full sm:w-auto text-center px-5 py-2 rounded-full bg-fire/20 text-fire dark:text-fire-light font-semibold hover:bg-fire/30 hover:scale-105 transition-all"
                  >
                    GitHub Repo 🧩
                  </a>

                </div>
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
          50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
        }
        .animate-fade-up {
          animation: fade-up 0.9s ease-out forwards;
        }
        .animate-orb {
          animation: orb 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
