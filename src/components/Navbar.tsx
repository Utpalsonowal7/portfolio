"use client";

import Image from "next/image";
import { Sora } from "next/font/google";
import { Download, X } from "lucide-react";
import { CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from "react";

const sora = Sora({
     subsets: ["latin"],
     weight: ["400", "600", "700"],
});

const navItems = [
     { name: "About Me", href: "#about" },
     { name: "Skills", href: "#skills" },
     { name: "Exprience", href: "#exprience" },
     { name: "Projects", href: "#projects" },
     { name: "Contact Me", href: "#contact" },
];

export default function Navbar() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 50);
          };

          window.addEventListener("scroll", handleScroll);

          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     const handleDownload = async () => {
          const res = await fetch("/Utpal_Sonowal_Resume.pdf");
          const blob = await res.blob();

          const url = window.URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download = "UtpalsResume";
          link.click();

          window.URL.revokeObjectURL(url);
     };

     return (
          <div
               className={`fixed top-0 left-0 w-full z-50 bg-background flex justify-between px-3 items-center sm:px-2 md:px-2 lg:px-36 border-b border-amber-50 shadow-lg transition-all duration-300 ${scrolled ? "py-2 md:py-4" : "py-4"}`}
          >
               <div className={`text-text flex items-center gap-2 `}>
                    <Image src="/Logo.png" width={32} height={32} alt="utpal sonowal logo" />
                    <span className={`${sora.className} text-xl font-bold`}>
                         Utpal Sonowal
                    </span>
               </div>

               <div
                    className={`hidden lg:flex ${sora.className}  font-semibold gap-8 text-text`}
               >
                    {navItems.map((item, key) => (
                         <a key={key} href={item.href}>
                              {item.name}
                         </a>
                    ))}
               </div>

               <div className="hidden lg:flex bg-foreground  gap-1 md:py-2.5 px-1.5 rounded cursor-pointer ">
                    <button
                         className={`${sora.className} text-background font-semibold cursor-pointer`}
                         onClick={handleDownload}
                    >
                         Resume
                    </button>
                    <Download className="w-5 text-background" />
               </div>

               <button
                    onClick={() => {
                         setIsMenuOpen((pre) => !pre);
                    }}
                    className="cursor-pointer lg:hidden text-foreground"
               >
                    {isMenuOpen ? (
                         <X strokeWidth={0.5} size={26} />
                    ) : (
                         <CiMenuFries size={26} />
                    )}
               </button>

               {isMenuOpen && (
                    <>
                         <div
                              className="fixed z-40 inset-0 bg-foreground/10 backdrop-blur-sm lg:hidden "
                              onClick={() => setIsMenuOpen(false)}
                         />
                         <div className="fixed top-16 right-2 left-2 z-50 flex flex-col gap-6 rounded-xl border border-foreground/10 bg-background shadow-xl p-6 lg:hidden">
                              <div
                                   className={`flex flex-col ${sora.className} font-semibold gap-5 text-text`}
                              >
                                   {navItems.map((item, key) => (
                                        <a
                                             key={key}
                                             href={item.href}
                                             onClick={() =>
                                                  setIsMenuOpen(false)
                                             }
                                             className="pl-3 border-l-2 border-transparent"
                                        >
                                             {item.name}
                                        </a>
                                   ))}
                              </div>

                              <div className="flex justify-center border-t border-foreground/10 pt-4">
                                   <div className="flex bg-foreground gap-1 py-2.5 px-4 rounded cursor-pointer">
                                        <button
                                             className={`${sora.className} text-background font-semibold cursor-pointer`}
                                             onClick={handleDownload}
                                        >
                                             Resume
                                        </button>
                                        <Download className="w-5 text-background" />
                                   </div>
                              </div>
                         </div>
                    </>
               )}
          </div>
     );
}
