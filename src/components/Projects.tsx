import { ExternalLink, Github, TrendingUp, ArrowRight, Layers } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
});

const projects = [
  {
    title: "Student Career Recommendation System",
    desc: "ML-powered platform that profiles students across 20+ attributes and recommends personalized career paths. Microservice architecture with React frontend, Node.js backend, and FastAPI ML service.",
    results: [
      "Silhouette Score ~0.82 using KMeans++ with auto-selection",
      "25+ career profiles with cosine similarity matching",
      "Sub-second real-time inference via JWT-secured APIs",
      "2D/3D visualizations with PCA and UMAP",
    ],
    tech: ["React.js", "Node.js", "FastAPI", "Python", "MongoDB", "Scikit-Learn"],
    github: "https://github.com/aakashdeepyadav",
    live: "https://student-career-recommendation-system.vercel.app/",
    timeline: "Oct 2025 – Nov 2025",
    accent: "#00d4ff",
    emoji: "🧠",
  },
  {
    title: "Shared Expense Tracker",
    desc: "Real-time group expense tracking for PGs and apartments. Firebase authentication and real-time updates with automated settlement logic.",
    results: [
      "Firebase Auth + role-based access control",
      "Live dashboard with sub-100ms Firestore listeners",
      "Automated 'who owes whom' settlement",
      "90% reduction in manual reconciliation",
    ],
    tech: ["React.js", "Express.js", "Firebase", "JavaScript", "Firestore"],
    github: "https://github.com/aakashdeepyadav",
    live: "https://shared-expense-tracker-web.vercel.app/",
    timeline: "May 2025 – Jun 2025",
    accent: "#7c3aed",
    emoji: "💰",
  },
  {
    title: "Time Management AI Coach",
    desc: "LLM-powered productivity assistant with Pomodoro timers, task planners, and weekly schedulers. Tracks productivity metrics and provides personalized coaching.",
    results: [
      "Chat interface powered by Claude/GPT for coaching",
      "Integrated Pomodoro, task planner, and calendar",
      "Real-time productivity tracking & visualization",
      "30–40% reported improvement in productivity",
    ],
    tech: ["React.js", "Node.js", "LLM APIs", "Python", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/aakashdeepyadav",
    live: "https://ai-productivity-coach.vercel.app",
    timeline: "Ongoing",
    accent: "#f97316",
    emoji: "⏱️",
  },
];

const Projects = () => (
  <section id="projects" className="relative py-28 section-divider overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--dot-color) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[140px]" />
    </div>

    <div className="wrapper relative z-10">
      {/* Header */}
      <motion.div {...fadeUp()} className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <Layers size={18} className="text-cyan-400" />
          </div>
          <p className="text-cyan-400 font-semibold text-sm tracking-[0.2em] uppercase">Work</p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold theme-text-heading mb-4">Featured Projects</h2>
        <p className="theme-text-muted text-lg max-w-xl">
          Explore my recent work — full-stack apps, AI integrations, and more
        </p>
      </motion.div>

      {/* Cards */}
      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.article key={i} {...fadeUp(i * 0.12)} className="group">
            <div className="glow-card">
              <div className="relative p-6 sm:p-8">
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
                />

                {/* Header with emoji */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <motion.span
                      className="text-3xl flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {p.emoji}
                    </motion.span>
                    <div>
                      <h3 className="text-xl font-bold theme-text-heading mb-1 group-hover:text-cyan-400 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm theme-text-faint">{p.timeline}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <motion.a
                      href={p.github} target="_blank" rel="noopener noreferrer"
                      className="p-2.5 rounded-xl theme-bg-tag theme-text-muted hover:text-cyan-400 transition-all"
                      style={{ border: "1px solid var(--border-tag)" }}
                      title="Source Code"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a
                      href={p.live} target="_blank" rel="noopener noreferrer"
                      className="p-2.5 rounded-xl theme-bg-tag theme-text-muted hover:text-cyan-400 transition-all"
                      style={{ border: "1px solid var(--border-tag)" }}
                      title="Live Demo"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Description */}
                <p className="theme-text-secondary text-sm leading-relaxed mb-6">{p.desc}</p>

                {/* Results with visual bar */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: p.accent }}>
                    <TrendingUp size={14} /> Key Results
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {p.results.map((r, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm theme-text-secondary">
                        <span
                          className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] mt-0.5 flex-shrink-0 border"
                          style={{
                            color: p.accent,
                            borderColor: `${p.accent}30`,
                            background: `${p.accent}10`,
                          }}
                        >
                          ✓
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech + Live link */}
                <div className="flex flex-wrap items-center gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-icon px-3 py-1.5 text-xs rounded-full theme-bg-tag theme-text-muted theme-text-heading-hover transition-colors cursor-default" style={{ border: "1px solid var(--border-tag)" }}>
                      {t}
                    </span>
                  ))}
                  <a
                    href={p.live} target="_blank" rel="noopener noreferrer"
                    className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:theme-text-heading"
                    style={{ color: p.accent }}
                  >
                    View Live <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <motion.div {...fadeUp(0.4)} className="text-center mt-16">
        <a href="https://github.com/aakashdeepyadav" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-outline">
          <Github size={18} /> See All on GitHub <ArrowRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
