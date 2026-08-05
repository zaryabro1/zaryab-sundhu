import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import { jobs } from "../../data/content";

/**
 * Work history as a stack of wide cards: dates and company in a fixed left
 * rail marked with a short solid accent stroke, responsibilities and stack on
 * the right. The rail moves above the content below `sm`, where there is no
 * room to set it beside.
 */
export default function Experience() {
  return (
    <Section id="work" className="flex flex-col gap-6 3xl:gap-9">
      <Reveal>
        <h2 className="type-h2 m-0">Experience</h2>
      </Reveal>

      <div className="flex flex-col gap-3.5 3xl:gap-5">
        {jobs.map((job, i) => (
          <Reveal key={`${job.company}-${job.years}`} delay={i * 0.07}>
            <TiltCard className="card elev-sm gap-4 p-4 sm:flex-row sm:gap-8 3xl:gap-12 3xl:p-6">
              <div className="flex flex-none flex-col gap-2 sm:w-[136px] 3xl:w-[200px]">
                <div className="type-ui text-accent">{job.years}</div>
                <div aria-hidden="true" className="h-0.5 w-5 bg-accent" />
                <div className="type-meta text-t-55">{job.company}</div>
              </div>

              <div className="flex flex-1 flex-col gap-2.5">
                <h3 className="type-h3 m-0">{job.role}</h3>
                <ul className="type-ui m-0 flex list-disc flex-col gap-1 pl-4 leading-[1.55] text-t-75">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag tag-neutral">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
