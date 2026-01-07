// Navbar.jsx – GOD-TIER VERSION
// Ultra-smooth transitions, polished spacing, glowing active underline, premium UX.

import { useState, useEffect } from "react";

const Navbar = ({ onSectionChange, currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add scroll blur/transition
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
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

          {/* LOGO – Glow + Scale */}
          <div
            onClick={() => onSectionChange("home")}
            className="
            text-2xl md:text-3xl font-extrabold cursor-pointer select-none
            bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent
            transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,225,90,0.6)]
          "
          >
            ⚡ MVikash
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-2">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`
                  relative px-4 py-2 rounded-lg font-medium text-sm lg:text-base 
                  transition-all duration-300
                  ${
                    currentSection === item.id
                      ? "text-primary font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                  }
                `}
              >
                {item.name}

                {/* GOD-TIER UNDERLINE */}
                {currentSection === item.id && (
                  <span
                    className="
                    absolute left-1/2 transform -translate-x-1/2 
                    -bottom-1 h-[3px] w-8 rounded-full 
                    bg-gradient-to-r from-primary via-secondary to-fire 
                    animate-underlineGlow
                  "
                  ></span>
                )}
              </button>
            ))}

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="
                ml-4 p-2 rounded-xl bg-primary/20 transition-all duration-300 
                hover:bg-primary/30 hover:scale-110
              "
            >
              {isDarkMode ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>
          </div>

          {/* MOBILE NAV */}
          <div className="md:hidden flex items-center space-x-3">

            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="
                p-2 rounded-xl bg-primary/20 transition-all duration-300 
                hover:bg-primary/30 hover:scale-110
              "
            >
              {isDarkMode ? (
                <span className="text-lg">☀️</span>
              ) : (
                <span className="text-lg">🌙</span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                p-2 rounded-xl bg-primary/20 hover:bg-primary/30 transition-all duration-300
              "
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-[3px] w-full rounded bg-gray-700 dark:bg-gray-300 transition-all 
                    ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block h-[3px] w-full rounded bg-gray-700 dark:bg-gray-300 transition-all 
                    ${isMobileMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-[3px] w-full rounded bg-gray-700 dark:bg-gray-300 transition-all 
                    ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
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
          from {
            opacity: 0;
            width: 0;
            box-shadow: 0 0 0px rgba(255, 200, 50, 0.3);
          }
          to {
            opacity: 1;
            width: 32px;
            box-shadow: 0 0 12px rgba(255, 200, 50, 0.7);
          }
        }
        .animate-underlineGlow {
          animation: underlineGlow 0.35s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
