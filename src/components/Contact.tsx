import { Mail, MapPin, Github, Linkedin, ExternalLink, Send, MessageSquare, Trophy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "aakashdeepyadav106@gmail.com", href: "mailto:aakashdeepyadav106@gmail.com", accent: "#00d4ff" },
  { icon: Linkedin, label: "LinkedIn", value: "aakashdeepyadav", href: "https://linkedin.com/in/aakashdeepyadav", accent: "#0077b5" },
  { icon: Github, label: "GitHub", value: "aakashdeepyadav", href: "https://github.com/aakashdeepyadav", accent: "#7c3aed" },
  { icon: SiLeetcode, label: "LeetCode", value: "aakashdeepyadav", href: "https://leetcode.com/u/aakashdeepyadav/", accent: "#ffa116" },
  { icon: Trophy, label: "Codolio", value: "aakashdeepyadav", href: "https://codolio.com/profile/aakashdeepyadav", accent: "#10b981" },
  { icon: MapPin, label: "Location", value: "Punjab, India", href: "#", accent: "#f97316" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Min 10 characters";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/aakashdeepyadav106@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
        }),
      });
      if (!response.ok) throw new Error("Failed");
      toast.success("Message sent! I'll reply soon.");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      toast.error("Failed to send. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  return (
    <section id="contact" className="relative py-28 section-divider overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--dot-color) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[140px]" />
      </div>

      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
      <div className="wrapper relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <MessageSquare size={18} className="text-cyan-400" />
            </div>
            <p className="text-cyan-400 font-semibold text-sm tracking-[0.2em] uppercase">Contact</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold theme-text-heading mb-4">Let's Connect</h2>
          <p className="theme-text-muted text-lg max-w-xl">
            Open to opportunities, collaborations, and interesting conversations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <motion.div {...fadeUp(0.1)} className="space-y-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group glass-card flex items-center gap-4 p-5"
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="p-3 rounded-xl flex-shrink-0 border"
                    style={{
                      background: `${info.accent}10`,
                      borderColor: `${info.accent}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: info.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest theme-text-faint mb-0.5">{info.label}</p>
                    <p className="font-medium text-sm theme-text-secondary truncate group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                  {info.href.startsWith("http") && (
                    <ExternalLink size={14} className="theme-text-faint group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                  )}
                </motion.a>
              );
            })}

            {/* Quick connect banner */}
            <motion.div {...fadeUp(0.3)} className="glass-card p-5 mt-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl">💬</span>
                <div>
                  <p className="text-sm font-medium theme-text-heading mb-1">Prefer a quick chat?</p>
                  <p className="text-xs theme-text-muted">I typically respond within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form {...fadeUp(0.2)} onSubmit={handleSubmit} className="glow-card">
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Send size={16} className="text-cyan-400" />
                <h3 className="font-semibold theme-text-heading text-sm">Send a Message</h3>
              </div>
              <div>
                <label className="block text-xs font-medium theme-text-secondary mb-2">Name</label>
                <input name="name" value={form.name} onChange={change}
                  className={`input-glow ${errors.name ? "!border-red-500/50" : ""}`} placeholder="Your name" />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium theme-text-secondary mb-2">Email</label>
                <input name="email" type="email" value={form.email} onChange={change}
                  className={`input-glow ${errors.email ? "!border-red-500/50" : ""}`} placeholder="your@email.com" />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium theme-text-secondary mb-2">Message</label>
                <textarea name="message" rows={4} value={form.message} onChange={change}
                  className={`input-glow resize-none ${errors.message ? "!border-red-500/50" : ""}`} placeholder="Tell me about your project..." />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>
              <button type="submit" disabled={sending}
                className="btn-glow btn-glow-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                {sending ? "Sending..." : <><Send size={15} /> Send Message</>}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
