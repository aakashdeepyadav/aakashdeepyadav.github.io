import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay },
});

const certificates = [
  {
    title: "Building Agentic AI Apps",
    issuer: "Programming Pathshala",
    date: "Aug 2025",
    desc: "Covered LLM API integration, prompt engineering, building agents that use tools, chain-of-thought reasoning, and deploying AI apps.",
    link: "#",
    image: "/certificates/Agentic_AI_Certificate.png",
  },
  {
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL",
    date: "Feb 2024",
    desc: "Covered threat modeling, data anonymization, access control, and how social platforms handle privacy at scale.",
    link: "#",
    image: "/certificates/Privacy_and_Security.jpg",
  },
  {
    title: "Basic Python Towards AI/ML",
    issuer: "CSE Pathshala",
    date: "Dec 2023",
    desc: "Python basics, then NumPy, Pandas, data cleaning, and training simple ML models with Scikit-Learn.",
    link: "#",
    image: "/certificates/AIML_By_CSEPathshala.png",
  },
];

const Certificates = () => (
  <section
    id="certificates"
    className="relative py-28 section-divider overflow-hidden"
  >
    <div className="wrapper relative z-10">
      {/* Header with section number */}
      <motion.div {...fadeUp()} className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading mb-3">
          Certifications
        </h2>
        <p className="theme-text-muted text-base max-w-xl">
          Courses I've completed
        </p>
      </motion.div>

      {/* Certificate Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.div key={i} {...fadeUp(i * 0.08)} className="group">
            <div className="glass-card h-full flex flex-col overflow-hidden">
              {/* Certificate Image */}
              <div
                className="relative h-56 overflow-hidden"
                style={{ backgroundColor: "var(--bg-card-alt)" }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Fallback */}
                <div
                  className="absolute inset-0 items-center justify-center hidden"
                  style={{ backgroundColor: "var(--bg-card-alt)" }}
                >
                  <Award size={36} className="theme-text-faint opacity-40" />
                </div>
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-medium"
                  style={{
                    color: "var(--cert-date-text)",
                    backgroundColor: "var(--cert-date-bg)",
                    border: "1px solid var(--cert-date-border)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    textShadow: "var(--cert-date-shadow)",
                  }}
                >
                  {cert.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold theme-text-heading mb-1 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "#00b4d8" }}
                >
                  {cert.issuer}
                </p>
                <p className="theme-text-muted text-sm leading-relaxed flex-1 mb-5">
                  {cert.desc}
                </p>

                {/* View Certificate Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg transition-colors duration-200 w-full"
                  style={{
                    backgroundColor: "rgba(0, 180, 216, 0.08)",
                    color: "#00b4d8",
                    border: "1px solid rgba(0, 180, 216, 0.2)",
                  }}
                >
                  <ExternalLink size={13} /> View Certificate
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
