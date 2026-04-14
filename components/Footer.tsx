"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUp, Heart } from "lucide-react";
import { personalInfo } from "@/data";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-dark-3 border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-1">Raneem Bikai</div>
            <p className="text-white/30 text-sm">Full-Stack Web Developer</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              { icon: Phone, href: `tel:${personalInfo.phone}`, label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" && label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass border border-white/10 text-white/50 hover:text-white hover:border-purple-500/40 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 hover:text-white hover:border-purple-500/30 text-sm transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Raneem Bikai. Built with Next.js & <Heart size={14} className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
