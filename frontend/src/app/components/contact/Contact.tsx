import Section from "../../../components/ui/Section";
import Reveal from "../../../components/ui/Reveal";
import Magnetic from "../../../components/ui/Magnetic";
import { profile, socialLinks } from "../../../data/site";
import ContactForm from "./form";

/**
 * Contact: the pitch and direct details on the left, the form on the right.
 *
 * The form is a separate client component, so this section stays on the
 * server.
 */
export default function Contact() {
  return (
    <Section
      id="contact"
      className="flex flex-col gap-10 md:flex-row md:gap-[52px] 3xl:gap-20"
    >
      <div className="flex flex-1 flex-col gap-4">
        <Reveal>
          <div className="type-kicker text-accent">Contact</div>
        </Reveal>

        <Reveal>
          <h2 className="type-h2-lead m-0">Get in touch</h2>
        </Reveal>

        <Reveal>
          <p className="type-lead m-0 max-w-[44ch] text-t-72">
            Open to senior and staff engineering roles. Email is the fastest way
            to reach me — I reply within a day.
          </p>
        </Reveal>

        <Reveal>
          <div className="type-ui flex flex-col gap-1.5">
            <a
              href={`mailto:${profile.email}`}
              className="break-all no-underline"
            >
              {profile.email}
            </a>
            <span className="text-t-55">{profile.location}</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex gap-2 pt-1.5">
            {socialLinks.map((link) => (
              <Magnetic key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
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
