import { Sora } from "next/font/google";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const sora = Sora({
     subsets: ["latin"],
     weight: ["400", "600", "700"],
});

export default function Hero() {
     return (
          <section className="flex flex-col  px-3 py-2 md:flex-row-reverse md:justify-between md:items-center md:gap-0 md:px-36 md:py-4" id="hero">
               <div className="flex flex-col items-center py-5 md:py-6 md:px-10 md:mb-10">
                    <Image
                         src="/banner.svg"
                         width={400}
                         height={200}
                         alt="banner"
                         className="w-76 sm:w-72 md:w-96 lg:w-[550px] xl:w-[650px] h-auto"
                    />
               </div>
               <div className="flex flex-col gap-4 md:py-6">
                    <div className="flex flex-col">
                         <h1
                              className={`${sora.className} text-2xl font-medium`}
                         >
                              Hello I&apos;am{" "}
                              <span className="font-bold">Utpal Sonowal.</span>
                         </h1>
                         <h1 className="font-sora text-2xl font-bold">
                              Full Stack{" "}
                              <span className="text-white font-extrabold [text-shadow:2px_2px_0_black] [-webkit-text-stroke:1.5px_black]">
                                   Developer
                              </span>
                         </h1>
                         <h1
                              className={`${sora.className} text-2xl font-medium`}
                         >
                              Based In <span className="font-bold">India.</span>
                         </h1>
                    </div>

                    <div>
                         <p className={`${sora.className}`}>
                              A full stack developer who enjoy break down
                              complex ideas into reality.
                         </p>
                    </div>

                    <div className="flex gap-2">
                         <a
                              href="https://github.com/Utpalsonowal7"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border-2 rounded bg-background p-3"
                         >
                              <FaGithub />
                         </a>
                         <a
                              href="https://www.linkedin.com/in/utpal-sonowal/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border-2 rounded bg-background p-3"
                         >
                              <FaLinkedin className="w-5 h-5" />
                         </a>
                         <a
                              href="https://x.com/UtpalSo95273383"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border-2 rounded bg-background p-3"
                         >
                              <FaSquareXTwitter />
                         </a>
                    </div>
               </div>
          </section>
     );
}
