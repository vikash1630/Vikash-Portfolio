// Footer.jsx
// Using proper brand-style SVG icons (GitHub, LinkedIn, Gmail primary & alternate)

import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 py-14 px-6 sm:px-8 lg:px-12 bg-white dark:bg-gray-900 overflow-hidden border-t border-gray-200/40 dark:border-gray-700/40">
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-6 w-28 h-28 bg-primary/20 rounded-full blur-2xl animate-orb"></div>
        <div className="absolute bottom-10 right-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-orb delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-fire/20 rounded-full blur-xl animate-orb delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-8">

        {/* Name */}
        <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent animate-fade-up">
          Mundakar Vikash
        </h2>

        {/* Tagline */}
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl animate-fade-up delay-200">
          Building immersive digital experiences with creativity, precision, and an explorer’s spirit.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-10 animate-fade-up delay-300">

          {/* GitHub */}
          <div className="flex flex-col items-center gap-1">
            <a
              href="https://github.com/vikash1630"
              target="_blank"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 
              flex items-center justify-center text-primary shadow-md"
            >
              {/* GitHub SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-7 h-7"
              >
                <path d="M12 .297a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.6-1.4-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.6-1.5.1-3 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.5.2 2.7.1 3a4.8 4.8 0 0 1 1.2 3.2c0 4.5-2.8 5.5-5.4 5.8.4.4.7 1 .7 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .297z"/>
              </svg>
            </a>
            <span className="text-xs text-gray-600 dark:text-gray-400">GitHub</span>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center gap-1">
            <a
              href="https://www.linkedin.com/in/mundakar-vikash-0a8a6435b/"
              target="_blank"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/40 
              flex items-center justify-center text-secondary shadow-md"
            >
              {/* LinkedIn SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-7 h-7"
              >
                <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.85v5.5H9.47V9h3.4v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.4v6.34zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.4.6 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0z"/>
              </svg>
            </a>
            <span className="text-xs text-gray-600 dark:text-gray-400">LinkedIn</span>
          </div>

          {/* Primary Email — OFFICIAL GMAIL LOGO */}
          <div className="flex flex-col items-center gap-1">
            <a
              href="mailto:m.vikash1630@gmail.com"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-fire/20 to-fire/40 
              flex items-center justify-center shadow-md"
            >
              {/* Official Gmail Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-7 h-7">
                <path fill="#e0e0e0" d="M44 39a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V14l20 15 20-15z" />
                <path fill="#e53935" d="M44 14v-4c0-3-3-3-3-3L24 18 7 7S4 7 4 10v4l20 15z" />
                <path fill="#c62828" d="M24 18 4 33v6l20-15 20 15v-6z" />
                <path fill="#fbc02d" d="M7 7l17 12 17-12z" />
              </svg>
            </a>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium text-center w-full">Primary Email</span>
          </div>

          {/* Alternate Email — DIFFERENT OUTLINE GMAIL LOGO */}
          <div className="flex flex-col items-center gap-1">
            <a
              href="mailto:vikashmundakar@gmail.com"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300/20 to-blue-500/40 
              flex items-center justify-center text-blue-600 shadow-md"
            >
              {/* Outline Gmail Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
                <path fill="#4285F4" d="M12 13 2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76L12 13z" />
                <path fill="#EA4335" d="M22 6H2l10 7z" />
              </svg>
            </a>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium text-center w-full">Alternate Email</span>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 dark:bg-gray-700 opacity-50"></div>

        {/* Footer Bottom Text */}
        <p className="text-sm text-gray-600 dark:text-gray-500 animate-fade-up delay-500">
          © {new Date().getFullYear()} Mundakar Vikash — All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary 
          text-gray-900 font-semibold shadow-md animate-fade-up delay-600"
        >
          Back to Top ↑
        </button>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-15px) scale(1.1); opacity: 1; }
        }
        .animate-fade-up { animation: fade-up 0.9s ease-out forwards; }
        .animate-orb { animation: orb 7s ease-in-out infinite; }
      `}</style>

    </footer>
  );
};

export default Footer;
