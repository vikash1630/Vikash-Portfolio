// Projects.jsx — Upgraded | Bubble BG | Clash Display | Spring animations | Full dark/light
import React, { useEffect, useRef, useState, useCallback } from "react";
import { projectsData } from "../data/projects";

const defaultPlaceholder =
  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop";

const STANDARD_ORDER = ["Industry", "Production", "Advanced"];

const STANDARD_META = {
  Industry: {
    label: "Industry Grade",
    gradientLight: "from-indigo-600 via-violet-600 to-purple-700",
    gradientDark:  "from-cyan-300 via-blue-400 to-violet-400",
    badgeLight:    "from-indigo-500 to-violet-600",
    badgeDark:     "from-cyan-400 to-violet-500",
    dotLight: "#6366f1",
    dotDark:  "#818cf8",
    rgbLight: "99,102,241",
    rgbDark:  "129,140,248",
    tagLight: "bg-indigo-50/80 text-indigo-700 border-indigo-200",
    tagDark:  "bg-violet-500/10 text-violet-300 border-violet-500/25",
    glowLight: "rgba(99,102,241,0.18)",
    glowDark:  "rgba(99,102,241,0.45)",
    accentLight: "#6366f1",
    accentDark:  "#818cf8",
    bubbleColor: "rgba(99,102,241,",
  },
  Production: {
    label: "Production Ready",
    gradientLight: "from-emerald-600 via-teal-600 to-cyan-700",
    gradientDark:  "from-emerald-300 via-teal-400 to-cyan-300",
    badgeLight:    "from-emerald-500 to-teal-600",
    badgeDark:     "from-emerald-400 to-cyan-400",
    dotLight: "#059669",
    dotDark:  "#2dd4bf",
    rgbLight: "5,150,105",
    rgbDark:  "45,212,191",
    tagLight: "bg-emerald-50/80 text-emerald-700 border-emerald-200",
    tagDark:  "bg-teal-500/10 text-teal-300 border-teal-500/25",
    glowLight: "rgba(5,150,105,0.14)",
    glowDark:  "rgba(20,184,166,0.42)",
    accentLight: "#059669",
    accentDark:  "#2dd4bf",
    bubbleColor: "rgba(20,184,166,",
  },
  Advanced: {
    label: "Advanced",
    gradientLight: "from-rose-500 via-pink-600 to-fuchsia-700",
    gradientDark:  "from-orange-300 via-rose-400 to-pink-400",
    badgeLight:    "from-rose-500 to-pink-600",
    badgeDark:     "from-orange-400 to-pink-500",
    dotLight: "#e11d48",
    dotDark:  "#f472b6",
    rgbLight: "225,29,72",
    rgbDark:  "244,114,182",
    tagLight: "bg-rose-50/80 text-rose-700 border-rose-200",
    tagDark:  "bg-pink-500/10 text-pink-300 border-pink-500/25",
    glowLight: "rgba(225,29,72,0.12)",
    glowDark:  "rgba(244,114,182,0.38)",
    accentLight: "#e11d48",
    accentDark:  "#f472b6",
    bubbleColor: "rgba(244,114,182,",
  },
};

