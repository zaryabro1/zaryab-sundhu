import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import SkillBar from "../ui/SkillBar";
import { skillGroups } from "../../data/content";

/** Technical skills, grouped, with proficiency bars that fill on scroll. */
export default function Skills() {
  return (
    <Section id="skills" className="flex flex-col gap-6 3xl:gap-9">
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2 className="type-h2 m-0 mr-auto">Technical skills</h2>
          <span className="type-ui text-t-50">Self-assessed, roughly</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 3xl:gap-6">
        {skillGroups.map((group, i) => (
          <Reveal key={group.name} delay={i * 0.07}>
            <TiltCard className="card elev-sm h-full gap-4 p-4 3xl:gap-6 3xl:p-6">
              <div className="card-kicker">{group.name}</div>
              {group.items.map((skill, index) => (
                <SkillBar key={skill.label} skill={skill} index={index} />
              ))}
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
