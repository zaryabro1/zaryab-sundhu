"use client";

import React, { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Nudges its child a few pixels toward the cursor while the pointer is over
 * it — the hero and contact buttons use this to feel responsive to approach.
 *
 * Wraps rather than clones so it works over any child element. Skipped for
 * reduced-motion visitors and coarse pointers.
 */
export default function Magnetic({ children, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;

    if (prefersReduced || !finePointer) return;

    el.style.transition = "transform 0.25s cubic-bezier(0.16,0.9,0.2,1)";

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
      el.style.transform = `translate(${(dx * 7).toFixed(1)}px, ${(
        dy * 5
      ).toFixed(1)}px)`;
    };

    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <span ref={ref} className={`inline-flex ${className ?? ""}`}>
      {children}
    </span>
  );
}
