// Hero.jsx
// Original animation quality preserved. Only removed scroll-down mouse.

import React from "react";

const Hero = ({ onSectionChange }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Floating Elemental Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-6 w-24 h-24 sm:w-32 sm:h-32 bg-primary/25 rounded-full blur-3xl animate-orb" />
        <div className="absolute bottom-14 right-10 w-28 h-28 sm:w-40 sm:h-40 bg-secondary/25 rounded-full blur-3xl animate-orb delay-500" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-28 sm:h-28 bg-fire/25 rounded-full blur-2xl animate-orb delay-700" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:h-36 sm:w-36 bg-grass/25 rounded-full blur-2xl animate-orb delay-300" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">

          {/* Profile + Glow */}
          <div className="relative">
            <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary via-secondary to-fire p-1 shadow-xl animate-pulse-soft">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Mundakar+Vikash&background=FFD700&color=000&size=400&bold=true"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping"></div>
          </div>

          {/* Greeting */}
          <div className="space-y-2 sm:space-y-3">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 animate-fade-up">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent animate-fade-up delay-200">
              Mundakar Vikash
            </h1>
          </div>

          {/* Role + Bio */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-up delay-300">
              Full Stack Developer
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl px-4 animate-fade-up delay-400 leading-relaxed">
              Student at Mahatma Gandhi Institute of Technology. I enjoy
              creating scalable, interactive, and visually immersive web
              applications—focused on crafting smooth UI/UX with powerful
              full-stack functionality.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base animate-fade-up delay-500">
            <span className="text-lg">📍</span>
            <span>Kukatpally, Hyderabad, Telangana, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up delay-600">
            <button
              onClick={() => onSectionChange("projects")}
              className="w-full sm:w-auto px-7 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-gray-900 shadow-lg hover:scale-105 transition-all"
            >
              View My Work ⚡
            </button>

            <button
              onClick={() => onSectionChange("contact")}
              className="w-full sm:w-auto px-7 py-3 sm:py-4 border-2 border-primary rounded-full font-semibold bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-gray-900 hover:scale-105 transition-all"
            >
              Contact Me 💬
            </button>
          </div>

          {/* Resume Link */}
          <div className="pt-2 animate-fade-up delay-700">
            <Link
              to="/resume"
              className="inline-flex items-center space-x-2 px-5 py-3 bg-fire/20 hover:bg-fire/30 text-fire dark:text-fire-light rounded-full font-medium transition-all hover:scale-105"
            >
                <span>View Resume ↗</span>
            </Link>
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
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.03); opacity: 0.9; }
        }

        .animate-fade-up { animation: fade-up 1s ease-out forwards; }
        .animate-orb { animation: orb 6s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }

        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>
    </section>
  );
};

export default Hero;
