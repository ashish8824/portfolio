import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import BuildProcess from "../components/sections/BuildProcess";
import Projects from "../components/sections/Projects";
import Notes from "../components/sections/Notes";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BuildProcess />
      <Skills />
      <Experience />
      <Projects />
      <Notes />
      <Contact />
      <Footer />
    </>
  );
}
