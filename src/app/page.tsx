import Hero from "@/sections/Hero";
import About from '@/sections/About';
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home(){
  return(
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}