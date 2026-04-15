"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { navLinks, personalInfo } from "@/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const nextTheme = saved === "dark" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
    localStorage.setItem("theme", nextTheme);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur bg-dark/80 border-b border-white/5 py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#home")}
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RB<span className="text-purple-400">.</span>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-purple-500/20 border border-purple-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              type="button"
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full glass border border-white/10 text-white/70 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
            <motion.a
              href="/Raneem_Bikai_CV.docx"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={14} />
              CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 right-4 z-50 rounded-2xl p-6 border border-purple-500/30 bg-black"
          >
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="mb-1 px-4 py-3 rounded-xl text-left text-sm font-medium border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-purple-500/20 text-purple-300"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/Raneem_Bikai_CV.docx"
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <Download size={14} /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
