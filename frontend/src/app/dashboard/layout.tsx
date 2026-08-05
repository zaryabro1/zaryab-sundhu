import type { Metadata } from "next";
import React from "react";

/**
 * The dashboard sits behind authentication, so a crawler can only ever see the
 * loading state. Noindex keeps that empty shell out of the index entirely.
 */
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your account dashboard.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/dashboard" },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
