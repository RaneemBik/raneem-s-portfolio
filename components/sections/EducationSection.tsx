"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Download, ExternalLink } from "lucide-react";
import { education } from "@/data";

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-dark-2">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education cards */}
        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              <div className="relative glass-strong rounded-2xl border border-amber-500/15 p-8 overflow-hidden group hover:border-amber-500/30 transition-all">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors" />

                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-3xl">
                    {edu.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-amber-300 font-semibold text-lg mb-3">{edu.institution}</p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/50">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-amber-400" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-amber-400" />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-white/50 text-sm leading-relaxed mb-6">{edu.description}</p>

                    {/* Year badge */}
                    <div className="flex flex-wrap gap-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <GraduationCap size={16} className="text-amber-400" />
                        <span className="text-amber-300 text-sm font-medium">Graduated {edu.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Download section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 glass-strong rounded-2xl border border-purple-500/15 p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-4 text-2xl">
              📄
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">My Resume</h3>
            <p className="text-white/50 mb-6 max-w-md mx-auto">
              Want to know more about my background? Download or view my full CV with all details about my skills, experience, and education.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/Raneem_Bikai_CV.docx"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
              <motion.button
                type="button"
                onClick={() => {
                  const modal = document.getElementById("cv-viewer-modal");
                  if (modal) modal.style.display = "flex";
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 text-white/80 font-semibold text-sm hover:border-purple-500/30 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                View CV
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
