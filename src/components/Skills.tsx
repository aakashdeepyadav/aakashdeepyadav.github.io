import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java", "SQL"],
      icon: "💻",
    },
    {
      category: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
      icon: "🎨",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
      icon: "⚙️",
    },
    {
      category: "Database",
      skills: ["MongoDB", "Firebase", "MySQL", "Oracle"],
      icon: "🗄️",
    },
    {
      category: "AI & ML",
      skills: ["Scikit-Learn", "Pandas", "NumPy", "TensorFlow"],
      icon: "🤖",
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "GitHub", "VS Code"],
      icon: "🛠️",
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, machine learning, and modern web technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid-auto mb-16">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="card h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{skillGroup.icon}</span>
                  <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-white/5 text-muted rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="card max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-muted leading-relaxed">
              Always exploring new technologies and frameworks to stay at the forefront of web development 
              and artificial intelligence. Currently diving deep into advanced ML algorithms and cloud architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
