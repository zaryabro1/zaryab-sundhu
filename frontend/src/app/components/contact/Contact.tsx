import Section from "../../../components/ui/Section";
import Reveal from "../../../components/ui/Reveal";
import Magnetic from "../../../components/ui/Magnetic";
import SocialIcon from "../../../components/ui/SocialIcon";
import { profile, socialLinks } from "../../../data/site";
import ContactForm from "./form";

/**
 * Contact: the pitch and direct details on the left, the form on the right.
 *
 * The form is a separate client component, so this section stays on the
 * server.
 *
 * The copy addresses the reader rather than announcing the author: a visitor
 * arriving here is deciding whether to spend two minutes on a stranger, and
 * "Get in touch" gave them no reason to. The mailto beside the form is the
 * escape hatch for everyone who will never fill in a form at all.
 */
export default function Contact() {
  /* Pre-addressed so the alternative path costs one click and no thinking. */
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Role for Zaryab Sundhu"
  )}`;

  return (
    <Section
      id="contact"
      className="flex flex-col gap-10 md:flex-row md:gap-[52px] 3xl:gap-20"
    >
      <div className="flex flex-1 flex-col gap-4">
        <Reveal>
          {/* Neutral, so the accent in this view belongs to the actions. */}
          <div className="type-kicker text-t-55">Contact</div>
        </Reveal>

        <Reveal>
          <h2 className="type-h2-lead m-0">Tell me what you&rsquo;re building</h2>
        </Reveal>

        <Reveal>
          <p className="type-lead m-0 max-w-[44ch] text-t-72">
            {profile.availability}. Pick what brings you here and the message
            writes its own opening line — I read every one myself.
          </p>
        </Reveal>

        <Reveal>
          <div className="type-ui flex flex-col gap-1.5">
            <a href={mailtoHref} className="break-all no-underline">
              {profile.email}
            </a>
            <span className="text-t-55">{profile.location}</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2 pt-1.5">
            {socialLinks.map((link) => (
              <Magnetic key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <SocialIcon name={link.label} />
                  {link.label}
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="w-full md:w-[380px] md:flex-none 3xl:w-[480px]">
        <ContactForm />
      </Reveal>
    </Section>
  );
}
