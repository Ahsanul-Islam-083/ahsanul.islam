"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Magnetic from "@/components/ui/Magnetic";
import { FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const EMAILJS_SERVICE_ID = "service_ufb9d1a";
const EMAILJS_TEMPLATE_ID = "template_4s3zent";
const EMAILJS_PUBLIC_KEY = "sLY-_KSPkJcqR07wg";

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Ahsanul-Islam-083",
    external: true,
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/ahsanulislamrifat/",
    external: true,
    label: "LinkedIn",
  },
  {
    icon: <MdEmail />,
    href: "mailto:ahsanulislam083@gmail.com",
    external: false,
    label: "Email",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/8801622989531",
    external: true,
    label: "WhatsApp",
  },
];


export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Reset back to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 relative bg-[#171A1F] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">

          {/* Left: Big heading + description + social */}
          <div>
            <p className="text-[#C9B59C] font-mono mb-4 tracking-widest uppercase text-sm">Contact</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-[#F5F1EC]">
              Get in <span className="text-[#C9B59C]">touch</span>
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-10 max-w-md leading-relaxed text-[#CBBFB2]">
              Whether you have a question, a project, or just
              want to chat about web development — I'd love
              to hear from you. Let's create something amazing!
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              {socials.map((social, i) => (
                <Magnetic key={i}>
                  <motion.a
                    href={social.href}
                    target={social.external ? "_blank" : "_self"}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center transition-all text-lg"
                    style={{
                      color: "var(--text-secondary)",
                      borderColor: "var(--border-color)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C9B59C";
                      e.currentTarget.style.borderColor = "#C9B59C";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.borderColor = "var(--border-color)";
                    }}
                  >
                    {social.icon}
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card p-4 sm:p-8 md:p-10 rounded-3xl border border-[#2A313A]">
            <form ref={formRef} className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#0F1115]/50 border border-[#2A313A] rounded-xl px-4 py-3.5 outline-none focus:border-[#C9B59C] transition-colors text-[#F5F1EC] placeholder:text-[#CBBFB2]/50 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0F1115]/50 border border-[#2A313A] rounded-xl px-4 py-3.5 outline-none focus:border-[#C9B59C] transition-colors text-[#F5F1EC] placeholder:text-[#CBBFB2]/50 text-sm"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#0F1115]/50 border border-[#2A313A] rounded-xl px-4 py-3.5 outline-none focus:border-[#C9B59C] transition-colors text-[#F5F1EC] placeholder:text-[#CBBFB2]/50 text-sm"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#0F1115]/50 border border-[#2A313A] rounded-xl px-4 py-3.5 outline-none focus:border-[#C9B59C] transition-colors text-[#F5F1EC] placeholder:text-[#CBBFB2]/50 text-sm resize-none"
              />

              <Magnetic>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 px-2 py-4 font-bold rounded-xl transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: status === "success"
                      ? "#4CAF50"
                      : status === "error"
                        ? "#ef4444"
                        : "#C9B59C",
                    color: "#0F1115",
                  }}
                >
                  {status === "idle" && (<>Send Message <FaPaperPlane /></>)}
                  {status === "sending" && "Sending..."}
                  {status === "success" && "✓ Message Sent!"}
                  {status === "error" && "✗ Failed. Try Again"}
                </button>
              </Magnetic>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
