import type { Metadata } from "next";
import React from "react";

/** See the note in `login/layout.tsx` — same reasoning, same treatment. */
export const metadata: Metadata = {
  title: "Create account",
  description: "Create an account.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/register" },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
