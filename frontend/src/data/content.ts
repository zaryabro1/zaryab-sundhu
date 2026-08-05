/**
 * Section content: about, skills, experience, portfolio and writing.
 *
 * Carried over verbatim from the previous site so the redesign changes only
 * presentation.
 */

export interface Stat {
  /** Numeric target the counter animates toward. */
  value: number;
  /** Appended after the number, e.g. the "+" in "10+". */
  suffix: string;
  label: string;
}

export interface Stack {
  name: string;
  items: string;
}

export interface Skill {
  label: string;
  /** Whole percent, 0–100. Drives both the label and the bar width. */
  percent: number;
}

export interface SkillGroup {
  name: string;
  items: Skill[];
}

export interface Job {
  years: string;
  role: string;
  company: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  /** Must match a `ProjectCategory.id` for the filter to work. */
  category: string;
  description: string;
  tags: string[];
  /** Label for the project's main link — "Live demo", "NPM", etc. */
  primaryLabel: string;
  primaryHref: string;
  githubHref: string;
}

export interface ProjectCategory {
  id: string;
  label: string;
}

export interface Post {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

export const aboutParagraphs: string[] = [
  "My journey in tech started with a deep curiosity for problem-solving, which turned into a focus on building efficient, user-centric systems — scalable web applications and microservices.",
  "Today I work full-stack with Next.js, Node.js and AWS. I'm particularly interested in cloud architecture, and I've led several projects from conception through to deployment.",
];

export const stats: Stat[] = [
  { value: 6, suffix: "+", label: "Years experience" },
  { value: 10, suffix: "+", label: "Projects shipped" },
];

export const stacks: Stack[] = [
  {
    name: "Frontend",
    items: "Next.js, Blade (Laravel), Razor Pages (ASP.NET)",
  },
  { name: "Backend", items: "Node.js, Laravel (PHP), ASP.NET, SharePoint" },
  { name: "Database", items: "MongoDB, PostgreSQL, MySQL" },
  { name: "Cloud", items: "AWS, GCP, Azure, Docker" },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Programming languages",
    items: [
      { label: "JavaScript/TypeScript", percent: 95 },
      { label: "Python", percent: 85 },
      { label: "Java", percent: 80 },
    ],
  },
  {
    name: "Frameworks & libraries",
    items: [
      { label: "React/Next.js", percent: 90 },
      { label: "Node.js/Express", percent: 88 },
      { label: "Django", percent: 75 },
    ],
  },
  {
    name: "Tools & infrastructure",
    items: [
      { label: "AWS", percent: 85 },
      { label: "Docker/Kubernetes", percent: 80 },
      { label: "CI/CD", percent: 85 },
    ],
  },
];

export const jobs: Job[] = [
  {
    years: "2023 — Present",
    role: "Senior Software Engineer",
    company: "TheHexaTown",
    bullets: [
      "Led development of a microservices architecture serving 1M+ users",
      "Built a CI/CD pipeline that cut deployment time by 70%",
      "Mentored junior developers and ran code reviews",
    ],
    tags: ["React", "Node.js", "AWS"],
  },
  {
    years: "2020 — 2023",
    role: "Full Stack Developer",
    company: "Allied Consultants",
    bullets: [
      "Developed scalable web applications on the ASP.NET (C#) with SharePoint and Laravel",
      "Optimized database queries, improving performance by 40%",
      "Integrated third-party APIs and payment gateways",
    ],
    tags: ["MongoDB", "Express", "Docker"],
  },
  {
    years: "2019 — 2020",
    role: "Software Developer",
    company: "ICSS Engeneering",
    bullets: [
      "Built responsive web applications in modern JavaScript",
      "Implemented user authentication and authorization",
      "Worked with the UX team on end-to-end user experience",
    ],
    tags: ["JavaScript", "Python", "SQL"],
  },
];

export const projectCategories: ProjectCategory[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Development" },
  { id: "ai", label: "AI Projects" },
  { id: "opensource", label: "Open Source" },
];

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    category: "web",
    description: "Full-stack e-commerce solution with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB"],
    primaryLabel: "Live demo",
    primaryHref: "#",
    githubHref: "#",
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    category: "ai",
    description: "Deep learning model for generating artistic images.",
    tags: ["Python", "TensorFlow", "Flask"],
    primaryLabel: "Live demo",
    primaryHref: "#",
    githubHref: "#",
  },
  {
    id: "open-source-cli",
    title: "Open Source CLI",
    category: "opensource",
    description: "Command-line tool for project scaffolding.",
    tags: ["Node.js", "TypeScript", "CLI"],
    primaryLabel: "NPM",
    primaryHref: "#",
    githubHref: "#",
  },
];

export const posts: Post[] = [
  {
    id: "react-native",
    category: "Mobile Development",
    date: "June 15, 2023",
    title: "Building Cross-Platform Apps with React Native",
    excerpt:
      "The benefits and the real costs of building mobile apps on React Native.",
    href: "#",
  },
  {
    id: "serverless",
    category: "Cloud Computing",
    date: "June 1, 2023",
    title: "Serverless Architecture Best Practices",
    excerpt:
      "How to architect serverless systems that stay affordable as they scale.",
    href: "#",
  },
  {
    id: "web-security",
    category: "Security",
    date: "May 20, 2023",
    title: "Web Security Fundamentals",
    excerpt:
      "The security practices every web developer should have in place already.",
    href: "#",
  },
];
