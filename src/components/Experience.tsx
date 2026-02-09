import { Award, BookOpen, Brain } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16">Experience</h2>

        {/* Training Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Brain size={24} /> Advanced Training
          </h3>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-colors">
            <div className="flex gap-4">
              <div className="text-gray-500 font-bold text-lg">→</div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Agentic AI Application Training
                </h4>
                <p className="text-gray-400 mb-3">
                  Programming Pathshala | Jun'25 – Aug'25
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-gray-500">✓</span>
                    Intensive hands-on training in designing Agentic AI systems
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">✓</span>
                    Built AI applications with LLM APIs and backend services
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">✓</span>
                    LLM orchestration, autonomous agents, and prompt engineering
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">✓</span>
                    Production-ready AI application development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Award size={24} /> Certifications
          </h3>

          <div className="space-y-4">
            {[
              {
                title: "Building Agentic AI Apps",
                issuer: "Programming Pathshala",
                date: "Aug'25",
              },
              {
                title: "Privacy and Security in Online Social Media",
                issuer: "NPTEL",
                date: "Feb'24",
              },
              {
                title: "Basic Python Towards AI/ML",
                issuer: "CSE Pathshala",
                date: "Dec'23",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-colors flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <BookOpen className="text-gray-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {cert.title}
                    </p>
                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm whitespace-nowrap ml-4">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Award size={24} /> Key Achievement
          </h3>

          <div className="p-6 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-colors">
            <div className="flex gap-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  100+ LeetCode Problems
                </h4>
                <p className="text-gray-300 mb-3 text-sm">
                  Solved 100+ DSA problems in arrays, strings, recursion,
                  hashing, and algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Arrays", "Strings", "Recursion", "Hashing", "DP"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/10"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
