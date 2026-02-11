import { Github, Linkedin, Mail, ArrowRight, Download, Code, Zap, ExternalLink } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import profileImage from "../assets/aakash.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px] animate-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[140px] animate-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/5 rounded-full blur-[180px]" />

        {/* Dot Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--dot-color) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[15%] right-[20%] w-20 h-20 border border-cyan-500/10 rounded-lg"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity } }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[8%] w-12 h-12 border border-violet-500/10 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
        />
        <motion.div
          className="absolute top-[60%] right-[10%] w-6 h-6 bg-orange-500/10 rounded-sm"
          animate={{ rotate: 180, y: [0, -15, 0] }}
          transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity } }}
        />

        {/* Gradient line decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full wrapper py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* Left */}
          <div>
            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight mb-2 theme-text-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Aakash Deep
            </motion.h1>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="grad-text">Yadav</span>
            </motion.h1>

            {/* Role with icons */}
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg theme-bg-badge" style={{ border: "1px solid var(--border-tag)" }}>
                <Code size={14} className="text-cyan-400" />
                <span className="text-sm font-medium theme-text-secondary">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg theme-bg-badge" style={{ border: "1px solid var(--border-tag)" }}>
                <Zap size={14} className="text-orange-400" />
                <span className="text-sm font-medium theme-text-secondary">AI Builder</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base theme-text-muted leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              I build full-stack web applications and ML-powered systems that solve real problems.
              Currently turning ideas into scalable products while studying CS at LPU.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#projects" className="btn-glow btn-glow-primary">
                View Projects <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-glow btn-glow-outline">
                Let's Talk
              </a>
              <a href="/resume.pdf" download className="btn-glow btn-glow-outline">
                <Download size={15} />Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {[
                { icon: Github, href: "https://github.com/aakashdeepyadav", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/aakashdeepyadav", label: "LinkedIn" },
                { icon: Mail, href: "mailto:aakashdeepyadav106@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-xl theme-bg-badge theme-text-muted hover:text-cyan-400 transition-all duration-300"
                  style={{ border: "1px solid var(--border-primary)" }}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              {/* LeetCode */}
              <motion.a
                href="https://leetcode.com/u/aakashdeepyadav/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl theme-bg-badge theme-text-muted hover:text-amber-400 transition-all duration-300"
                style={{ border: "1px solid var(--border-primary)" }}
                aria-label="LeetCode"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <SiLeetcode size={18} />
              </motion.a>
              {/* Codolio */}
              <motion.a
                href="https://codolio.com/profile/aakashdeepyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl theme-bg-badge theme-text-muted hover:text-emerald-400 transition-all duration-300"
                style={{ border: "1px solid var(--border-primary)" }}
                aria-label="Codolio"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative animate-float">
              {/* Outer ring decoration */}
              <motion.div
                className="absolute -inset-8 rounded-full border border-dashed"
                style={{ borderColor: "var(--border-tag)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow Ring */}
              <div
                className="absolute -inset-4 rounded-full blur-2xl opacity-30"
                style={{
                  background: "conic-gradient(from 0deg, #00d4ff, #7c3aed, #f97316, #00d4ff)",
                }}
              />

              {/* Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-2 shadow-2xl" style={{ borderColor: "var(--border-tag)" }}>
                <img src={profileImage} alt="Aakash Deep Yadav" className="w-full h-full object-cover" />
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-2 right-4 glass-card px-4 py-2.5 flex items-center gap-2.5 shadow-xl"
                style={{ borderRadius: 999 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium theme-text-secondary">Open to work</span>
              </motion.div>

              {/* Floating tech badge */}
              <motion.div
                className="absolute -top-3 -left-4 glass-card px-3 py-2 shadow-lg"
                style={{ borderRadius: 12 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-lg">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar — Enhanced */}
        <motion.div
          className="mt-20 glass-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-8">
            {[
              { val: "8+", label: "Projects Built", icon: "🚀" },
              { val: "3+", label: "Years Coding", icon: "💻" },
              { val: "5+", label: "Tech Stacks", icon: "⚡" },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <div className="text-3xl font-bold grad-text">{s.val}</div>
                <div className="text-sm theme-text-muted mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 theme-text-faint"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full flex justify-center pt-1.5" style={{ border: "1px solid var(--border-tag)" }}>
            <motion.div
              className="w-1 h-2 bg-cyan-400/60 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
