"use client";

import React, { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Stagger, in seconds, applied before this element's transition starts.
   * Siblings in a grid pass `index * a small step` so a row resolves as a
   * cascade rather than all at once.
   */
  delay?: number;
  /** Fires once, the first time the element enters the viewport. */
  onReveal?: () => void;
}

/**
 * Fades and lifts its children into place the first time they scroll into
 * view, then stops observing.
 *
 * Renders visible on the server and for the first client paint, hiding itself
 * only in a layout effect. That ordering means the content is in the HTML for
 * crawlers, survives with JavaScript disabled, and never flashes. Respects
 * `prefers-reduced-motion` by skipping the animation entirely.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  onReveal,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Read through a ref so a caller passing an inline arrow doesn't tear down
  // and rebuild the observer on every render.
  const onRevealRef = useRef(onReveal);
  onRevealRef.current = onReveal;

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      onRevealRef.current?.();
      return;
    }

    // Already scrolled past — someone deep-linked to a section further down,
    // or reloaded partway through the page. There is no entrance left to play,
    // and hiding it now would strand it invisible: the observer only fires on
    // intersection, which this element will never do again.
    if (el.getBoundingClientRect().bottom <= 0) {
      onRevealRef.current?.();
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.willChange = "opacity, transform";

    const show = (animate: boolean) => {
      el.style.transition = animate
        ? `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.16,0.9,0.2,1) ${delay}s`
        : "";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.willChange = "";
      onRevealRef.current?.();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            show(true);
            continue;
          }

          // Not intersecting and sitting above the viewport: the reader is
          // already past it, so there is no entrance left to play and it will
          // never intersect again. Snap it visible rather than strand it.
          //
          // This is checked here rather than only at mount because the browser
          // restores scroll position after layout effects run — at mount this
          // element can still measure as below the fold.
          if (entry.boundingClientRect.bottom <= 0) {
            observer.unobserve(entry.target);
            show(false);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
