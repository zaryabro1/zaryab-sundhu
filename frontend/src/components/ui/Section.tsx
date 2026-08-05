import React from "react";

interface SectionProps {
  /** Doubles as the anchor target and the scrollspy key. */
  id: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * The shared landing-section shell: the centred page column, the design's
 * vertical rhythm, and the fading rule along the top edge.
 *
 * Both paddings step with the viewport. The design's 72px gutter would leave
 * almost no column on a phone, and would look mean against the wider column
 * the page takes on a large display.
 */
export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      data-section={id}
      className={`section-rule container-page px-5 py-12 sm:px-8 md:px-[72px] md:py-[76px] 3xl:px-24 3xl:py-28 4xl:px-32 4xl:py-32 ${
        className ?? ""
      }`}
    >
      {children}
    </section>
  );
}
