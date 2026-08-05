"use client";

import { useEffect, useRef, useState } from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import { projectCategories, projects } from "../../data/content";

const FADE_MS = 180;

/**
 * Filterable project grid.
 *
 * Changing a filter fades the grid down, swaps the contents, then fades it
 * back — so cards don't pop in place. Under reduced motion the swap is
 * immediate.
 */
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // Any pending swap must not fire after unmount.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const shown = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const handleFilter = (categoryId: string) => {
    if (categoryId === activeCategory) return;

    const grid = gridRef.current;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!grid || prefersReduced) {
      setActiveCategory(categoryId);
      return;
    }

    grid.style.opacity = "0";
    grid.style.transform = "translateY(8px)";

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveCategory(categoryId);
      requestAnimationFrame(() => {
        if (!gridRef.current) return;
        gridRef.current.style.opacity = "1";
        gridRef.current.style.transform = "translateY(0)";
      });
    }, FADE_MS);
  };

  return (
    <Section id="portfolio" className="flex flex-col gap-6 3xl:gap-9">
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3">
          <h2 className="type-h2 m-0 mr-auto">Portfolio</h2>
          <div className="flex flex-wrap gap-1.5">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleFilter(category.id)}
                  aria-pressed={isActive}
                  className={`type-meta flex-none whitespace-nowrap rounded-full border px-[13px] py-1.5 transition-colors duration-200 ${
                    isActive
                      ? "border-accent bg-t-8 text-accent"
                      : "border-divider text-t-65 hover:border-accent hover:text-accent"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-4 transition-[opacity,transform] duration-[280ms] sm:grid-cols-2 lg:grid-cols-3 3xl:gap-6"
      >
        {shown.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.07}>
            <TiltCard className="card elev-sm h-full gap-[11px] p-4 3xl:p-6">
              <div
                aria-hidden="true"
                className="type-meta grid aspect-[16/9] place-items-center rounded-md uppercase tracking-[0.08em] text-t-45"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, var(--t7), var(--t7) 7px, transparent 7px, transparent 14px)",
                }}
              >
                project shot
              </div>

              <div className="card-kicker">
                {projectCategories.find((c) => c.id === project.category)?.label}
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-body">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag tag-accent">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card-meta gap-3.5">
                <a href={project.primaryHref} className="no-underline">
                  {project.primaryLabel}
                  <span className="sr-only"> — {project.title}</span>
                </a>
                <a href={project.githubHref} className="no-underline">
                  GitHub
                  <span className="sr-only"> — {project.title}</span>
                </a>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
