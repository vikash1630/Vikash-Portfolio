// Contact.jsx — Fully Improved Version (FormSubmit + Fixed Email Section)

import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const phoneRef = useRef(null);

  const handleSubmit = (e) => {
    setFormStatus("Sending...");
    setTimeout(() => setFormStatus("Message sent successfully!"), 2000);
  };

  // Mouse-reactive spotlight on the phone button — same approach as the
  // Hero cursor glow: desktop-only (pointer: fine), rAF-batched, and only
  // ever touches CSS custom properties so nothing but compositing happens.
  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    const el = phoneRef.current;
    if (!isDesktop || !el) return;

    let raf = null;
    let pending = null;

    const applyMove = () => {
      if (pending) {
        el.style.setProperty("--mx", `${pending.x}px`);
        el.style.setProperty("--my", `${pending.y}px`);
      }
      raf = null;
    };

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      pending = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!raf) raf = requestAnimationFrame(applyMove);
    };

    el.addEventListener("mousemove", handleMove);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-10 w-40 h-40 bg-primary/25 rounded-full blur-3xl animate-orb"></div>
        <div className="absolute bottom-24 right-16 w-48 h-48 bg-secondary/25 rounded-full blur-3xl animate-orb delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-fire/25 rounded-full blur-2xl animate-orb delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Section Title */}
        <div className="text-center space-y-3 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent">
            Contact Me
          </h2>

          {/* Underline */}
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-fire"></div>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-3">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/mvikash1630@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="mt-10 bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 shadow-xl rounded-2xl p-8 sm:p-10 animate-fade-up delay-200"
        >
          {/* Hidden fields to send copy to both emails */}
          <input type="hidden" name="_cc" value="vikashmundakar@gmail.com" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid gap-6">

            {/* Name */}
            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 
                border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 
                focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 
                border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 
                focus:ring-2 focus:ring-secondary focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                required
                rows="5"
                name="message"
                placeholder="Write your message..."
                className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 
                border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 
                focus:ring-2 focus:ring-fire focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-10 py-3 rounded-full bg-gradient-to-r from-primary to-secondary 
              text-gray-900 font-semibold shadow-md hover:scale-105 transition-all"
            >
              Send Message 💬
            </button>

            {/* Form Status */}
            {formStatus && (
              <p className="text-center text-green-600 font-medium mt-3 animate-fade-up">
                {formStatus}
              </p>
            )}
          </div>
        </form>

        {/* Direct Contact Section */}
        <div className="text-center mt-14 animate-fade-up delay-400">
          <p className="text-gray-600 dark:text-gray-400 mb-5">
            You can also reach me directly:
          </p>

          {/* PHONE — clean by default, lights up as the cursor moves over it */}
          <a
            ref={phoneRef}
            href="tel:+919573696792"
            className="phone-cta group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl
            bg-gradient-to-r from-emerald-600 to-teal-600
            text-white font-bold text-lg sm:text-xl tracking-wide
            shadow-md overflow-hidden mb-8
            transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            {/* Cursor-follow spotlight — opacity-only, appears on hover */}
            <span className="phone-spotlight absolute inset-0 rounded-2xl pointer-events-none" aria-hidden="true" />

            <span className="relative text-xl">📞</span>
            <span className="relative">+91 95736 96792</span>
          </a>

          {/* EMAIL CARDS */}
          <div className="flex flex-col items-center gap-2">

            {/* Primary Email */}
            <a
              href="mailto:mvikash1630@gmail.com"
              className="font-semibold text-lg bg-gradient-to-r from-secondary via-primary to-fire 
              bg-clip-text text-transparent hover:opacity-80 transition"
            >
              mvikash1630@gmail.com
            </a>

            {/* Underline */}
            <span className="block w-40 h-0.5 bg-gradient-to-r from-primary to-fire rounded-full"></span>

            {/* Alternate Email */}
            <a
              href="mailto:vikashmundakar@gmail.com"
              className="font-semibold text-lg bg-gradient-to-r from-secondary via-primary to-fire 
              bg-clip-text text-transparent hover:opacity-80 transition"
            >
              vikashmundakar@gmail.com
            </a>

          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes orb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
        }

        .animate-fade-up { animation: fade-up 0.9s ease-out forwards; }
        .animate-orb { animation: orb 6s infinite ease-in-out; }

        /* Phone CTA — no constant motion at rest. The only thing that moves
           is the spotlight, and only in response to the mouse. */
        .phone-cta {
          --mx: 50%;
          --my: 50%;
        }
        .phone-spotlight {
          opacity: 0;
          background: radial-gradient(140px circle at var(--mx) var(--my), rgba(255,255,255,0.35), transparent 70%);
          transition: opacity 0.35s ease;
        }
        .phone-cta:hover .phone-spotlight,
        .phone-cta:focus-visible .phone-spotlight {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .phone-spotlight { transition: none; }
        }
      `}</style>
    </section>
  );
};

export default Contact;