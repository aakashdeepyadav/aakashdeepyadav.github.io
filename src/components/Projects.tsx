import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    highlight: "Microservice Architecture + ML Pipeline",
  },
  {
    title: "Shared Expense Tracker",
    desc: "Group expense management app with Firebase Auth, Firestore real-time sync, and an automated debt-settlement algorithm. Supports multiple groups, split types, and transaction history.",
    tech: ["React.js", "Express.js", "Firebase", "JavaScript", "Firestore"],
    github: "https://github.com/aakashdeepyadav/Shared-Expense-Tracker",
    live: "https://shared-expense-tracker-set.vercel.app/",
    screenshot: "/projects/shared_expense_tracker_screenshot.png",
    highlight: "Real-time Sync + Smart Settlements",
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
    highlight: "AI-Powered Coaching + Analytics",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.95,
  }),
};

const Projects = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDir: number) => {
    const next =
      (current + newDir + projects.length) % projects.length;
    setCurrent([next, newDir]);
  };

  const goTo = (idx: number) => {
    setCurrent([idx, idx > current ? 1 : -1]);
  };

  const p = projects[current];

  return (
    <section
      id="projects"
      className="relative py-24 section-divider overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      <div className="wrapper relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading">
              Featured Projects
            </h2>
          </div>

          {/* Counter */}
          <div className="hidden sm:flex items-center gap-3">
            <span
              className="text-3xl font-bold"
              style={{ color: "#00b4d8" }}
            >
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-sm theme-text-faint">/</span>
            <span className="text-sm theme-text-faint">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center"
            >
              {/* Screenshot */}
              <div className="relative group">
                <div
                  className="absolute -inset-1 rounded-2xl opacity-20 blur-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #00b4d8, #0077b6)",
                  }}
                />
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid var(--border-secondary)",
                    background: "var(--bg-card-alt)",
                  }}
                >
                  <img
                    src={p.screenshot}
                    alt={p.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ minHeight: "280px", maxHeight: "420px" }}
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                    style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
                  >
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-white text-sm font-medium transition-all hover:scale-105"
                      style={{
                        backgroundColor: "#00b4d8",
                      }}
                    >
                      <ExternalLink
                        size={14}
                        className="inline mr-2 -mt-0.5"
                      />
                      Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-white text-sm font-medium transition-all hover:scale-105"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <Github size={14} className="inline mr-2 -mt-0.5" />
                      Source
                    </a>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                {/* Highlight badge */}
                <span
                  className="inline-block text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-lg mb-5 w-fit"
                  style={{
                    color: "#00b4d8",
                    backgroundColor: "rgba(0, 180, 216, 0.08)",
                    border: "1px solid rgba(0, 180, 216, 0.2)",
                  }}
                >
                  {p.highlight}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold theme-text-heading mb-4 leading-tight">
                  {p.title}
                </h3>

                <p className="theme-text-secondary text-[15px] leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-widest theme-text-faint mb-3">
                    Built with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-xs rounded-lg theme-bg-tag theme-text-secondary"
                        style={{ border: "1px solid var(--border-tag)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <Github size={15} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300"
                aria-label={`Go to project ${i + 1}`}
                style={{
                  width: i === current ? "32px" : "8px",
                  height: "8px",
                  borderRadius: "99px",
                  backgroundColor:
                    i === current ? "#00b4d8" : "var(--text-faint)",
                  opacity: i === current ? 1 : 0.4,
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-xl theme-text-muted hover:text-cyan-400 transition-all duration-200"
              style={{
                border: "1px solid var(--border-secondary)",
                background: "var(--bg-card-alt)",
              }}
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-xl transition-all duration-200"
              style={{
                backgroundColor: "#00b4d8",
                color: "#020617",
              }}
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/aakashdeepyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm theme-text-faint hover:text-cyan-400 transition-colors"
          >
            View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
