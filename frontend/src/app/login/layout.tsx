import type { Metadata } from "next";
import React from "react";

/**
 * `login/page.tsx` is a client component and so cannot export metadata itself.
 * This layout carries it instead.
 *
 * Noindex: a sign-in form has nothing a searcher wants, and letting thin pages
 * like this into the index dilutes the site's relevance for the terms the
 * landing page is actually competing on.
 */
export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/login" },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
