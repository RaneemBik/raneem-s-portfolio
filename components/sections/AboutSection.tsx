"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code2, Download, ExternalLink, X, Atom, SquareStack, Leaf } from "lucide-react";
import { personalInfo } from "@/data";
import Image from "next/image";

const stats = [
  { label: "Projects Built", value: "10+", icon: Code2, color: "from-purple-500 to-pink-500" },
  { label: "Technologies", value: "20+", icon: Code2, color: "from-pink-500 to-amber-500" },
  { label: "Experience", value: "1+", icon: Briefcase, color: "from-amber-500 to-purple-500" },
  { label: "Degree", value: "B.Sc.", icon: GraduationCap, color: "from-purple-500 to-pink-500" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [cvViewerSrc, setCvViewerSrc] = useState("");

  useEffect(() => {
    const docxUrl = `${window.location.origin}/Raneem_Bikai_CV.docx`;
    const officeViewer = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(docxUrl)}`;
    setCvViewerSrc(officeViewer);
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-dark-2">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Who I am</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Rotating gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 rounded-3xl opacity-70"
                style={{
                  background:
                    "conic-gradient(from 0deg, #a855f7, #ec4899, #f59e0b, #a855f7)",
                  filter: "blur(8px)",
                }}
              />

              {/* Photo frame */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden glass border border-white/10">
                {/* Profile image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative">
                  <Image
                    src={personalInfo.photo}
                    alt="Raneem Bikai"
                    fill
                    className="object-cover"
                    onError={() => {}}
                  />
                  {/* Overlay gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-2/80 to-transparent" />
                  {/* Name tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass border border-white/10 rounded-xl px-4 py-2 text-center">
                      <div className="font-bold text-white text-sm">{personalInfo.name}</div>
                      <div className="text-purple-300 text-xs">{personalInfo.title}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-8 top-10 glass border border-purple-500/30 rounded-2xl p-3 shadow-lg shadow-purple-500/10"
              >
                <Atom size={24} className="text-purple-300" />
                <div className="text-xs text-purple-300 font-medium mt-1">React</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -left-8 bottom-20 glass border border-pink-500/30 rounded-2xl p-3 shadow-lg shadow-pink-500/10"
              >
                <SquareStack size={24} className="text-pink-300" />
                <div className="text-xs text-pink-300 font-medium mt-1">Next.js</div>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 left-10 glass border border-amber-500/30 rounded-2xl p-3 shadow-lg shadow-amber-500/10"
              >
                <Code2 size={24} className="text-amber-300" />
                <div className="text-xs text-amber-300 font-medium mt-1">TypeScript</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-purple-400" />
              <span className="text-white/50 text-sm">Lebanon</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Building the future,{" "}
              <span className="gradient-text">one line at a time</span>
            </h3>

            <p className="text-white/60 leading-relaxed mb-6 text-base">
              {personalInfo.summary}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Name", value: "Raneem Bikai" },
                { label: "Email", value: "raneembikai70@gmail.com", truncate: true },
                { label: "Phone", value: "+961 70 976 927" },
                { label: "Location", value: "Lebanon" },
                { label: "Degree", value: "B.Sc. Computer Science" },
                { label: "Status", value: "Open to work", highlight: true },
              ].map(({ label, value, highlight, truncate }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-white/30 text-xs uppercase tracking-wider mb-1">{label}</span>
                  <span className={`text-sm font-medium ${highlight ? "text-green-400" : "text-white/80"} ${truncate ? "truncate" : ""}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* CV buttons */}
            <div className="flex flex-wrap gap-3">
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
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map(({ label, value, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass-strong rounded-2xl p-6 text-center animated-border"
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
                {value}
              </div>
              <div className="text-white/50 text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CV Viewer Modal */}
      <div
        id="cv-viewer-modal"
        style={{ display: "none" }}
        className="modal-overlay"
        onClick={(e) => {
          if ((e.target as HTMLElement).id === "cv-viewer-modal") {
            (e.target as HTMLElement).style.display = "none";
          }
        }}
      >
        <div className="w-full max-w-4xl h-[90vh] glass rounded-2xl overflow-hidden border border-purple-500/20 flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h3 className="font-semibold text-white">Raneem Bikai — CV</h3>
            <div className="flex gap-3">
              <a
                href="/Raneem_Bikai_CV.docx"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm"
              >
                <Download size={14} /> Download
              </a>
              <button
                onClick={() => {
                  const modal = document.getElementById("cv-viewer-modal");
                  if (modal) modal.style.display = "none";
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            {cvViewerSrc ? (
              <iframe
                src={cvViewerSrc}
                className="w-full h-full"
                title="Raneem Bikai CV"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/60 text-sm px-6 text-center">
                Preparing CV viewer...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
