import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
});

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java", "SQL"],
    icon: "💻",
    accent: "#00d4ff",
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    icon: "🎨",
    accent: "#7c3aed",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    icon: "⚙️",
    accent: "#f97316",
  },
  {
    category: "Database",
    skills: ["MongoDB", "Firebase", "MySQL", "Oracle"],
    icon: "🗄️",
    accent: "#10b981",
  },
  {
    category: "AI & ML",
    skills: ["Scikit-Learn", "Pandas", "NumPy", "TensorFlow"],
    icon: "🤖",
    accent: "#ec4899",
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "GitHub", "VS Code"],
    icon: "🛠️",
    accent: "#eab308",
  },
];

const Skills = () => (
  <section id="skills" className="relative py-28 section-divider overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute bottom-1/3 -left-40 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[160px]" />
    </div>

    <div className="wrapper relative z-10">
      {/* Header */}
      <motion.div {...fadeUp()} className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <Wrench size={18} className="text-cyan-400" />
          </div>
          <p className="text-cyan-400 font-semibold text-sm tracking-[0.2em] uppercase">Skills</p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Tech Stack</h2>
        <p className="text-slate-500 text-lg max-w-xl">
          A comprehensive toolkit spanning full-stack development, machine learning, and modern web technologies
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {skillsData.map((group, i) => (
          <motion.div key={group.category} {...fadeUp(i * 0.08)} className="group">
            <div className="glass-card p-6 h-full relative overflow-hidden">
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-[60px] opacity-10"
                style={{ background: group.accent }}
              />

              <div className="flex items-center gap-3 mb-5 relative">
                <motion.span
                  className="text-2xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {group.icon}
                </motion.span>
                <h3 className="text-base font-semibold text-white">{group.category}</h3>
                <span
                  className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-md border"
                  style={{
                    color: group.accent,
                    borderColor: `${group.accent}30`,
                    background: `${group.accent}10`,
                  }}
                >
                  {group.skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 relative">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-icon px-3 py-1.5 text-xs rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/30 hover:border-slate-600 cursor-default"
                    whileHover={{
                      color: group.accent,
                      borderColor: `${group.accent}40`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div {...fadeUp(0.5)} className="glow-card">
        <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Continuous Learning & Growth</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Always exploring new technologies and frameworks to stay at the forefront of web development
              and artificial intelligence. Currently diving deep into advanced ML algorithms and cloud architecture.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
