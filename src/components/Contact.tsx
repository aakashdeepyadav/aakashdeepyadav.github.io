import { Mail, MapPin, Github, Linkedin, Send, Phone } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RATE_LIMIT_KEY = "portfolio_contact_rate_limit_v1";
const COOLDOWN_MS = 60_000;
const MAX_PER_HOUR = 3;
const MAX_PER_DAY = 10;
const HOUR_BLOCK_MS = 60 * 60 * 1000;
const DAY_BLOCK_MS = 24 * 60 * 60 * 1000;

type RateLimitState = {
  timestamps: number[];
  blockedUntil: number;
};

const getRateLimitState = (): RateLimitState => {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    if (!raw) return { timestamps: [], blockedUntil: 0 };
    const parsed = JSON.parse(raw) as Partial<RateLimitState>;
    return {
      timestamps: Array.isArray(parsed.timestamps)
        ? parsed.timestamps.filter((t): t is number => Number.isFinite(t))
        : [],
      blockedUntil: Number.isFinite(parsed.blockedUntil)
        ? Number(parsed.blockedUntil)
        : 0,
    };
  } catch {
    return { timestamps: [], blockedUntil: 0 };
  }
};

const saveRateLimitState = (state: RateLimitState) => {
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(state));
};

const formatWait = (ms: number) => {
  const totalSeconds = Math.max(1, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
};

const checkRateLimit = () => {
  const now = Date.now();
  const state = getRateLimitState();
  const dayAgo = now - DAY_BLOCK_MS;
  const timestamps = state.timestamps.filter((t) => t > dayAgo);

  if (state.blockedUntil > now) {
    return {
      ok: false as const,
      reason: `Too many attempts. Try again in ${formatWait(state.blockedUntil - now)}.`,
    };
  }

  if (
    timestamps.length > 0 &&
    now - timestamps[timestamps.length - 1] < COOLDOWN_MS
  ) {
    const wait = COOLDOWN_MS - (now - timestamps[timestamps.length - 1]);
    return {
      ok: false as const,
      reason: `Please wait ${formatWait(wait)} before sending another message.`,
    };
  }

  const hourAgo = now - HOUR_BLOCK_MS;
  const perHour = timestamps.filter((t) => t > hourAgo).length;
  if (perHour >= MAX_PER_HOUR) {
    const blockedUntil = now + HOUR_BLOCK_MS;
    saveRateLimitState({ timestamps, blockedUntil });
    return {
      ok: false as const,
      reason: "Hourly limit reached. Please try again after 1 hour.",
    };
  }

  if (timestamps.length >= MAX_PER_DAY) {
    const blockedUntil = now + DAY_BLOCK_MS;
    saveRateLimitState({ timestamps, blockedUntil });
    return {
      ok: false as const,
      reason: "Daily limit reached. Please try again tomorrow.",
    };
  }

  saveRateLimitState({ timestamps: [...timestamps, now], blockedUntil: 0 });
  return { ok: true as const };
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay },
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aakashdeepyadav106@gmail.com",
    href: "mailto:aakashdeepyadav106@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "aakashdeepyadav",
    href: "https://linkedin.com/in/aakashdeepyadav",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "aakashdeepyadav",
    href: "https://github.com/aakashdeepyadav",
  },
  { icon: MapPin, label: "Location", value: "Punjab, India", href: "#" },
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

    const limitCheck = checkRateLimit();
    if (!limitCheck.ok) {
      toast.error(limitCheck.reason);
      return;
    }

    setSending(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/aakashdeepyadav001@gmail.com",
        {
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
        },
      );
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

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  return (
    <section
      id="contact"
      className="relative py-28 section-divider overflow-hidden"
    >
      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
      <div className="wrapper relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading mb-3">
            Get In Touch
          </h2>
          <p className="theme-text-muted text-base max-w-xl">
            Have a project in mind, or just want to connect? Drop me a message
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <motion.div {...fadeUp(0.05)} className="space-y-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group glass-card flex items-center gap-4 p-5 block"
                >
                  <div
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{
                      backgroundColor: "rgba(0, 180, 216, 0.08)",
                      border: "1px solid rgba(0, 180, 216, 0.15)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#00b4d8" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest theme-text-faint mb-0.5">
                      {info.label}
                    </p>
                    <p className="font-medium text-sm theme-text-secondary truncate group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            {...fadeUp(0.1)}
            onSubmit={handleSubmit}
            className="glow-card"
          >
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Send size={16} style={{ color: "#00b4d8" }} />
                <h3 className="font-semibold theme-text-heading text-sm">
                  Send a Message
                </h3>
              </div>
              <div>
                <label className="block text-xs font-medium theme-text-secondary mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={change}
                  className={`input-glow ${errors.name ? "!border-red-500/50" : ""}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium theme-text-secondary mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={change}
                  className={`input-glow ${errors.email ? "!border-red-500/50" : ""}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium theme-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={change}
                  className={`input-glow resize-none ${errors.message ? "!border-red-500/50" : ""}`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-glow btn-glow-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
