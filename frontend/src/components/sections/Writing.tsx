import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import { posts } from "../../data/content";

/** Recent writing, as a row of linked cards. */
export default function Writing() {
  return (
    <Section id="writing" className="flex flex-col gap-6 3xl:gap-9">
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="type-h2 m-0 mr-auto">Writing</h2>
          <a href="#writing" className="btn btn-ghost">
            All posts
          </a>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 3xl:gap-6">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 0.07}>
            <TiltCard className="h-full rounded-md">
              <a
                href={post.href}
                className="card elev-sm h-full gap-[9px] p-4 text-text no-underline hover:text-text 3xl:p-6"
              >
                <div className="card-meta gap-x-2.5">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-body">{post.excerpt}</p>
                <div className="type-meta text-accent">Read more</div>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
