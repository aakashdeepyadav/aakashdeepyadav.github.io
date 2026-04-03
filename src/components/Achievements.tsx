import { Trophy, Zap, Code, Medal } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay },
});

const achievements = [
  {
    title: "150+ LeetCode Problems Solved",
    desc: "Practicing core patterns — two-pointer, sliding window, BFS/DFS, backtracking, and DP. Trying to solve something every day.",
    tags: ["Arrays", "Strings", "Recursion", "Hashing", "DP"],
    icon: <Trophy size={20} />,
  },
  {
    title: "Agentic AI Application Training",
    desc: "Built AI agents that can call tools, remember context, and handle multi-step tasks. Used FastAPI and LangChain to put them into production.",
    tags: ["Agentic AI", "LLM APIs", "Autonomous Agents", "Production AI"],
    icon: <Zap size={20} />,
  },
  {
    title: "8+ Full-Stack Projects Built",
    desc: "Built and deployed 8+ apps — React frontends, Node/Express backends, MongoDB and Firebase for data. All of them are live.",
    tags: ["React", "Node.js", "Python", "MongoDB", "Firebase"],
    icon: <Code size={20} />,
  },
  {
    title: "Active Hackathon Participant",
    desc: "Built working prototypes in 24–48 hours — system design, API code, frontend, and presenting to judges.",
    tags: ["Teamwork", "Innovation", "Problem Solving"],
    icon: <Medal size={20} />,
  },
];

const Achievements = () => (
  <section
    id="achievements"
    className="relative py-28 section-divider overflow-hidden"
  >
    <div className="wrapper relative z-10">
      {/* Header */}
      <motion.div {...fadeUp()} className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading mb-3">
          Milestones
        </h2>
        <p className="theme-text-muted text-base max-w-xl">
          Some things I'm proud of
        </p>
      </motion.div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((a, i) => (
          <motion.div key={i} {...fadeUp(i * 0.08)}>
            <TiltCard className="glass-card p-6 h-full">
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(0, 180, 216, 0.08)",
                    border: "1px solid rgba(0, 180, 216, 0.15)",
                    color: "#00b4d8",
                  }}
                >
                  {a.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold theme-text-heading mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm theme-text-muted leading-relaxed mb-4">
                    {a.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-lg theme-bg-tag theme-text-muted"
                        style={{ border: "1px solid var(--border-tag)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
