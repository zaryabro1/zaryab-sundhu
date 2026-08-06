import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import ProgressBar from "./components/progress-bar";
import Header from "./components/header/page";
import AuthProviderWrapper from "../components/auth/AuthProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zaryab Sundhu",
  description: "Zaryab Sundhu - Senior Software Engineer | Full-Stack Developer",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  /**
   * This build must not appear in search results.
   *
   * Declared on the root layout so every route inherits it — no page defines
   * its own `robots`, so the whole app is covered from one place. This pairs
   * with the `X-Robots-Tag` header in `next.config.js`: the header reaches
   * non-HTML assets, this reaches crawlers that only parse the document.
   *
   * `googleBot` is spelled out separately because Google honours its own
   * directives over the generic ones when both are present.
   */
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
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
        <AuthProviderWrapper>
          {/* <div className="mt-20"> */}
          <Header />
          {/* </div> */}

          <main className="pt-4 -mt-8 bg-black">
            <ProgressBar />
            {children}
          </main>
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
