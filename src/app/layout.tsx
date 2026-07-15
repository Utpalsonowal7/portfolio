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
          default: "Utpal Sonowal — Full Stack Developer",
          template: "%s | Utpal Sonowal",
     },
     description:
          "Portfolio of Utpal Sonowal, a full-stack developer specializing in Next.js, React, and TypeScript.",
     keywords: [
          "Utpal Sonowal",
          "full stack developer",
          "Next.js developer",
          "React developer",
          "portfolio",
     ],
     authors: [{ name: "Utpal Sonowal" }],
     openGraph: {
          title: "Utpal Sonowal — Full Stack Developer",
          description: "Portfolio showcasing projects, skills, and experience.",
          url: "https://utpx.in",
          siteName: "Utpal Sonowal Portfolio",
          images: [{ url: "/og-image.png", width: 1200, height: 630 }],
          locale: "en_US",
          type: "website",
     },
     twitter: {
          card: "summary_large_image",
          title: "Utpal Sonowal — Full Stack Developer",
          description: "Portfolio showcasing projects, skills, and experience.",
          images: ["/og-image.png"],
     },
     robots: {
          index: true,
          follow: true,
     },
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
      <body className="min-h-full flex flex-col">{children}<Toaster position="top-center"/></body>
    </html>
  );
}
