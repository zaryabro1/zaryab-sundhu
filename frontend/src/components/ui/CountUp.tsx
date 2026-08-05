"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";

interface CountUpProps {
  /** The number to land on. */
  value: number;
  /** Rendered immediately after the number, e.g. the "+" in "10+". */
  suffix?: string;
  className?: string;
}

const DURATION_MS = 900;

/**
 * Counts from zero up to `value` the first time it scrolls into view.
 *
 * The final value is what React renders, so the correct number is in the
 * server HTML and stays put without JavaScript or under reduced motion — the
 * animation only ever rewinds a number that was already correct.
 */
export default function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") return;

    let frame = 0;

    const run = () => {
      const start = performance.now();

      const step = (now: number) => {
        const t = Math.min((now - start) / DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(value * eased)}${suffix}`;
        if (t < 1) frame = requestAnimationFrame(step);
      };

      el.textContent = `0${suffix}`;
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          run();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      // Leave the element showing the true value if we unmount mid-count.
      el.textContent = `${value}${suffix}`;
    };
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
