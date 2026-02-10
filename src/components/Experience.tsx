import { GraduationCap, Briefcase, Award, Calendar, MapPin, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
});

const Experience = () => {
  const certs = [
    { title: "Building Agentic AI Apps", issuer: "Programming Pathshala", date: "Aug 2025", emoji: "🤖" },
    { title: "Privacy & Security in Online Social Media", issuer: "NPTEL", date: "Feb 2024", emoji: "🔒" },
    { title: "Basic Python Towards AI/ML", issuer: "CSE Pathshala", date: "Dec 2023", emoji: "🐍" },
  ];

  return (
    <section id="experience" className="relative py-28 section-divider overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="wrapper relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <Star size={18} className="text-cyan-400" />
            </div>
            <p className="text-cyan-400 font-semibold text-sm tracking-[0.2em] uppercase">Background</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Education & Experience</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — Education + Training */}
          <div className="space-y-10">
            {/* Education Header */}
            <motion.div {...fadeUp(0.1)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <GraduationCap size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>

              {/* Timeline */}
              <div className="relative pl-8 space-y-6">
                {/* Line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />

                {/* BTech */}
                <motion.div {...fadeUp(0.15)} className="relative">
                  <div className="absolute -left-[25px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-400 border-[3px] border-[#0a0a0f] shadow-[0_0_10px_rgba(0,212,255,0.4)]" />
                  <div className="glass-card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-white flex items-center gap-2">
                        <span>🎓</span> B.Tech — Computer Science
                      </h4>
                      <span className="text-xs text-slate-500 flex items-center gap-1 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/30">
                        <Calendar size={11} /> 2022 – 2026
                      </span>
                    </div>
                    <p className="text-sm text-cyan-400 font-medium mb-1">Lovely Professional University</p>
                    <p className="text-xs text-slate-600 flex items-center gap-1 mb-3">
                      <MapPin size={11} /> Punjab, India
                    </p>
                    <ul className="space-y-1.5">
                      {["Focus on DSA, ML, and Software Engineering", "Active in coding clubs and tech communities", "Participated in multiple hackathons"].map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                          <span className="w-1 h-1 bg-cyan-400 rounded-full mt-[6px] flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Intermediate */}
                <motion.div {...fadeUp(0.2)} className="relative">
                  <div className="absolute -left-[25px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-600 border-[3px] border-[#0a0a0f]" />
                  <div className="glass-card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                        <span>📚</span> Intermediate
                      </h4>
                      <span className="text-xs text-slate-500 flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/30">
                        <Calendar size={11} /> 2020 – 2022
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">Tiny Tots Sr. Sec. School, Ayodhya</p>
                  </div>
                </motion.div>

                {/* Matric */}
                <motion.div {...fadeUp(0.25)} className="relative">
                  <div className="absolute -left-[25px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-600 border-[3px] border-[#0a0a0f]" />
                  <div className="glass-card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                        <span>📖</span> Matriculation
                      </h4>
                      <span className="text-xs text-slate-500 flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/30">
                        <Calendar size={11} /> 2018 – 2020
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">Tiny Tots Sr. Sec. School, Ayodhya</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Training */}
            <motion.div {...fadeUp(0.3)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <Briefcase size={20} className="text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Training</h3>
              </div>

              <div className="glow-card">
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <span>🚀</span> Agentic AI Application Training
                    </h4>
                    <span className="text-xs text-slate-500 flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/30">
                      <Calendar size={11} /> Jun – Aug 2025
                    </span>
                  </div>
                  <p className="text-sm text-orange-400 font-medium mb-4">Programming Pathshala</p>
                  <ul className="space-y-2">
                    {["Designing and building Agentic AI systems", "LLM orchestration and autonomous agents", "Built AI apps with LLM APIs and backend services", "Production-ready AI application development"].map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-[7px] flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Certs + Achievement */}
          <div className="space-y-10">
            <motion.div {...fadeUp(0.15)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <Award size={20} className="text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certs.map((c, i) => (
                  <motion.div key={i} {...fadeUp(0.2 + i * 0.08)} className="glass-card p-5 flex items-start gap-4" whileHover={{ x: 4 }}>
                    <div className="text-2xl flex-shrink-0">{c.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-white mb-0.5">{c.title}</h4>
                      <p className="text-xs text-slate-500">{c.issuer}</p>
                    </div>
                    <span className="text-xs text-slate-600 whitespace-nowrap flex-shrink-0 px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/30">
                      {c.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievement */}
            <motion.div {...fadeUp(0.35)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Award size={20} className="text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Achievements</h3>
              </div>

              <div className="glow-card">
                <div className="p-6">
                  <div className="flex items-start gap-5">
                    <span className="text-4xl flex-shrink-0">🏆</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">100+ LeetCode Problems</h4>
                      <p className="text-sm text-slate-400 mb-4">
                        Consistently solving DSA problems across arrays, strings, recursion, hashing, and algorithms.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Arrays", "Strings", "Recursion", "Hashing", "DP"].map((t) => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Extra visual — coding activity */}
            <motion.div {...fadeUp(0.45)} className="glass-card p-6">
              <h4 className="font-semibold text-sm text-white mb-4 flex items-center gap-2">
                <BookOpen size={16} className="text-cyan-400" /> Current Focus
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Agentic AI Systems", pct: 90, color: "#00d4ff" },
                  { label: "Full Stack Projects", pct: 85, color: "#7c3aed" },
                  { label: "DSA & Competitive", pct: 75, color: "#f97316" },
                ].map((f, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-400">{f.label}</span>
                      <span className="font-mono" style={{ color: f.color }}>{f.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: f.color, boxShadow: `0 0 8px ${f.color}40` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${f.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
