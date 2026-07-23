"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiFirebase,
  SiJsonwebtokens,
  SiVite,
  SiGreensock,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiMui,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const techStack = [
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "#D63AFF" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "HTML / CSS", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Redux / Zustand", icon: <SiRedux />, color: "#764ABC" },
  { name: "Material UI", icon: <SiMui />, color: "#007FFF" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF" },
  { name: "GSAP", icon: <SiGreensock />, color: "#88CE02" },
  { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
];


const frontendSkills = [
  { name: "React.js", level: "Expert", icon: "⚛️" },
  { name: "Next.js", level: "Expert", icon: "▲" },
  { name: "HTML / CSS", level: "Expert", icon: "🌐" },
  { name: "JavaScript", level: "Expert", icon: "JS" },
  { name: "TailwindCSS", level: "Expert", icon: "💨" },
  { name: "Redux / Zustand", level: "Advanced", icon: "🔄" },
  { name: "Shadcn UI", level: "Advanced", icon: "🎨" },
  { name: "Material UI", level: "Advanced", icon: "🖼️" },
  { name: "Bootstrap", level: "Expert", icon: "🅱️" },
  { name: "HeroUI", level: "Intermediate", icon: "🦸" },
  { name: "Axios", level: "Expert", icon: "📡" },
{ name: "React Hook Form", level: "Advanced", icon: "📝" },
];

const backendSkills = [
  { name: "Node.js", level: "Expert", icon: "🟢" },
  { name: "Express.js", level: "Expert", icon: "🚀" },
  { name: "MongoDB", level: "Expert", icon: "🍃" },
  { name: "REST API", level: "Expert", icon: "🔗" },
  { name: "Firebase", level: "Advanced", icon: "🔥" },
  { name: "Better Auth", level: "Intermediate", icon: "🛡️" },
  { name: "JWT Auth", level: "Advanced", icon: "🔑" },
];


export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 relative overflow-hidden bg-[#171A1F]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#C9B59C] font-mono mb-4 tracking-widest uppercase text-sm">Expertise</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6 text-[#F5F1EC]">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-20">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex items-center gap-2 sm:gap-3 glass-card px-3 py-2.5 sm:px-5 sm:py-4 rounded-2xl border border-[#2A313A] hover:border-[#C9B59C] transition-colors cursor-default"
            >
              <span className="text-2xl sm:text-3xl shrink-0" style={{ color: tech.color }}>{tech.icon}</span>
              <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{tech.name}</span>
            </motion.div>
          ))}
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Frontend Card */}
          <div className="glass-card rounded-3xl p-4 sm:p-8 border border-[#2A313A] hover:border-[#C9B59C]/30 transition-colors">
            <div className="flex items-center gap-3 mb-5 sm:mb-8 pb-4 border-b border-[#2A313A]">
              <span className="text-2xl">🖥️</span>
              <h3 className="text-xl font-bold text-[#F5F1EC]">Frontend</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {frontendSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-1 p-3 sm:p-4 rounded-xl bg-[#0F1115]/60 border border-[#2A313A] hover:border-[#C9B59C] transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{skill.name}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="glass-card rounded-3xl p-4 sm:p-8 border border-[#2A313A] hover:border-[#C9B59C]/30 transition-colors">
            <div className="flex items-center gap-3 mb-5 sm:mb-8 pb-4 border-b border-[#2A313A]">
              <span className="text-2xl">⚙️</span>
              <h3 className="text-xl font-bold text-[#F5F1EC]">Backend</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {backendSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-1 p-3 sm:p-4 rounded-xl bg-[#0F1115]/60 border border-[#2A313A] hover:border-[#C9B59C] transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{skill.name}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
