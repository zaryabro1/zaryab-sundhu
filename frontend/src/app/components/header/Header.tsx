"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../../contexts/AuthContext";
import { useScrollSpy } from "../../../hooks/useScrollSpy";
import { navItems } from "../../../data/site";

/**
 * The floating pill navigation.
 *
 * Sits over the page rather than in its flow, tightens slightly once scrolled
 * past the hero, and highlights whichever section the reader is in. On narrow
 * viewports the links collapse behind a toggle, since six of them plus the
 * auth control will not fit a pill.
 *
 * Section links resolve against the home page: the header renders on the auth
 * routes too, where a bare `#about` would point at nothing.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const activeSection = useScrollSpy(isHome ? navItems.map((i) => i.id) : []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setIsScrolled(window.scrollY > 80);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu on navigation, so following a link doesn't leave the
  // panel hanging open over the destination.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    router.push("/");
  };

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-[18px] z-50 flex justify-center px-4">
      <div
        ref={navRef}
        className={`pointer-events-auto rounded-[22px] bg-glass backdrop-blur-[14px] transition-[transform,box-shadow] duration-[350ms] md:rounded-full ${
          isScrolled
            ? "scale-[0.965] shadow-[0_0_0_1px_var(--color-divider),0_10px_30px_-14px_rgba(0,0,0,0.7)]"
            : "shadow-[0_0_0_1px_var(--color-divider)]"
        }`}
      >
        {/* Desktop: everything on one row. */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 p-1.5 md:flex 3xl:gap-2 3xl:p-2"
        >
          {navItems.map((item) => {
            const isActive = isHome && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={sectionHref(item.id)}
                aria-current={isActive ? "true" : undefined}
                className={`type-ui rounded-full px-3.5 py-[7px] 3xl:px-5 3xl:py-2.5 no-underline transition-colors duration-200 ${
                  isActive
                    ? "bg-t-8 text-text"
                    : "text-t-65 hover:bg-t-8 hover:text-text"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <span aria-hidden="true" className="mx-1 h-4 w-px bg-divider" />

          {isAuthenticated ? (
            <>
              <Link
                href="/dashboard"
                className="type-ui rounded-full px-3.5 py-[7px] 3xl:px-5 3xl:py-2.5 text-t-65 no-underline transition-colors duration-200 hover:bg-t-8 hover:text-text"
              >
                Dashboard
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="type-ui rounded-full px-3.5 py-[7px] 3xl:px-5 3xl:py-2.5 text-t-65 transition-colors duration-200 hover:bg-t-8 hover:text-text"
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="type-ui rounded-full px-3.5 py-[7px] 3xl:px-5 3xl:py-2.5 text-accent no-underline transition-colors duration-200 hover:bg-t-8"
            >
              Log in
            </Link>
          )}
        </nav>

        {/* Mobile: brand plus a toggle, with the links in a panel below. */}
        <div className="md:hidden">
          <div className="flex items-center gap-3 px-3 py-2">
            <Link
              href="/"
              className="type-ui font-medium text-text no-underline"
            >
              Zaryab
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="ml-auto grid h-8 w-8 place-items-center rounded-full border border-divider text-t-72 transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <nav
              id="mobile-nav"
              aria-label="Primary"
              className="flex flex-col gap-0.5 border-t border-divider p-1.5"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={sectionHref(item.id)}
                  onClick={() => setIsMenuOpen(false)}
                  className="type-ui rounded-md px-3 py-2 text-t-72 no-underline transition-colors duration-200 hover:bg-t-8 hover:text-text"
                >
                  {item.label}
                </a>
              ))}

              <span aria-hidden="true" className="my-1 h-px bg-divider" />

              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className="type-ui rounded-md px-3 py-2 text-t-72 no-underline transition-colors duration-200 hover:bg-t-8 hover:text-text"
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="type-ui rounded-md px-3 py-2 text-left text-t-72 transition-colors duration-200 hover:bg-t-8 hover:text-text"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="type-ui rounded-md px-3 py-2 text-accent no-underline transition-colors duration-200 hover:bg-t-8"
                >
                  Log in
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
