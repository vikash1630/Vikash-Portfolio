// Blog.jsx
// REPLACE: Only if you want different button text or add new blog fields

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

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center space-y-3 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent">
            Blog & Articles
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-fire"></div>
        </div>

        {/* Blog Cards */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {blogData.map((post, index) => (
            <div
              key={post.id}
              className="group bg-white dark:bg-gray-900 border border-gray-200/40 dark:border-gray-700/40 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Thumbnail Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">

                {/* Title */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-fire bg-clip-text text-transparent">
                  {post.title}
                </h3>

                {/* Description / Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-gray-800 dark:text-gray-100 border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <a
                  href={post.link}
                  target="_blank"
                  className="inline-block mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-gray-900 font-semibold shadow-md hover:scale-105 transition-all"
                >
                  Read More →
                </a>

              </div>
            </div>
          ))}
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

        .animate-fade-up {
          animation: fade-up 0.9s ease-out forwards;
        }
        .animate-orb {
          animation: orb 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Blog;
