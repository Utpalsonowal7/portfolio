import { Sora } from "next/font/google";
import Image from "next/image";
import { ArrowBigUp } from "lucide-react";

const sora = Sora({
     subsets: ["latin"],
     weight: ["400", "600", "700"],
});

export default function Footer() {
     return (
          <section className="bg-foreground text-background  flex items-center justify-between gap-3 px-3 py-10 sm:px-2 md:px-2 lg:px-36 ">
               <div className="flex flex-col gap-4">
                    <div className={`text-background flex items-center gap-2 `}>
                         <Image
                              src="/Logo.png"
                              width={32}
                              height={8}
                              alt="logo"
                              className="invert"
                         />
                         <span
                              className={`${sora.className} text-[14px] font-bold text-gray-400`}
                         >
                              Utpal Sonowal
                         </span>
                    </div>
                    <div>
                         <p
                              className={`${sora.className} text-sm text-gray-400 flex items-center`}
                         >
                              &copy; {new Date().getFullYear()} Utpal Tech. All
                              rights reserved
                         </p>
                    </div>
               </div>
               <div className="bottom-6 right-6 animate-float">
                    <a
                         href="#hero"
                         className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-lg hover:scale-110 transition-transform"
                    >
                         <ArrowBigUp />
                    </a>
               </div>
          </section>
     );
}
