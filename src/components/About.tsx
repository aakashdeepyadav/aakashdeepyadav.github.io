import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Users, GitBranch, Server } from "lucide-react";
import TiltCard from "./TiltCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
});

const strengths = [
  {
    icon: <Code2 size={18} />,
    title: "Full-Stack Development",
    desc: "React, Node.js, Express, MongoDB — building complete applications from frontend to backend.",
  },
  {
    icon: <Brain size={18} />,
    title: "AI & Machine Learning",
    desc: "Scikit-Learn, TensorFlow, LLM APIs — recommendation systems, classifiers, and AI agents.",
  },
  {
    icon: <Server size={18} />,
    title: "APIs & Architecture",
    desc: "REST APIs, auth flows, database schema design, and clean, maintainable code architecture.",
  },
  {
    icon: <GitBranch size={18} />,
    title: "Dev Practices",
    desc: "Git workflows, CI/CD pipelines, Docker, and deploying to Vercel and Render.",
  },
  {
    icon: <Rocket size={18} />,
    title: "Problem Solving",
    desc: "100+ DSA problems on LeetCode. Comfortable taking a feature from idea to production.",
  },
  {
    icon: <Users size={18} />,
    title: "Collaboration",
    desc: "Meaningful PRs, code reviews, and working with teammates across timezones.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-16 section-divider overflow-hidden">
      <div className="wrapper relative z-10">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="mb-4">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#00b4d8" }}
          >
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading">
            About Me
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.div {...fadeUp(0.08)} className="max-w-3xl space-y-3 mb-10">
          <p className="theme-text-secondary leading-relaxed text-[15px]">
            I'm a Computer Science student at Lovely Professional University who loves
            digging into how things work under the hood — from how databases index queries
            to how React reconciles the DOM. I spend most of my time building web apps,
            training ML models, and lately, experimenting with LLM-powered agents that can
            call tools and handle multi-step tasks.
          </p>
          <p className="theme-text-secondary leading-relaxed text-[15px]">
            My core stack is{" "}
            <span className="font-medium theme-text-heading">React, Node.js, Python, and MongoDB</span>,
            but I'm always picking up whatever the project needs. I care about writing code
            that's clean, tested, and easy for the next person to work with.
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <motion.div {...fadeUp(0.12)} className="mb-2">
          <h3 className="text-sm font-semibold theme-text-heading uppercase tracking-wider mb-5">
            What I bring to the table
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strengths.map((item, i) => (
              <motion.div key={i} {...fadeUp(0.14 + i * 0.04)}>
                <TiltCard
                  className="glass-card p-4 h-full"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      background: "rgba(0, 180, 216, 0.08)",
                      color: "#00b4d8",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-[13px] font-bold theme-text-heading mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs theme-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
