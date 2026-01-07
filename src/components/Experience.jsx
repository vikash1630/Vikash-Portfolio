// Experience.jsx
// NEW VERSION: Railway track timeline, left-aligned dots, full-width cards on mobile

import React from "react";
import { experienceData } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 sm:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-orb"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-orb delay-300"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-fire"></div>
        </div>

        {/* Timeline Container */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-10 relative">

          {/* LEFT TIMELINE — Only Shows on Desktop */}
          <div className="hidden md:flex flex-col items-center relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-fire rounded-full"></div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <div
                key={item.id}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Dot (Desktop only) */}
                <div className="hidden md:flex absolute left-[-52px] top-4 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-fire shadow-lg animate-pulse-soft border border-white dark:border-gray-900"></div>

                {/* Experience Card */}
                <div className="w-full bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl p-6 sm:p-7 hover:scale-[1.02] hover:shadow-2xl transition-all relative">

                  {/* Logo */}
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt="logo"
                      className="w-16 h-16 object-contain absolute -top-8 left-6 bg-white dark:bg-gray-900 rounded-xl p-2 shadow-lg border border-gray-200/40 dark:border-gray-700/40"
                    />
                  )}

                  {/* Title + Type */}
                  <div className="mt-10 flex items-start justify-between mb-3">
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 text-gray-800 dark:text-gray-100 capitalize">
                      {item.type}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-fire bg-clip-text text-transparent text-right">
                      {item.title}
                    </h3>
                  </div>

                  {/* Meta */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <strong>{item.company}</strong> — {item.location}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {item.duration}
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                    {item.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-fire/20 to-grass/20 text-gray-900 dark:text-gray-100 border border-fire/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
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
          50% { transform: scale(1.05); opacity: 0.9; }
        }

        .animate-fade-up { animation: fade-up 0.9s ease-out forwards; }
        .animate-orb { animation: orb 6s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Experience;
