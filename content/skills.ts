export type SkillGroup = {
  title: string;
  icon: string; // lucide icon name
  skills: { name: string; level: number }[]; // level 0-100 for animated bars
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Frontend",
    icon: "Code2",
    skills: [
      { name: "React", level: 96 },
      { name: "Next.js (App Router)", level: 94 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
    ],
  },
  {
    title: "Video & Streaming",
    icon: "PlayCircle",
    skills: [
      { name: "hls.js / HLS streaming", level: 92 },
      { name: "Custom video players", level: 90 },
      { name: "Playback analytics", level: 85 },
      { name: "Live video & chat", level: 82 },
    ],
  },
  {
    title: "Data & State",
    icon: "Database",
    skills: [
      { name: "GraphQL / Apollo Client", level: 93 },
      { name: "GraphQL Codegen", level: 86 },
      { name: "MobX", level: 84 },
      { name: "React Query patterns", level: 82 },
    ],
  },
  {
    title: "Platform & Quality",
    icon: "Gauge",
    skills: [
      { name: "Performance / Core Web Vitals", level: 90 },
      { name: "i18n / localization", level: 90 },
      { name: "Accessibility (a11y)", level: 84 },
      { name: "PWA / offline", level: 82 },
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
    items: ["React 19", "Next.js 16", "React Router 7", "Node.js"],
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
