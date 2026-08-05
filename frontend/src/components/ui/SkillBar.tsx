"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import type { Skill } from "../../data/content";

interface SkillBarProps {
  skill: Skill;
  /** Position within its group, used to stagger the fill. */
  index?: number;
}

/**
 * A labelled proficiency bar that fills from zero when it scrolls into view.
 *
 * The bar renders at its true width first and is only rewound by JavaScript,
 * so it reads correctly without scripting and under reduced motion. Exposed to
 * assistive tech as a progressbar rather than as a bare decorative div.
 */
export default function SkillBar({ skill, index = 0 }: SkillBarProps) {
  const fillRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = fillRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") return;

    // Already scrolled past, so the fill has nothing left to play. Leave it at
    // its true width — rewinding it here would strand the bar empty, since the
    // observer will never see this element intersect again.
    if (el.getBoundingClientRect().bottom <= 0) return;

    let timer: ReturnType<typeof setTimeout>;
    el.style.width = "0%";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            timer = setTimeout(() => {
              el.style.transition = "width 1.15s cubic-bezier(0.16,0.9,0.2,1)";
              el.style.width = `${skill.percent}%`;
            }, 260 + index * 110);
            continue;
          }

          // Already scrolled past — see the matching note in Reveal. Restore
          // the true width instead of leaving an empty bar behind the reader.
          if (entry.boundingClientRect.bottom <= 0) {
            observer.unobserve(entry.target);
            el.style.width = `${skill.percent}%`;
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [skill.percent, index]);

  return (
    <div className="flex flex-col gap-[7px]">
      <div className="type-ui flex justify-between gap-3">
        <span>{skill.label}</span>
        <span className="text-accent">{skill.percent}%</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-[3px] bg-t-10"
        role="progressbar"
        aria-label={skill.label}
        aria-valuenow={skill.percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          ref={fillRef}
          className="h-1.5 rounded-[3px] bg-gradient-to-r from-accent-700 to-accent"
          style={{ width: `${skill.percent}%` }}
        />
      </div>
    </div>
  );
}
