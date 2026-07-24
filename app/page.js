// import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Qualifications from "@/components/sections/Qualifications";
import Contact from "@/components/sections/Contact";
// import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Qualifications />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
//fe_oa_1f7243cea9069eda392e11d7cca7da8757ff7da8c7fdecc6