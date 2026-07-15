"use client";

import { Sora } from "next/font/google";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const sora = Sora({
     subsets: ["latin"],
     weight: ["400", "600", "700"],
});

export default function Projects() {
     return (
          <section
               className="flex flex-col items-center gap-10 py-10 md:py-5 bg-foreground text-background"
               id="projects"
          >
               <h1 className={`${sora.className} text-3xl font-medium`}>
                    My <span className="font-bold">Projects</span>
               </h1>

               {projects.map((pr, key) => (
                    <div
                         className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[82%] xl:w-[60%]  border-b border-background/30  py-3 px-3 shadow-md "
                         key={key}
                    >
                         <div
                              key={key}
                              className= {`flex flex-col justify-between ${key  % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse" } gap-4`}
                         >
                              <div className="relative w-full  md:w-full aspect-video overflow-hidden rounded-xl">
                                   <Image
                                        src={pr.image}
                                        alt={pr.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                   />
                              </div>

                              <div
                                   className={`${sora.className} py-2 flex flex-col gap-3`}
                              >
                                   <h2 className="text-2xl font-bold">
                                        0{key + 1}
                                   </h2>
                                   <h3 className="font-bold text-xl">
                                        {pr.title}
                                   </h3>
                                   <div>
                                        {pr.technologies.map((tech, key) => (
                                             <button
                                                  key={key}
                                                  className={`${sora.className} m-1 px-1.5 py-1 bg-[#2e2c2c] rounded-md  text-[11px] text-background border border-background/30 md:[text-[16px]] md:px-2`}
                                             >
                                                  {tech}
                                             </button>
                                        ))}
                                   </div>
                                   <p className="text-sm">{pr.description}</p>
                                   <div className="flex items-center gap-3">
                                        <a href={pr.live} target="_blank">
                                             <ExternalLink size={20}/>
                                        </a>
                                        <a href={pr.github} target="_blank">
                                             <FaGithub size={20}/>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               ))}
          </section>
     );
}
