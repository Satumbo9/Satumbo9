import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import satumbo92 from "@/public/logo/satumbo9-2.png";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satumbo9 | Edimarf Satumbo – AI & Tech for Impact",
  description:
    "Explore Satumbo9 by Edimarf Satumbo — a creative hub merging AI, software engineering, and entrepreneurship. From sustainable recycling in Angola to cutting-edge chatbot and web development, discover tech-driven projects shaping a smarter, greener future.",
  keywords: [
    "Edimarf Satumbo",
    "Satumbo9",
    "AI Startup",
    "Software Engineer Angola",
    "Recycling Angola",
    "AkombeVeya",
    "FastAPI Developer",
    "Next.js Projects",
    "Tech for Good",
    "African Innovation",
    "Chatbot Developer",
    "Entrepreneurship Africa",
  ],
  authors: [{ name: "Edimarf Satumbo", url: "https://satumbo9.com" }],
  creator: "Edimarf Satumbo",
  icons: {
    icon: satumbo92.src,
  },
  openGraph: {
    title: "Satumbo9 | AI & Tech by Edimarf Satumbo",
    description:
      "Building AI solutions, sustainable startups, and tech tools for Africa and beyond. Join the Satumbo9 journey — where innovation meets impact.",
    url: "https://satumbo9.com",
    siteName: "Satumbo9",
    images: [
      {
        url: "https://satumbo9.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Satumbo9 - Tech by Edimarf Satumbo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      className={`${geistSans.variable} ${geistMono.variable} bg-black bg- scroll-smooth`}
    >
      <head />
      <body className="bg-black text-white font-sans antialiased overflow-y-auto min-h-screen">
        <main className="max-w-screen-xl mx-auto px-6 md:px-16 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
