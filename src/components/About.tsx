import { Code, Brain, Lightbulb, Layers, Download } from "lucide-react";
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
    <section id="about" className="py-24 section-divider">
      <div className="wrapper">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-cyan-400 font-semibold text-sm tracking-[0.2em] uppercase mb-3">About</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Story */}
          <motion.div {...fadeUp(0.1)}>
            <div className="space-y-5 mb-10">
              <p className="text-slate-400 leading-relaxed">
                I'm a Computer Science student at Lovely Professional University with a passion for
                building innovative solutions. My journey in tech started with curiosity and has evolved
                into a deep commitment to creating impactful software.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in full-stack development and machine learning, combining these skills
                to build intelligent, scalable applications — from e-commerce platforms to AI-powered
                systems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { val: "15+", label: "Projects" },
                { val: "5+", label: "Tech Stacks" },
                { val: "3+", label: "Years Coding" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.15 + i * 0.05)}
                  className="glass-card p-4 text-center"
                >
                  <div className="text-2xl font-bold text-cyan-400">{s.val}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
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
            <div className="space-y-6">
              {competencies.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div key={i} {...fadeUp(0.25 + i * 0.08)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 glass-card" style={{ borderColor: `${skill.color}20` }}>
                        <Icon size={18} style={{ color: skill.color }} />
                      </div>
                      <span className="font-medium text-sm text-slate-200 flex-1">{skill.name}</span>
                      <span className="text-xs text-slate-500 font-mono">{skill.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          boxShadow: `0 0 12px ${skill.color}40`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Extra */}
            <motion.div {...fadeUp(0.5)} className="glass-card p-6 mt-10">
              <h4 className="font-semibold text-sm text-white mb-4">What I Bring</h4>
              <ul className="space-y-3">
                {[
                  "Strong foundation in data structures & algorithms",
                  "Experience with modern frameworks and cloud tools",
                  "Passion for clean code and best practices",
                  "Quick learner with strong problem-solving skills",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
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
