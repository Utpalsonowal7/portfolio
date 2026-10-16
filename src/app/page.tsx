"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
   const [showRedirect, setShowRedirect] = useState(false);
   const [countdown, setCountdown] = useState(10);

   useEffect(() => {
        const timer = window.setTimeout(() => {
             setShowRedirect(true);
        }, 4000);

        return () => window.clearTimeout(timer);
   }, []);

   useEffect(() => {
        if (!showRedirect) return;

        if (countdown === 0) {
             window.location.replace("https://us.utpx.in");
             return;
        }

        const timer = window.setTimeout(() => {
             setCountdown((previous) => previous - 1);
        }, 1000);

        return () => window.clearTimeout(timer);
   }, [showRedirect, countdown]);

     return (
          <>
               {showRedirect && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
                         <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center text-slate-900 shadow-xl">
                              <h1 className="text-2xl font-semibold">
                                   My portfolio has moved!
                              </h1>

                              <p
                                   className="mt-3 text-slate-600"
                                   role="status"
                                   aria-live="polite"
                              >
                                   Redirecting to my new website in {countdown}{" "}
                                   {countdown === 1 ? "second" : "seconds"}…
                              </p>

                              <a
                                   href="https://us.utpx.in"
                                   className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                              >
                                   Visit now →
                              </a>
                         </div>
                    </div>
               )}

               <Navbar />
               <main className="mt-20 flex flex-col gap-3">
                    <Hero />
                    <Skills />
                    <Experience />
                    <About />
                    <Projects />
                    <Contact />
               </main>
               <Footer />
          </>
     );
}
