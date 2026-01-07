// Navbar.jsx – GOD-TIER VERSION with Circular GIF Logo + Name beside it

import { useState, useEffect } from "react";
import logoGif from "../assets/icons/giflogo.gif"; // your GIF

const Navbar = ({ onSectionChange, currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO + NAME */}
          <div
            onClick={() => onSectionChange("home")}
            className="flex items-center gap-3 cursor-pointer select-none transition-all duration-300 hover:scale-105"
          >
            {/* OUTER GRADIENT RING */}
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <div className="
                absolute inset-0 rounded-full p-[3px]
                bg-gradient-to-r from-primary via-secondary to-fire
                animate-pulse-soft
              ">
                {/* GIF inside */}
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center">
                  <img
                    src={logoGif}
                    alt="Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* NAME */}
            <span className="
              text-xl md:text-2xl font-extrabold 
              bg-gradient-to-r from-primary via-secondary to-fire 
              bg-clip-text text-transparent
            ">
              MVikash
            </span>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`
                  relative px-4 py-2 rounded-lg font-medium text-base
                  transition-all duration-300
                  ${
                    currentSection === item.id
                      ? "text-primary font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary"
                  }
                `}
              >
                {item.name}

                {/* ACTIVE UNDERLINE */}
                {currentSection === item.id && (
                  <span className="
                    absolute left-1/2 -translate-x-1/2 
                    -bottom-1 h-[3px] w-8 rounded-full
                    bg-gradient-to-r from-primary via-secondary to-fire
                    animate-underlineGlow
                  "></span>
                )}
              </button>
            ))}

            {/* DARK MODE TOGGLE */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-4 p-2 rounded-xl bg-primary/20 hover:bg-primary/30 hover:scale-110 transition-all"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-primary/20 hover:bg-primary/30 hover:scale-110 transition-all"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-primary/20 hover:bg-primary/30 transition-all"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-[3px] w-full bg-gray-700 dark:bg-gray-300 transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-[3px] w-full bg-gray-700 dark:bg-gray-300 transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[3px] w-full bg-gray-700 dark:bg-gray-300 transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>

        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500
            ${isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"}
          `}
        >
          <div className="flex flex-col space-y-2 pt-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  px-4 py-3 rounded-lg text-left font-medium transition-all duration-300
                  ${
                    currentSection === item.id
                      ? "text-primary font-semibold bg-primary/10 shadow-sm"
                      : "text-gray-700 dark:text-gray-300 hover:bg-primary/20 hover:text-primary"
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes underlineGlow {
          from { opacity: 0; width: 0; }
          to { opacity: 1; width: 32px; }
        }

        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }

        .animate-underlineGlow { animation: underlineGlow 0.35s ease-out forwards; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
      `}</style>
    </nav>
  );
};

export default Navbar;
