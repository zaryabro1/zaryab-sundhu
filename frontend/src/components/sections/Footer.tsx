"use client";

import { navItems, profile } from "../../data/site";

/** Site footer: attribution, a back-to-top control, and the section anchors. */
export default function Footer() {
  const scrollToTop = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <footer className="section-rule container-page type-meta flex flex-col items-center gap-4 px-5 pb-8 pt-6 text-t-50 sm:px-8 md:flex-row md:gap-[18px] md:px-[72px] 3xl:px-24 3xl:pb-12 3xl:pt-10 4xl:px-32">
      <span className="text-center md:mr-auto md:text-left">
        © {new Date().getFullYear()} {profile.name} — {profile.role}
      </span>

      <button
        type="button"
        onClick={scrollToTop}
        className="type-meta relative overflow-hidden rounded-full border border-divider bg-surface py-[7px] pl-[13px] pr-[15px] tracking-[0.02em] text-t-72 shadow-[inset_0_1px_0_var(--t14),0_6px_18px_-12px_rgba(0,0,0,0.8)] transition-[color,border-color,box-shadow,transform] duration-300 ease-nocturne hover:-translate-y-0.5 hover:border-accent hover:text-text hover:shadow-[inset_0_1px_0_var(--t14),0_0_22px_-8px_var(--color-accent)]"
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-[14%] top-0 h-px opacity-50"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--color-accent), transparent)",
          }}
        />
        <span aria-hidden="true" className="mr-2 text-accent">
          ↑
        </span>
        Back to top
      </button>

      <nav aria-label="Footer" className="flex flex-wrap justify-center gap-4">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="no-underline">
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
