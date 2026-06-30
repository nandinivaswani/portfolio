export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  // How much complexity / responsibility this stage carried
  scope: string;
  summary: string;
  achievements: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "Logicwind",
    title: "Senior Frontend Engineer",
    period: "2023 — Present",
    location: "Surat, India",
    current: true,
    scope: "Owns the platform's hardest surfaces — custom video player & shared architecture",
    summary:
      "Lead frontend on the Cappital team's white-label OTT/media platform line — owning the video experience, custom players, and the shared architecture reused across multiple streaming brands.",
    achievements: [
      "Architected and shipped a fully custom HLS video player (adaptive streaming, storyboard scrubbing, resume, live chat) powering the flagship streaming product.",
      "Drove adoption of a modern stack in production — Next.js 16, React 19, Apollo Client 4, next-auth 5 — and set frontend patterns the team builds on.",
      "Built subscription/paywall flows (Stripe), playback analytics (Matomo) and i18n across the platform suite.",
      "Reused a single platform engine to launch multiple client streaming brands (DailyWire, Zeale, FRC, ThinQ and more) as themed white-label deployments.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Apollo GraphQL", "hls.js", "Stripe", "Architecture"],
  },
  {
    company: "Logicwind",
    title: "ReactJS Developer",
    period: "Aug 2021 — 2023",
    location: "Surat, India",
    scope: "Shipped 8+ production apps across varied stacks, owning whole product frontends",
    summary:
      "Delivered 8+ production web apps across varied stacks (Next.js, MobX, Ant Design), with a focus on performance and data-layer efficiency.",
    achievements: [
      "Cut network round-trips and sped up apps by caching data with Apollo Client and React lazy queries.",
      "Implemented role-based access management across multiple web apps.",
      "Built Firebase auth with a single-login, dual-session cookie strategy for the CardZap product.",
      "Localized CardZap into ~30 languages and shipped it as an offline-capable PWA.",
    ],
    tags: ["React", "Next.js", "MobX", "Apollo", "Firebase", "i18n", "PWA"],
  },
  {
    company: "Logicwind",
    title: "AI / ML Intern",
    period: "Jan 2021 — Jun 2021",
    location: "Surat, India",
    scope: "Built ML-assisted utilities — the on-ramp into frontend engineering",
    summary:
      "Built ML-assisted utility apps before transitioning into frontend engineering.",
    achievements: [
      "Built a Business Card Scanner that extracted and classified text fields from card images.",
      "Developed a duplicate-contact merging app and a whiteboard-focus detection tool for screen recordings.",
    ],
    tags: ["Python", "ML", "Computer Vision", "React"],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  detail: string;
};

export const education: Education[] = [
  {
    school: "CGPIT, UTU — Bardoli",
    degree: "B.Tech, Information Technology",
    period: "2017 — 2021",
    detail: "8.88 / 10 GPA",
  },
];
