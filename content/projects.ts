export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string;
  year: string;
  featured: boolean;
  tagline: string;
  summary: string;
  // Problem → Constraints → Solution → Impact narrative
  problem: string;
  constraints: string[];
  solution: string;
  impact: string[];
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
    client: "Cappital (Logicwind)",
    category: "Video Streaming · SaaS",
    year: "2025–2026",
    featured: true,
    tagline:
      "My most recent streaming platform — a subscription OTT app with a fully custom HLS video player.",
    summary:
      "The latest OTT product I led — a Netflix-style streaming experience where members watch on-demand and live video, follow creators, join communities, and pay via subscriptions or donations. Built on the very latest stack (Next.js 16, React 19, Apollo 4), I owned the video experience and the custom player from the ground up.",
    problem:
      "Members expect a Netflix-grade streaming experience — instant playback, watch-anywhere resume, live moments — on subscription content that has to stay locked down.",
    constraints: [
      "Adaptive HLS that survives flaky networks and iOS's native-playback quirks",
      "Premium content gated by membership tier without breaking the watch flow",
      "Watch progress that resumes instantly across devices",
    ],
    solution:
      "A fully custom player on hls.js driven by a React state-machine context — adaptive bitrate, storyboard scrubbing previews, cross-device resume and live chat over playback — with Stripe paywall gating wired cleanly into the experience.",
    impact: [
      "Netflix-style playback with storyboard scrubbing & resume",
      "Subscription gating + donations integrated into playback",
      "Playback analytics (Matomo) feeding product decisions",
    ],
    highlights: [
      "Built a fully custom HLS video player — adaptive bitrate streaming, storyboard scrubbing previews, resume-where-you-left-off, and live chat over playback.",
      "Implemented subscription & paywall gating with Stripe, so premium content unlocks seamlessly per membership tier.",
      "Instrumented playback analytics (Matomo) — watch-time, completion and engagement events feeding product decisions.",
      "Localized the platform with next-intl and shipped polished light & dark themes.",
    ],
    engineering: [
      "Custom player built on hls.js with a React context state machine driving play/seek/quality/fullscreen — including iOS-specific native-playback fallbacks.",
      "Throttled watch-time persistence to GraphQL (Apollo) with optimistic cache fragments, so progress resumes instantly across devices.",
      "Storyboard sprite generation + scrubbing preview thumbnails on the seek bar (Netflix-style).",
      "Cutting-edge stack: Next.js 16 App Router, React 19, Apollo Client 4, next-auth 5.",
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
    role: "Lead Frontend Engineer — video experience & player",
    accent: { from: "#fbbf24", to: "#f59e0b" },
  },
  {
    slug: "he-gets-us",
    name: "He Gets Us — Campaign Platform",
    client: "Cappital (Logicwind)",
    category: "High-Traffic Marketing · Motion",
    year: "2026 · Current",
    featured: true,
    tagline:
      "My current project — a nationally-recognized campaign site engineered for traffic spikes and motion.",
    summary:
      "The project I'm building right now — frontend for a nationally-known brand campaign. A content-rich, animation-forward marketing platform engineered to stay fast and resilient under large, spiky traffic.",
    problem:
      "A nationally-recognized brand campaign needs a content-rich, animation-forward site that stays fast and standing during huge, spiky traffic.",
    constraints: [
      "Heavy motion and media without wrecking Core Web Vitals",
      "Resilience under sudden national-scale traffic",
      "Scroll-driven storytelling that still feels smooth on mobile",
    ],
    solution:
      "Built on Next.js 15 + React 19 with GSAP timelines and intersection-observer choreography, tuning media-heavy pages so the experience stays performant under load.",
    impact: [
      "Animation-forward storytelling at national scale",
      "Performance-tuned for spiky campaign traffic",
      "Rich media playback woven throughout",
    ],
    highlights: [
      "Built an animation-forward experience with GSAP and scroll-driven storytelling.",
      "Engineered for performance under heavy, spiky campaign traffic with the latest Next.js & React.",
      "Integrated rich media playback and intersection-observer-driven reveals throughout.",
    ],
    engineering: [
      "Next.js 15 + React 19 with Tailwind v4 for a lean, modern styling pipeline.",
      "GSAP timelines + react-intersection-observer for performant scroll choreography.",
      "Media-heavy pages tuned for Core Web Vitals.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "GSAP", "Tailwind v4", "react-player"],
    metrics: [
      { value: "National", label: "Recognized brand campaign" },
      { value: "GSAP", label: "Scroll-driven motion" },
      { value: "CWV", label: "Performance-tuned" },
    ],
    role: "Frontend Engineer",
    accent: { from: "#fb923c", to: "#f97316" },
  },
  {
    slug: "cardzap",
    name: "CardZap — Digital Business Cards",
    client: "Logicwind (Product)",
    category: "Global SaaS · i18n",
    year: "2022–2023",
    featured: true,
    tagline:
      "A global digital business-card SaaS localized into ~30 languages.",
    summary:
      "Product-ownership frontend for a SaaS that turns contact details into shareable, scannable digital cards — built for a global audience with ~30 language locales, Firebase auth, and offline-capable PWA delivery.",
    problem:
      "Turn contact details into shareable, scannable digital cards for a truly global audience — one product, many languages, often used offline.",
    constraints: [
      "~30 locales, including right-to-left layouts",
      "A single login that has to span two sessions",
      "Installable, offline-capable delivery",
    ],
    solution:
      "Server-rendered i18n across ~30 languages with i18next, Firebase auth using a JWT + universal-cookie dual-session strategy, shipped as an offline-first PWA with Sentry monitoring and reCAPTCHA.",
    impact: [
      "Localized into ~30 languages, RTL-aware",
      "Offline-capable, installable PWA",
      "Single-login, dual-session auth strategy",
    ],
    highlights: [
      "Localized the entire product into ~30 languages with i18next, including RTL-aware layouts.",
      "Implemented Firebase authentication with a dual-session (one-login, two-session) cookie strategy.",
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
    accent: { from: "#fb7185", to: "#e11d48" },
  },
  {
    slug: "eduscan-ai",
    name: "EduScan AI — Education Platform",
    client: "Cappital (Logicwind)",
    category: "AI Product · Modern Stack",
    year: "2025",
    featured: true,
    tagline:
      "An AI-assisted education product on a fully type-safe GraphQL pipeline.",
    summary:
      "An AI-powered education platform built on a modern, fully type-safe frontend — React Router 7 with end-to-end GraphQL code generation and first-class dark mode.",
    problem:
      "An AI-assisted education product needs a frontend that can trust a fast-moving GraphQL API — without a wall of hand-written, drift-prone types.",
    constraints: [
      "End-to-end type-safety from schema to component",
      "Modern routing and data APIs",
      "First-class light/dark theming and accessibility",
    ],
    solution:
      "React Router 7 with graphql-codegen generating typed hooks straight from the schema, an owned Apollo data layer, and a themeable, accessible design system.",
    impact: [
      "Zero hand-written query types — fully type-safe",
      "Modern RR7 loaders/actions & streaming",
      "Polished, accessible light/dark UI",
    ],
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
    stack: ["React 19", "React Router 7", "TypeScript", "Apollo GraphQL", "GraphQL Codegen", "Tailwind"],
    metrics: [
      { value: "Type-safe", label: "End-to-end GraphQL types" },
      { value: "AI", label: "AI-assisted product" },
      { value: "RR7", label: "Modern routing/data APIs" },
    ],
    role: "Frontend Engineer",
    accent: { from: "#c084fc", to: "#a855f7" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
