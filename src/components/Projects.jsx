// Projects.jsx
import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "../data/projects";

const defaultPlaceholder =
  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop";

const STANDARD_ORDER = ["Industry", "Production", "Advanced"];

const STANDARD_META = {
  Industry: {
    label: "Industry Grade",
    accent: "from-cyan-400 via-blue-500 to-violet-600",
    badge: "bg-gradient-to-r from-cyan-500 to-violet-600",
    glow: "shadow-[0_0_32px_4px_rgba(99,102,241,0.35)]",
    hoverGlow: "hover:shadow-[0_0_64px_12px_rgba(99,102,241,0.55)]",
    borderGlow: "hover:border-violet-400/80",
    dot: "#818cf8",
    rgb: "99,102,241",
    tag: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    scanline: "rgba(99,102,241,0.06)",
    number: "text-violet-500/20",
  },
  Production: {
    label: "Production Ready",
    accent: "from-emerald-400 via-teal-400 to-cyan-500",
    badge: "bg-gradient-to-r from-emerald-500 to-cyan-500",
    glow: "shadow-[0_0_32px_4px_rgba(20,184,166,0.3)]",
    hoverGlow: "hover:shadow-[0_0_64px_12px_rgba(20,184,166,0.5)]",
    borderGlow: "hover:border-teal-400/80",
    dot: "#2dd4bf",
    rgb: "20,184,166",
    tag: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    scanline: "rgba(20,184,166,0.06)",
    number: "text-teal-500/20",
  },
  Advanced: {
    label: "Advanced",
    accent: "from-orange-400 via-rose-400 to-pink-500",
    badge: "bg-gradient-to-r from-orange-500 to-pink-500",
    glow: "shadow-[0_0_32px_4px_rgba(244,114,182,0.3)]",
    hoverGlow: "hover:shadow-[0_0_64px_12px_rgba(244,114,182,0.5)]",
    borderGlow: "hover:border-pink-400/80",
    dot: "#f472b6",
    rgb: "244,114,182",
    tag: "bg-pink-500/15 text-pink-300 border-pink-500/30",
    scanline: "rgba(244,114,182,0.06)",
    number: "text-pink-500/20",
  },
};

const useIntersection = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const ProjectCard = ({ project, index, meta }) => {
  const [ref, visible] = useIntersection(0.08);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative flex flex-col
        bg-[#080c14]/90 backdrop-blur-xl
        border border-gray-800/60 ${meta.borderGlow}
        rounded-2xl overflow-hidden
        ${meta.glow} ${meta.hoverGlow}
        transition-all duration-500 ease-out
        hover:scale-[1.028] hover:-translate-y-2
      `}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(48px) scale(0.97)",
        transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms,
                     transform 0.75s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms,
                     box-shadow 0.4s ease,
                     border-color 0.4s ease`,
      }}
    >
      {/* CRT scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            ${meta.scanline} 2px,
            ${meta.scanline} 4px
          )`,
        }}
      />

      {/* Corner accent marks — top-left */}
      <div className="absolute top-0 left-0 w-6 h-6 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-4 h-px" style={{ background: meta.dot }} />
        <div className="absolute top-0 left-0 w-px h-4" style={{ background: meta.dot }} />
      </div>
      {/* Corner accent marks — bottom-right */}
      <div className="absolute bottom-0 right-0 w-6 h-6 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 right-0 w-4 h-px" style={{ background: meta.dot }} />
        <div className="absolute bottom-0 right-0 w-px h-4" style={{ background: meta.dot }} />
      </div>

      {/* Floating card number */}
      <div
        className={`absolute bottom-4 right-5 z-10 text-6xl font-black pointer-events-none select-none leading-none ${meta.number}`}
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Standard badge */}
      <div
        className={`absolute top-3 right-3 z-20 ${meta.badge} text-white text-[9px] font-black px-2.5 py-1 rounded-full tracking-[0.2em] uppercase`}
        style={{ boxShadow: `0 0 12px rgba(${meta.rgb},0.5)` }}
      >
        {project.standard}
      </div>

      {/* Level dots */}
      <div className="absolute top-3 left-3 z-20 flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-500"
            style={{
              background: i < project.level ? meta.dot : "rgba(255,255,255,0.08)",
              boxShadow: i < project.level ? `0 0 8px 2px ${meta.dot}99` : "none",
              transform: hovered && i < project.level ? "scale(1.4)" : "scale(1)",
              transitionDelay: `${i * 60}ms`,
            }}
          />
        ))}
      </div>

      {/* Image with parallax-style overlay */}
      <div className="relative h-44 sm:h-48 overflow-hidden flex-shrink-0">
        <img
          src={project.image || defaultPlaceholder}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.12]"
          style={{ filter: hovered ? "brightness(0.6) saturate(1.3)" : "brightness(0.5) saturate(1.1)" }}
        />
        {/* Gradient fade to card bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/40 to-transparent" />

        {/* Animated scan line on hover */}
        <div
          className="absolute inset-x-0 h-px pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${meta.dot}, transparent)`,
            opacity: hovered ? 1 : 0,
            animation: hovered ? "scanDown 1.2s ease-in-out" : "none",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 pt-3 pb-5 space-y-2.5 relative z-10">
        <h3
          className={`text-[15px] sm:text-base font-black bg-gradient-to-r ${meta.accent} bg-clip-text text-transparent leading-tight`}
        >
          {project.title}
        </h3>

        <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-0.5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 text-[9px] sm:text-[10px] font-bold rounded-full border ${meta.tag} tracking-wide`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="pt-2 mt-auto flex gap-2">
          <a
            href={project.liveLinks.primary}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 min-w-0 text-center px-3 py-2 rounded-xl bg-gradient-to-r ${meta.accent} text-gray-950 text-[10px] sm:text-xs font-black tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95`}
            style={{ boxShadow: `0 4px 24px -4px rgba(${meta.rgb},0.5)` }}
          >
            Live Demo ⚡
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-0 text-center px-3 py-2 rounded-xl bg-transparent border border-gray-700/60 text-gray-400 text-[10px] sm:text-xs font-bold tracking-wide hover:bg-gray-800/60 hover:text-gray-200 hover:border-gray-600 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            GitHub 🧩
          </a>
        </div>
      </div>
    </div>
  );
};

