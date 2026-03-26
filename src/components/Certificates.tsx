import { ExternalLink, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "Building Agentic AI Apps",
    issuer: "Programming Pathshala",
    date: "Aug 2025",
    desc: "Covered LLM API integration, prompt engineering, building agents that use tools, chain-of-thought reasoning, and deploying AI apps.",
    link: "#",
    image: "/certificates/Agentic_AI_Certificate.png",
    highlight: "LLM Agents + Tool Use",
  },
  {
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL",
    date: "Feb 2024",
    desc: "Covered threat modeling, data anonymization, access control, and how social platforms handle privacy at scale.",
    link: "#",
    image: "/certificates/Privacy_and_Security.jpg",
    highlight: "Cybersecurity + Privacy",
  },
  {
    title: "Basic Python Towards AI/ML",
    issuer: "CSE Pathshala",
    date: "Dec 2023",
    desc: "Python basics, then NumPy, Pandas, data cleaning, and training simple ML models with Scikit-Learn.",
    link: "#",
    image: "/certificates/AIML_By_CSEPathshala.png",
    highlight: "Python + ML Foundations",
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

const Certificates = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDir: number) => {
    const next =
      (current + newDir + certificates.length) % certificates.length;
    setCurrent([next, newDir]);
  };

  const goTo = (idx: number) => {
    setCurrent([idx, idx > current ? 1 : -1]);
  };

  const cert = certificates[current];

  return (
    <section
      id="certificates"
      className="relative py-24 section-divider overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      <div className="wrapper relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading">
              Certifications
            </h2>
            <p className="theme-text-muted text-base max-w-xl mt-3">
              Courses I've completed
            </p>
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
              {String(certificates.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Certificate Showcase */}
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
              {/* Certificate Image */}
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
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ minHeight: "280px", maxHeight: "420px" }}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* Fallback */}
                  <div
                    className="absolute inset-0 items-center justify-center hidden"
                    style={{ backgroundColor: "var(--bg-card-alt)" }}
                  >
                    <Award size={48} className="theme-text-faint opacity-40" />
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
                  {cert.highlight}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold theme-text-heading mb-2 leading-tight">
                  {cert.title}
                </h3>

                <p
                  className="text-base font-medium mb-4"
                  style={{ color: "#00b4d8" }}
                >
                  {cert.issuer}
                </p>

                <p className="theme-text-secondary text-[15px] leading-relaxed mb-6">
                  {cert.desc}
                </p>

                {/* Date */}
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-widest theme-text-faint mb-2">
                    Completed
                  </p>
                  <span
                    className="px-3 py-1.5 text-xs rounded-lg theme-bg-tag theme-text-secondary"
                    style={{ border: "1px solid var(--border-tag)" }}
                  >
                    {cert.date}
                  </span>
                </div>

                {/* Action button */}
                {cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid w-fit"
                  >
                    <ExternalLink size={15} /> View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300"
                aria-label={`Go to certificate ${i + 1}`}
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
              aria-label="Previous certificate"
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
              aria-label="Next certificate"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
