import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import profileImage from "../assets/aakash.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.5, delay },
});

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/aakashdeepyadav", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/aakashdeepyadav", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "#contact", label: "Email" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* About nav anchor */}
      <div id="about" className="absolute top-0" aria-hidden="true" />

      <div className="wrapper w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 py-28 lg:py-0">
          {/* ── Text Side ────────────────────────── */}
          <div className="flex-1 order-2 lg:order-1">
            {/* Tag */}
            <motion.p
              {...fadeUp(0.05)}
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#00b4d8" }}
            >
              Software Developer
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.12)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 theme-text-heading"
            >
              Hi, I'm{" "}
              <span style={{ color: "#00b4d8" }}>Aakash Deep</span>{" "}
              Yadav
            </motion.h1>

            {/* Short bio */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-base sm:text-lg leading-relaxed max-w-xl mb-5 theme-text-secondary"
            >
              I build full-stack web applications and AI-powered tools using
              React, Node.js, Python and MongoDB. From writing clean APIs to
              training recommendation models and building LLM agents, I enjoy
              owning problems end to end and shipping things that people
              actually use.
            </motion.p>

            {/* Compact highlights — one line each */}
            <motion.div
              {...fadeUp(0.26)}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-8"
            >
              {["8+ Projects", "5+ Tech Stacks", "3+ Years Coding"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium tracking-wide uppercase theme-text-muted flex items-center gap-1.5"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full inline-block"
                      style={{ backgroundColor: "#00b4d8" }}
                    />
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.32)}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a href="#projects" className="btn-solid">
                See My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn-outline"
              >
                <Download size={16} /> Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              {...fadeUp(0.38)}
              className="flex items-center gap-3"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center theme-text-muted transition-all duration-300 hover:text-cyan-400"
                  style={{
                    border: "1px solid var(--border-secondary)",
                    background: "var(--bg-card-alt)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Photo Side ───────────────────────── */}
          <motion.div
            className="order-1 lg:order-2 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative">
              {/* Subtle glow behind image */}
              <div
                className="absolute -inset-1.5 rounded-2xl opacity-25 blur-md"
                style={{
                  background:
                    "linear-gradient(135deg, #00b4d8, #0077b6)",
                }}
              />
              <div
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden"
                style={{ border: "2px solid var(--border-secondary)" }}
              >
                <img
                  src={profileImage}
                  alt="Aakash Deep Yadav"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 theme-text-faint hover:text-cyan-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
