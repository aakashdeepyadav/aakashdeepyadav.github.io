import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      title: "Student Career Recommendation System",
      description:
        "ML-powered platform that profiles students across 20+ attributes (personality, skills, interests) and recommends personalized career paths. Microservice architecture with React frontend, Node.js backend, and FastAPI ML service.",
      achievements: [
        "Silhouette Score of ~0.82 using KMeans++ with intelligent model auto-selection",
        "Analyzed 25+ career profiles with cosine similarity matching",
        "Sub-second real-time inference with JWT-secured APIs",
        "2D/3D visualizations using PCA and UMAP for interpretability",
      ],
      tech: [
        "React.js",
        "Node.js",
        "FastAPI",
        "Python",
        "MongoDB",
        "Scikit-Learn",
      ],
      github: "https://github.com/aakashdeepyadav",
      live: "https://career-recommendation-system.vercel.app",
      timeline: "Oct'25 – Nov'25",
    },
    {
      title: "Shared Expense Tracker",
      description:
        "Real-time group expense tracking platform for PGs and apartments. Built with Firebase for authentication and real-time updates. Automated settlement logic that eliminates 90% of manual reconciliation effort.",
      achievements: [
        "Firebase Auth + role-based access control",
        "Live dashboard with sub-100ms update performance using Firestore listeners",
        "Automated 'who owes whom' settlement calculation",
        "90% reduction in manual expense reconciliation",
      ],
      tech: ["React.js", "Express.js", "Firebase", "JavaScript", "Firestore"],
      github: "https://github.com/aakashdeepyadav",
      live: "https://expense-tracker-firebase.vercel.app",
      timeline: "May'25 – Jun'25",
    },
    {
      title: "Time Management AI Coach",
      description:
        "LLM-powered productivity assistant with chat-based coaching interface. Integrates Pomodoro timers, task planning, and weekly schedulers. Tracks productivity metrics and provides personalized recommendations.",
      achievements: [
        "Chat interface powered by LLM (Claude/GPT) for personalized coaching",
        "Integrated Pomodoro, task planner, and calendar management",
        "Real-time productivity tracking and metric visualization",
        "30–40% reported improvement in user productivity",
      ],
      tech: [
        "React.js",
        "Node.js",
        "LLM APIs",
        "Python",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      github: "https://github.com/aakashdeepyadav",
      live: "https://ai-productivity-coach.vercel.app",
      timeline: "Ongoing",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gradient mb-4">Featured Work</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Explore my latest projects showcasing full-stack development, AI integration, and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="card hover:shadow-xl">
                <div className="flex-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted">{project.timeline}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title="View Live Project"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-muted mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp size={16} className="text-muted" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm">
                        <span className="text-white/60 mt-0.5 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/5 text-muted rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-muted mb-6 text-lg">
            Discover more projects and contributions
          </p>
          <a
            href="https://github.com/aakashdeepyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Github size={20} />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
