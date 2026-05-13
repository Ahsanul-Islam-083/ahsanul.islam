"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useSpring(0, { damping: 20, stiffness: 100 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("data-cursor") === "pointer"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border pointer-events-none z-[10000] hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
        scale: isHovered ? 2.2 : 1,
        backgroundColor: isHovered ? "var(--accent)" : "transparent",
        borderColor: "var(--accent)",
        opacity: isHovered ? 0.3 : 1,
        boxShadow: isHovered ? "0 0 20px var(--accent)" : "none",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 150 }}
    />

  );
}
