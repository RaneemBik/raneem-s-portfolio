"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills, skillIcons } from "@/data";

const categoryColors: Record<string, string> = {
  Languages: "from-purple-500 to-violet-600",
  "Frontend Frameworks": "from-pink-500 to-rose-600",
  "Backend & APIs": "from-amber-500 to-orange-600",
  Databases: "from-emerald-500 to-teal-600",
  "Auth & Security": "from-red-500 to-pink-600",
  "Testing & QA": "from-cyan-500 to-blue-600",
  "DevOps & Deploy": "from-indigo-500 to-purple-600",
  "AI Integration": "from-violet-500 to-purple-700",
  Methodologies: "from-fuchsia-500 to-pink-600",
  Mobile: "from-sky-500 to-blue-600",
};

const categoryBg: Record<string, string> = {
  Languages: "bg-purple-500/10 border-purple-500/20 hover:border-purple-400/50",
  "Frontend Frameworks": "bg-pink-500/10 border-pink-500/20 hover:border-pink-400/50",
  "Backend & APIs": "bg-amber-500/10 border-amber-500/20 hover:border-amber-400/50",
  Databases: "bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-400/50",
  "Auth & Security": "bg-red-500/10 border-red-500/20 hover:border-red-400/50",
  "Testing & QA": "bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-400/50",
  "DevOps & Deploy": "bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-400/50",
  "AI Integration": "bg-violet-500/10 border-violet-500/20 hover:border-violet-400/50",
  Methodologies: "bg-fuchsia-500/10 border-fuchsia-500/20 hover:border-fuchsia-400/50",
  Mobile: "bg-sky-500/10 border-sky-500/20 hover:border-sky-400/50",
};

function SkillTag({ name, delay, category }: { name: string; delay: number; category: string }) {
  const [hovered, setHovered] = useState(false);
  const icon = skillIcons[name];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.08, y: -3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative px-4 py-2.5 rounded-xl border text-sm font-medium cursor-default transition-all duration-200 flex items-center gap-2 ${categoryBg[category] || "bg-white/5 border-white/10"}`}
    >
      {icon && <span className="text-base">{icon}</span>}
      <span className="text-white/80">{name}</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.keys(skills);
  const displayCategories = activeCategory ? [activeCategory] : categories;

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">What I know</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-white/50 max-w-xl mx-auto">
            A comprehensive toolkit built across years of projects, internships, and continuous learning.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !activeCategory
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20"
                : "glass border border-white/10 text-white/50 hover:text-white"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20"
                  : "glass border border-white/10 text-white/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="space-y-10">
          {displayCategories.map((category, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * ci }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`h-px flex-1 bg-gradient-to-r ${categoryColors[category] || "from-purple-500 to-pink-500"} opacity-30`} />
                <h3 className={`text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${categoryColors[category] || "from-purple-500 to-pink-500"} bg-clip-text text-transparent whitespace-nowrap`}>
                  {category}
                </h3>
                <div className={`h-px flex-1 bg-gradient-to-l ${categoryColors[category] || "from-purple-500 to-pink-500"} opacity-30`} />
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-3">
                {(skills as Record<string, string[]>)[category].map((skill, si) => (
                  <SkillTag
                    key={skill}
                    name={skill}
                    delay={inView ? 0.05 * si : 0}
                    category={category}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 glass-strong rounded-2xl p-6 border border-purple-500/10"
        >
          <p className="text-center text-white/30 text-sm mb-4 uppercase tracking-widest">Core Stack</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["⚛️ React", "▲ Next.js", "🔷 TypeScript", "🟢 Node.js", "🦅 NestJS", "🐍 Python", "⚡ FastAPI", "🍃 MongoDB", "🌊 Tailwind"].map((tech) => (
              <motion.span
                key={tech}
                className="text-white/50 text-sm font-medium hover:text-white transition-colors cursor-default"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
