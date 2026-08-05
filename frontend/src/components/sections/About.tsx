import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import CountUp from "../ui/CountUp";
import { aboutParagraphs, stacks, stats } from "../../data/content";

/**
 * About: the narrative on the left, the numbers and the stack breakdown in a
 * card grid on the right — the design's asymmetric split, with the text column
 * carrying the wider share.
 *
 * The two columns stack below `md`; the stat grid stays two-up throughout,
 * since the cards hold very little and a single column wastes the width.
 */
export default function About() {
  return (
    <Section
      id="about"
      className="flex flex-col gap-8 md:flex-row md:items-start md:gap-[52px] 3xl:gap-20"
    >
      <div className="flex flex-1 flex-col gap-4 md:flex-[1.35] 3xl:gap-6">
        <Reveal>
          <div className="type-kicker text-accent">About</div>
        </Reveal>

        <Reveal>
          <h2 className="type-h2-lead m-0">
            Six years of shipping software that has to hold up.
          </h2>
        </Reveal>

        {aboutParagraphs.map((paragraph, i) => (
          <Reveal key={paragraph.slice(0, 24)} delay={i * 0.07}>
            <p className="type-body m-0 max-w-[68ch] text-t-78">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-2 gap-3 3xl:gap-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.07}>
            <div className="card elev-sm h-full gap-0.5">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="type-stat"
              />
              <div className="type-meta text-t-55">{stat.label}</div>
            </div>
          </Reveal>
        ))}

        {stacks.map((stack, i) => (
          <Reveal key={stack.name} delay={(i + stats.length) * 0.07}>
            <TiltCard className="card elev-sm h-full gap-1">
              <div className="type-ui">{stack.name}</div>
              <div className="type-meta leading-[1.5] text-t-55">
                {stack.items}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