/* ── Hooks ─────────────────────────────────────────────────────── */
const useIntersection = (threshold = 0.08) => {
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
    () =>
      document.documentElement.classList.contains("dark") ||
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

/* ── Floating Bubble ──────────────────────────────────────────── */
const Bubble = ({ style }) => (
  <div className="bubble-float absolute rounded-full pointer-events-none" style={style} />
);

/* ── Project Card ─────────────────────────────────────────────── */
const ProjectCard = ({ project, index, meta }) => {
  const [ref, visible] = useIntersection(0.06);
  const [hovered, setHovered] = useState(false);
  const dark = useIsDark();

  const dot     = dark ? meta.dotDark     : meta.dotLight;
  const rgb     = dark ? meta.rgbDark     : meta.rgbLight;
  const gradient= dark ? meta.gradientDark: meta.gradientLight;
  const badge   = dark ? meta.badgeDark   : meta.badgeLight;
  const tag     = dark ? meta.tagDark     : meta.tagLight;

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      className="group relative flex flex-col rounded-2xl overflow-hidden outline-none focus-visible:ring-2"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(52px) scale(0.95)",
        transition: `
          opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms,
          transform 0.75s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms,
          box-shadow 0.35s ease
        `,
        background: dark
          ? "linear-gradient(150deg, rgba(15,20,40,0.92) 0%, rgba(10,14,28,0.96) 100%)"
          : "linear-gradient(150deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"}`,
        boxShadow: hovered
          ? `0 24px 64px -12px rgba(${rgb},${dark ? "0.5" : "0.22"}),
             0 0 0 1px rgba(${rgb},0.28),
             0 4px 20px rgba(0,0,0,${dark ? "0.4" : "0.1"})`
          : `0 2px 20px rgba(0,0,0,${dark ? "0.35" : "0.07"}),
             0 1px 4px rgba(0,0,0,${dark ? "0.2" : "0.04"})`,
        willChange: "transform, box-shadow",
        "--ring-color": dot,
      }}
    >
      {/* Top shimmer bar */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] z-20 transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `linear-gradient(90deg, transparent 0%, ${dot} 40%, ${dot} 60%, transparent 100%)`,
        }}
      />

      {/* Glow inner highlight */}
      <div
        className="absolute inset-0 z-10 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(${rgb},${dark ? "0.12" : "0.06"}) 0%, transparent 70%)`,
        }}
      />

      {/* Badge */}
      <div
        className={`absolute top-3.5 right-3.5 z-30 bg-gradient-to-r ${badge} text-white font-black px-2.5 py-[4px] rounded-full tracking-[0.12em] uppercase`}
        style={{
          fontSize: "9px",
          boxShadow: `0 3px 12px rgba(${rgb},0.45), 0 0 0 1px rgba(255,255,255,0.1)`,
        }}
      >
        {project.standard}
      </div>

      {/* Level dots */}
      <div className="absolute top-3.5 left-3.5 z-30 flex gap-[5px] items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-500"
            style={{
              width: i < project.level ? "7px" : "5px",
              height: i < project.level ? "7px" : "5px",
              background: i < project.level ? dot : dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
              boxShadow: i < project.level ? `0 0 8px 1px ${dot}80` : "none",
              transitionDelay: `${i * 55}ms`,
              transform: hovered && i < project.level ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img
          src={project.image || defaultPlaceholder}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-[1000ms] ease-out group-hover:scale-[1.08]"
          style={{
            filter: dark
              ? `brightness(${hovered ? 0.6 : 0.45}) saturate(${hovered ? 1.5 : 1.1})`
              : `brightness(${hovered ? 0.85 : 0.92}) saturate(${hovered ? 1.25 : 1.0})`,
          }}
        />
        {/* Image overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: dark
              ? "linear-gradient(to top, rgba(10,14,28,0.98) 0%, rgba(10,14,28,0.45) 45%, transparent 100%)"
              : "linear-gradient(to top, rgba(248,250,252,0.95) 0%, rgba(248,250,252,0.2) 45%, transparent 100%)",
          }}
        />
        {/* Category chip on image */}
        {project.category && (
          <div
            className="absolute bottom-3 left-4 z-10 text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md"
            style={{
              background: dark ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              color: dot,
              border: `1px solid rgba(${rgb},0.3)`,
            }}
          >
            {project.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-5 pt-4 pb-5 space-y-3">
        {/* Title */}
        <h3
          className={`font-black text-[15px] leading-tight bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          style={{ fontFamily: "'Clash Display', 'Cabinet Grotesk', 'Syne', sans-serif" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-[12.5px] leading-relaxed line-clamp-3"
          style={{
            color: dark ? "rgba(156,163,175,0.9)" : "rgba(100,116,139,0.9)",
            fontFamily: "'DM Sans', 'Plus Jakarta Sans', sans-serif",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-[9px] py-[3px] text-[10px] font-bold rounded-full border ${tag} tracking-wide`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="pt-3 mt-auto flex gap-2.5">
          <a
            href={project.liveLinks?.primary || "#"}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 min-w-0 text-center px-3 py-2.5 rounded-xl bg-gradient-to-r ${gradient} text-white font-black tracking-wide transition-all duration-300 hover:scale-[1.04] hover:brightness-110 active:scale-[0.97]`}
            style={{
              fontSize: "11px",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: `0 5px 18px -4px rgba(${rgb},${dark ? "0.55" : "0.38"})`,
            }}
          >
            Live Demo ⚡
          </a>
          <a
            href={project.githubLink || "#"}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 min-w-0 text-center px-3 py-2.5 rounded-xl font-bold tracking-wide transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]`}
            style={{
              fontSize: "11px",
              fontFamily: "'DM Sans', sans-serif",
              background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
              border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              color: dark ? "rgba(209,213,219,0.9)" : "rgba(71,85,105,0.9)",
            }}
          >
            GitHub 🧩
          </a>
        </div>
      </div>

      {/* Ghost index */}
      <div
        className="absolute bottom-4 right-4 font-black pointer-events-none select-none leading-none transition-all duration-500"
        style={{
          fontFamily: "'Clash Display', monospace",
          fontSize: "48px",
          color: dark ? `rgba(${rgb},0.07)` : `rgba(${rgb},0.055)`,
          transform: hovered ? "scale(1.12) translateY(-3px)" : "scale(1)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </article>
  );
};

/* ── Tier Divider ─────────────────────────────────────────────── */
const TierDivider = ({ meta }) => {
  const [ref, visible] = useIntersection(0.2);
  const dark = useIsDark();
  const dot      = dark ? meta.dotDark      : meta.dotLight;
  const gradient = dark ? meta.gradientDark : meta.gradientLight;
  const rgb      = dark ? meta.rgbDark      : meta.rgbLight;

  return (
    <div
      ref={ref}
      className="flex items-center gap-4 mb-10 sm:mb-12"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${rgb},0.45))` }}
      />
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Pulse ring */}
        <div className="relative flex items-center justify-center w-4 h-4">
          <div className="absolute inset-0 rounded-full animate-ping-slow opacity-35" style={{ background: dot }} />
          <div className="relative w-2.5 h-2.5 rounded-full" style={{ background: dot, boxShadow: `0 0 12px 2px ${dot}80` }} />
        </div>
        <span
          className={`text-[10px] font-black tracking-[0.3em] uppercase bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          style={{ fontFamily: "'Clash Display', 'Syne', sans-serif" }}
        >
          {meta.label}
        </span>
        <div className="relative flex items-center justify-center w-4 h-4">
          <div className="absolute inset-0 rounded-full animate-ping-slow opacity-35" style={{ background: dot, animationDelay: "0.7s" }} />
          <div className="relative w-2.5 h-2.5 rounded-full" style={{ background: dot, boxShadow: `0 0 12px 2px ${dot}80` }} />
        </div>
      </div>
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(270deg, transparent, rgba(${rgb},0.45))` }}
      />
    </div>
  );
};

/* ── Animated Counter (header stat) ──────────────────────────── */
const StatPill = ({ value, label, dark }) => (
  <div
    className="flex flex-col items-center px-5 py-2.5 rounded-2xl"
    style={{
      background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
      border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
      backdropFilter: "blur(10px)",
    }}
  >
    <span
      className="font-black text-xl leading-none transition-colors duration-300"
      style={{
        fontFamily: "'Clash Display', sans-serif",
        // Changed to 'backgroundImage' to prevent the background clipping flash
        backgroundImage: dark
          ? "linear-gradient(135deg, #c4b5fd, #67e8f9)"
          : "linear-gradient(135deg, #6366f1, #06b6d4)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
    >
      {value}
    </span>
    <span
      className="text-[10px] font-semibold tracking-widest uppercase mt-0.5"
      style={{
        color: dark ? "rgba(156,163,175,0.7)" : "rgba(100,116,139,0.7)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {label}
    </span>
  </div>
);

/* ── Main Component ───────────────────────────────────────────── */
const Projects = () => {
  const [headerRef, headerVisible] = useIntersection(0.12);
  const dark = useIsDark();

  const grouped = STANDARD_ORDER.reduce((acc, std) => {
    const items = projectsData.filter((p) => p.standard === std);
    if (items.length > 0) acc.push({ standard: std, projects: items });
    return acc;
  }, []);

  const totalProjects = projectsData.length;

  /* ── Bubble definitions ── */
  const bubbles = [
    // Large slow background bubbles
    { w: 520, h: 520, top: "-8%",  left: "-6%",   color: "rgba(99,102,241,",  opacity: dark ? 0.1  : 0.065, dur: "22s", delay: "0s"   },
    { w: 420, h: 420, top: "15%",  right: "-5%",  color: "rgba(20,184,166,",  opacity: dark ? 0.09 : 0.055, dur: "26s", delay: "-8s"  },
    { w: 380, h: 380, top: "50%",  left: "30%",   color: "rgba(244,114,182,", opacity: dark ? 0.08 : 0.05,  dur: "30s", delay: "-14s" },
    { w: 300, h: 300, bottom: "5%",left: "-4%",   color: "rgba(245,158,11,",  opacity: dark ? 0.07 : 0.045, dur: "24s", delay: "-5s"  },
    { w: 260, h: 260, bottom: "12%",right: "8%",  color: "rgba(99,102,241,",  opacity: dark ? 0.08 : 0.05,  dur: "28s", delay: "-18s" },
    // Medium mid-layer bubbles
    { w: 160, h: 160, top: "25%",  left: "15%",   color: "rgba(168,85,247,",  opacity: dark ? 0.13 : 0.08,  dur: "18s", delay: "-3s"  },
    { w: 140, h: 140, top: "60%",  right: "18%",  color: "rgba(20,184,166,",  opacity: dark ? 0.12 : 0.07,  dur: "20s", delay: "-10s" },
    { w: 120, h: 120, top: "38%",  left: "55%",   color: "rgba(244,114,182,", opacity: dark ? 0.11 : 0.065, dur: "16s", delay: "-6s"  },
    // Small accent bubbles
    { w: 70,  h: 70,  top: "10%",  left: "42%",   color: "rgba(99,102,241,",  opacity: dark ? 0.18 : 0.1,   dur: "12s", delay: "-2s"  },
    { w: 56,  h: 56,  top: "72%",  left: "22%",   color: "rgba(245,158,11,",  opacity: dark ? 0.2  : 0.12,  dur: "10s", delay: "-7s"  },
    { w: 44,  h: 44,  top: "45%",  right: "12%",  color: "rgba(244,114,182,", opacity: dark ? 0.22 : 0.13,  dur: "9s",  delay: "-4s"  },
    { w: 36,  h: 36,  top: "82%",  right: "30%",  color: "rgba(20,184,166,",  opacity: dark ? 0.2  : 0.12,  dur: "11s", delay: "-15s" },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-8 lg:px-16 overflow-hidden"
      style={{
        background: dark
          // Starts exact match with Navbar's gray-900 (#111827) and fades into deep slate
          ? "linear-gradient(180deg, #111827 0%, #0f172a 45%, #0B1121 75%, #111827 100%)"
          // Starts exact match with Navbar's white (#ffffff) and fades into soft slate-50
          : "linear-gradient(180deg, #ffffff 0%, #f8fafc 45%, #f1f5f9 75%, #ffffff 100%)",
        transition: "background 0.4s ease",
      }}
    >
      {/* ── Background system ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />


        {/* Floating Bubbles */}
        {bubbles.map((b, i) => {
          const pos = {};
          if (b.top)    pos.top    = b.top;
          if (b.bottom) pos.bottom = b.bottom;
          if (b.left)   pos.left   = b.left;
          if (b.right)  pos.right  = b.right;

          return (
            <Bubble
              key={i}
              style={{
                width: b.w,
                height: b.h,
                ...pos,
                borderRadius: "50%",
                background: `radial-gradient(circle at 35% 35%, ${b.color}${b.opacity * 1.4}) 0%, ${b.color}${b.opacity}) 50%, transparent 75%)`,
                border: `1px solid ${b.color}${Math.min(b.opacity * 2.5, 0.35)})`,
                animationDuration: b.dur,
                animationDelay: b.delay,
                willChange: "transform",
                filter: `blur(${b.w > 200 ? "2px" : b.w > 100 ? "1px" : "0px"})`,
              }}
            />
          );
        })}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-20 sm:mb-24"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(44px)",
            transition: "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: dark ? "rgba(99,102,241,0.1)" : "rgba(99,102,241,0.08)",
              border: `1px solid ${dark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.2)"}`,
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-dot" />
            <p
              className="text-[10px] font-black tracking-[0.38em] uppercase"
              style={{
                fontFamily: "'Clash Display', 'Syne', sans-serif",
                color: dark ? "#818cf8" : "#4f46e5",
              }}
            >
              Portfolio
            </p>
          </div>

          {/* Main title */}
          <div className="mb-4">
            <h2
              className="font-black leading-[0.86] tracking-tight"
              style={{
                fontFamily: "'Clash Display', 'Cabinet Grotesk', sans-serif",
                fontSize: "clamp(3rem, 9vw, 6rem)",
              }}
            >
              <span
                className="block"
                style={{
                  // Changed 'background' to 'backgroundImage' to prevent the clipping flash
                  backgroundImage: dark
                    ? "linear-gradient(135deg, #c4b5fd 0%, #67e8f9 50%, #86efac 100%)"
                    : "linear-gradient(135deg, #4f46e5 0%, #0891b2 50%, #059669 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text", // Added standard property for broader support
                  WebkitTextFillColor: "transparent",
                  color: "transparent", // Fallback to ensure text stays transparent
                }}
              >
                Featured
              </span>
              <span
                className="block mt-1 relative transition-colors duration-300"
                style={{
                  // Increased stroke opacity and thickness for better visibility
                  WebkitTextStroke: dark ? "2px rgba(255, 255, 255, 0.35)" : "2px rgba(15, 23, 42, 0.6)",
                  // Added a very subtle fill instead of completely transparent
                  color: dark ? "rgba(255, 255, 255, 0.05)" : "rgba(15, 23, 42, 0.03)",
                  letterSpacing: "-0.02em",
                }}
              >
                Projects
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base max-w-sm mx-auto leading-relaxed mb-8"
            style={{
              color: dark ? "rgba(107,114,128,0.9)" : "rgba(100,116,139,0.9)",
              fontFamily: "'DM Sans', 'Plus Jakarta Sans', sans-serif",
            }}
          >
            Engineered at scale. Refined in every detail.
          </p>

          {/* Stats pills */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <StatPill value={totalProjects} label="Projects" dark={dark} />
            <StatPill value={STANDARD_ORDER.length} label="Categories" dark={dark} />
            <StatPill value="∞" label="Passion" dark={dark} />
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            <div className="h-px w-16"
              style={{
                background: dark
                  ? "linear-gradient(90deg, transparent, rgba(99,102,241,0.5))"
                  : "linear-gradient(90deg, transparent, rgba(99,102,241,0.3))",
              }}
            />
            <div className="flex gap-1.5 items-center">
              {[5, 22, 5].map((w, i) => (
                <div key={i} className="h-1 rounded-full" style={{
                  width: `${w}px`,
                  background: i === 1
                    ? dark
                      ? "linear-gradient(90deg, #818cf8, #67e8f9)"
                      : "linear-gradient(90deg, #6366f1, #06b6d4)"
                    : dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                }} />
              ))}
            </div>
            <div className="h-px w-16"
              style={{
                background: dark
                  ? "linear-gradient(270deg, transparent, rgba(99,102,241,0.5))"
                  : "linear-gradient(270deg, transparent, rgba(99,102,241,0.3))",
              }}
            />
          </div>
        </div>

        {/* ── Project Groups ── */}
        {grouped.map(({ standard, projects }) => {
          const meta = STANDARD_META[standard];
          return (
            <div key={standard} className="mb-20 last:mb-0">
              <TierDivider meta={meta} />
              {/*
                ┌────────────────────────────────────────────┐
                │  Mobile  : 1 col   (default)               │
                │  Tablet  : 2 cols  (sm:grid-cols-2)        │
                │  Desktop : 3 cols  (lg:grid-cols-3)        │
                └────────────────────────────────────────────┘
                Touch-friendly gap: 16px mobile → 20px tablet → 24px desktop
              */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
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

      {/* ── Font imports + keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Clash+Display:wght@500;600;700&display=swap');

        /* Clash Display via CDN fallback */
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap');

        /* Bubble float animation — smooth figure-8-ish drift */
        @keyframes bubble-drift {
          0%   { transform: translate(0px, 0px) scale(1); }
          20%  { transform: translate(8px, -18px) scale(1.02); }
          40%  { transform: translate(-6px, -30px) scale(0.98); }
          60%  { transform: translate(-14px, -12px) scale(1.03); }
          80%  { transform: translate(6px, 8px) scale(0.99); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .bubble-float {
          animation: bubble-drift var(--dur, 20s) ease-in-out infinite;
        }

        /* Slow ping for tier divider dots */
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.35; }
          50%       { transform: scale(2.2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Eyebrow dot pulse */
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }
        .animate-pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }

        /* Tag hover shimmer */
        .tag-shimmer {
          position: relative;
          overflow: hidden;
        }
        .tag-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .tag-shimmer:hover::after {
          transform: translateX(100%);
        }

        /* Card entrance — smoother on mobile with reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .bubble-float { animation: none; }
          .animate-ping-slow { animation: none; }
          .animate-pulse-dot { animation: none; }
        }

        /* Better text rendering */
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

        /* line-clamp utility */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile card active state (touch feedback) */
        @media (hover: none) {
          article:active {
            transform: scale(0.98) !important;
            transition: transform 0.15s ease !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
