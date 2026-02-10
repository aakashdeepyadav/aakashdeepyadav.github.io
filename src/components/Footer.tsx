import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/aakashdeepyadav", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/aakashdeepyadav", icon: Linkedin },
  { label: "Email", href: "mailto:aakashdeepyadav106@gmail.com", icon: Mail },
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
    <footer className="border-t border-[#1E2530] py-12 bg-[#0F1419]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-gradient">ADY</span>
            </a>
            <p className="text-sm text-[#718096] mt-2 max-w-xs">
              Full Stack Developer & AI Builder — building scalable web apps and ML-powered systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-[#A0AEC0] uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-sm text-[#718096] hover:text-[#00D9FF] transition-colors duration-200">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-[#A0AEC0] uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 bg-[#1A1F26] border border-[#2D3748] rounded-lg text-[#718096] hover:text-[#00D9FF] hover:border-[#00D9FF]/30 transition-all duration-200"
                  title={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E2530] my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#718096]">
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500" /> by Aakash
          </p>
          <p>&copy; {year} All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-[#1A1F26] border border-[#2D3748] rounded-full text-[#718096] hover:text-[#00D9FF] hover:border-[#00D9FF]/30 transition-all duration-200 z-40 shadow-lg"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        title="Back to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  );
};

export default Footer;
