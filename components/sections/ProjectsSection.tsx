"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Calendar, Eye, ChevronDown, Filter } from "lucide-react";
import { projects } from "@/data";
import ProjectModal from "@/components/ui/ProjectModal";

const categoryColors: Record<string, string> = {
  "Full Stack": "text-purple-300 bg-purple-500/15 border-purple-500/25",
  Frontend: "text-pink-300 bg-pink-500/15 border-pink-500/25",
  Backend: "text-amber-300 bg-amber-500/15 border-amber-500/25",
  Mobile: "text-sky-300 bg-sky-500/15 border-sky-500/25",
};

const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
const allYears = ["All", ...Array.from(new Set(projects.map((p) => p.date))).sort((a, b) => b.localeCompare(a))];
const allTechs = ["All", ...Array.from(new Set(projects.flatMap((p) => p.technologies))).sort()];

interface ProjectCardProps {
  project: typeof projects[0];
  onClick: () => void;
  index: number;
  inView: boolean;
}

function ProjectCard({ project, onClick, index, inView }: ProjectCardProps) {
  const hasImages = project.images && project.images.length > 0 && project.images[0];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-2xl border border-white/5 overflow-hidden cursor-pointer hover:border-purple-500/30 transition-all duration-300"
      onClick={onClick}
    >
      {/* Project image or code icon */}
      <div className="relative h-44 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${
              ["#1a0a2e", "#2d1b69", "#0f0f1e", "#1a0a1a", "#0a1a2e", "#1a1a0a", "#2e0a0a", "#0a2e1a"][project.id % 8]
            } 0%, #0a0a0f 100%)`,
          }}
        >
          {hasImages ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="text-5xl font-bold text-white/30 group-hover:text-white/50 transition-colors">
                &lt;/&gt;
              </div>
              <div className="flex flex-wrap gap-2 justify-center px-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 text-xs">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/40 text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/80 text-white text-sm font-medium"
          >
            <Eye size={14} />
            View Details
          </motion.div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium">
            Featured
          </div>
        )}

        {/* Category */}
        <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium border ${categoryColors[project.category] || "text-purple-300 bg-purple-500/15 border-purple-500/25"}`}>
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-bold text-white text-lg group-hover:text-purple-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-white/40 text-xs">{project.subtitle}</p>
          </div>
          <span className="flex items-center gap-1 text-white/30 text-xs whitespace-nowrap">
            <Calendar size={11} />
            {project.date}
          </span>
        </div>

        <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/50 text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/30 text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/5">
          <button
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className="flex-1 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium hover:bg-purple-500/20 transition-all text-center"
          >
            Show More
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-white/50 hover:text-white hover:border-white/20 transition-all"
            >
              <Github size={14} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/30 text-purple-300 hover:text-white transition-all"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [activeTech, setActiveTech] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = projects.filter((p) => {
    const catOk = activeCategory === "All" || p.category === activeCategory;
    const yearOk = activeYear === "All" || p.date === activeYear;
    const techOk = activeTech === "All" || p.technologies.includes(activeTech);
    return catOk && yearOk && techOk;
  });

  const displayed = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-white/50 max-w-xl mx-auto">
            A collection of projects spanning full-stack web apps, mobile development, and AI integration.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20"
                    : "glass border border-white/10 text-white/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Advanced filters toggle */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/40 hover:text-white text-sm transition-all"
            >
              <Filter size={14} />
              Advanced Filters
              <ChevronDown size={14} className={`transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-5 glass rounded-2xl border border-white/8 space-y-4">
                  {/* Year filter */}
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Filter by Year</p>
                    <div className="flex flex-wrap gap-2">
                      {allYears.map((y) => (
                        <button
                          key={y}
                          onClick={() => setActiveYear(y)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            activeYear === y
                              ? "bg-amber-500/30 border border-amber-500/50 text-amber-300"
                              : "bg-white/5 border border-white/8 text-white/40 hover:text-white"
                          }`}
                        >
                          {y}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tech filter */}
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Filter by Technology</p>
                    <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                      {allTechs.map((t) => (
                        <button
                          key={t}
                          onClick={() => setActiveTech(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            activeTech === t
                              ? "bg-purple-500/30 border border-purple-500/50 text-purple-300"
                              : "bg-white/5 border border-white/8 text-white/40 hover:text-white"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-white/30 text-sm mb-6 text-center"
        >
          Showing <span className="text-purple-400">{displayed.length}</span> of{" "}
          <span className="text-white/50">{filtered.length}</span> projects
        </motion.p>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayed.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Show more */}
        {filtered.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex justify-center mt-10"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full glass border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-medium text-sm transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : `Show More (${filtered.length - 3} more)`}
              <ChevronDown size={16} className={`transition-transform ${showAll ? "rotate-180" : ""}`} />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
