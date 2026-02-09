import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aakashdeepyadav106@gmail.com",
      href: "mailto:aakashdeepyadav106@gmail.com",
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
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-12">
          Open to opportunities, collaborations, and interesting conversations.
          Reach out anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-colors flex items-center gap-4"
                >
                  <div className="p-3 bg-white/10 rounded-lg flex-shrink-0">
                    <Icon className="text-gray-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{info.label}</p>
                    <p className="font-semibold text-white hover:text-gray-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                  {info.href.startsWith("http") && (
                    <ExternalLink
                      className="text-gray-500 ml-auto hover:text-white transition-colors"
                      size={16}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-lg border border-white/10 bg-white/5 space-y-4"
          >
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 rounded-lg transition-colors border border-white/10"
            >
              {isSubmitted ? "✓ Sent!" : "Send Message"}
            </button>

            {isSubmitted && (
              <p className="text-gray-400 text-xs text-center">
                Thanks! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="text-center py-8 border-t border-white/10">
          <p className="text-gray-400 mb-4 text-sm">Connect on social media</p>
          <div className="flex justify-center gap-3">
            {[
              {
                icon: Github,
                url: "https://github.com/aakashdeepyadav",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                url: "https://linkedin.com/in/aakashdeepyadav",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                url: "mailto:aakashdeepyadav106@gmail.com",
                label: "Email",
              },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10"
                  title={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
