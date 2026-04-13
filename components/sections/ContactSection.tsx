"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data";
import toast from "react-hot-toast";

const GlobeScene = dynamic(() => import("@/components/3d/GlobeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border border-purple-500/30 animate-pulse" />
    </div>
  ),
});

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        toast.success("Message sent successfully! I'll get back to you soon.");
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast.error("Something went wrong. Try emailing me directly.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "raneem-bikai",
      href: personalInfo.linkedin,
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "RaneemBik",
      href: personalInfo.github,
      color: "from-gray-500 to-gray-700",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-white/50 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Form + Info */}
          <div className="space-y-8">
            {/* Contact cards */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" && label !== "Phone" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-xl border border-white/5 p-4 hover:border-purple-500/20 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} p-0.5 mb-3`}>
                    <div className="w-full h-full rounded-[10px] bg-dark flex items-center justify-center">
                      <Icon size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="text-xs text-white/30 mb-1">{label}</div>
                  <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors truncate">
                    {value}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass-strong rounded-2xl border border-purple-500/15 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-5">Send me a message</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={48} className="text-green-400 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/50 text-sm">I&apos;ll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-purple-400 text-sm hover:text-purple-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project or just say hi..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 disabled:opacity-70 transition-all"
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    {loading ? (
                      <><Loader2 size={16} className="animate-spin" />Sending...</>
                    ) : (
                      <><Send size={16} />Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Right — 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative h-[480px] lg:h-[560px]"
          >
            {/* Globe container */}
            <div className="w-full h-full">
              <GlobeScene />
            </div>

            {/* Overlay text */}
            <div className="absolute inset-x-0 bottom-6 flex flex-col items-center pointer-events-none">
              <div className="glass border border-purple-500/20 rounded-xl px-5 py-3 text-center">
                <p className="text-white/60 text-sm">Based in</p>
                <p className="text-white font-semibold">Lebanon 🇱🇧</p>
                <p className="text-white/40 text-xs mt-0.5">Available worldwide 🌍</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
