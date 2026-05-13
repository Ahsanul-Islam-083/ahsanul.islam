"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Hero() {
  const container = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text for animation
      const title = new SplitType(titleRef.current, { types: "chars,words" });

      // Title Animation
      gsap.from(title.chars, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.02,
        duration: 1.5,
        ease: "expo.out",
      });

      // Floating Icons Animation
      gsap.to(".floating-icon", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random",
        },
      });


    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={container}
      className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 pt-20 sm:pt-24 pb-28 lg:pb-16 overflow-hidden bg-[#0F1115]"
    >


      {/* Left Content */}
      <div className="flex flex-col gap-5 text-center lg:text-left z-10 w-full lg:w-1/2 max-w-2xl order-last lg:order-first">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-mono tracking-wide"
          style={{ color: "var(--text-secondary)" }}
        >
          Hey, I'm
        </motion.p>

        <h1
          ref={titleRef}
          className="text-[2rem] sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.15]"
          style={{ color: "var(--text-primary)" }}
        >
          Ahsanul Islam <span className="animate-wave">👋</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl font-medium flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span>I am a</span>
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Problem Solver",
              2000,
              "Creative Coder",
              2000,
              "MERN Stack Enthusiast",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ color: "#C9B59C", fontWeight: "600", display: "inline-block" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-2 text-base md:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          <p>Turning ideas into Stunning Websites </p>
          <p>| Available for projects and collaborations </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-4"
        >
          <Magnetic>
            <a
              href="mailto:ahsanulislam083@gmail.com"
              className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#C9B59C] text-[#0F1115] font-bold rounded-full hover:bg-[#D8C6AF] transition-colors shadow-lg shadow-[#C9B59C]/20"
            >
              Say Hello <FaPaperPlane />
            </a>
          </Magnetic>
        </motion.div>

        <div className="mt-4 flex items-center justify-center lg:justify-start gap-8" style={{ color: "var(--text-secondary)" }}>
          <Magnetic>
            <a
              href="https://github.com/Ahsanul-Islam-083"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors hover:text-[#C9B59C]"
            >
              <FaGithub />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/ahsanulislamrifat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors hover:text-[#C9B59C]"
            >
              <FaLinkedin />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="mailto:ahsanulislam083@gmail.com"
              className="text-2xl transition-colors hover:text-[#C9B59C]"
            >
              <MdEmail />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Right Content - Profile Image with Rings */}
      <div className="relative flex justify-center items-center z-10 w-full lg:w-1/2 order-first lg:order-last">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] mx-auto">
          <div className="absolute inset-0 rounded-full bg-[#C9B59C]/5 blur-2xl scale-110 z-[-1]" />
          <div className="absolute inset-0 border-2 border-[#C9B59C]/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border border-[#C9B59C]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute -inset-4 hidden sm:block border border-[#C9B59C]/10 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />

          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#C9B59C]/30 shadow-2xl shadow-[#C9B59C]/10">
            <Image
              src="/portfolioImg.png"
              alt="Ahsanul Islam"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="floating-icon absolute -top-4 -right-4 w-16 h-16 glass-card rounded-2xl hidden sm:flex items-center justify-center text-3xl z-20">
            ⚛️
          </div>
          <div className="floating-icon absolute bottom-12 -left-8 w-14 h-14 glass-card rounded-2xl hidden sm:flex items-center justify-center text-xl z-20" style={{ color: "var(--text-secondary)" }}>
            Node
          </div>
          <div className="floating-icon absolute top-1/2 -right-12 w-12 h-12 glass-card rounded-2xl hidden sm:flex items-center justify-center text-lg z-20" style={{ color: "var(--text-secondary)" }}>
            Next
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: "var(--text-secondary)" }}>Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9B59C] to-transparent" />
      </motion.div>
    </section>
  );
}
