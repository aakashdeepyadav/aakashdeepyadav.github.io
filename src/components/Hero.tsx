import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/aakash.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full wrapper py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8"
            >
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400 tracking-wide">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight mb-2"
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

            {/* Role */}
            <motion.p
              className="text-xl sm:text-2xl font-medium text-slate-400 mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full Stack Developer & AI Builder
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base text-slate-500 leading-relaxed mb-10 max-w-lg"
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
                <Download size={15} /> Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex items-center gap-5"
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
                  className="text-slate-600 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
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
              {/* Glow Ring */}
              <div
                className="absolute -inset-4 rounded-full blur-2xl opacity-30"
                style={{
                  background: "conic-gradient(from 0deg, #00d4ff, #7c3aed, #f97316, #00d4ff)",
                }}
              />

              {/* Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-2 border-slate-700/50 shadow-2xl">
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
                <span className="text-sm font-medium text-slate-300">Open to work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-20 grid grid-cols-3 max-w-lg gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { val: "15+", label: "Projects Built" },
            { val: "3+", label: "Years Coding" },
            { val: "5+", label: "Tech Stacks" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white">{s.val}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
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
          className="flex flex-col items-center gap-2 text-slate-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowRight size={16} className="rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
