"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "@/data";

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-dark-2">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent -translate-x-0.5 md:-translate-x-0.5" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-purple-500 bg-dark-2 z-10 shadow-lg shadow-purple-500/30">
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-1 rounded-full bg-purple-500"
                />
              </div>

              {/* Date badge */}
              <div className="md:w-1/2 md:text-right md:pr-12 pl-20 md:pl-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass border border-purple-500/20 rounded-2xl p-5 md:ml-auto md:max-w-sm"
                >
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold mb-1 md:justify-end">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm md:justify-end">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs">
                    {exp.type}
                  </div>
                </motion.div>
              </div>

              {/* Content card */}
              <div className="md:w-1/2 md:pl-12 pl-20">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-strong border border-purple-500/15 rounded-2xl p-6 transition-all"
                >
                  {/* Title */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={18} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-purple-300 font-medium text-sm">{exp.company}</p>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 mt-4 mb-5">
                    {exp.description.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + j * 0.06 }}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <CheckCircle2 size={15} className="text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* "Currently" indicator at top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="absolute -top-6 left-8 md:left-1/2 md:-translate-x-1/2 pl-10 md:pl-0 md:text-center"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-green-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Current
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
