"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GlobalGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Mouse Follow Logic
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(glow, {
        x: clientX - 350,
        y: clientY - 350,
        duration: 1.5,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    // Click Fireworks Logic
    const handleClick = (e) => {
      const { clientX, clientY } = e;
      const count = 10;
      
      // Get accent color from CSS variables
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent').trim() || "#C9B59C";

      for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "fixed pointer-events-none rounded-full z-[10000]";
        particle.style.width = "6px";
        particle.style.height = "6px";
        particle.style.backgroundColor = color;
        particle.style.left = `${clientX}px`;
        particle.style.top = `${clientY}px`;
        particle.style.boxShadow = `0 0 10px ${color}`;
        document.body.appendChild(particle);

        const angle = (i / count) * Math.PI * 2;
        const velocity = 60 + Math.random() * 60;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        gsap.to(particle, {
          x: x,
          y: y,
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "power3.out",
          onComplete: () => particle.remove()
        });
      }

      // Ripple Effect
      const ripple = document.createElement("div");
      ripple.className = "fixed pointer-events-none rounded-full border-2 z-[10000]";
      ripple.style.borderColor = color;
      ripple.style.width = "20px";
      ripple.style.height = "20px";
      ripple.style.left = `${clientX - 10}px`;
      ripple.style.top = `${clientY - 10}px`;
      document.body.appendChild(ripple);

      gsap.to(ripple, {
        scale: 6,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove()
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div 
      ref={glowRef}
      className="global-glow fixed top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none z-[50]"
      style={{ 
        willChange: "transform",
        background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        opacity: "var(--glow-opacity)",
        filter: "blur(140px)"
      }}
    />
  );
}

