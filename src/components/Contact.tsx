"use client";

import { Sora } from "next/font/google";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ContactSchema, type ContactForm } from "@/schema/contact";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "sonner";
import { Ellipsis } from "lucide-react";

const sora = Sora({
     subsets: ["latin"],
     weight: ["400", "600", "700"],
});

type ContactError = Partial<Record<keyof ContactForm, string>>;
type ContatResponse = {
     message: string;
};

export default function Contact() {
     const [form, setForm] = useState<ContactForm>({
          name: "",
          email: "",
          url: "",
          phone: "",
          message: "",
     });
     const [errors, setErrors] = useState<ContactError>({});
     const [isSending, setIsSending] = useState(false);

     const handleChange = (
          e: React.ChangeEvent<
               HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >,
     ) => {
          setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
          setErrors((pre) => ({ ...pre, [e.target.name]: "" }));
     };

     const handlePhoneChnage = (value: string | undefined) => {
          setForm((pre) => ({
               ...pre,
               phone: value || "",
          }));
          setErrors((pre) => ({ ...pre, phone: "" }));
     };

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (isSending) return;

          setIsSending(true);
          const result = ContactSchema.safeParse(form);

          if (!result.success) {
               const fieldErrors: ContactError = {};

               result.error.issues.forEach((iss) => {
                    const keyName = iss.path[0] as keyof ContactError;
                    fieldErrors[keyName] = iss.message;
               });

               setErrors(fieldErrors);
               setIsSending(false);

               return;
          }

          const promise: Promise<ContatResponse> = fetch("/api/contact", {
               method: "POST",
               headers: {
                    "Content-type": "application/json",
               },
               body: JSON.stringify(form),
          }).then(async (res) => {
               const data: ContatResponse = await res.json();
               if (!res.ok) {
                    throw new Error(data?.message);
               }

               return data;
          });

          toast.promise(promise, {
               loading: "sending...",
               success: (data) => data.message,
               error: (err) => err.message,
          });

          setForm({
               name: "",
               email: "",
               url: "",
               phone: "",
               message: "",
          });

          promise.finally(() => setIsSending(false));
     };

     return (
          <section
               className="flex flex-col md:flex-row  justify-center  px-3 py-2 md:px-30 md:py-4"
               id="contact"
          >
               <div className="w-[98%] sm:w-[85%] md:w-[80%] lg:w-[82%] xl:w-[72%]  flex flex-col md:flex-row    py-2 px-3 border border-[#c6c6c6] rounded shadow-md">
                    <div className="md:flex-1 ">
                         <form
                              className="flex flex-col gap-2 py-5 md:py-6 md:px-6 md:mb-10"
                              onSubmit={handleSubmit}
                         >
                              <input
                                   type="text"
                                   name="name"
                                   value={form.name}
                                   className={`border border-gray-300 ${sora.className} px-3 py-2.5 rounded-md outline-none shadow-sm text-sm text-gray-700`}
                                   placeholder="Your name"
                                   onChange={handleChange}
                                   required
                              />
                              {errors.name && (
                                   <p className="text-red-500 text-sm mt-1">
                                        {errors.name}
                                   </p>
                              )}
                              <input
                                   type="email"
                                   name="email"
                                   value={form.email}
                                   className={`border border-gray-300 ${sora.className} px-3 py-2.5 rounded-md outline-none shadow-sm text-sm text-gray-700`}
                                   placeholder="Email"
                                   onChange={handleChange}
                                   required
                              />
                              {errors.email && (
                                   <p className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                   </p>
                              )}
                              <input
                                   type="url"
                                   name="url"
                                   value={form.url}
                                   className={`border border-gray-300 ${sora.className} px-3 py-2.5 rounded-md outline-none shadow-sm text-sm text-gray-700`}
                                   placeholder="Website(If exists)"
                                   onChange={handleChange}
                              />
                              {errors.url && (
                                   <p className="text-red-500 text-sm mt-1">
                                        {errors.url}
                                   </p>
                              )}
                              <PhoneInput
                                   international
                                   country="IN"
                                   placeholder="Enter Phone Number(Opt)"
                                   value={form.phone}
                                   onChange={handlePhoneChnage}
                                   className={`
                                        flex w-full
                                        [&_.PhoneInputCountry]:border
                                        [&_.PhoneInputCountry]:border-gray-300
                                        [&_.PhoneInputCountry]:rounded-l-md
                                        [&_.PhoneInputCountry]:px-3
                                        [&_.PhoneInputCountry]:py-2.5
                                        [&_.PhoneInputInput]:border
                                        [&_.PhoneInputInput]:border-gray-300
                                        [&_.PhoneInputInput]:rounded-r-md
                                        [&_.PhoneInputInput]:px-3
                                        [&_.PhoneInputInput]:py-2.5
                                        [&_.PhoneInputInput]:w-full
                                        [&_.PhoneInputInput]:outline-none
                                        ${sora.className}
                                        [&_.PhoneInputInput]:overflow-x-auto
                                        [&_.PhoneInputInput]:shadow-sm
                                        [&_.PhoneInputInput]:text-sm
                                      [&_.PhoneInputInput]:text-gray-700
                                      `}
                              />
                              {errors.phone && (
                                   <p className="text-red-500 text-sm mt-1">
                                        {errors.phone}
                                   </p>
                              )}
                              <textarea
                                   name="message"
                                   id=""
                                   value={form.message}
                                   className={`border border-gray-300 ${sora.className} px-3 py-2.5 rounded-md outline-none shadow-sm text-sm text-gray-700`}
                                   placeholder="How can I help?*"
                                   onChange={handleChange}
                                   required
                              ></textarea>
                              {errors.message && (
                                   <p className="text-red-500 text-sm mt-1">
                                        {errors.message}
                                   </p>
                              )}
                              <div className="flex  gap-2.5">
                                   <div className="bg-foreground gap-1 py-2 px-2 rounded cursor-pointer shadow-2xs border">
                                        {isSending ? (
                                             <div className=" flex items-center  border-amber-50  px-4 max-h-6">
                                                  <Ellipsis
                                                       className=" text-white animate-pulse"
                                                       size={40}
                                                  />
                                             </div>
                                        ) : (
                                             <button
                                                  disabled={isSending}
                                                  type="submit"
                                                  className={` ${sora.className} text-gray-300 text-xs`}
                                             >
                                                  Get In Touch
                                             </button>
                                        )}
                                   </div>
                                   <div className="flex flex-row items-center justify-between gap-2 px-2 ">
                                        <a
                                             href="mailto:sonowalu73@gmail.com"
                                             className="border border-gray-300 shadow-lg px-3 py-2.5 rounded"
                                        >
                                             <Mail size={15} />
                                        </a>
                                        <a
                                             href="https://github.com/Utpalsonowal7"
                                             className="border border-gray-300 shadow-lg px-3 py-2.5 rounded"
                                        >
                                             <FaGithub size={15} />
                                        </a>
                                        <a
                                             href="https://www.linkedin.com/in/utpal-sonowal/"
                                             className="border border-gray-300 shadow-lg px-3 py-2.5 rounded"
                                        >
                                             <FaLinkedin size={15} />
                                        </a>
                                   </div>
                              </div>
                         </form>
                    </div>

                    <div className=" flex-1 flex flex-col gap-4 md:py-5 ">
                         <div></div>
                         <div className="">
                              <h1
                                   className={`${sora.className} text-xl font-extrabold`}
                              >
                                   Let&apos;s{" "}
                                   <span className="text-white font-extrabold [text-shadow:2px_2px_0_white] [-webkit-text-stroke:1.5px_black]">
                                        Talk{" "}
                                   </span>
                                   for
                              </h1>
                              <h1
                                   className={`${sora.className} text-xl font-extrabold`}
                              >
                                   Something{" "}
                                   <span className="text-white font-extrabold [text-shadow:2px_2px_0_white] [-webkit-text-stroke:1.5px_black]">
                                        Special
                                   </span>
                              </h1>
                         </div>
                         <div
                              className={`${sora.className} text-sm text-[#71717A]`}
                         >
                              <blockquote
                                   className={`border-l-4 border-black pl-4 ${sora.className}`}
                              >
                                   <p className="italic text-gray-700">
                                        “Any fool can write code that a computer
                                        can understand. Good programmers write
                                        code that humans can understand.”
                                   </p>
                                   <footer className="mt-2 text-sm font-semibold text-gray-500 text-right">
                                        — Martin Fowler
                                   </footer>
                              </blockquote>
                         </div>
                    </div>
               </div>
          </section>
     );
}
