import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "./ScrollProgress";
import ThemeToggle from "./ThemeToggle";
import logoImg from "../assets/ADY_white_logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <ScrollProgress />
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
          ? "backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-transparent"
          }`}
        style={scrolled ? { backgroundColor: "var(--nav-scrolled-bg)", borderBottom: "1px solid var(--border-primary)" } : {}}
      >
        <div className="wrapper">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a href="#home" className="flex items-center" whileHover={{ scale: 1.05 }}>
              <img src={logoImg} alt="ADY Logo" className="h-8 w-auto theme-logo" />
            </motion.a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}
                  className="relative text-[13px] font-medium theme-text-muted hover:text-cyan-400 transition-colors duration-300 group">
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button onClick={() => setOpen(!open)}
                className="p-2 theme-text-muted hover:text-cyan-400 transition-colors" aria-label="Toggle menu">
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden backdrop-blur-xl"
              style={{ backgroundColor: "var(--mobile-menu-bg)", borderTop: "1px solid var(--border-primary)" }}
            >
              <div className="wrapper py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.a key={item.label} href={item.href} onClick={() => setOpen(false)}
                    className="block py-3 text-sm theme-text-secondary hover:text-cyan-400 transition-colors"
                    style={{ borderBottom: "1px solid var(--border-primary)" }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}>
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
