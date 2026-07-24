"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import projectsData from "@/public/projects.json";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projectsData : projectsData.slice(0, 4);

  return (
    <section id="projects" className="py-16 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 bg-[#171A1F]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <p className="text-[#C9B59C] font-mono mb-4 tracking-widest uppercase text-sm">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#F5F1EC]">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group overflow-hidden rounded-3xl border border-[#2A313A] hover:border-[#C9B59C] transition-all flex flex-col w-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay — visible on desktop only */}
                <div className="absolute inset-0 bg-[#0F1115]/60 opacity-0 group-hover:opacity-100 transition-opacity md:flex hidden flex-col items-center justify-center gap-6 backdrop-blur-sm">
                  <div className="flex gap-6">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#C9B59C] text-[#0F1115] flex items-center justify-center text-xl hover:scale-110 transition-transform"><FaGithub /></a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#F5F1EC] text-[#0F1115] flex items-center justify-center text-lg hover:scale-110 transition-transform"><FaExternalLinkAlt /></a>
                  </div>
                  <Link href={`/projects/${project.slug}`} className="px-6 py-2 rounded-xl bg-[#C9B59C] text-[#0F1115] font-bold hover:bg-[#D8C6AF] transition-colors">
                    View Details
                  </Link>
                </div>
              </div>

              <div className="p-4 sm:p-8 flex-1 flex flex-col">
                <span className="text-[#C9B59C] font-mono text-xs mb-2 uppercase">{project.category}</span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F1EC] mb-4">{project.title}</h3>
                <p className="text-[#CBBFB2] mb-3 line-clamp-3">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#0F1115]/50 border border-[#2A313A] rounded-full text-[10px] uppercase tracking-wider text-[#CBBFB2]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile/Tablet buttons — visible on small screens only */}
                <div className="flex flex-col gap-3 lg:hidden mt-2">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-colors text-sm font-medium"
                      style={{
                        borderColor: "var(--border-color)",
                        color: "var(--text-secondary)",
                        background: "var(--bg-card)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#C9B59C";
                        e.currentTarget.style.color = "#C9B59C";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-color)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#C9B59C] text-[#0F1115] hover:bg-[#D8C6AF] transition-colors text-sm font-bold"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full flex items-center justify-center py-2.5 rounded-xl border transition-colors text-sm font-medium"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-secondary)",
                      background: "var(--bg-card)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#C9B59C";
                      e.currentTarget.style.color = "#C9B59C";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-color)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projectsData.length > 4 && (
          <div className="flex justify-center mt-10 sm:mt-14">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#C9B59C] text-[#0F1115] font-bold rounded-full hover:bg-[#D8C6AF] transition-colors shadow-lg shadow-[#C9B59C]/20"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