/* ─── Section divider label ─────────────────────────────────── */
const SectionLabel = ({ meta }) => {
  const [ref, visible] = useIntersection(0.3);
  return (
    <div
      ref={ref}
      className="flex items-center gap-5 mb-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Left line with color bleed */}
      <div
        className="h-px flex-1 opacity-25"
        style={{
          background: `linear-gradient(90deg, transparent, ${meta.dot})`,
        }}
      />

      <div className="flex items-center gap-2.5 flex-shrink-0">
        {/* Pulsing dot */}
        <div className="relative w-2 h-2">
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: meta.dot, opacity: 0.4 }}
          />
          <div
            className="relative w-2 h-2 rounded-full"
            style={{ background: meta.dot, boxShadow: `0 0 12px 3px ${meta.dot}80` }}
          />
        </div>

        <span
          className={`text-[10px] font-black tracking-[0.3em] uppercase bg-gradient-to-r ${meta.accent} bg-clip-text text-transparent`}
        >
          {meta.label}
        </span>

        <div className="relative w-2 h-2">
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: meta.dot, opacity: 0.4, animationDelay: "0.5s" }}
          />
          <div
            className="relative w-2 h-2 rounded-full"
            style={{ background: meta.dot, boxShadow: `0 0 12px 3px ${meta.dot}80` }}
          />
        </div>
      </div>

      <div
        className="h-px flex-1 opacity-25"
        style={{
          background: `linear-gradient(270deg, transparent, ${meta.dot})`,
        }}
      />
    </div>
  );
};

/* ─── Main section ───────────────────────────────────────────── */
const Projects = () => {
  const [headerRef, headerVisible] = useIntersection(0.2);

  const grouped = STANDARD_ORDER.reduce((acc, std) => {
    const items = projectsData.filter((p) => p.standard === std);
    if (items.length > 0) acc.push({ standard: std, projects: items });
    return acc;
  }, []);

  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* ── Layered background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-[#050810] to-gray-950" />

        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(148,163,184,0.025) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(148,163,184,0.025) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            backgroundPosition: "20px 20px",
          }}
        />

        {/* Ambient orbs */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(99,102,241,0.12) 0%, transparent 65%)",
            animation: "floatOrb 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(20,184,166,0.1) 0%, transparent 65%)",
            animation: "floatOrb 15s ease-in-out infinite",
            animationDelay: "-5s",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(244,114,182,0.08) 0%, transparent 65%)",
            animation: "floatOrb 18s ease-in-out infinite",
            animationDelay: "-9s",
          }}
        />

        {/* Horizontal scan beam — very subtle */}
        <div
          className="absolute inset-x-0 h-px opacity-20"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.8) 50%, transparent 100%)",
            animation: "scanBeam 8s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-24"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500/60" />
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-500">
              Portfolio
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500/60" />
          </div>

          {/* Main heading — stacked for drama */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Featured
            </span>
            <span
              className="block text-gray-700 mt-1"
              style={{
                WebkitTextStroke: "1px rgba(148,163,184,0.15)",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Engineered for scale. Crafted with precision.
          </p>

          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: i === 1 ? "20px" : "6px",
                    height: "4px",
                    background: i === 1
                      ? "linear-gradient(90deg, #67e8f9, #818cf8)"
                      : "rgba(148,163,184,0.3)",
                  }}
                />
              ))}
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-violet-500/50 to-transparent" />
          </div>
        </div>

        {/* ── Project Groups ── */}
        {grouped.map(({ standard, projects }) => {
          const meta = STANDARD_META[standard];
          return (
            <div key={standard} className="mb-24 last:mb-0">
              <SectionLabel meta={meta} />

              {/*
                Desktop: 4 cols (lg:grid-cols-4)
                Tablet:  2 cols (sm:grid-cols-2)
                Mobile:  1 col  (grid-cols-1)
              */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    meta={meta}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Global keyframes ── */}
      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          33%       { transform: translateY(-40px) scale(1.05); }
          66%       { transform: translateY(20px) scale(0.97); }
        }

        @keyframes scanBeam {
          0%   { top: 15%; opacity: 0; }
          10%  { opacity: 0.15; }
          50%  { top: 75%; opacity: 0.15; }
          90%  { opacity: 0; }
          100% { top: 85%; opacity: 0; }
        }

        @keyframes scanDown {
          0%   { top: 0; opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Smooth animate-ping override — smaller, subtler */
        @keyframes ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        .animate-ping { animation: ping 1.8s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>
    </section>
  );
};

export default Projects;
