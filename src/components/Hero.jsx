// Hero.jsx
// Three changes from the original, kept minimal and lightweight:
// 1. A cursor-reactive glow, wired up ONLY on desktop (pointer: fine).
//    No listener is even attached on mobile, so there's no lag/battery cost there.
// 2. The round avatar photo is replaced with a "classic dev" monitor icon —
//    a screen with animated code lines + a blinking cursor, pure CSS/SVG,
//    no external image request.
// 3. Crossfade entrance on the monitor — opacity-only "screen powering on"
//    effect, since it's the one element on this page with no transition of
//    its own. Text already owns Fade Up; this keeps the two distinct.

import React, { useEffect, useRef, useState } from "react";

const Hero = ({ onSectionChange }) => {
  const glowRef = useRef(null);

  // Crossfade should be a first-impression thing, not something that replays
  // every time the user navigates back to Home (this component unmounts on
  // section switch, so a plain mount-animation would fire every single time).
  // sessionStorage survives remounts within the tab, so it plays once per
  // visit and every return trip after that just renders at full opacity.
  const [playIntro] = useState(() => {
    try {
      if (!sessionStorage.getItem("heroIntroPlayed")) {
        sessionStorage.setItem("heroIntroPlayed", "1");
        return true;
      }
    } catch (e) {
      // sessionStorage unavailable (e.g. private mode) — default to playing it once, this render only
    }
    return false;
  });

  // SEO: structured data, injected once — cheap, runs only on mount/unmount, no scroll/mouse cost.
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vikash Mundakar",
      alternateName: "Mundakar Vikash",
      jobTitle: "Full Stack Developer",
      description:
        "Full stack developer specializing in the MERN stack and Flask, building scalable, production-grade web applications.",
      url: "https://pichu.site",
      sameAs: [
        "https://www.linkedin.com/in/mundakar-vikash-0a8a6435b",
        "https://github.com/vikash1630",
        "https://leetcode.com/vikash1630",
        "https://www.geeksforgeeks.org/user/mvikask6kb",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Mahatma Gandhi Institute of Technology",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  useEffect(() => {
    // Only run on real desktops with a precise pointer — skip entirely on touch/mobile.
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop || !glowRef.current) return;

    let raf = null;
    let pending = null;

    const applyMove = () => {
      if (pending && glowRef.current) {
        const { x, y } = pending;
        glowRef.current.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      }
      raf = null;
    };

    const handleMove = (e) => {
      pending = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(applyMove);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      aria-label="Introduction"
      itemScope
      itemType="https://schema.org/Person"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Cursor-reactive glow — desktop only, fixed so it doesn't repaint the whole section */}
      <div
        ref={glowRef}
        className="hero-glow hidden md:block"
        aria-hidden="true"
      />

      {/* Floating Elemental Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-6 w-24 h-24 sm:w-32 sm:h-32 bg-primary/25 rounded-full blur-3xl animate-orb" />
        <div className="absolute bottom-14 right-10 w-28 h-28 sm:w-40 sm:h-40 bg-secondary/25 rounded-full blur-3xl animate-orb delay-500" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-28 sm:h-28 bg-fire/25 rounded-full blur-2xl animate-orb delay-700" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:h-36 sm:w-36 bg-grass/25 rounded-full blur-2xl animate-orb delay-300" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Monitor Icon — replaces the avatar photo. Crossfades in on mount. */}
          <div
            className={`relative ${playIntro ? "crossfade" : ""}`}
            role="img"
            aria-label="Illustration of a monitor displaying animated lines of code"
          >
            <div className="monitor-glow-ring" />
            <div className="monitor w-40 h-28 sm:w-52 sm:h-36 md:w-60 md:h-40 rounded-xl bg-gradient-to-br from-primary via-secondary to-fire p-[3px] shadow-xl animate-pulse-soft">
              <div className="w-full h-full rounded-[10px] bg-gray-900 flex flex-col justify-center gap-2 px-4 sm:px-5 overflow-hidden">
                <div
                  className="code-line"
                  style={{ width: "70%", background: "#c084fc" }}
                />
                <div
                  className="code-line"
                  style={{
                    width: "45%",
                    background: "#f472b6",
                    animationDelay: "0.3s",
                  }}
                />
                <div
                  className="code-line"
                  style={{
                    width: "85%",
                    background: "#60a5fa",
                    animationDelay: "0.6s",
                  }}
                />
                <div
                  className="code-line"
                  style={{
                    width: "35%",
                    background: "#4ade80",
                    animationDelay: "0.9s",
                  }}
                >
                  <span className="code-cursor" />
                </div>
              </div>
            </div>
            {/* Stand */}
            <div className="mx-auto w-3 h-4 sm:h-5 bg-gradient-to-b from-primary to-secondary" />
            <div className="mx-auto w-16 sm:w-20 h-1.5 rounded-full bg-gradient-to-r from-primary via-secondary to-fire" />
          </div>

          {/* Greeting */}
          <div className="space-y-2 sm:space-y-3">
            <p
              className={`text-lg sm:text-xl text-gray-600 dark:text-gray-400 ${playIntro ? "animate-fade-up" : ""}`}
            >
              Hello, I'm
            </p>

            <h1
              itemProp="name"
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent ${playIntro ? "animate-fade-up delay-200" : ""}`}
            >
              Mundakar Vikash
            </h1>
          </div>

          {/* Role + Bio */}
          <div className="space-y-3 sm:space-y-4">
            <p
              itemProp="jobTitle"
              className={`text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 ${playIntro ? "animate-fade-up delay-300" : ""}`}
            >
              Full Stack Developer
            </p>

            <p
              itemProp="description"
              className={`text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl px-4 leading-relaxed ${playIntro ? "animate-fade-up delay-400" : ""}`}
            >
              I build full-stack web applications from query design to
              micro-interactions. Working across the entire MERN stack, I bridge
              the gap between back-end system architecture and crisp, responsive
              frontend interfaces to deliver seamless, production-ready
              products.
            </p>
          </div>

          {/* Location */}
          <div
            className={`flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base ${playIntro ? "animate-fade-up delay-500" : ""}`}
            itemProp="homeLocation"
            itemScope
            itemType="https://schema.org/Place"
          >
            <span className="text-lg">📍</span>
            <span itemProp="name">Kukatpally, Hyderabad, Telangana, India</span>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${playIntro ? "animate-fade-up delay-600" : ""}`}
          >
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
          <div
            className={`pt-2 ${playIntro ? "animate-fade-up delay-700" : ""}`}
          >
            <button
              onClick={() => onSectionChange("resume")}
              className="
      group relative inline-flex items-center justify-center
      px-6 py-3 font-semibold rounded-full
      bg-gradient-to-r from-fire/20 via-primary/20 to-secondary/20
      text-fire dark:text-fire-light
      backdrop-blur-xl
      border border-white/20 dark:border-gray-700/40
      shadow-lg shadow-fire/10
      overflow-hidden
      transition-all duration-500
      hover:scale-110 hover:shadow-fire/30
      active:scale-95
    "
            >
              {/* 🔥 Animated Gradient Border */}
              <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-primary via-secondary to-fire opacity-0 group-hover:opacity-100 transition duration-500"></span>

              {/* ✨ Shine Sweep */}
              <span className="absolute left-[-120%] top-0 h-full w-[120%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700"></span>

              {/* TEXT + ICON */}
              <span className="relative flex items-center gap-2 tracking-wide">
                View Resume
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </span>
            </button>
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
        @keyframes code-grow {
          0% { width: 0%; opacity: 0.4; }
          100% { opacity: 1; }
        }
        @keyframes cursor-blink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes ring-pulse {
          0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.35); }
          100% { box-shadow: 0 0 0 22px rgba(168, 85, 247, 0); }
        }
        @keyframes crossfade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
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

        /* Crossfade — the monitor's entrance. Opacity-only, no transform,
           so it never fights the pulse-soft scale animation running on the
           same element's child. Screen "powers on" just before the greeting
           text starts its Fade Up sequence. */
        .crossfade {
          opacity: 0;
          animation: crossfade-in 1.1s ease-out forwards;
        }

        /* Monitor icon */
        .monitor { position: relative; z-index: 1; }
        .monitor-glow-ring {
          position: absolute;
          inset: -6px;
          border-radius: 999px;
          animation: ring-pulse 2.4s ease-out infinite;
          pointer-events: none;
        }
        .code-line {
          height: 6px;
          border-radius: 4px;
          animation: code-grow 1.6s ease-out infinite alternate;
        }
        .code-cursor {
          display: inline-block;
          width: 6px;
          height: 10px;
          margin-left: 4px;
          vertical-align: middle;
          background: #ffffff;
          animation: cursor-blink 1s step-end infinite;
        }

        /* Cursor-reactive glow: a fixed, blurred, GPU-composited blob.
           Position updates via transform only (no layout/paint of the section). */
        .hero-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 400px;
          height: 400px;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.22), transparent 70%);
          filter: blur(10px);
          pointer-events: none;
          will-change: transform;
          z-index: 0;
        }

        /* No border-based ring anywhere here — avoids a stray black border
           flashing in if a custom color token isn't defined in the theme. */

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up, .animate-orb, .animate-pulse-soft,
          .code-line, .code-cursor, .monitor-glow-ring, .crossfade {
            animation: none !important;
          }
          .crossfade { opacity: 1; }
          .hero-glow { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
