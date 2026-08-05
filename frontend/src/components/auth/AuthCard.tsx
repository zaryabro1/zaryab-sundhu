import React from "react";
import Link from "next/link";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  /** The "already have an account?" line beneath the form. */
  footer: React.ReactNode;
}

/**
 * The shared frame for the sign-in and sign-up pages.
 *
 * The design system has no template for these, so the card borrows the contact
 * form's treatment — a lit top edge and a soft accent bloom over the surface —
 * to keep the two form surfaces on the site consistent.
 */
export default function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: AuthCardProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-5 pb-16 pt-[112px] sm:px-6 md:pt-[120px]">
      <div className="w-full max-w-[400px] 3xl:max-w-[520px]">
        <div
          className="card elev-sm relative gap-4 overflow-hidden p-5 sm:p-6 3xl:gap-6 3xl:p-8"
          style={{
            background:
              "linear-gradient(160deg, var(--t8), transparent 42%), var(--color-surface)",
            boxShadow:
              "inset 0 1px 0 var(--t14), 0 0 0 1px var(--color-divider), 0 18px 44px -22px rgba(0,0,0,0.75)",
          }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px opacity-[0.55]"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-accent), transparent)",
            }}
          />

          <div className="relative flex flex-col gap-1">
            <h1 className="type-h2 m-0">{title}</h1>
            <p className="type-ui m-0 text-t-55">{subtitle}</p>
          </div>

          {children}

          <div className="type-ui relative pt-1 text-center text-t-55">
            {footer}
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link href="/" className="type-ui text-t-55 no-underline hover:text-accent">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
