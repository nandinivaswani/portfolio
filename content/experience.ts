export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "Logicwind",
    title: "Frontend Engineer (ReactJS / Next.js)",
    period: "Aug 2021 — Present",
    location: "Surat, India",
    current: true,
    summary:
      "Frontend engineer on a white-label OTT and media platform line. Senior-level ownership since 2024: the video experience, custom players, and frontend patterns reused across client streaming products.",
    achievements: [
      "Built a custom HLS video player with thumbnail scrubbing, resume, quality and fullscreen controls and live chat — a YouTube-style experience for the main streaming product.",
      "Raised the Lighthouse performance score of a production streaming site from 36 to 80 using Google Lighthouse and Chrome DevTools.",
      "Won Best Team Player of the Year 2025 at the company annual meet.",
      "Brought a modern stack into production — Next.js 16, React 19, Apollo Client 4, next-auth 5 — and set the frontend patterns the team builds on.",
      "Built subscription/paywall flows (Stripe), playback analytics (Matomo) and language support across the platform.",
      "Integrated THEOplayer in additional streaming products and reused one platform engine across multiple client brands.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Apollo GraphQL",
      "hls.js",
      "THEOplayer",
      "Lighthouse",
      "Stripe",
    ],
  },
  {
    company: "Logicwind",
    title: "ReactJS Developer",
    period: "Aug 2021 — 2023",
    location: "Surat, India",
    summary:
      "Delivered 8+ production web apps across varied stacks (Next.js, MobX, Ant Design), with a focus on performance and faster data loading.",
    achievements: [
      "Cut network round-trips and sped up apps by caching data with Apollo Client and React lazy queries.",
      "Added role-based access control across multiple web apps.",
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
    summary: "Built ML-assisted utility apps before transitioning into frontend engineering.",
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
