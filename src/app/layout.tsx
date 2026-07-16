import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
     metadataBase: new URL("https://utpx.in"),

     title: {
          default: "Utpal Sonowal | Full Stack Developer",
          template: "%s | Utpal Sonowal",
     },

     description:
          "Utpal Sonowal, a Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express.js, PostgreSQL, and modern web development.",

     keywords: [
          "Utpal Sonowal",
          "Full Stack Developer",
          "Backend Developer",
          "Next.js Developer",
          "React Developer",
          "Developer",
          "TypeScript",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Web Developer",
          "Portfolio",
     ],

     authors: [
          {
               name: "Utpal Sonowal",
               url: "https://utpx.in",
          },
     ],

     creator: "Utpal Sonowal",
     publisher: "Utpal Sonowal",

     alternates: {
          canonical: "https://utpx.in",
     },

     robots: {
          index: true,
          follow: true,
          googleBot: {
               index: true,
               follow: true,
               "max-image-preview": "large",
               "max-video-preview": -1,
               "max-snippet": -1,
          },
     },

     openGraph: {
          title: "Utpal Sonowal | Full Stack Developer",
          description:
               "Explore the portfolio of Utpal Sonowal featuring projects, skills, and experience in full-stack web development.",

          url: "https://utpx.in",
          siteName: "Utpal Sonowal Portfolio",
          locale: "en_US",
          type: "website",

          images: [
               {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Utpal Sonowal Portfolio",
               },
          ],
     },

     twitter: {
          card: "summary_large_image",
          title: "Utpal Sonowal | Full Stack Developer",
          description:
               "Portfolio showcasing projects, skills, and experience in modern web development.",
          images: ["/og-image.png"],
     },

     category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
       >
            <body className="min-h-full flex flex-col">
                 <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                           __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Person",
                                name: "Utpal Sonowal",
                                url: "https://utpx.in",
                                image: "https://utpx.in/og-image.png",
                                jobTitle: "Full Stack Developer",
                                sameAs: [
                                     "https://github.com/YOUR_GITHUB",
                                     "https://linkedin.com/in/YOUR_LINKEDIN",
                                ],
                           }),
                      }}
                 />
                 {children}
                 <Toaster position="top-center" />
            </body>
       </html>
  );
}
