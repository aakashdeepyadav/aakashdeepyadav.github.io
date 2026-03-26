import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/aakash.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
});

const highlights = [
  "DSA — solved 100+ problems on LeetCode",
  "REST APIs, auth flows, and database schema design",
  "Clean Git history, meaningful PRs, code reviews",
  "Docker, CI/CD, deploying to Vercel and Render",
  "Working with teammates across timezones",
  "Taking a feature from idea to production",
];

const About = () => {
  return (
    <section id="about" className="relative py-28 section-divider overflow-hidden">
      <div className="wrapper relative z-10">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#00b4d8" }}
          >
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading">
            About Me
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-16 items-start">
          {/* Left — Image + Name */}
          <motion.div {...fadeUp(0.05)} className="flex flex-col items-center lg:items-start">
            {/* Profile Image */}
            <div className="relative mb-8">
              {/* Accent decoration behind image */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-30 blur-sm"
                style={{ background: "linear-gradient(135deg, #00b4d8, #0077b6)" }}
              />
              <div
                className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-2xl overflow-hidden"
                style={{ border: "2px solid var(--border-secondary)" }}
              >
                <img
                  src={profileImage}
                  alt="Aakash Deep Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name & Role */}
            <h3 className="text-2xl font-bold theme-text-heading mb-1">
              Aakash Deep Yadav
            </h3>
            <p
              className="text-sm font-medium tracking-wide mb-6"
              style={{ color: "#00b4d8" }}
            >
              Software Developer
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Github size={18} />, href: "https://github.com/aakashdeepyadav", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/aakashdeepyadav", label: "LinkedIn" },
                { icon: <Mail size={18} />, href: "#contact", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center theme-text-muted transition-all duration-300"
                  style={{
                    border: "1px solid var(--border-secondary)",
                    background: "var(--bg-card-alt)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00b4d8";
                    e.currentTarget.style.color = "#00b4d8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-secondary)";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Summary + Highlights + Buttons */}
          <div>
            {/* Summary Paragraphs */}
            <motion.div {...fadeUp(0.1)} className="space-y-5 mb-10">
              <p className="theme-text-secondary leading-relaxed text-[15px]">
                I'm studying Computer Science at Lovely Professional University. Most of my time goes
                into building web apps and learning how things work under the hood — from how databases
                index queries to how React reconciles the DOM.
              </p>
              <p className="theme-text-secondary leading-relaxed text-[15px]">
                My go-to stack is{" "}
                <span className="font-medium theme-text-heading">React, Node.js, Python, and MongoDB</span>.
                I've also spent time with{" "}
                <span className="font-medium theme-text-heading">ML libraries</span> like
                Scikit-Learn and TensorFlow — mostly building recommendation systems and classifiers.
              </p>
              <p className="theme-text-secondary leading-relaxed text-[15px]">
                Lately I've been working with{" "}
                <span className="font-medium theme-text-heading">LLM APIs</span> and
                building AI agents that can call tools, maintain context, and handle multi-step tasks.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div {...fadeUp(0.15)} className="mb-10">
              <h4 className="text-sm font-semibold theme-text-heading uppercase tracking-wider mb-5">
                What I bring to the table
              </h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm theme-text-secondary">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                      style={{ backgroundColor: "#00b4d8" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.2)} className="flex flex-wrap items-center gap-4">
              <a href="/resume.pdf" download className="btn-solid">
                <Download size={16} /> Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                <Mail size={16} /> Let's Connect
              </a>
              <a
                href="#projects"
                className="btn-outline"
              >
                <ExternalLink size={16} /> View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
