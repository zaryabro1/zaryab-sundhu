"use client";

import Image from "next/image";
import { useRef } from "react";
import Magnetic from "../ui/Magnetic";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { profile } from "../../data/site";

/**
 * The opening screen: portrait, availability pill, the name set large across
 * two lines, and the three primary actions.
 *
 * Two motions live here. The name lines wipe up from behind an overflow mask
 * on load, and the accent aura behind everything follows the cursor. Both are
 * driven imperatively so the server HTML is the finished state — with
 * JavaScript off or reduced motion on, the hero simply renders composed.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLSpanElement[]>([]);
  const bitsRef = useRef<HTMLDivElement[]>([]);

  // Entrance: hide, then release on the next frame so the browser has a start
  // state to transition from.
  useIsomorphicLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lines = linesRef.current.filter(Boolean);
    const bits = bitsRef.current.filter(Boolean);

    lines.forEach((el, i) => {
      el.style.transform = "translateY(108%)";
      el.style.transition = `transform 0.95s cubic-bezier(0.16,0.9,0.2,1) ${
        0.12 + i * 0.11
      }s`;
    });

    bits.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      const delay = 0.22 + (i + 1) * 0.09;
      el.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.16,0.9,0.2,1) ${delay}s`;
    });

    const release = () => {
      lines.forEach((el) => {
        el.style.transform = "translateY(0)";
      });
      bits.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    };

    const frame = requestAnimationFrame(() => requestAnimationFrame(release));

    // If the tab is opened in the background the rAF pair may never run; make
    // sure nothing is left stranded invisible.
    const safety = setTimeout(release, 1200);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(safety);
    };
  }, []);

  // Aura follows the cursor, and dims as the hero scrolls away.
  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const aura = auraRef.current;
    if (!section || !aura) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;

    let moveFrame = 0;
    let scrollFrame = 0;

    const onMove = (event: PointerEvent) => {
      if (moveFrame) return;
      const { clientX, clientY } = event;
      moveFrame = requestAnimationFrame(() => {
        moveFrame = 0;
        const rect = section.getBoundingClientRect();
        const x = (((clientX - rect.left) / rect.width) * 100).toFixed(1);
        const y = (((clientY - rect.top) / rect.height) * 100).toFixed(1);
        aura.style.background = `radial-gradient(560px circle at ${x}% ${y}%, rgba(145,132,217,0.20), transparent 68%)`;
      });
    };

    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        aura.style.opacity = String(Math.max(0, 1 - window.scrollY / 700));
      });
    };

    if (!prefersReduced && finePointer) {
      section.addEventListener("pointermove", onMove);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      section.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (moveFrame) cancelAnimationFrame(moveFrame);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
    };
  }, []);

  const collectLine = (index: number) => (el: HTMLSpanElement | null) => {
    if (el) linesRef.current[index] = el;
  };

  const collectBit = (index: number) => (el: HTMLDivElement | null) => {
    if (el) bitsRef.current[index] = el;
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden px-5 pb-16 pt-[112px] sm:px-8 md:px-10 md:pb-24 md:pt-[150px] 3xl:pb-32 3xl:pt-[190px]"
    >
      <div
        ref={auraRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(560px circle at 50% 34%, rgba(145,132,217,0.20), transparent 68%)",
        }}
      />
      {/* Faint vertical ruling, masked to a soft oval behind the name. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(to right, var(--t4) 0 1px, transparent 1px 88px)",
          maskImage: "radial-gradient(70% 60% at 50% 40%, #000, transparent)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 40%, #000, transparent)",
        }}
      />

      <div className="relative mx-auto flex max-w-[780px] flex-col items-center gap-5 text-center sm:gap-6 3xl:max-w-[1000px] 3xl:gap-8">
        {/*
          Nocturne wraps photographs in `mix-blend-mode: lighten`, which assumes
          a subject shot against black. This portrait has a bright background,
          where that blend would wash the whole frame out — so it takes a plain
          circular crop with the system's ring and accent glow instead.
        */}
        <div
          ref={collectBit(0)}
          className="relative h-[120px] w-[120px] overflow-hidden rounded-full bg-neutral-900 shadow-[0_0_0_1px_var(--color-divider),0_0_80px_-12px_var(--color-accent)] sm:h-[150px] sm:w-[150px] 3xl:h-[200px] 3xl:w-[200px]"
        >
          <Image
            src={profile.portrait}
            alt={`Portrait of ${profile.name}`}
            width={400}
            height={400}
            priority
            sizes="(min-width: 1920px) 200px, (min-width: 640px) 150px, 120px"
            className="h-full w-full object-cover"
            style={{ objectPosition: "55% 32%" }}
          />
        </div>

        <div
          ref={collectBit(1)}
          className="type-meta flex items-center gap-[9px] rounded-full border border-divider px-3.5 py-[5px] text-center text-t-72"
        >
          <span
            aria-hidden="true"
            className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent"
          />
          {profile.availability}
        </div>

        <h1 className="type-display m-0 font-medium">
          {profile.nameLines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-0.5">
              <span ref={collectLine(i)} className="block">
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div
          ref={collectBit(2)}
          className="type-h3 flex items-center gap-2.5 text-accent"
        >
          <span>{profile.role}</span>
          <span
            aria-hidden="true"
            className="animate-caret w-px self-stretch bg-accent"
          />
        </div>

        <p ref={collectBit(3)} className="type-lead m-0 max-w-[54ch] text-t-72">
          {profile.intro}
        </p>

        <div ref={collectBit(4)} className="flex flex-wrap justify-center gap-2.5 pt-2">
          <Magnetic>
            <a
              href="#contact"
              className="btn btn-primary px-[22px] py-2.5 hover:shadow-glow"
            >
              Hire me
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#portfolio" className="btn btn-secondary px-[22px] py-2.5">
              View work
            </a>
          </Magnetic>
          <Magnetic>
            {/*
              `download` saves the file instead of handing it to the browser's
              built-in PDF viewer, and its value renames it on the way out —
              the asset is stored under a URL-safe slug, but the visitor gets a
              file named after its owner. Same-origin, so the rename applies.
            */}
            <a
              href={profile.resume}
              download={profile.resumeFilename}
              className="btn btn-ghost px-3.5 py-2.5"
            >
              Résumé
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
