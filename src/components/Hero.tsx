import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="section min-h-screen flex-center">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="mb-4">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-bold mb-2">
                Hi, I'm
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-bold text-gradient">
                Aakash
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted font-medium">
              Full Stack Developer & AI Builder
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I build full-stack web apps and ML-powered systems that solve real problems. 
            Currently turning ideas into scalable products while studying CS at Lovely Professional University.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn-secondary"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/aakashdeepyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/aakashdeepyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:aakashdeepyadav106@gmail.com"
              className="text-muted hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
