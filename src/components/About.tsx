import { Sora } from "next/font/google";
import Image from "next/image";
import { Info } from "lucide-react";
import { IoIosInformation } from "react-icons/io";
import { coreStrengths } from "@/data/strength";

const sora = Sora({
     subsets: ["latin"],
     weight: ["400", "600", "700"],
});

export default function About() {
     return (
          <section
               className="flex flex-col md:flex-row  justify-center  px-3 py-2 md:px-30 md:py-4"
               id="about"
          >
               <div className="w-[98%] sm:w-[85%] md:w-[80%] lg:w-[82%] xl:w-[72%]  flex flex-col md:flex-row  justify-center py-2 px-3 border border-[#c6c6c6] rounded shadow-md">
                    <div className="flex flex-col items-center py-5 md:py-6 md:px-6 md:mb-10 ">
                         <Image
                              src="/about.svg"
                              width={400}
                              height={200}
                              alt="banner"
                              className="w-60 sm:w-72 md:w-96 lg:w-[750px] xl:w-[950px]"
                         />
                    </div>
                    <div className=" flex flex-col gap-3 md:py-5 ">
                         <div className="">
                              <h1
                                   className={`${sora.className} flex items-center gap-1 text-2xl font-medium`}
                              >
                                   <span>
                                        <Info size={20}/>
                                   </span>
                                   About <span className="font-bold">Me</span>
                              </h1>
                         </div>

                         <div className="">
                              <div
                                   className={`${sora.className} text-sm text-[#71717A]`}
                              >
                                   A developer who loves to build stuff and
                                   ransforming ideas into reliable, user-focused
                                   applications. I like to brings complex ideas
                                   into reality in form of softwares that solves
                                   real world problems.My core strengths include
                                   -
                                   <ul
                                        className={`${sora.className} text-sm text-[#71717A] `}
                                   >
                                        {coreStrengths.map((inf, key) => (
                                             <li
                                                  key={key}
                                                  className="flex px-2 py-0.5"
                                             >
                                                  <span>
                                                       <IoIosInformation size={20}/>
                                                  </span>
                                                  {inf}
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
