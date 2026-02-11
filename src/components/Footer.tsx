import { Github, Linkedin, Mail, Heart, ArrowUp, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import logoImg from "../assets/ADY_white_logo.png";

const social = [
  { label: "GitHub", href: "https://github.com/aakashdeepyadav", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/aakashdeepyadav", icon: Linkedin },
  { label: "Email", href: "mailto:aakashdeepyadav106@gmail.com", icon: Mail },
  { label: "LeetCode", href: "https://leetcode.com/u/aakashdeepyadav/", icon: SiLeetcode },
  { label: "Codolio", href: "https://codolio.com/profile/aakashdeepyadav", icon: Trophy },
];

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divider py-14" style={{ backgroundColor: "var(--bg-footer)" }}>
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block">
              <img src={logoImg} alt="ADY Logo" className="h-8 w-auto theme-logo" />
            </a>
            <p className="text-sm theme-text-faint mt-3 max-w-xs leading-relaxed">
              Full Stack Developer & AI Builder — building scalable web apps and ML-powered systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold theme-text-secondary uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-sm theme-text-faint hover:text-cyan-400 transition-colors duration-200">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold theme-text-secondary uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3">
              {social.map(({ label, href, icon: Icon }) => (
                <motion.a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-xl theme-bg-badge theme-text-faint hover:text-cyan-400 transition-all duration-200"
                  style={{ border: "1px solid var(--border-primary)" }}
                  title={label}
                  whileHover={{ y: -2 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border-primary)" }} className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs theme-text-faint">
          <p className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-red-500" /> by Aakash
          </p>
          <p>&copy; {year} All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-2xl backdrop-blur-md theme-text-muted hover:text-cyan-400 transition-all duration-300 z-40 shadow-xl"
        style={{ backgroundColor: "var(--nav-scrolled-bg)", border: "1px solid var(--border-primary)" }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        title="Back to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  );
};

export default Footer;
