// Projects.jsx — S+++ Level | Full dark/light mode | 3-2-1 responsive grid
import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "../data/projects";

const defaultPlaceholder =
  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop";

const STANDARD_ORDER = ["Industry", "Production", "Advanced"];

const STANDARD_META = {
  Industry: {
    label: "Industry Grade",
    gradientLight: "from-indigo-600 via-violet-600 to-purple-700",
    gradientDark:  "from-cyan-400 via-blue-500 to-violet-500",
    badgeLight:    "from-indigo-500 to-violet-600",
    badgeDark:     "from-cyan-400 to-violet-500",
    dotLight: "#6366f1",
    dotDark:  "#818cf8",
    rgbLight: "99,102,241",
    rgbDark:  "129,140,248",
    tagLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
    tagDark:  "bg-violet-500/15 text-violet-300 border-violet-500/30",
    glowLight: "rgba(99,102,241,0.15)",
    glowDark:  "rgba(99,102,241,0.4)",
    accentLight: "#6366f1",
    accentDark:  "#818cf8",
  },
  Production: {
    label: "Production Ready",
    gradientLight: "from-emerald-600 via-teal-600 to-cyan-700",
    gradientDark:  "from-emerald-400 via-teal-400 to-cyan-400",
    badgeLight:    "from-emerald-500 to-teal-600",
    badgeDark:     "from-emerald-400 to-cyan-400",
    dotLight: "#059669",
    dotDark:  "#2dd4bf",
    rgbLight: "5,150,105",
    rgbDark:  "45,212,191",
    tagLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tagDark:  "bg-teal-500/15 text-teal-300 border-teal-500/30",
    glowLight: "rgba(5,150,105,0.12)",
    glowDark:  "rgba(20,184,166,0.4)",
    accentLight: "#059669",
    accentDark:  "#2dd4bf",
  },
  Advanced: {
    label: "Advanced",
    gradientLight: "from-rose-500 via-pink-600 to-fuchsia-700",
    gradientDark:  "from-orange-400 via-rose-400 to-pink-500",
    badgeLight:    "from-rose-500 to-pink-600",
    badgeDark:     "from-orange-400 to-pink-500",
    dotLight: "#e11d48",
    dotDark:  "#f472b6",
    rgbLight: "225,29,72",
    rgbDark:  "244,114,182",
    tagLight: "bg-rose-50 text-rose-700 border-rose-200",
    tagDark:  "bg-pink-500/15 text-pink-300 border-pink-500/30",
    glowLight: "rgba(225,29,72,0.10)",
    glowDark:  "rgba(244,114,182,0.35)",
    accentLight: "#e11d48",
    accentDark:  "#f472b6",
  },
};

const useIntersection = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const useIsDark = () => {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark") ||
          window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => { obs.disconnect(); mq.removeEventListener("change", handler); };
  }, []);
  return dark;
};

