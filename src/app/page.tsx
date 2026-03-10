import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import BuildProcess from "@/components/sections/BuildProcess";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Notes from "@/components/sections/Notes";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BuildProcess />
        <Skills />
        <Experience />
        <Projects />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
