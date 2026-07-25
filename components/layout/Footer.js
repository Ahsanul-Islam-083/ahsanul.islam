"use client";

import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t py-8 px-4 sm:px-12 md:px-20 flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-8"
      style={{
        borderColor: "var(--border-color)",
        background: "var(--bg-secondary)",
      }}
    >
      {/* Logo + copyright */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <Image
          src="/portfolioLogo.png"
          alt="Logo"
          width={100}
          height={34}
          className="object-contain h-12 w-auto logo-img"
        />
        <p
          className="text-sm mt-1"
          style={{ color: "var(--text-secondary)" }}
        >
          © {currentYear} All rights reserved.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 sm:gap-6 text-xl" style={{ color: "var(--text-secondary)" }}>
        <Magnetic>
          <a href="https://github.com/Ahsanul-Islam-083" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9B59C] transition-colors"><FaGithub /></a>
        </Magnetic>
        <Magnetic>
          <a href="https://www.linkedin.com/in/ahsanulislamrifat/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9B59C] transition-colors"><FaLinkedin /></a>
        </Magnetic>
        <Magnetic>
          <a href="https://wa.me/8801622989531" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9B59C] transition-colors"><FaWhatsapp /></a>
        </Magnetic>
        <Magnetic>
          <a href="mailto:ahsanulislam083@gmail.com" className="hover:text-[#C9B59C] transition-colors"><MdEmail /></a>
        </Magnetic>
      </div>

      {/* Nav Links */}
      <div
        className="flex gap-3 sm:gap-6 text-xs uppercase tracking-widest font-mono"
        style={{ color: "var(--text-secondary)" }}
      >
        <a href="/#about" className="hover:text-[#C9B59C] transition-colors">About</a>
        <a href="/#projects" className="hover:text-[#C9B59C] transition-colors">Projects</a>
        <a href="/#contact" className="hover:text-[#C9B59C] transition-colors">Contact</a>
      </div>
    </footer>
  );
}