/* ── Project Card ────────────────────────────────────────────── */
const ProjectCard = ({ project, index, meta }) => {
  const [ref, visible] = useIntersection(0.08);
  const [hovered, setHovered] = useState(false);
  const dark = useIsDark();

  const dot     = dark ? meta.dotDark     : meta.dotLight;
  const rgb     = dark ? meta.rgbDark     : meta.rgbLight;
  const glow    = dark ? meta.glowDark    : meta.glowLight;
  const accent  = dark ? meta.accentDark  : meta.accentLight;
  const gradient= dark ? meta.gradientDark: meta.gradientLight;
  const badge   = dark ? meta.badgeDark   : meta.badgeLight;
  const tag     = dark ? meta.tagDark     : meta.tagLight;

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms,
                     transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms`,
        background: dark
          ? "linear-gradient(145deg, #0d1117 0%, #0f172a 100%)"
          : "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
        border: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"}`,
        boxShadow: hovered
          ? `0 20px 60px -12px rgba(${rgb},${dark ? "0.45" : "0.2"}), 0 0 0 1px rgba(${rgb},0.3)`
          : `0 4px 24px -4px rgba(0,0,0,${dark ? "0.4" : "0.08"})`,
        willChange: "transform, box-shadow",
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${dot}, transparent)` }}
      />

      {/* Corner ticks */}
      {[["top-0 left-0", "top-0 left-0 w-4 h-[1.5px]", "top-0 left-0 w-[1.5px] h-4"],
        ["bottom-0 right-0", "bottom-0 right-0 w-4 h-[1.5px]", "bottom-0 right-0 w-[1.5px] h-4"]
      ].map(([wrap, h, v], ci) => (
        <div key={ci} className={`absolute ${wrap} z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{ transitionDelay: `${ci * 60}ms` }}>
          <div className={`absolute ${h}`} style={{ background: dot }} />
          <div className={`absolute ${v}`} style={{ background: dot }} />
        </div>
      ))}

      {/* Badge */}
      <div className={`absolute top-3 right-3 z-20 bg-gradient-to-r ${badge} text-white text-[9px] font-black px-2.5 py-1 rounded-full tracking-[0.15em] uppercase`}
        style={{ boxShadow: `0 4px 12px rgba(${rgb},0.4)` }}>
        {project.standard}
      </div>

      {/* Level dots */}
      <div className="absolute top-3 left-3 z-20 flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full transition-all duration-500"
            style={{
              background: i < project.level ? dot : dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              boxShadow: i < project.level ? `0 0 6px ${dot}` : "none",
              transform: hovered && i < project.level ? `scale(${1.3 + i * 0.05})` : "scale(1)",
              transitionDelay: `${i * 50}ms`,
            }} />
        ))}
      </div>

      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img
          src={project.image || defaultPlaceholder}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.1]"
          style={{
            filter: dark
              ? `brightness(${hovered ? 0.65 : 0.5}) saturate(${hovered ? 1.4 : 1.1})`
              : `brightness(${hovered ? 0.88 : 0.95}) saturate(${hovered ? 1.2 : 1.0})`,
          }}
        />
        <div className={`absolute inset-0 ${dark
          ? "bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent"
          : "bg-gradient-to-t from-white/80 via-white/10 to-transparent"}`} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 space-y-3">
        <h3
          className={`font-black text-base leading-tight bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          style={{ fontFamily: "'Syne', 'Clash Display', sans-serif" }}
        >
          {project.title}
        </h3>

        <p className={`text-[12px] leading-relaxed line-clamp-3 ${dark ? "text-gray-400" : "text-gray-500"}`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${tag} tracking-wide`}>
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="pt-3 mt-auto flex gap-2.5">
          <a href={project.liveLinks.primary} target="_blank" rel="noreferrer"
            className={`flex-1 min-w-0 text-center px-3 py-2.5 rounded-xl bg-gradient-to-r ${gradient} text-white text-[11px] font-black tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95`}
            style={{ boxShadow: `0 6px 20px -4px rgba(${rgb},${dark ? "0.5" : "0.35"})` }}>
            Live Demo ⚡
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer"
            className={`flex-1 min-w-0 text-center px-3 py-2.5 rounded-xl text-[11px] font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95
              ${dark
                ? "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                : "bg-black/5 border border-black/10 text-gray-600 hover:bg-black/10 hover:text-gray-900"}`}>
            GitHub 🧩
          </a>
        </div>
      </div>

      {/* Ghost index number */}
      <div
        className="absolute bottom-4 right-4 text-5xl font-black pointer-events-none select-none leading-none transition-all duration-500"
        style={{
          fontFamily: "'Syne', monospace",
          color: dark ? `rgba(${rgb},0.08)` : `rgba(${rgb},0.06)`,
          transform: hovered ? "scale(1.1) translateY(-2px)" : "scale(1)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </article>
  );
};

