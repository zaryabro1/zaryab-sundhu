"use client";

import { useEffect, useRef } from "react";

/**
 * A hairline reading-progress bar pinned to the top of the viewport.
 *
 * Width is written straight to the node rather than held in state — this
 * updates on every scroll frame, and re-rendering React for it would be waste.
 */
export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
        if (barRef.current) {
          barRef.current.style.width = `${progress * 100}%`;
        }
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
    >
      <div
        ref={barRef}
        className="h-0.5 w-0 origin-left bg-gradient-to-r from-transparent to-accent"
      />
    </div>
  );
}
