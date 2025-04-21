import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Edimarf Satumbo – Web Engineer",
  description: "Portfolio and thoughts on UI Engineering and Developer Experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head />
      <body className="bg-black text-white font-sans antialiased overflow-y-auto min-h-screen">
        <main className="max-w-screen-xl mx-auto px-6 md:px-16 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