/* ── Section header divider ──────────────────────────────────── */
const TierDivider = ({ meta }) => {
  const [ref, visible] = useIntersection(0.2);
  const dark = useIsDark();
  const dot      = dark ? meta.dotDark     : meta.dotLight;
  const gradient = dark ? meta.gradientDark: meta.gradientLight;

  return (
    <div
      ref={ref}
      className="flex items-center gap-4 mb-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${dot}60)` }} />
      <div className="flex items-center gap-2.5 flex-shrink-0">
        <div className="relative w-2 h-2">
          <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: dot }} />
          <div className="relative w-2 h-2 rounded-full" style={{ background: dot, boxShadow: `0 0 10px 2px ${dot}70` }} />
        </div>
        <span
          className={`text-[10px] font-black tracking-[0.28em] uppercase bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {meta.label}
        </span>
        <div className="relative w-2 h-2">
          <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: dot, animationDelay: "0.6s" }} />
          <div className="relative w-2 h-2 rounded-full" style={{ background: dot, boxShadow: `0 0 10px 2px ${dot}70` }} />
        </div>
      </div>
      <div className="h-px flex-1" style={{ background: `linear-gradient(270deg, transparent, ${dot}60)` }} />
    </div>
  );
};

/* ── Main Component ──────────────────────────────────────────── */
const Projects = () => {
  const [headerRef, headerVisible] = useIntersection(0.15);
  const dark = useIsDark();

  const grouped = STANDARD_ORDER.reduce((acc, std) => {
    const items = projectsData.filter((p) => p.standard === std);
    if (items.length > 0) acc.push({ standard: std, projects: items });
    return acc;
  }, []);

  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-8 lg:px-16 overflow-hidden transition-colors duration-300"
      style={{
        background: dark
          ? "linear-gradient(180deg, #020408 0%, #060d1a 50%, #020408 100%)"
          : "linear-gradient(180deg, #f0f4ff 0%, #ffffff 50%, #f5f3ff 100%)",
      }}
    >
      {/* ── Background system ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: dark
            ? `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }} />

        {/* Dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: dark
            ? `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`
            : `radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          backgroundPosition: "22px 22px",
        }} />

        {/* Orbs */}
        {[
          { cls: "-top-40 -left-40 w-[500px] h-[500px]", delay: "0s",
            bg: dark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.07)" },
          { cls: "top-1/2 -right-40 w-[420px] h-[420px]", delay: "-6s",
            bg: dark ? "rgba(20,184,166,0.10)" : "rgba(5,150,105,0.06)" },
          { cls: "bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px]", delay: "-11s",
            bg: dark ? "rgba(244,114,182,0.09)" : "rgba(225,29,72,0.05)" },
        ].map((o, i) => (
          <div key={i} className={`absolute ${o.cls} rounded-full orb-float`}
            style={{
              background: `radial-gradient(circle, ${o.bg} 0%, transparent 70%)`,
              animationDelay: o.delay,
            }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-24"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: dark ? "rgba(99,102,241,0.5)" : "rgba(99,102,241,0.35)" }} />
            <p className="text-[10px] font-black tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Syne', sans-serif", color: dark ? "#6366f1" : "#4f46e5" }}>
              Portfolio
            </p>
            <div className="h-px w-10" style={{ background: dark ? "rgba(99,102,241,0.5)" : "rgba(99,102,241,0.35)" }} />
          </div>

          {/* Title */}
          <div className="mb-3">
            <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[0.88] tracking-tight"
              style={{ fontFamily: "'Syne', 'Cabinet Grotesk', sans-serif" }}>
              <span className={`block ${dark
                ? "bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400"
                : "bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600"} bg-clip-text text-transparent`}>
                Featured
              </span>
              <span className="block mt-1 relative"
                style={{
                  WebkitTextStroke: dark ? "1.5px rgba(255,255,255,0.08)" : "1.5px rgba(0,0,0,0.08)",
                  color: "transparent",
                  letterSpacing: "-0.02em",
                }}>
                Projects
              </span>
            </h2>
          </div>

          {/* Sub */}
          <p className="text-sm sm:text-base max-w-md mx-auto leading-relaxed"
            style={{ color: dark ? "#6b7280" : "#9ca3af" }}>
            Engineered at scale. Refined in every pixel.
          </p>

          {/* Decorative rule */}
          <div className="flex items-center justify-center gap-2 mt-7">
            <div className="h-px w-20" style={{ background: dark
              ? "linear-gradient(90deg, transparent, rgba(99,102,241,0.5))"
              : "linear-gradient(90deg, transparent, rgba(99,102,241,0.3))" }} />
            <div className="flex gap-1.5 items-center">
              {[6, 20, 6].map((w, i) => (
                <div key={i} className="h-1 rounded-full" style={{
                  width: `${w}px`,
                  background: i === 1
                    ? dark ? "linear-gradient(90deg, #67e8f9, #818cf8)" : "linear-gradient(90deg, #6366f1, #a855f7)"
                    : dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
                }} />
              ))}
            </div>
            <div className="h-px w-20" style={{ background: dark
              ? "linear-gradient(270deg, transparent, rgba(99,102,241,0.5))"
              : "linear-gradient(270deg, transparent, rgba(99,102,241,0.3))" }} />
          </div>
        </div>

        {/* ── Project Groups ── */}
        {grouped.map(({ standard, projects }) => {
          const meta = STANDARD_META[standard];
          return (
            <div key={standard} className="mb-24 last:mb-0">
              <TierDivider meta={meta} />

              {/*
                ┌─────────────────────────────────────────┐
                │  Mobile  : 1 col  (grid-cols-1)         │
                │  Tablet  : 2 cols (sm:grid-cols-2)      │
                │  Desktop : 3 cols (lg:grid-cols-3)      │
                └─────────────────────────────────────────┘
              */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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

      {/* ── Font import + keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&display=swap');

        @keyframes orb-float-keys {
          0%,100% { transform: translateY(0px) scale(1); }
          40%      { transform: translateY(-50px) scale(1.06); }
          70%      { transform: translateY(22px) scale(0.96); }
        }
        .orb-float {
          animation: orb-float-keys 14s ease-in-out infinite;
        }

        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping { animation: ping 1.8s cubic-bezier(0,0,0.2,1) infinite; }

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
