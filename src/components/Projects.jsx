// Projects.jsx
import React, { useEffect, useRef } from "react";
import { projectsData } from "../data/projects";

const defaultPlaceholder =
  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop";

// Standard order: highest to lowest
const STANDARD_ORDER = ["Industry", "Production", "Advanced"];

const STANDARD_META = {
  Industry: {
    label: "Industry Grade",
    accent: "from-cyan-400 via-blue-500 to-violet-600",
    badge: "bg-gradient-to-r from-cyan-500 to-violet-600",
    glow: "shadow-[0_0_32px_4px_rgba(99,102,241,0.35)]",
    hoverGlow: "hover:shadow-[0_0_48px_8px_rgba(99,102,241,0.5)]",
    borderGlow: "hover:border-violet-400/70",
    dot: "#818cf8",
    tag: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
  Production: {
    label: "Production Ready",
    accent: "from-emerald-400 via-teal-400 to-cyan-500",
    badge: "bg-gradient-to-r from-emerald-500 to-cyan-500",
    glow: "shadow-[0_0_32px_4px_rgba(20,184,166,0.3)]",
    hoverGlow: "hover:shadow-[0_0_48px_8px_rgba(20,184,166,0.45)]",
    borderGlow: "hover:border-teal-400/70",
    dot: "#2dd4bf",
    tag: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  },
  Advanced: {
    label: "Advanced",
    accent: "from-orange-400 via-rose-400 to-pink-500",
    badge: "bg-gradient-to-r from-orange-500 to-pink-500",
    glow: "shadow-[0_0_32px_4px_rgba(244,114,182,0.3)]",
    hoverGlow: "hover:shadow-[0_0_48px_8px_rgba(244,114,182,0.45)]",
    borderGlow: "hover:border-pink-400/70",
    dot: "#f472b6",
    tag: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  },
};

const useIntersection = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const ProjectCard = ({ project, index, meta }) => {
  const [ref, visible] = useIntersection(0.1);
  return (
    <div
      ref={ref}
      className={`
        group relative flex flex-col bg-gray-900/80 backdrop-blur-sm
        border border-gray-700/50 ${meta.borderGlow}
        rounded-2xl overflow-hidden
        ${meta.glow} ${meta.hoverGlow}
        transition-all duration-500 ease-out
        hover:scale-[1.035] hover:-translate-y-1
        card-reveal
      `}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s ease ${index * 120}ms, box-shadow 0.4s ease, border-color 0.4s ease, scale 0.3s ease`,
      }}
    >
      {/* Shimmer border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: `linear-gradient(135deg, transparent 40%, ${meta.dot}22 60%, transparent 80%)`,
          backgroundSize: "200% 200%",
          animation: "shimmer 2s linear infinite",
        }}
      />

      {/* Standard badge */}
      <div className={`absolute top-3 right-3 z-20 ${meta.badge} text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest uppercase shadow-lg`}>
        {project.standard}
      </div>

      {/* Level indicator dots */}
      <div className="absolute top-3 left-3 z-20 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: i < project.level ? meta.dot : "#374151",
              boxShadow: i < project.level ? `0 0 6px ${meta.dot}` : "none",
            }}
          />
        ))}
      </div>

      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={project.image || defaultPlaceholder}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        <h3 className={`text-lg font-extrabold bg-gradient-to-r ${meta.accent} bg-clip-text text-transparent leading-snug`}>
          {project.title}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech, idx) => (
            <span key={idx}
              className={`px-2 py-0.5 text-[10px] font-semibold rounded-full border ${meta.tag}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="pt-3 mt-auto flex flex-wrap gap-2">
          <a
            href={project.liveLinks.primary}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 min-w-[100px] text-center px-4 py-2 rounded-full bg-gradient-to-r ${meta.accent} text-gray-900 text-xs font-bold shadow-md hover:scale-105 hover:brightness-110 transition-all duration-200`}
          >
            Live Demo ⚡
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[100px] text-center px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-gray-200 text-xs font-bold hover:bg-gray-700 hover:scale-105 transition-all duration-200"
          >
            GitHub 🧩
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [headerRef, headerVisible] = useIntersection(0.2);

  // Group projects by standard, preserving order
  const grouped = STANDARD_ORDER.reduce((acc, std) => {
    const items = projectsData.filter((p) => p.standard === std);
    if (items.length > 0) acc.push({ standard: std, projects: items });
    return acc;
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-[120px] animate-orb" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)" }} />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full blur-[100px] animate-orb delay-500" style={{ background: "radial-gradient(circle, rgba(20,184,166,0.15), transparent 70%)" }} />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full blur-[90px] animate-orb delay-300" style={{ background: "radial-gradient(circle, rgba(244,114,182,0.13), transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center space-y-4 mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-gray-500">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500" />
            <div className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_2px_rgba(167,139,250,0.8)]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500" />
          </div>
        </div>

        {/* Standard Sections */}
        {grouped.map(({ standard, projects }) => {
          const meta = STANDARD_META[standard];
          return (
            <div key={standard} className="mb-20">
              {/* Section Label */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-px flex-1 bg-gradient-to-r ${meta.accent} opacity-30`} />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: meta.dot, boxShadow: `0 0 10px 3px ${meta.dot}80` }} />
                  <span className={`text-xs font-black tracking-[0.25em] uppercase bg-gradient-to-r ${meta.accent} bg-clip-text text-transparent`}>
                    {meta.label}
                  </span>
                  <div className="w-2 h-2 rounded-full" style={{ background: meta.dot, boxShadow: `0 0 10px 3px ${meta.dot}80` }} />
                </div>
                <div className={`h-px flex-1 bg-gradient-to-l ${meta.accent} opacity-30`} />
              </div>

              {/* Grid — 4 cols desktop, 2 cols mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} meta={meta} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes orb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-30px) scale(1.08); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: 200% 200%; }
          100% { background-position: -200% -200%; }
        }
        .animate-orb { animation: orb 8s ease-in-out infinite; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
