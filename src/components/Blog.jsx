// Blog.jsx
// Premium card design: larger, with colored badges for date & read time

import React from "react";
import { blogData } from "../data/blog";

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative py-20 sm:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-14 left-10 w-40 h-40 bg-primary/25 rounded-full blur-3xl animate-orb"></div>
        <div className="absolute bottom-20 right-16 w-48 h-48 bg-secondary/25 rounded-full blur-3xl animate-orb delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-fire/25 rounded-full blur-2xl animate-orb delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center space-y-3 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent">
            Blogs & Articles
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-fire"></div>
        </div>

        {/* Blog Cards - slightly wider grid with increased gap */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((post, index) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Thumbnail - larger height */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content - more padding */}
              <div className="p-6 space-y-4">
                {/* Title - classic but with slightly better spacing */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info - now as colored badges */}
                <div className="flex items-center gap-3 pt-1">
                  {/* Year badge */}
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                    📅 {post.date}
                  </span>
                  {/* Read time badge */}
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                    ⏱ {post.readTime}
                  </span>
                </div>

                {/* Tags - with individual pastel colors */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {post.tags.map((tag, i) => {
                    // Assign a unique pastel color based on tag index
                    const colors = [
                      "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700",
                      "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700",
                      "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700",
                      "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700",
                      "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700",
                      "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700",
                    ];
                    const colorClass = colors[i % colors.length];
                    return (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${colorClass}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Button - kept rainbow on hover, now with more prominent default */}
                <span className="inline-block mt-3 px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gray-800 dark:bg-gray-200 dark:text-gray-900 shadow-md hover:shadow-lg transition-all duration-300 button-rainbow">
                  Read Full Article →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Professional "Explore All Articles" button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://myblogs-umber.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="explore-btn inline-flex items-center gap-3 px-10 py-5 text-xl font-semibold text-white rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
          >
            🍃 Explore All Articles <span className="ml-1 text-xxl">→</span>
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-18px) scale(1.1); opacity: 1; }
        }
        @keyframes rainbow-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fade-up {
          animation: fade-up 0.9s ease-out forwards;
        }
        .animate-orb {
          animation: orb 6s ease-in-out infinite;
        }

        /* Button rainbow effect on hover */
        .button-rainbow {
          background-size: 200% 200%;
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .button-rainbow:hover {
          background: linear-gradient(90deg, #ef4444, #eab308, #22c55e, #3b82f6, #a855f7);
          background-size: 200% 200%;
          animation: rainbow-bg 2s linear infinite;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(234, 179, 8, 0.2), 0 0 60px rgba(34, 197, 94, 0.15);
          transform: scale(1.02);
        }

        /* Professional Explore Button – subtle, polished */
        .explore-btn {
          background-size: 200% 200%;
          transition: all 0.3s ease;
          will-change: transform, box-shadow;
        }

        .explore-btn:hover {
          transform: scale(1.04);
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.3), 0 4px 15px rgba(168, 85, 247, 0.2);
        }

        /* Mobile: smooth, no heavy animations */
        @media (max-width: 767px) {
          .explore-btn {
            padding: 0.75rem 1.5rem;
            font-size: 0.95rem;
          }
          .explore-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 20px rgba(99, 102, 241, 0.25);
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
