export const resume = {
  name: "Nandini Vaswani",
  title: "Senior Frontend Engineer",
  location: "Surat, Gujarat, India",
  email: "nandinivaswani83@gmail.com",
  phone: "+91 99257 90306",
  links: [
    { label: "Portfolio", href: "nandinivaswani.dev" },
    { label: "LinkedIn", href: "linkedin.com/in/nandinivaswani" },
    { label: "GitHub", href: "github.com/nandinivaswani" },
  ],
  summary:
    "Senior Frontend Engineer with 4.5+ years building production React & Next.js applications, specializing in OTT/video-streaming platforms. I architect custom HLS video players, GraphQL data layers, subscription experiences, and white-label multi-tenant frontends — with a strong focus on performance, accessibility, and internationalization.",
  // ATS-friendly: a flat, scannable skills list grouped by area
  skills: [
    {
      group: "Frontend",
      items: [
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3 / SCSS",
        "Tailwind CSS",
        "Ant Design",
      ],
    },
    {
      group: "Streaming & Media",
      items: [
        "HLS / hls.js",
        "Custom video players",
        "Adaptive bitrate streaming",
        "Live video & chat",
        "Playback analytics (Matomo)",
      ],
    },
    {
      group: "Data & State",
      items: [
        "GraphQL",
        "Apollo Client",
        "GraphQL Codegen",
        "MobX",
        "REST APIs",
        "Firebase / Firestore",
      ],
    },
    {
      group: "Platform & Tooling",
      items: [
        "Stripe",
        "next-auth",
        "i18n (next-intl / i18next)",
        "PWA",
        "Sentry",
        "Performance / Core Web Vitals",
        "Accessibility (WCAG)",
        "Git",
      ],
    },
  ],
  experience: [
    {
      company: "Logicwind",
      title: "Senior Frontend Engineer",
      location: "Surat, India",
      period: "2023 — Present",
      bullets: [
        "Architected and shipped a fully custom HLS video player (adaptive bitrate streaming, storyboard scrubbing previews, resume-where-you-left-off, live chat over playback) powering the company's flagship OTT streaming platform.",
        "Built subscription and paywall flows with Stripe, and instrumented playback analytics with Matomo to drive product and content decisions.",
        "Led adoption of a modern production stack — Next.js 16, React 19, Apollo Client 4, next-auth 5 — and established the frontend patterns reused across the platform suite.",
        "Reused a single white-label platform engine to launch multiple branded streaming products (DailyWire, Zeale, FRC, ThinQ and more) as themed, multi-tenant deployments.",
        "Delivered light/dark theming, full internationalization, and accessibility across media-heavy pages tuned for Core Web Vitals under spiky traffic.",
      ],
    },
    {
      company: "Logicwind",
      title: "ReactJS Developer",
      location: "Surat, India",
      period: "Aug 2021 — 2023",
      bullets: [
        "Delivered 8+ production web applications across varied stacks (Next.js, MobX, Ant Design) with a focus on performance and data-layer efficiency.",
        "Reduced network round-trips and improved load times by caching data with Apollo Client and React lazy queries.",
        "Owned the frontend of CardZap, a digital business-card SaaS: localized into ~30 languages with i18next and shipped as an offline-capable PWA.",
        "Implemented Firebase authentication with a single-login, dual-session cookie strategy, plus role-based access management across multiple apps.",
      ],
    },
    {
      company: "Logicwind",
      title: "AI / ML Intern",
      location: "Surat, India",
      period: "Jan 2021 — Jun 2021",
      bullets: [
        "Built a Business Card Scanner that extracted and classified text fields from card images.",
        "Developed a duplicate-contact merging app and a whiteboard-focus detection tool for screen recordings before transitioning into frontend engineering.",
      ],
    },
  ],
  projects: [
    {
      name: "Zeale — OTT Media Platform",
      detail:
        "Subscription streaming platform with a fully custom HLS player, communities, donations and analytics. Next.js 16, React 19, Apollo 4, hls.js, Stripe.",
    },
    {
      name: "DailyWire — Streaming & CMS",
      detail:
        "Video & audio streaming experiences and editorial CMS for a major subscription media brand. React, Apollo GraphQL, hls.js.",
    },
    {
      name: "CardZap — Global SaaS",
      detail:
        "Digital business-card product localized into ~30 languages with Firebase auth and offline PWA delivery. Next.js, i18next, Firebase.",
    },
  ],
  education: {
    degree: "B.Tech, Information Technology",
    school: "CGPIT, Uka Tarsadia University — Bardoli",
    period: "2017 — 2021",
    detail: "8.88 / 10 GPA",
  },
  achievements: [
    "Winner — Innovation Category, Smart India Hackathon 2020",
    "Rising Star of the Month — Logicwind",
    "Participant — Gujarat Hackathon 2019",
  ],
} as const;
