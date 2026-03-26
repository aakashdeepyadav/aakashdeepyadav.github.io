import { motion } from "framer-motion";
import { Code, Cpu, Database, Globe, Brain, Settings, Users } from "lucide-react";
import TiltCard from "./TiltCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay },
});

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code size={18} />,
  Frontend: <Globe size={18} />,
  Backend: <Settings size={18} />,
  Database: <Database size={18} />,
  "AI & ML": <Brain size={18} />,
  Tools: <Cpu size={18} />,
};

const technicalSkills = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Firebase", "MySQL", "Oracle"],
  },
  {
    category: "AI & ML",
    skills: ["Scikit-Learn", "Pandas", "NumPy", "TensorFlow"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "GitHub", "VS Code"],
  },
];

const softSkills = [
  { name: "Leadership", desc: "Taking charge of project direction when needed" },
  { name: "Communication", desc: "Writing clear PRs, docs, and explaining technical decisions" },
  { name: "Problem Solving", desc: "Figuring out why things break and how to fix them" },
  { name: "Teamwork", desc: "Working with frontend, backend, and ML people to ship features" },
  { name: "Time Management", desc: "Estimating work, keeping scope reasonable, meeting deadlines" },
  { name: "Adaptability", desc: "Picking up new tools and frameworks when the project needs it" },
];

const Skills = () => (
  <section id="skills" className="relative py-28 section-divider overflow-hidden">
    <div className="wrapper relative z-10">
      {/* Header */}
      <motion.div {...fadeUp()} className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading mb-3">Tech Stack & Skills</h2>
        <p className="theme-text-muted text-base max-w-xl">
          What I work with day to day
        </p>
      </motion.div>

      {/* Technical Skills */}
      <motion.div {...fadeUp(0.05)} className="mb-6">
        <h3 className="text-lg font-semibold theme-text-heading mb-6">Technical Skills</h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {technicalSkills.map((group, i) => (
          <motion.div key={group.category} {...fadeUp(i * 0.05)}>
            <TiltCard className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span style={{ color: "#00b4d8" }}>{categoryIcons[group.category]}</span>
                <h4 className="text-base font-semibold theme-text-heading">{group.category}</h4>
                <span
                  className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-md"
                  style={{
                    color: "#00b4d8",
                    border: "1px solid rgba(0, 180, 216, 0.2)",
                    backgroundColor: "rgba(0, 180, 216, 0.06)",
                  }}
                >
                  {group.skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-icon px-3 py-1.5 text-xs rounded-lg theme-bg-tag theme-text-secondary cursor-default"
                    style={{ border: "1px solid var(--border-tag)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.div {...fadeUp(0.1)} className="mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Users size={18} style={{ color: "#00b4d8" }} />
          <h3 className="text-lg font-semibold theme-text-heading">Soft Skills</h3>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {softSkills.map((skill, i) => (
          <motion.div key={skill.name} {...fadeUp(0.12 + i * 0.05)}>
            <TiltCard className="glass-card p-6 h-full">
              <h4 className="text-base font-semibold theme-text-heading mb-2">{skill.name}</h4>
              <p className="text-sm theme-text-muted leading-relaxed">{skill.desc}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
