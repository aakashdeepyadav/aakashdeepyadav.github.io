import { ExternalLink, Github, TrendingUp, ArrowRight } from "lucide-react";
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
    live: "https://career-recommendation-system.vercel.app",
    timeline: "Oct 2025 – Nov 2025",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "#00d4ff",
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
    live: "https://expense-tracker-firebase.vercel.app",
    timeline: "May 2025 – Jun 2025",
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "#7c3aed",
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
    gradient: "from-orange-500/20 to-amber-500/20",
    accent: "#f97316",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 section-divider">
    <div className="wrapper">
      {/* Header */}
      <motion.div {...fadeUp()} className="mb-16">
        <p className="text-cyan-400 font-semibold text-sm tracking-[0.2em] uppercase mb-3">Work</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-slate-500 text-lg max-w-xl">
          Explore my recent work — full-stack apps, AI integrations, and more
        </p>
      </motion.div>

      {/* Cards */}
      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.article key={i} {...fadeUp(i * 0.1)} className="glow-card group">
            <div className="relative p-6 sm:p-8">
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient} rounded-t-2xl`} />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.timeline}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/30 text-slate-500 hover:text-white hover:border-cyan-500/30 transition-all"
                    title="Source Code">
                    <Github size={16} />
                  </a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/30 text-slate-500 hover:text-white hover:border-cyan-500/30 transition-all"
                    title="Live Demo">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>

              {/* Results */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: p.accent }}>
                  <TrendingUp size={14} /> Key Results
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {p.results.map((r, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <span style={{ color: p.accent }} className="mt-0.5 flex-shrink-0">✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-slate-800/60 text-slate-500 border border-slate-700/30 hover:text-white hover:border-slate-600 transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <motion.div {...fadeUp(0.4)} className="text-center mt-14">
        <a href="https://github.com/aakashdeepyadav" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow-outline">
          <Github size={18} /> See All on GitHub <ArrowRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
