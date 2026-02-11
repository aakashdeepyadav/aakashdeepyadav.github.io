import { Code, Brain, Lightbulb, Layers, Download, User } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
});

const About = () => {
  const competencies = [
    { name: "Full Stack Dev", pct: 90, icon: Code, color: "#00d4ff" },
    { name: "ML & AI", pct: 85, icon: Brain, color: "#7c3aed" },
    { name: "Problem Solving", pct: 95, icon: Lightbulb, color: "#f97316" },
    { name: "System Design", pct: 80, icon: Layers, color: "#10b981" },
  ];

  return (
    <section id="about" className="relative py-28 section-divider overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--dot-color) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="wrapper relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <User size={18} className="text-cyan-400" />
            </div>
            <p className="text-cyan-400 font-semibold text-sm tracking-[0.2em] uppercase">About</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold theme-text-heading">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Story */}
          <motion.div {...fadeUp(0.1)}>
            <div className="space-y-5 mb-10">
              <p className="theme-text-secondary leading-relaxed">
                I'm a Computer Science student at Lovely Professional University with a passion for
                building innovative solutions. My journey in tech started with curiosity and has evolved
                into a deep commitment to creating impactful software.
              </p>
              <p className="theme-text-secondary leading-relaxed">
                I specialize in full-stack development and machine learning, combining these skills
                to build intelligent, scalable applications — from e-commerce platforms to AI-powered
                systems.
              </p>
            </div>

            {/* Stats — Glassmorphism cards */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { val: "8+", label: "Projects", icon: "🚀" },
                { val: "5+", label: "Tech Stacks", icon: "⚡" },
                { val: "3+", label: "Years Coding", icon: "💻" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.15 + i * 0.05)}
                  className="glass-card p-5 text-center group"
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="text-xl mb-2 block">{s.icon}</span>
                  <div className="text-2xl font-bold text-cyan-400 group-hover:theme-text-heading transition-colors">{s.val}</div>
                  <div className="text-xs theme-text-muted mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <a href="/resume.pdf" download className="btn-glow btn-glow-primary">
              <Download size={15} /> Download Resume
            </a>
          </motion.div>

          {/* Right - Competencies */}
          <motion.div {...fadeUp(0.2)}>
            <p className="text-cyan-400 font-semibold text-sm tracking-[0.2em] uppercase mb-8">
              Core Strengths
            </p>
            <div className="space-y-7">
              {competencies.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div key={i} {...fadeUp(0.25 + i * 0.08)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="p-2.5 rounded-xl border"
                        style={{
                          borderColor: `${skill.color}25`,
                          background: `${skill.color}08`,
                        }}
                      >
                        <Icon size={18} style={{ color: skill.color }} />
                      </div>
                      <span className="font-medium text-sm theme-text-primary flex-1">{skill.name}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-md theme-bg-tag theme-border-tag" style={{ color: skill.color, borderWidth: 1 }}>
                        {skill.pct}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--progress-bar-bg)" }}>
                      <motion.div
                        className="h-full rounded-full relative"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          boxShadow: `0 0 16px ${skill.color}40`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Extra */}
            <motion.div {...fadeUp(0.5)} className="glass-card p-6 mt-10">
              <h4 className="font-semibold text-sm theme-text-heading mb-4 flex items-center gap-2">
                <span className="text-lg">✨</span> What I Bring
              </h4>
              <ul className="space-y-3">
                {[
                  "Strong foundation in data structures & algorithms",
                  "Experience with modern frameworks and cloud tools",
                  "Passion for clean code and best practices",
                  "Quick learner with strong problem-solving skills",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm theme-text-secondary">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-[7px] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
