"use client";

import { Sora } from "next/font/google";
import { exprience } from "@/data/exprience";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const sora = Sora({
     subsets: ["latin"],
     weight: ["400", "600", "700"],
});

export default function Exprience() {
     return (
          <section
               className="flex flex-col items-center gap-10 py-10 md:py-5 bg-foreground text-background"
               id="exprience"
          >
               <h1 className={`${sora.className} text-3xl font-medium`}>
                    My <span className="font-bold">Exprience</span>
               </h1>

               {exprience.map((exp, key) => (
                    <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[82%] xl:w-[60%]  border border-background/30 rounded py-3 px-3 shadow-md" key={key}>
                         <div key={key} className="flex flex-col gap-1">
                              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] grid-rows-2  ">
                                   <div className="w-20  flex items-center row-span-2 py-2.5">
                                        <Image
                                             src={exp.icon}
                                             alt={exp.name}
                                             width={88}
                                             height={88}
                                        />
                                   </div>

                                   <div className="flex items-center px-1">
                                        <h5
                                             className={`${sora.className} text-[15px] font-bold md:text-2xl`}
                                        >
                                             {exp.role}
                                        </h5>
                                   </div>
                                   <div className="flex items-center px-1 gap-1">
                                        <h5
                                             className={`${sora.className} text-xs font-semibold md:text-[15px]`}
                                        >
                                             {exp.type}
                                        </h5>
                                        <span>|</span>
                                        <h6 className=" flex items-center text-xs font-medium md:text-[15px]">
                                             <span className="p-1">
                                                  <CalendarDays className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                             </span>
                                             {exp.duration}
                                        </h6>
                                   </div>
                              </div>
                              <div className={`${sora.className} py-2`}>
                                   <h3 className="font-bold">
                                        Key Achivements
                                   </h3>
                                   <ul className="list-disc px-4 py-2 text-[12px] md:text-[13px] md:px-5">
                                        {exp.keyAchievement?.map((ac, key) => (
                                             <li key={key}>{ac}</li>
                                        ))}
                                   </ul>
                              </div>
                              <div className={`${sora.className} py-2`}>
                                   <h3 className="font-bold">
                                        Technology Used
                                   </h3>
                                   {exp.technologies.map((tech, key) => (
                                        <button
                                             key={key}
                                             className={`${sora.className} m-1 px-1.5 py-1 bg-[#2e2c2c] rounded-md  text-[11px] text-background border border-background/30 md:[text-[16px]] md:px-2`}
                                        >
                                             {tech}
                                        </button>
                                   ))}
                              </div>
                         </div>
                    </div>
               ))}
          </section>
     );
}
