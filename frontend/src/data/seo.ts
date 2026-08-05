/**
 * SEO configuration: the canonical origin, the keyword set, and the
 * structured-data documents the pages emit.
 *
 * Keywords here are deliberately limited to technologies that actually appear
 * in this site's content — the stacks in `content.ts` and the roles in
 * `site.ts`. Padding the list with terms the page cannot back up is what
 * search engines classify as keyword stuffing, and it devalues the terms that
 * are genuinely earned.
 */

import { profile, socialLinks } from "./site";
import { jobs, projects, skillGroups, stacks } from "./content";

/**
 * Canonical origin. Every absolute URL in metadata and structured data is
 * built from this, so a domain change is a one-line edit (or an env var at
 * build time).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://zaryabro1.com";

/** Languages, frameworks, datastores and platforms evidenced on the page. */
export const techKeywords: string[] = [
  // Languages
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "PHP",
  "SQL",
  // Frontend
  "React",
  "Next.js",
  "React Native",
  "Blade",
  "Razor Pages",
  "Tailwind CSS",
  // Backend
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "Laravel",
  "ASP.NET",
  "SharePoint",
  "REST APIs",
  // Data
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  // Cloud and infrastructure
  "AWS",
  "Google Cloud Platform",
  "Microsoft Azure",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Serverless architecture",
  "Cloud architecture",
  "Microservices",
  "DevOps",
  // Practice areas
  "Full-stack development",
  "Web application development",
  "MERN stack",
  "System design",
  "Web security",
  "TensorFlow",
];

/** Role, seniority and location terms someone would actually search. */
export const roleKeywords: string[] = [
  "Zaryab Sundhu",
  "Senior Software Engineer",
  "Full-Stack Developer",
  "Software Engineer Lahore",
  "Software Engineer Pakistan",
  "Next.js developer",
  "Node.js developer",
  "React developer",
  "Freelance software engineer",
  "Remote software engineer",
  "Software engineering portfolio",
];

export const keywords: string[] = [...roleKeywords, ...techKeywords];

export const siteTitle = `${profile.name} — ${profile.role} & Full-Stack Developer`;

export const siteDescription =
  "Zaryab Sundhu is a Senior Software Engineer in Lahore with six years building scalable web applications and microservices on Next.js, Node.js, TypeScript and AWS. Portfolio, experience and writing on cloud architecture, DevOps and full-stack development.";

/**
 * The site's structured data, as a single JSON-LD graph.
 *
 * A graph rather than separate blocks so the nodes can reference each other by
 * `@id` — the ProfilePage points at the Person, and the Person points at the
 * employer — which is how search engines resolve them into one entity rather
 * than three unrelated ones.
 *
 * Only claims the page itself supports are emitted. The projects and posts are
 * deliberately absent: their links are still placeholders, and marking up
 * CreativeWork that resolves nowhere is the kind of thing that earns a
 * structured-data penalty rather than a rich result.
 */
export function buildStructuredData() {
  const personId = `${siteUrl}/#person`;
  const siteId = `${siteUrl}/#website`;

  const currentJob = jobs[0];

  /*
   * `sameAs` is how a search engine ties this page to the same person
   * elsewhere, so every entry has to be an actual profile. The social links
   * currently point at the platform home pages (`https://github.com`), which
   * would assert that Zaryab and GitHub-the-site are one entity — worse than
   * publishing nothing. Anything without a path is dropped until a real
   * profile URL replaces it in `site.ts`.
   */
  const profileUrls = socialLinks
    .map((link) => link.href)
    .filter((href) => {
      try {
        return new URL(href).pathname.replace(/\/$/, "").length > 0;
      } catch {
        return false;
      }
    });

  /* Everything the page demonstrates competence in, de-duplicated. */
  const knowsAbout = Array.from(
    new Set([
      ...techKeywords,
      ...skillGroups.flatMap((group) => group.items.map((s) => s.label)),
      ...stacks.map((stack) => stack.name),
      ...projects.flatMap((project) => project.tags),
    ])
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        jobTitle: profile.role,
        description: siteDescription,
        url: siteUrl,
        image: `${siteUrl}${profile.portrait}`,
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        worksFor: {
          "@type": "Organization",
          name: currentJob.company,
        },
        knowsAbout,
        ...(profileUrls.length > 0 ? { sameAs: profileUrls } : {}),
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: siteTitle,
        isPartOf: { "@id": siteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
    ],
  };
}
