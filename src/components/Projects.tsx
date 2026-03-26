import { ExternalLink, Github, Layers } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay },
});

const projects = [
  {
    title: "Student Career Recommendation System",
    desc: "Career guidance app with a microservice setup — React frontend talks to a Node.js API, which routes requests to a FastAPI ML service. The ML model is trained on 20+ student attributes using Scikit-Learn.",
    tech: [
      "React.js",
      "Node.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "Scikit-Learn",
    ],
    github:
      "https://github.com/aakashdeepyadav/Student-Career-Recommendation-System",
    live: "https://student-career-recommendation-system.vercel.app/",
    screenshot: "/projects/Student_Career_Recommendation_System_Screenshot.png",
  },
  {
    title: "Shared Expense Tracker",
    desc: "Group expense management app with Firebase Auth, Firestore real-time sync, and an automated debt-settlement algorithm. Supports multiple groups, split types, and transaction history.",
    tech: ["React.js", "Express.js", "Firebase", "JavaScript", "Firestore"],
    github: "https://github.com/aakashdeepyadav/Shared-Expense-Tracker",
    live: "https://shared-expense-tracker-set.vercel.app/",
    screenshot: "/projects/shared_expense_tracker_screenshot.png",
  },
  {
    title: "Time Management AI Coach",
    desc: "Productivity app with LLM-powered coaching. Has Pomodoro timers, a drag-and-drop task board, auto-generated weekly schedules, and charts that track how productive you've been.",
    tech: [
      "React.js",
      "Node.js",
      "LLM APIs",
      "Python",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    github: "https://github.com/aakashdeepyadav/Time-Management-Coach",
    live: "https://time-management-coach.netlify.app/",
    screenshot: "/projects/Time_Management_Coach_Screenshot.png",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="relative py-28 section-divider overflow-hidden"
  >
    <div className="wrapper relative z-10">
      {/* Header with section number */}
      <motion.div {...fadeUp()} className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading mb-3">
          Featured Projects
        </h2>
        <p className="theme-text-muted text-base max-w-xl">
          Some things I've built recently
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article key={i} {...fadeUp(i * 0.08)} className="group">
            <div className="glass-card h-full flex flex-col overflow-hidden">
              {/* Screenshot */}
              <div
                className="relative h-48 overflow-hidden"
                style={{ backgroundColor: "var(--bg-card-alt)" }}
              >
                <img
                  src={p.screenshot}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    // Show fallback icon
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Fallback if no image */}
                <div
                  className="absolute inset-0 items-center justify-center hidden"
                  style={{ backgroundColor: "var(--bg-card-alt)" }}
                >
                  <Layers size={40} className="theme-text-faint opacity-40" />
                </div>
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                  style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                >
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-white transition-colors hover:scale-110 transform duration-200"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-white transition-colors hover:scale-110 transform duration-200"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                    title="Source Code"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold theme-text-heading mb-2 group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                <p className="theme-text-muted text-sm leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] rounded-lg theme-bg-tag theme-text-muted"
                      style={{ border: "1px solid var(--border-tag)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div
                  className="flex gap-3 pt-4"
                  style={{ borderTop: "1px solid var(--border-primary)" }}
                >
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg transition-colors duration-200"
                    style={{
                      backgroundColor: "rgba(0, 180, 216, 0.08)",
                      color: "#00b4d8",
                      border: "1px solid rgba(0, 180, 216, 0.2)",
                    }}
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg theme-bg-tag theme-text-secondary transition-colors duration-200"
                    style={{ border: "1px solid var(--border-tag)" }}
                  >
                    <Github size={13} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <motion.div {...fadeUp(0.3)} className="text-center mt-14">
        <a
          href="https://github.com/aakashdeepyadav"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <Github size={18} /> See All on GitHub
        </a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
