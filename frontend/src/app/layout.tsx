import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import ProgressBar from "./components/progress-bar";
import Header from "./components/header/Header";
import AuthProviderWrapper from "../components/auth/AuthProviderWrapper";

/**
 * Inter is the design system's only family — headings and body both. Exposed
 * as a CSS variable so `tailwind.config.js` can name it like any other token.
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zaryab Sundhu",
  description: "Zaryab Sundhu - Senior Software Engineer | Full-Stack Developer",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden bg-bg font-sans text-text antialiased">
        <AuthProviderWrapper>
          <ProgressBar />
          <Header />
          <main>{children}</main>
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
