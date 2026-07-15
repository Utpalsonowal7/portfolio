import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Exprience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
     return (
          <>
               <Navbar />
               <main className="flex flex-col gap-3 mt-20">
                    <Hero />
                    <Skills />
                    <Exprience />
                    <About />
                    <Projects />
                    <Contact />
               </main>
               <Footer />
          </>
     );
}
