import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import ProgressBar from "./components/progress-bar";
import Header from "./components/header/Header";
import AuthProviderWrapper from "../components/auth/AuthProviderWrapper";
import { profile } from "../data/site";
import {
  buildStructuredData,
  keywords,
  siteDescription,
  siteTitle,
  siteUrl,
} from "../data/seo";

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
  /* Resolves every relative URL below — canonicals, OG and Twitter images. */
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    /* Sub-pages set only their own name and inherit the suffix. */
    template: `%s — ${profile.name}`,
  },
  description: siteDescription,
  keywords,

  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "profile",
    siteName: profile.name,
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    locale: "en_US",
    firstName: "Zaryab",
    lastName: "Sundhu",
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

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
  const structuredData = buildStructuredData();

  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden bg-bg font-sans text-text antialiased">
        {/*
          JSON-LD describing the site as one linked entity.

          Rendered in the body, not in a hand-written <head>: the App Router
          manages the document head itself, and declaring one here displaces
          that — which silently drops the stylesheet link along with it. A
          script of this type is inert wherever it sits, and search engines
          read it from the body, so nothing is lost and nothing is painted.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AuthProviderWrapper>
          <ProgressBar />
          <Header />
          <main>{children}</main>
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
