import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import ProgressBar from "./components/progress-bar";
import Header from "./components/header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zaryab Sundhu",
  description: "Zaryab Sundhu - Senior Software Engineer | Full-Stack Developer",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* <div className="mt-20"> */}
        <Header />
        {/* </div> */}

        <main className="pt-4 -mt-8 bg-black">
          <ProgressBar />
          {children}
        </main>
      </body>
    </html>
  );
}
