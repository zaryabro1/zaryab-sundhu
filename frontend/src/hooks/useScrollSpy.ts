"use client";

import { useEffect, useState } from "react";

/**
 * Reports which section is currently under the reader.
 *
 * Observes a band across the middle of the viewport, so a section becomes
 * "current" as it settles into view rather than the instant its top edge
 * appears. Returns `null` until one qualifies — above the first section,
 * nothing is highlighted.
 *
 * @param sectionIds ids of the elements to watch, in document order.
 */
export function useScrollSpy(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Joined so the effect keys off the contents rather than the array's
  // identity — callers routinely pass a fresh array literal each render.
  const key = sectionIds.join(",");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const ids = key ? key.split(",") : [];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
