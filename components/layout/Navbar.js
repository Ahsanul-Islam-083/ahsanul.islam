// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Magnetic from "@/components/ui/Magnetic";
// import Image from "next/image";
// import { FiSun, FiMoon } from "react-icons/fi";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Projects", href: "#projects" },
//   { name: "Skills", href: "#skills" },
//   { name: "Qualifications", href: "#qualifications" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDark) {
//       html.setAttribute("data-theme", "dark");
//     } else {
//       html.setAttribute("data-theme", "light");
//     }
//   }, [isDark]);
  
//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);


//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 px-6 sm:px-12 md:px-20 flex justify-between items-center ${
//         isScrolled
//           ? "bg-[#0F1115]/80 backdrop-blur-[12px] border-b border-[#2A313A]"
//           : "bg-transparent"
//       }`}
//     >
//       {/* Logo Image instead of text */}
//       <Magnetic>
//         <a href="#home" className="flex items-center">
//           <Image
//             src="/portfolioLogo.png"
//             alt="Logo"
//             width={120}
//             height={40}
//             className={`object-contain h-10 sm:h-16 w-auto transition-all duration-300 ${
//               isDark ? "brightness-0 invert" : "brightness-0"
//             }`}
//             priority
//           />

//         </a>
//       </Magnetic>

//       {/* Desktop Nav Links */}
//       <div className="hidden lg:flex items-center gap-2 glass-card p-1.5 rounded-full px-4 border border-[#2A313A]">
//         {navLinks.map((link) => (
//           <Magnetic key={link.name}>
//             <a
//               href={link.href}
//               className="px-4 py-2 text-sm font-medium text-[#CBBFB2] hover:text-[#C9B59C] transition-colors relative group"
//             >
//               {link.name}
//               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9B59C] transition-all group-hover:w-1/2" />
//             </a>
//           </Magnetic>
//         ))}
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-3">
//         {/* Theme Toggle */}
//         <button
//           onClick={() => setIsDark(!isDark)}
//           className="w-9 h-9 rounded-full border border-[#2A313A] flex items-center justify-center text-[#CBBFB2] hover:text-[#C9B59C] hover:border-[#C9B59C] transition-all bg-[#1F242B]"
//           aria-label="Toggle theme"
//         >
//           {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
//         </button>

//         {/* Let's Talk */}
//         <Magnetic>
//           <button className="hidden lg:block px-6 py-2.5 bg-[#F5F1EC] text-[#0F1115] text-sm font-bold rounded-full hover:bg-[#C9B59C] transition-colors">
//             <a href="#contact">Let's Talk</a>
//           </button>
//         </Magnetic>

//         {/* Mobile Hamburger */}
//         <button
//           className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[110]"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className={`w-6 h-0.5 bg-[#F5F1EC] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
//           <span className={`w-6 h-0.5 bg-[#F5F1EC] transition-all ${isOpen ? "opacity-0" : ""}`} />
//           <span className={`w-6 h-0.5 bg-[#F5F1EC] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//             className="fixed inset-0 w-full h-full bg-[#171A1F] z-[105] flex flex-col items-center justify-center gap-6 sm:gap-8 text-2xl sm:text-4xl font-bold"
//           >
//             {navLinks.map((link, i) => (
//               <motion.a
//                 key={link.name}
//                 href={link.href}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.08 }}
//                 onClick={() => setIsOpen(false)}
//                 className="text-[#F5F1EC] hover:text-[#C9B59C] transition-colors"
//               >
//                 {link.name}
//               </motion.a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import Image from "next/image";
import { FiSun, FiMoon, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Qualifications", href: "#qualifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* ── Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 px-4 sm:px-12 md:px-20 flex justify-between items-center ${
          isScrolled
            ? "bg-[#0F1115]/80 backdrop-blur-[12px] border-b border-[#2A313A]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Magnetic>
          <a href="#home" className="flex items-center">
            <Image
              src="/portfolioLogo.png"
              alt="Logo"
              width={120}
              height={40}
              className={`object-contain h-10 sm:h-14 w-auto transition-all duration-300 ${
                isDark ? "brightness-0 invert" : "brightness-0"
              }`}
              priority
            />
          </a>
        </Magnetic>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2 glass-card p-1.5 rounded-full px-4 border border-[#2A313A]">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#CBBFB2] hover:text-[#C9B59C] transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9B59C] transition-all group-hover:w-1/2" />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 rounded-full border border-[#2A313A] flex items-center justify-center text-[#CBBFB2] hover:text-[#C9B59C] hover:border-[#C9B59C] transition-all bg-[#1F242B]"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>

          {/* Let's Talk — desktop only */}
          <Magnetic>
            <button className="hidden lg:block px-6 py-2.5 bg-[#F5F1EC] text-[#0F1115] text-sm font-bold rounded-full hover:bg-[#C9B59C] transition-colors">
              <a href="#contact">Let's Talk</a>
            </button>
          </Magnetic>

          {/* Hamburger — simple 3-bar, only shown when menu is closed */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-[#F5F1EC]" />
            <span className="block w-6 h-0.5 bg-[#F5F1EC]" />
            <span className="block w-6 h-0.5 bg-[#F5F1EC]" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ──
          Rendered OUTSIDE <nav> so nav's backdrop-blur stacking context
          never clips it. The ✕ button lives INSIDE the overlay — no z-index
          fighting needed.                                                   */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-full bg-[#171A1F] z-[200] flex flex-col items-center justify-center gap-6 sm:gap-8"
          >
            {/* ✕ Close button — top-right corner, always clickable */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-5 w-10 h-10 rounded-full border border-[#2A313A] flex items-center justify-center text-[#CBBFB2] hover:text-[#C9B59C] hover:border-[#C9B59C] transition-all bg-[#1F242B]"
            >
              <FiX size={18} />
            </button>

            {/* Nav links */}
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setIsOpen(false)}
                className="text-2xl sm:text-4xl font-bold text-[#F5F1EC] hover:text-[#C9B59C] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}