// Contact.jsx — Fully Improved Version (FormSubmit + Fixed Email Section)

import React, { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    setFormStatus("Sending...");
    setTimeout(() => setFormStatus("Message sent successfully!"), 2000);
  };

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

        {/* Direct Email Section - FIXED */}
        <div className="text-center mt-12 animate-fade-up delay-400">
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            You can also reach me directly:
          </p>

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
      `}</style>
    </section>
  );
};

export default Contact;
