// Footer.jsx
// Premium social links with pixel-perfect brand logos

import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [     
    {
      label: "GitHub",
      href: "https://github.com/vikash1630",
      bg: "from-[#161b22] to-[#24292f] dark:from-[#0d1117] dark:to-[#161b22]",
      icon: (
        // Official GitHub Mark — exact paths from github.com/logos
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 98 96"
          className="w-7 h-7"
          fill="white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mundakar-vikash-0a8a6435b/",
      bg: "from-[#0077B5] to-[#005f94] dark:from-[#0077B5] dark:to-[#004d7a]",
      icon: (
        // Official LinkedIn "in" mark
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="white"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Vikash1630/",
      bg: "from-[#1A1A2E] to-[#16213E] dark:from-[#0d0d1a] dark:to-[#1A1A2E]",
      icon: (
        // Official LeetCode logo paths
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path
            d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.7a1.382 1.382 0 0 0 0-2.764z"
            fill="#FFA116"
          />
        </svg>
      ),
    },
    {
      label: "GfG",
      href: "https://www.geeksforgeeks.org/profile/mvikask6kb?tab=activity",
      bg: "from-[#2F8D46] via-[#2F8D46] to-[#2F8D46]",
      icon: (
        <img
          src="data:image/png;base64,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"
          alt="GeeksforGeeks"
          className="w-7 h-7 object-contain"
        />
      ),
    },
    {
      label: "Primary Email",
      href: "mailto:m.vikash1630@gmail.com",
      bg: "from-[#EA4335] to-[#C5221F] dark:from-[#EA4335] dark:to-[#a01b18]",
      icon: (
        // Solid Gmail-style envelope — fully opaque, clean fill
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="white"
        >
          <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
    {
      label: "Alternate Email",
      href: "mailto:vikashmundakar@gmail.com",
      bg: "from-[#F4B400] to-[#c8920a] dark:from-[#d9a000] dark:to-[#a07000]",
      icon: (
        // Solid paper-plane / send icon — visually distinct from primary email
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="white"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919573696792",
      bg: "from-[#25D366] to-[#128C7E] dark:from-[#1ebe57] dark:to-[#0f7060]",
      icon: (
        // Official WhatsApp logo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7"
          fill="white"
        >
          <path d="M16.002 0h-.004C7.178 0 0 7.178 0 16c0 3.5 1.127 6.74 3.04 9.373L1.05 30.95l5.74-1.96A15.918 15.918 0 0 0 16 32c8.822 0 16-7.178 16-16S24.822 0 16.002 0zM25.29 22.61c-.39 1.09-1.93 2-3.16 2.26-.84.18-1.94.32-5.64-1.21-4.73-1.94-7.77-6.72-8.01-7.03-.23-.31-1.94-2.58-1.94-4.93s1.2-3.48 1.67-3.96c.39-.4.84-.5 1.12-.5h.81c.26 0 .61-.01.95.72.39.82 1.33 3.17 1.45 3.4.12.23.2.5.04.81-.16.31-.24.5-.47.77-.23.27-.49.6-.7.81-.23.23-.47.48-.2.95.27.47 1.2 1.98 2.57 3.21 1.77 1.58 3.26 2.07 3.73 2.3.47.23.74.19 1.01-.12.27-.31 1.17-1.37 1.48-1.84.31-.47.62-.39 1.05-.23.43.16 2.73 1.29 3.2 1.52.47.23.78.35.9.54.12.19.12 1.09-.28 2.18z" />
        </svg>
      ),
    },
  ];

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
          Building immersive digital experiences with creativity, precision, and
          an explorer's spirit.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8 lg:gap-10 animate-fade-up delay-300">
          {socials.map(({ label, href, bg, icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 group"
            >
              <a
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`
                  w-14 h-14 rounded-2xl bg-gradient-to-br ${bg}
                  flex items-center justify-center
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300 ease-out
                  hover:scale-110 hover:-translate-y-1.5
                  ring-2 ring-white/10 dark:ring-white/5
                  hover:ring-white/30
                `}
              >
                {icon}
              </a>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors text-center leading-tight max-w-[64px]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50"></div>

        {/* Footer Bottom Text */}
        <p className="text-sm text-gray-600 dark:text-gray-500 animate-fade-up delay-500">
          © {new Date().getFullYear()} Mundakar Vikash — All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary
          text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-0.5"
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
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </footer>
  );
};

export default Footer;
