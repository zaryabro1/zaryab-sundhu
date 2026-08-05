"use client";

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Whether the visitor has asked for reduced motion.
 *
 * Returns `false` on the server and for the first client render so markup
 * matches across hydration, then settles to the real value in an effect.
 * Every decorative animation on the site reads this; the CSS-only animations
 * are covered by the matching media query in `globals.css`.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    setReduced(mql.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
