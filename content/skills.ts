export type SkillGroup = {
  title: string;
  icon: string; // lucide icon name
  skills: { name: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Frontend",
    icon: "Code2",
    skills: [
      { name: "React" },
      { name: "Next.js (App Router)" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
    ],
  },
  {
    title: "Video & Streaming",
    icon: "PlayCircle",
    skills: [
      { name: "hls.js / HLS streaming" },
      { name: "Custom video players" },
      { name: "Playback analytics" },
      { name: "Live video & chat" },
    ],
  },
  {
    title: "Data & State",
    icon: "Database",
    skills: [
      { name: "GraphQL / Apollo Client" },
      { name: "GraphQL Codegen" },
      { name: "MobX" },
      { name: "React Query patterns" },
    ],
  },
  {
    title: "Platform & Quality",
    icon: "Gauge",
    skills: [
      { name: "Performance / Core Web Vitals" },
      { name: "i18n / localization" },
      { name: "Accessibility (a11y)" },
      { name: "PWA / offline" },
    ],
  },
  {
    title: "AI / ML",
    icon: "Brain",
    skills: [
      { name: "Python" },
      { name: "Computer Vision" },
      { name: "ML fundamentals" },
      { name: "AI-assisted products" },
    ],
  },
];

// Tech stack marquee — grouped logos/labels
export const techStack: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    group: "Frameworks",
    items: ["React 19", "Next.js 16", "React Router 7", "Node.js (basic)"],
  },
  {
    group: "Data",
    items: ["GraphQL", "Apollo Client", "GraphQL Codegen", "REST", "Firebase"],
  },
  {
    group: "Media",
    items: ["hls.js", "react-player", "Matomo", "Screenfull"],
  },
  {
    group: "UI & Motion",
    items: ["Tailwind CSS", "Ant Design", "Motion", "GSAP", "Emotion"],
  },
  {
    group: "Platform",
    items: ["Stripe", "next-auth", "next-intl / i18next", "Sentry", "Vercel"],
  },
  {
    group: "AI / ML",
    items: ["Python", "Computer Vision", "ML fundamentals"],
  },
];

export const specialties: { title: string; description: string; icon: string }[] = [
  {
    title: "Custom Video Players",
    icon: "PlayCircle",
    description:
      "Adaptive HLS streaming, storyboard scrubbing, resume-where-you-left-off, fullscreen/iOS handling, and live chat — built from primitives, not plug-ins.",
  },
  {
    title: "Streaming Architecture",
    icon: "Network",
    description:
      "Multi-tenant, white-label platform engines that launch many branded streaming products from one codebase.",
  },
  {
    title: "GraphQL Data Layers",
    icon: "Database",
    description:
      "Apollo cache design, fragments, optimistic updates and end-to-end type-safe codegen for fast, correct UIs.",
  },
  {
    title: "Performance at Scale",
    icon: "Gauge",
    description:
      "Lazy queries, cache-first policies, blurhash, and CWV tuning for media-heavy apps under spiky traffic.",
  },
  {
    title: "Subscriptions & Paywalls",
    icon: "CreditCard",
    description:
      "Stripe subscription tiers, donations and content gating wired cleanly into the playback experience.",
  },
  {
    title: "Global i18n",
    icon: "Globe",
    description:
      "Localization into ~30 languages with next-intl / i18next, RTL awareness and locale-routed rendering.",
  },
];

// Spoken languages — level drives the segmented fluency meter.
export const languages: { name: string; level: "Native" | "Fluent" | "Professional" }[] = [
  { name: "Gujarati", level: "Native" },
  { name: "Sindhi", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Professional" },
];

// Soft skills (from the résumé).
export const softSkills: string[] = [
  "Team work",
  "Leadership",
  "Time management",
  "Problem solving",
  "Communication",
  "Quick learner",
  "Ownership",
  "Mentoring",
];
