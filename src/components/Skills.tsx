"use client";

import { Sora } from "next/font/google";
import { skills } from "@/data/skills";
import { useState } from "react";

const sora = Sora({
     subsets: ["latin"],
     weight: ["400", "600", "700"],
});

const cateGories = [
     "all",
     "Frontend",
     "Backend",
     "Database",
     "DevOps",
     "Tools",
];

export default function Skills() {
     const [activeCategory, setActiveCategory] = useState("all");

     const filteredSkills = skills.filter(
          (skill) =>
               activeCategory === "all" || skill.category === activeCategory,
     );

     return (
          <section
               className="flex flex-col items-center gap-2 py-10 md:py-5"
               id="skills"
          >
               <h1 className={`${sora.className} text-3xl font-medium`}>
                    My <span className="font-bold">Skills</span>
               </h1>

               <div className="w-full overflow-x-auto no-scrollbar">
                    <div className="flex w-max min-w-full justify-center gap-2 px-4">
                         {cateGories.map((item) => (
                              <button
                                   key={item}
                                   onClick={() => setActiveCategory(item)}
                                   className={`${sora.className} px-5 py-1 rounded-full transition-colors duration-300 capitalize cursor-pointer
                                  ${activeCategory === item ? "bg-[#f1f1f1] " : ""}
                                   `}
                              >
                                   {item}
                              </button>
                         ))}
                    </div>
               </div>

               <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {filteredSkills.map((items, key) => {
                         const Icon = items.icon;

                         return (
                              <div
                                   key={key}
                                   className="flex flex-col items-center gap-3 rounded-xl border-2 border-black p-4 md:p-6 transition-all hover:-translate-y-1 shadow-md hover:shadow-xl cursor-pointer"
                              >
                                   <Icon size={48} />
                                   <p
                                        className={`${sora.className} font-semibold`}
                                   >
                                        {items.name}
                                   </p>
                              </div>
                         );
                    })}
               </div>
              
          </section>
     );
}
