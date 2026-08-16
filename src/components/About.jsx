// About.jsx
// Brought up to parity with Hero.jsx:
// 1. Mobile: responsive orb sizing/blur (cheaper paint), tighter spacing,
//    clamp()'d text, hover→active states so touch doesn't get stuck mid-hover.
// 2. SEO: section marked up as an AboutPage fragment of the Person from Hero,
//   real resume stats (not placeholders), knowsAbout + award JSON-LD.
// 3. Scale-fade entrance on scroll-into-view (About's signature transition).

import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // SEO: extends the Person graph from Hero with skills + awards.
  // Separate <script> tag — multiple JSON-LD blocks on one page is valid,
  // and keeps this component decoupled from Hero.
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vikash Mundakar",
      url: "https://pichu.site",
      knowsAbout: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Flask",
        "REST APIs",
        "System Design",
        "Data Structures & Algorithms",
      ],
      award: [
        "Runner-up, KL University Hackathon (120+ teams)",
        "Top 7, JNTUH Brain O Vision Hackathon (150+ teams)",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Mahatma Gandhi Institute of Technology",
      },
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  // Scale-fade on scroll into view — About's signature transition.
  // Fires once, GPU-only (opacity + transform: scale), no scroll listener —
  // IntersectionObserver does the work, so this costs nothing while idle.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Vikash Mundakar"
      itemScope
      itemType="https://schema.org/AboutPage"
      className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* -------------------------- */}
      {/* Floating Orbs Background    */}
      {/* -------------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-6 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-xl sm:blur-3xl animate-orb" />
        <div className="absolute bottom-16 right-6 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-secondary/20 rounded-full blur-xl sm:blur-3xl animate-orb delay-300" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-28 sm:h-28 bg-fire/20 rounded-full blur-lg sm:blur-2xl animate-orb delay-500" />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 sm:w-28 sm:h-28 bg-grass/20 rounded-full blur-lg sm:blur-2xl animate-orb delay-700" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10 sm:space-y-12">
        {/* -------------------------- */}
        {/* Section Title              */}
        {/* -------------------------- */}
        <div className={`space-y-3 scale-fade ${isVisible ? "is-visible" : ""}`}>
          <h2
            itemProp="headline"
            className="font-extrabold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}
          >
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-fire" />
        </div>

        {/* -------------------------- */}
        {/* Main About Content          */}
        {/* -------------------------- */}
        <div
          itemProp="mainContentOfPage"
          className={`max-w-3xl mx-auto space-y-4 sm:space-y-5 scale-fade delay-150 ${isVisible ? "is-visible" : ""} text-gray-700 dark:text-gray-300 leading-relaxed`}
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.125rem)" }}
        >
          <p>
            I'm <span itemProp="name">Vikash Mundakar</span>, a{" "}
            <span itemProp="jobTitle">Full Stack Developer</span> and CSE
            student at Mahatma Gandhi Institute of Technology, building
            production-grade apps with the MERN stack and Flask.
          </p>

          <p>
            I care about the parts that don't show up in a demo: query
            performance, auth that actually holds up, and interfaces that
            feel instant. Local Lynk, Rail Pulse, and my Solo Leveling
            Fitness App all started as "can I make this fast and correct,"
            not just "can I make this work."
          </p>

          <p>
            Outside of shipping projects, I've solved 320+ DSA problems
            across LeetCode and GeeksforGeeks, and placed at two hackathons —
            Runner-up at KL University's, Top 7 at JNTUH Brain O Vision.
          </p>
        </div>

        {/* -------------------------- */}
        {/* Highlighted Stats / Points */}
        {/* -------------------------- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
          <div
            className={`about-stat-card scale-fade delay-300 ${isVisible ? "is-visible" : ""} p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-primary/20`}
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              3
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mt-1 text-xs sm:text-sm">
              Full-Stack Projects Shipped
            </p>
          </div>

          <div
            className={`about-stat-card scale-fade delay-400 ${isVisible ? "is-visible" : ""} p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-secondary/20`}
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-secondary to-fire bg-clip-text text-transparent">
              320+
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mt-1 text-xs sm:text-sm">
              DSA Problems Solved
            </p>
          </div>

          <div
            className={`about-stat-card scale-fade delay-500 ${isVisible ? "is-visible" : ""} p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-fire/20`}
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-fire to-grass bg-clip-text text-transparent">
              9.1
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mt-1 text-xs sm:text-sm">
              CGPA at MGIT
            </p>
          </div>

          <div
            className={`about-stat-card scale-fade delay-600 ${isVisible ? "is-visible" : ""} p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-grass/20`}
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-grass to-primary bg-clip-text text-transparent">
              2
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mt-1 text-xs sm:text-sm">
              Hackathon Placements
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------- */}
      {/* Animations                 */}
      {/* -------------------------- */}
      <style>{`
        @keyframes orb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-18px) scale(1.1); opacity: 1; }
        }
        .animate-orb { animation: orb 6s ease-in-out infinite; }

        /* Scale-fade — About's signature entrance transition.
           Starts slightly shrunk + invisible, settles to full size on scroll-in.
           Only opacity + transform are touched, so it's compositor-only. */
        .scale-fade {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .scale-fade.is-visible {
          opacity: 1;
          transform: scale(1);
        }

        .delay-150 { transition-delay: 150ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
        .delay-600 { transition-delay: 600ms; }

        .about-stat-card { transition-property: opacity, transform; will-change: transform; }
        .about-stat-card.is-visible {
          transition-property: opacity, transform, box-shadow;
        }
        /* Hover/active only kick in after the entrance settles, and reuse
           the same transform property scale-fade already owns — no
           competing transform declarations, no jank. */
        .about-stat-card.is-visible:hover { transform: scale(1.03); }
        .about-stat-card.is-visible:active { transform: scale(0.98); }
        @media (hover: none) {
          .about-stat-card.is-visible:hover { transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-orb { animation: none !important; }
          .scale-fade {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .about-stat-card.is-visible:hover,
          .about-stat-card.is-visible:active { transform: none; }
        }
      `}</style>
    </section>
  );
};

export default About;