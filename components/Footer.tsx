"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUp, Heart } from "lucide-react";
import { personalInfo } from "@/data";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}`;
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${personalInfo.phone}`;
  };

  return (
    <footer className="relative bg-dark-3 border-t border-white/5 py-10 px-6 dark:bg-light-bg dark:border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-1">Raneem Bikai</div>
            <p className="text-white/30 text-sm dark:text-gray-600">Full-Stack Web Developer</p>
          </div>

          {/* Contact Info - Email & Phone Text */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              onClick={handleEmailClick}
              className="flex items-center gap-2 text-white/70 dark:text-gray-700 hover:text-white dark:hover:text-purple-600 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Send email"
            >
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </motion.a>
            <motion.a
              href={`tel:${personalInfo.phone}`}
              onClick={handlePhoneClick}
              className="flex items-center gap-2 text-white/70 dark:text-gray-700 hover:text-white dark:hover:text-purple-600 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Call phone"
            >
              <Phone size={16} />
              <span>{personalInfo.phone}</span>
            </motion.a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass border border-white/10 text-white/50 hover:text-white hover:border-purple-500/40 dark:border-gray-300 dark:text-gray-600 dark:hover:text-purple-600 dark:hover:border-purple-500/40 transition-all"
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
            className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 hover:text-white hover:border-purple-500/30 dark:border-gray-300 dark:text-gray-600 dark:hover:text-purple-600 dark:hover:border-purple-500/40 text-sm transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 dark:border-gray-200 text-center">
          <p className="text-white/20 dark:text-gray-600 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Raneem Bikai. Built with Next.js & <Heart size={14} className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
