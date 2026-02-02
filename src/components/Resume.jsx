// Resume.jsx - With subtle background animations (birds flying) and matching colors
import { useState, useEffect } from 'react';
import resumeData from '../data/Resume.js';

export default function Resume() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeStation, setActiveStation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);

            const sections = ['objective', 'education', 'projects', 'skills'];
            const sectionElements = sections.map((id) =>
                document.getElementById(id)
            );

            sectionElements.forEach((el, idx) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    setActiveStation(idx);
                }
            });
        };

        handleScroll(); // Call once on mount
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDownloadPage = () => window.print();

    // Generate birds/particles for background
    const birds = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 8,
    }));

    return (
        <div className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
            
            {/* Animated Background - Matching Experience.jsx style */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle gradient orbs */}
                <div className="absolute top-16 left-10 w-40 h-40 bg-orange-500/15 dark:bg-orange-400/15 rounded-full blur-3xl animate-orb"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500/10 dark:bg-red-400/10 rounded-full blur-3xl animate-orb-delayed"></div>

                {/* Flying Birds/Particles */}
                {birds.map((bird) => (
                    <div
                        key={bird.id}
                        className="absolute animate-bird-fly"
                        style={{
                            left: `${bird.left}%`,
                            top: '-20px',
                            animationDelay: `${bird.delay}s`,
                            animationDuration: `${bird.duration}s`,
                        }}
                    >
                        {/* Bird body */}
                        <div className="relative w-3 h-2 bg-orange-400/20 dark:bg-orange-300/15 rounded-full">
                            {/* Wings */}
                            <div className="absolute -left-2 top-0 w-4 h-1 bg-orange-400/15 dark:bg-orange-300/10 rounded-full animate-wing-left"></div>
                            <div className="absolute -right-2 top-0 w-4 h-1 bg-orange-400/15 dark:bg-orange-300/10 rounded-full animate-wing-right"></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">

                {/* ================= HEADER ================= */}
                <header className="mb-16 relative text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400 bg-clip-text text-transparent mb-3 animate-fade-in">
                        {resumeData.header.name}
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-slate-700 dark:text-slate-300 text-sm animate-slide-up">
                        <a
                            href={`mailto:${resumeData.header.email}`}
                            className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
                        >
                            {resumeData.header.email}
                        </a>
                        <span className="hidden md:inline">•</span>
                        <span>{resumeData.header.phone}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{resumeData.header.location}</span>
                    </div>

                    <div className="flex gap-4 mt-4 justify-center md:justify-start animate-slide-up">
                        <a
                            href="https://github.com/vikash1630"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-all duration-300 hover:scale-110"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mundakar-vikash-0a8a6435b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-all duration-300 hover:scale-110"
                        >
                            Linked In ↗
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start md:absolute md:right-0 md:top-0 print:hidden">
                        <button
                            onClick={handleDownloadPage}
                            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm"
                        >
                            Print Page
                        </button>
                        <a
                            href="/MyResume.pdf"
                            download
                            className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm"
                        >
                            <span>📄</span>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </header>

                {/* ================= LAYOUT ================= */}
                <div className="relative flex gap-16">

                    {/* ===== Bow and Arrow Track ===== */}
                    <aside className="hidden md:block w-24 relative print:hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
                        <div className="absolute top-0 bottom-0 left-0 right-0" style={{ height: '100%' }}>
                            {/* Bowstring - extends full page height */}
                            <div className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 -translate-x-1/2 opacity-60" style={{ height: 'calc(100% - 10px)' }} />

                            {/* Decorative Bow Curves */}
                            <div className="absolute left-1/2 top-0 w-16 h-32 border-l-2 border-amber-500 dark:border-amber-400 rounded-bl-full -translate-x-8 opacity-40" />
                            <div className="absolute left-1/2 w-16 h-32 border-l-2 border-red-500 dark:border-red-400 rounded-tl-full -translate-x-8 opacity-40" style={{ bottom: '10px' }} />

                            {/* Arrow (moves with scroll along entire page) */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out"
                                style={{ 
                                    top: `calc(${scrollProgress}% - 10px)`,
                                    maxHeight: 'calc(100% - 20px)'
                                }}
                            >
                                <div className="relative">
                                    {/* Arrow tip */}
                                    <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-12 border-b-orange-600 dark:border-b-orange-400 rotate-180 -mb-1" />
                                    {/* Arrow shaft */}
                                    <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 mx-auto" />
                                    {/* Arrow fletching */}
                                    <div className="flex gap-1 justify-center -mt-1">
                                        <div className="w-2 h-3 bg-red-500 dark:bg-red-400 rounded-sm transform -rotate-12" />
                                        <div className="w-2 h-3 bg-yellow-500 dark:bg-yellow-400 rounded-sm" />
                                        <div className="w-2 h-3 bg-red-500 dark:bg-red-400 rounded-sm transform rotate-12" />
                                    </div>
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-orange-400 dark:bg-orange-300 blur-xl opacity-30 animate-pulse" />
                                </div>
                            </div>

                            {/* Target Stations - distributed along full height */}
                            {['objective', 'education', 'projects', 'skills'].map((section, idx) => {
                                // Calculate position based on section's actual position on page
                                const sectionEl = typeof document !== 'undefined' ? document.getElementById(section) : null;
                                let topPosition = `${(idx + 1) * 20}%`; // default fallback
                                
                                if (sectionEl) {
                                    const rect = sectionEl.getBoundingClientRect();
                                    const scrollTop = window.scrollY;
                                    const sectionTop = rect.top + scrollTop;
                                    const pageHeight = document.documentElement.scrollHeight;
                                    const percentage = (sectionTop / pageHeight) * 100;
                                    topPosition = `${percentage}%`;
                                }
                                
                                return (
                                    <div
                                        key={idx}
                                        className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
                                        style={{ top: topPosition }}
                                    >
                                    {/* Outer ring */}
                                    <div
                                        className={`w-12 h-12 rounded-full border-4 transition-all duration-500 ${activeStation === idx
                                                ? 'border-orange-500 dark:border-orange-400 scale-110 shadow-lg shadow-orange-500/50'
                                                : 'border-slate-300 dark:border-slate-600'
                                            }`}
                                    >
                                        {/* Middle ring */}
                                        <div
                                            className={`w-full h-full rounded-full border-4 transition-all duration-500 ${activeStation === idx
                                                    ? 'border-red-500 dark:border-red-400 scale-75'
                                                    : 'border-slate-200 dark:border-slate-700'
                                                }`}
                                        >
                                            {/* Bullseye */}
                                            <div
                                                className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 ${activeStation === idx
                                                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500 scale-50 shadow-inner'
                                                        : 'bg-slate-100 dark:bg-slate-800 scale-50'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                            })}
                        </div>
                    </aside>

                    {/* ================= CONTENT ================= */}
                    <main className="flex-1 space-y-16">

                        {/* Objective */}
                        <section id="objective" className="animate-fade-in-up">
                            <Card title="Career Objective" color="orange">
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {resumeData.objective}
                                </p>
                            </Card>
                        </section>

                        {/* Education */}
                        <section id="education" className="animate-fade-in-up">
                            <Card title="Education" color="emerald">
                                {resumeData.education.map((edu, i) => (
                                    <div
                                        key={i}
                                        className="border-l-4 border-emerald-500 dark:border-emerald-400 pl-4 mb-6 hover:border-emerald-600 dark:hover:border-emerald-300 transition-all duration-300 hover:pl-6"
                                    >
                                        <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {edu.institution}
                                        </p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500">
                                            {edu.year}
                                        </p>
                                        {edu.percentage && (
                                            <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                                                Percentage: {edu.percentage}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </Card>
                        </section>

                        {/* Projects */}
                        <section id="projects" className="animate-fade-in-up">
                            <Card title="Projects" color="purple">
                                {resumeData.projects.map((p, i) => (
                                    <div
                                        key={i}
                                        className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 mb-8 hover:border-purple-600 dark:hover:border-purple-300 transition-all duration-300 hover:pl-6 group"
                                    >
                                        <div className="flex justify-between items-start">
                                            <a
                                                href={p.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-bold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 group-hover:translate-x-1 inline-block"
                                            >
                                                {p.title} ↗
                                            </a>
                                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                                {p.date}
                                            </span>
                                        </div>
                                        <p className="text-sm mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                                            {p.description}
                                        </p>
                                    </div>
                                ))}
                            </Card>
                        </section>

                        {/* Skills */}
                        <section id="skills" className="animate-fade-in-up">
                            <Card title="Skills" color="rose">
                                {Object.entries(resumeData.skills).map(([cat, list], i) => (
                                    <div key={i} className="mb-6">
                                        <h3 className="font-semibold mb-3 capitalize text-slate-800 dark:text-slate-200">
                                            {cat.replace(/([A-Z])/g, ' $1')}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {list.map((s, j) => (
                                                <span
                                                    key={j}
                                                    className="px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-slate-700 dark:to-slate-600 text-slate-800 dark:text-slate-200 rounded-lg text-sm hover:scale-110 hover:shadow-md transition-all duration-300 cursor-default border border-rose-200 dark:border-slate-600"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </Card>
                        </section>

                    </main>
                </div>
            </div>

            <style jsx>{`
                /* Orb Animations */
                @keyframes orb {
                    0%, 100% { 
                        transform: translateY(0) translateX(0); 
                        opacity: 0.5; 
                    }
                    50% { 
                        transform: translateY(-18px) translateX(8px); 
                        opacity: 0.7; 
                    }
                }

                @keyframes orb-delayed {
                    0%, 100% { 
                        transform: translateY(0) translateX(0); 
                        opacity: 0.4; 
                    }
                    50% { 
                        transform: translateY(20px) translateX(-10px); 
                        opacity: 0.6; 
                    }
                }

                /* Bird Flying Animation */
                @keyframes bird-fly {
                    0% {
                        transform: translateY(0) translateX(-30px);
                        opacity: 0;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) translateX(30px);
                        opacity: 0;
                    }
                }

                /* Wing Flapping Animations */
                @keyframes wing-left {
                    0%, 100% { 
                        transform: rotateY(0deg) translateY(0);
                        opacity: 0.3;
                    }
                    50% { 
                        transform: rotateY(20deg) translateY(-1px);
                        opacity: 0.5;
                    }
                }

                @keyframes wing-right {
                    0%, 100% { 
                        transform: rotateY(0deg) translateY(0);
                        opacity: 0.3;
                    }
                    50% { 
                        transform: rotateY(-20deg) translateY(-1px);
                        opacity: 0.5;
                    }
                }

                /* Basic Animations */
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Animation Classes */
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out 0.2s backwards;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }

                .animate-orb {
                    animation: orb 6s ease-in-out infinite;
                }

                .animate-orb-delayed {
                    animation: orb-delayed 8s ease-in-out infinite;
                }

                .animate-bird-fly {
                    animation: bird-fly linear infinite;
                }

                .animate-wing-left {
                    animation: wing-left 0.4s ease-in-out infinite;
                }

                .animate-wing-right {
                    animation: wing-right 0.4s ease-in-out infinite 0.2s;
                }

                /* Mobile Optimization */
                @media (max-width: 768px) {
                    .animate-bird-fly {
                        animation-duration: 15s;
                    }
                }

                /* Print Styles */
                @media print {
                    .animate-orb,
                    .animate-orb-delayed,
                    .animate-bird-fly {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}

/* ================= REUSABLE CARD ================= */
function Card({ title, color, children }) {
    const colorMap = {
        orange: 'from-orange-500 to-red-500',
        emerald: 'from-emerald-500 to-teal-500',
        purple: 'from-purple-500 to-pink-500',
        rose: 'from-rose-500 to-pink-500',
    };

    return (
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <span className={`w-1.5 h-10 bg-gradient-to-b ${colorMap[color]} rounded-full`} />
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                    {title}
                </span>
            </h2>
            {children}
        </div>
    );
}