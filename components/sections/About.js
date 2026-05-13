"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text Reveal
      gsap.from(".about-text p", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-16 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left Side: Animated Image */}
        <div className="relative w-full">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden glass-card p-2">
            <div ref={imageRef} className="h-[120%] w-full absolute top-[-10%]">
              <Image
                src="/aboutImg.png"
                alt="Ahsanul Islam"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#C9B59C]/10 mix-blend-overlay pointer-events-none" />
          </div>
          
          {/* Floating Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass-card p-4 md:p-8 rounded-2xl border-[#2A313A] z-20"
          >
            <div className="text-2xl md:text-4xl font-display font-bold" style={{ color: "var(--text-primary)" }}>1+</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Years Experience</div>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="about-text">
          <p className="text-[#C9B59C] font-mono mb-4 tracking-widest uppercase text-sm">The Story</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-8 text-[#F5F1EC]">
            Merging Code with <span className="gradient-text">Creativity</span>
          </h2>
          <div className="space-y-6 text-[#CBBFB2] text-base sm:text-lg leading-relaxed">
            <p>
              I am a dedicated Full-Stack Developer with a passion for building seamless, high-performance web applications. My journey started with a curiosity for how things work on the web, which evolved into a career of crafting complex digital solutions.
            </p>
            <p>
              I believe that great software is not just about writing code; it's about solving problems and creating experiences that people love. I specialize in the MERN stack but I'm always eager to explore new technologies that push the boundaries of what's possible.
            </p>
            <p>
              When I'm not coding, you'll find me exploring modern architecture, experimenting with UI design, or contributing to open-source projects.
            </p>
          </div>

          <div className="mt-8 pt-8 sm:mt-12 sm:pt-10 border-t border-[#2A313A] flex items-center gap-6 sm:gap-12">
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold" style={{ color: "var(--text-primary)" }}>20+</div>
              <div className="text-sm uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Projects Done</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold" style={{ color: "var(--text-primary)" }}>15+</div>
              <div className="text-sm uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Technologies</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
