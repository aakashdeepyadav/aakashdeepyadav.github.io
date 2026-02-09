import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "2+", label: "Years Building" },
    { number: "5+", label: "Projects Delivered" },
    { number: "100+", label: "DSA Problems Solved" },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gradient mb-4">About Me</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Passionate about building innovative solutions at the intersection of full-stack development and artificial intelligence
            </p>
          </motion.div>

          {/* Content */}
          <div className="space-y-6 text-muted text-lg leading-relaxed mb-12">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm a B.Tech CS student at LPU with hands-on experience building
              production-grade applications. I started as a curious developer and
              now I spend my time solving real problems with full-stack
              development, machine learning, and recently, Agentic AI systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Whether it's optimizing ML pipelines, designing scalable backend
              architectures, or shipping React apps that people actually use — I'm
              genuinely interested in building systems that work. I don't do
              buzzwords. I do results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Currently diving deep into LLM orchestration, production-ready AI
              applications, and exploring how to combine full-stack engineering
              with applied ML.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="card">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
