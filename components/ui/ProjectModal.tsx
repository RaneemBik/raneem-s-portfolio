"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Code2, SquareStack, Leaf, Waves } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  live: string;
  date: string;
  category: string;
  images: string[];
  highlights: string[];
  featured: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setCurrentImage(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  const categoryColors: Record<string, string> = {
    "Full Stack": "text-purple-300 bg-purple-500/15 border-purple-500/25",
    Frontend: "text-pink-300 bg-pink-500/15 border-pink-500/25",
    Backend: "text-amber-300 bg-amber-500/15 border-amber-500/25",
    Mobile: "text-sky-300 bg-sky-500/15 border-sky-500/25",
  };

  return (
    <AnimatePresence>
      <motion.div
        key="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 glass border-b border-white/5">
            <div>
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <p className="text-white/40 text-sm">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Image gallery */}
          <div className="relative bg-dark-3">
            <div className="relative h-56 md:h-72 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {/* Placeholder gradient image */}
                  <div
                    className="w-full h-full flex items-center justify-center text-white/20 text-6xl"
                    style={{
                      background: `linear-gradient(135deg, ${
                        ["#1a0a2e", "#2d1b69", "#0f0f1e", "#1a0a1a", "#0a1a2e", "#1a1a0a", "#2e0a0a", "#0a2e1a"][project.id % 8]
                      } 0%, #0a0a0f 100%)`,
                    }}
                  >
                    {/* Try to load actual image, fallback to gradient */}
                    <img
                      src={project.images[currentImage]}
                      alt={`${project.title} screenshot ${currentImage + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <span className="relative z-10 opacity-30 flex items-center justify-center">
                      {[<Code2 key="0" size={48} />, <Code2 key="1" size={48} />, <Code2 key="2" size={48} />, <Code2 key="3" size={48} />, <Code2 key="4" size={48} />, <Leaf key="5" size={48} />, <Code2 key="6" size={48} />, <Waves key="7" size={48} />][project.id % 8]}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white transition-all backdrop-blur-sm"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white transition-all backdrop-blur-sm"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`transition-all rounded-full ${
                          idx === currentImage
                            ? "w-5 h-1.5 bg-purple-400"
                            : "w-1.5 h-1.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Meta */}
            <div className="flex flex-wrap gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category] || "text-purple-300 bg-purple-500/15 border-purple-500/25"}`}>
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/50">
                <Calendar size={11} />
                {project.date}
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">About</h3>
              <p className="text-white/70 leading-relaxed text-sm">{project.longDescription}</p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/60">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-white/70 hover:text-white hover:border-purple-500/30 text-sm font-medium transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Github size={15} />
                  View on GitHub
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <ExternalLink size={15} />
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
