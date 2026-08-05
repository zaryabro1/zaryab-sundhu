/**
 * Identity, navigation and contact details.
 *
 * Content lives in `src/data` so the section components stay presentational —
 * editing the site's copy never means touching JSX.
 */

export interface NavItem {
  /** Matches the `id` on the corresponding <section>, for anchors and scrollspy. */
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const profile = {
  name: "Zaryab Sundhu",
  /** Rendered as two stacked lines in the hero. */
  nameLines: ["Zaryab", "Sundhu"],
  role: "Senior Software Engineer",
  availability: "Open to senior & staff engineering roles",
  intro:
    "Six years building scalable web applications and microservices with Next.js, Node.js and AWS. Currently at TheHexaTown in Lahore.",
  email: "zaryabro1@gmail.com",
  location: "Lahore, Pakistan",
  portrait: "/zaryab-profile.jpg",
  /* Stored under a URL-safe name; `resumeFilename` is what the visitor's
     browser actually saves it as. */
  resume: "/zaryab-sundhu-resume.pdf",
  resumeFilename: "Zaryab Sundhu - Resume (2025).pdf",
} as const;

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "portfolio", label: "Portfolio" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

/**
 * Profile links. These render as buttons in the Contact section and also feed
 * the `sameAs` array in the site's structured data, which is how a search
 * engine ties this page to the same person elsewhere — so each one must be a
 * real profile URL, never a platform home page.
 */
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/zaryabro1" },
  { label: "LinkedIn", href: "https://linkedin.com/in/zaryabro1" },
  { label: "Instagram", href: "https://instagram.com/zaryabro1" },
  { label: "X", href: "https://x.com/zaryabro1" },
];

/** The marquee under the hero. */
export const tickerItems: string[] = [
  "Next.js",
  "Node.js",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "CI/CD",
  "Microservices",
];
