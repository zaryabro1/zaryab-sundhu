"use client";

import React, { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Shadow applied while the pointer is over the card. Defaults to the
   * design's mid elevation; a card whose resting shadow is composed of more
   * than one layer passes its own, since this replaces the property outright.
   */
  hoverShadow?: string;
  /**
   * Hold the card flat while anything inside it holds focus.
   *
   * For cards that contain inputs: tilting the surface someone is typing on
   * skews their own text, and a pointer crossing the card mid-sentence moves
   * the target they are editing. The lift is an invitation to click, and once
   * they have clicked the invitation has been accepted.
   */
  suspendWhenFocusWithin?: boolean;
}

/**
 * A surface that tips slightly toward the cursor and lights a soft accent
 * sheen where the pointer sits.
 *
 * Skipped entirely for reduced-motion visitors and for coarse pointers, where
 * there is no hover to respond to and the listeners would only cost battery.
 */
export default function TiltCard({
  children,
  className,
  hoverShadow = "var(--shadow-md)",
  suspendWhenFocusWithin = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;

    if (prefersReduced || !finePointer) return;

    el.style.transition =
      "transform 0.35s cubic-bezier(0.16,0.9,0.2,1), box-shadow 0.35s";

    const onLeave = () => {
      el.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
      el.style.boxShadow = "";

      const sheen = sheenRef.current;
      if (sheen) sheen.style.opacity = "0";
    };

    const onMove = (event: PointerEvent) => {
      if (suspendWhenFocusWithin && el.matches(":focus-within")) return;

      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      const rotateX = ((0.5 - py) * 5).toFixed(2);
      const rotateY = ((px - 0.5) * 6).toFixed(2);
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      el.style.boxShadow = hoverShadow;

      const sheen = sheenRef.current;
      if (sheen) {
        sheen.style.opacity = "1";
        sheen.style.background = `radial-gradient(360px circle at ${(
          px * 100
        ).toFixed(1)}% ${(py * 100).toFixed(
          1
        )}%, rgba(145,132,217,0.16), transparent 62%)`;
      }
    };

    // Settle the card the moment focus lands inside it, rather than waiting
    // for the pointer to leave — the two often happen in the wrong order.
    const onFocusIn = () => {
      if (suspendWhenFocusWithin) onLeave();
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("focusin", onFocusIn);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("focusin", onFocusIn);
    };
  }, [hoverShadow, suspendWhenFocusWithin]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <div
        ref={sheenRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}
