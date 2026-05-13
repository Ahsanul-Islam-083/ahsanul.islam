"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SunCart — Modern Summer E-Commerce Platform",
    category: "MERN-Stack Development",
    description: "Explore, Shop & Stay Sun-Ready — A clean, responsive summer e-commerce platform built with Next.js 16, featuring authentication, protected routes, and a seamless shopping experience.",
    image: "https://i.ibb.co/BV2ywcK3/suncurt-Img.png",
    tags: ["Next.js", "Tailwind", "HeroUI", "BetterAuth", "MongoDB", "Swiper", "shadcn/ui"],
    github: "https://github.com/Ahsanul-Islam-083/suncart",
    live: "https://suncart-sigma.vercel.app/"
  },
  {
    title: "PixGen — AI Image Gallery Platform",
    category: "MERN-Stack Development",
    description: "Create. Imagine. Generate. — A modern AI-powered gallery platform where users can explore, view, and interact with AI-generated images with authentication and protected routes.",
    image: "https://i.ibb.co/jZH6MPVr/pixgen.png",
    tags: ["Next.js", "Tailwind", "HeroUI", "BetterAuth", "MongoDB"],
    github: "https://github.com/Ahsanul-Islam-083/pixgen",
    live: "https://pixgen-nine.vercel.app/"
  },
  {
    title: "DigiTools — Premium Digital Tools Store",
    category: "Frontend Engineering",
    description: "Explore, Add & Checkout — A clean and responsive digital tools store built with React, featuring a live cart, instant notifications, and smooth tab navigation.",
    image: "https://i.ibb.co/vxV7G2MN/digitools.png",
    tags: ["React.js", "Tailwind CSS", "DaisyUI", "JavaScript (ES6+)", "React-Toastify"],
    github: "https://github.com/Ahsanul-Islam-083/digi-tools",
    live: "https://digi-tool.netlify.app/"
  },
  {
    title: " English Janala",
    category: "Frontend Engineering",
    description: "Learn English Vocabulary — Level by Level — An interactive vocabulary learning app powered by a live API with pronunciation, search, and save features!",
    image: "https://i.ibb.co/wN4yhRPz/english-Janala.png",
    tags: ["JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "API Integration", "Web Speech API"],
    github: "https://github.com/Ahsanul-Islam-083/english-janala-app",
    live: "https://ahsanul-islam-083.github.io/english-janala-app/"
  }
];

export default function Projects() {
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
          {projects.map((project, i) => (
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
                <div className="absolute inset-0 bg-[#0F1115]/60 opacity-0 group-hover:opacity-100 transition-opacity md:flex hidden items-center justify-center gap-6 backdrop-blur-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#C9B59C] text-[#0F1115] flex items-center justify-center text-xl hover:scale-110 transition-transform"><FaGithub /></a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#F5F1EC] text-[#0F1115] flex items-center justify-center text-lg hover:scale-110 transition-transform"><FaExternalLinkAlt /></a>
                </div>
              </div>

              <div className="p-4 sm:p-8 flex-1 flex flex-col">
                <span className="text-[#C9B59C] font-mono text-xs mb-2 uppercase">{project.category}</span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F1EC] mb-4">{project.title}</h3>
                <p className="text-[#CBBFB2] md:mb-4 line-clamp-3">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#0F1115]/50 border border-[#2A313A] rounded-full text-[10px] uppercase tracking-wider text-[#CBBFB2]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile/Tablet buttons — visible on small screens only */}
                <div className="flex gap-3 lg:hidden mt-2">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
