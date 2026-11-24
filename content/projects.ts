export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string;
  year: string;
  featured: boolean;
  tagline: string;
  summary: string;
  // Recruiter-facing impact bullets
  highlights: string[];
  // Engineering depth — what makes this hard
  engineering: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  role: string;
  // Accent gradient (from / to) used on the card
  accent: { from: string; to: string };
};

export const projects: Project[] = [
  {
    slug: "media-platform",
    name: "Media Platform — OTT Streaming",
    client: "Logicwind (client product)",
    category: "Video Streaming · SaaS",
    year: "2025–2026",
    featured: true,
    tagline:
      "My most recent streaming platform — a subscription OTT app with a fully custom HLS video player.",
    summary:
      "The latest OTT product I worked on — a Netflix-style streaming experience where members watch on-demand and live video, follow creators, join communities, and pay via subscriptions or donations. Built on the very latest stack (Next.js 16, React 19, Apollo 4), I owned the video experience and the custom player from the ground up.",
    highlights: [
      "Built a fully custom HLS video player — adaptive bitrate streaming, storyboard scrubbing previews, resume-where-you-left-off, and live chat over playback.",
      "Added subscription and paywall plans with Stripe, so members unlock content based on their plan.",
      "Added playback analytics with Matomo — watch-time, completion and engagement data that feeds product decisions.",
      "Translated the platform with next-intl and shipped clean light and dark themes.",
    ],
    engineering: [
      "Custom player built on hls.js with a React context state machine driving play/seek/quality/fullscreen — including iOS-specific native-playback fallbacks.",
      "Throttled watch-time persistence to GraphQL (Apollo) with optimistic cache fragments, so progress resumes instantly across devices.",
      "Storyboard sprite generation + scrubbing preview thumbnails on the seek bar (Netflix-style).",
      "Built on the newest stable stack: Next.js 16 App Router, React 19, Apollo Client 4, next-auth 5.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Apollo GraphQL",
      "hls.js",
      "Stripe",
      "next-auth",
      "next-intl",
      "Matomo",
      "SCSS",
    ],
    metrics: [
      { value: "HLS", label: "Adaptive bitrate streaming" },
      { value: "Resume", label: "Cross-device watch-time sync" },
      { value: "Live", label: "Chat + live video" },
    ],
    role: "Frontend Engineer — custom video player & viewing experience",
    accent: { from: "#6366f1", to: "#a855f7" },
  },
  {
    slug: "he-gets-us",
    name: "National Campaign Platform",
    client: "Logicwind (client product)",
    category: "High-Traffic Marketing · Motion",
    year: "2026 · Current",
    featured: true,
    tagline:
      "My current project — a national ad-campaign site built for heavy traffic spikes and scroll-driven motion.",
    summary:
      "The project I'm building right now — frontend for a national brand campaign. A content-heavy, animated marketing site built to stay fast under large, spiky traffic.",
    highlights: [
      "Built an animated experience with GSAP and scroll-driven storytelling.",
      "Built for performance under heavy, spiky campaign traffic with the latest Next.js & React.",
      "Added rich media playback and scroll-triggered animations throughout.",
    ],
    engineering: [
      "Next.js 15 + React 19 with Tailwind v4 for a lean, modern styling pipeline.",
      "GSAP timelines + react-intersection-observer for performant scroll choreography.",
      "Media-heavy pages tuned for Core Web Vitals.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "GSAP", "Tailwind v4", "react-player"],
    metrics: [
      { value: "National", label: "Brand campaign, high traffic" },
      { value: "GSAP", label: "Scroll-driven motion" },
      { value: "CWV", label: "Performance-tuned" },
    ],
    role: "Frontend Engineer",
    accent: { from: "#0ea5e9", to: "#22d3ee" },
  },
  {
    slug: "cardzap",
    name: "CardZap — Digital Business Cards",
    client: "Logicwind (Product)",
    category: "Global SaaS · i18n",
    year: "2022–2023",
    featured: true,
    tagline: "A global digital business-card SaaS localized into ~30 languages.",
    summary:
      "Product-ownership frontend for a SaaS that turns contact details into shareable, scannable digital cards — built for a global audience with ~30 language locales, Firebase auth, and offline-capable PWA delivery.",
    highlights: [
      "Localized the entire product into ~30 languages with i18next, including RTL-aware layouts.",
      "Built Firebase login with a dual-session (one-login, two-session) cookie setup.",
      "Shipped a PWA with offline support, plus Sentry monitoring and reCAPTCHA protection.",
    ],
    engineering: [
      "Server-rendered i18n across ~30 locales with translation-file loading at build/runtime.",
      "JWT + universal-cookie session handling enabling a single login across two sessions.",
      "next-pwa service worker for installable, offline-first delivery.",
    ],
    stack: ["Next.js", "React", "i18next", "Firebase", "PWA", "Sentry", "Ant Design"],
    metrics: [
      { value: "~30", label: "Languages localized" },
      { value: "PWA", label: "Offline-capable" },
      { value: "Auth", label: "Dual-session strategy" },
    ],
    role: "Frontend Owner",
    accent: { from: "#10b981", to: "#34d399" },
  },
  {
    slug: "eduscan-ai",
    name: "EduScan AI — Education Platform",
    client: "Logicwind (client product)",
    category: "AI Product · Modern Stack",
    year: "2025",
    featured: true,
    tagline: "An AI-assisted education product on a fully type-safe GraphQL pipeline.",
    summary:
      "An AI-powered education platform built on a modern, fully type-safe frontend — React Router 7 with end-to-end GraphQL code generation and first-class dark mode.",
    highlights: [
      "Built on React Router 7 with GraphQL Codegen for fully type-safe queries end-to-end.",
      "Designed a polished light/dark themed UI with strong accessibility defaults.",
      "Owned the Apollo data layer and generated TypeScript types from the schema.",
    ],
    engineering: [
      "graphql-codegen pipeline generating typed hooks from the schema (zero hand-written query types).",
      "React Router 7 data APIs for loaders/actions and streaming.",
      "Themeable design system with next-themes-style theming.",
    ],
    stack: [
      "React 19",
      "React Router 7",
      "TypeScript",
      "Apollo GraphQL",
      "GraphQL Codegen",
      "Tailwind",
    ],
    metrics: [
      { value: "Type-safe", label: "End-to-end GraphQL types" },
      { value: "AI", label: "AI-assisted product" },
      { value: "RR7", label: "Modern routing/data APIs" },
    ],
    role: "Frontend Engineer",
    accent: { from: "#f472b6", to: "#8b5cf6" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
