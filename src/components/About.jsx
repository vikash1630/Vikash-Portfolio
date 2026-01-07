// About.jsx
// REPLACE: main about text (line ~55) and achievements (line ~70 if desired)

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* -------------------------- */}
      {/* Floating Orbs Background    */}
      {/* -------------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-orb"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-orb delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-fire/20 rounded-full blur-2xl animate-orb delay-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-grass/20 rounded-full blur-2xl animate-orb delay-700"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {/* -------------------------- */}
        {/* Section Title              */}
        {/* -------------------------- */}
        <div className="space-y-3 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-fire"></div>
        </div>

        {/* -------------------------- */}
        {/* Main About Content          */}
        {/* -------------------------- */}
        <div className="max-w-3xl mx-auto space-y-5 animate-fade-up delay-200 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          
          {/* REPLACE THIS SECTION WITH YOUR BIO */}
          <p>
            I’m a passionate Full Stack Developer and a Computer Science student
            at Mahatma Gandhi Institute of Technology. I love building
            interactive, scalable, and visually immersive digital experiences.
          </p>

          <p>
            My work blends the creativity of modern UI/UX with the engineering
            discipline of solid backend architecture — producing applications
            that feel smooth, fast, and intuitive on every device.
          </p>

          <p>
            Whether it's crafting pixel-perfect interfaces, optimizing
            server-side systems, or designing end-to-end experiences, I focus on
            clean code, developer empathy, and continuous learning.
          </p>

        </div>

        {/* -------------------------- */}
        {/* Highlighted Stats / Points */}
        {/* -------------------------- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 animate-fade-up delay-400">
          
          {/* Stat Card 1 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-primary/20 hover:scale-[1.03] transition-all">
            <h3 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              4+
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mt-1 text-sm">
              Projects Completed
            </p>
          </div>

          {/* Stat Card 2 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-secondary/20 hover:scale-[1.03] transition-all">
            <h3 className="text-4xl font-extrabold bg-gradient-to-r from-secondary to-fire bg-clip-text text-transparent">
              10+
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mt-1 text-sm">
              Technologies Mastered
            </p>
          </div>

          {/* Stat Card 3 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-fire/20 hover:scale-[1.03] transition-all sm:col-span-2 lg:col-span-1">
            <h3 className="text-4xl font-extrabold bg-gradient-to-r from-fire to-grass bg-clip-text text-transparent">
              2+
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mt-1 text-sm">
              Years of Learning & Experience
            </p>
          </div>

        </div>
      </div>

      {/* -------------------------- */}
      {/* Animations (from Hero)     */}
      {/* -------------------------- */}
      <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-18px) scale(1.1); opacity: 1; }
        }

        .animate-fade-up {
          animation: fade-up 0.9s ease-out forwards;
        }
        .animate-orb {
          animation: orb 6s ease-in-out infinite;
        }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
      `}</style>
    </section>
  );
};

export default About;
