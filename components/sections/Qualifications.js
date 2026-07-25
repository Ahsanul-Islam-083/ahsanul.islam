"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const journey = [
  // {
  //   year: "2017",
  //   title: "SSC Graduation",
  //   place: "Chalakchar ML High School",
  //   description: "Completed secondary education with a focus on science and technology.",
  //   side: "left"
  // },
  // {
  //   year: "2019",
  //   title: "HSC Graduation", 
  //   place: "Narsingdi Science College",
  //   description: "Deepened my interest in mathematics and computer science fundamentals.",
  //   side: "right"
  // },
  {
    year: "2021",
    title: "B.Sc. in CSE",
    place: "National University Of Bangladesh",
    description: "Started professional journey into computer engineering and software development.",
    side: "left"
  },
  {
    year: "2025",
    title: "Mern-Stack Developer",
    place: "Programming Hero",
    description: "Mastering development with MongoDB, Express.js, React, and Node.js.",
    side: "right"
  }
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-16 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#C9B59C] font-mono mb-4 tracking-widest uppercase text-sm">The Path</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-20 text-[#F5F1EC]">
          My Personal <span className="gradient-text">Journey</span>
        </h2>

        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#2A313A] -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-8 sm:gap-16">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}
              >
                {/* Card */}
                <div className="w-full md:w-[45%] glass-card p-4 sm:p-8 rounded-2xl border border-[#2A313A] hover:border-[#C9B59C] transition-colors group">
                  <span className="text-[#C9B59C] font-mono text-sm mb-3 block">{item.year}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F1EC] mb-1">{item.title}</h3>
                  <p className="text-[#C9B59C] text-xs font-mono mb-3">{item.place}</p>
                  <p className="text-[#CBBFB2] text-sm leading-relaxed">{item.description}</p>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex w-[10%] justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#0F1115] border-4 border-[#C9B59C] shadow-[0_0_16px_rgba(201,181,156,0.4)] group-hover:bg-[#C9B59C] transition-colors z-10" />
                </div>

                {/* Empty side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
