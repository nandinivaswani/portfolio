// The core narrative of the site, told as Nandini's own story:
//   Complex systems  →  Frontend engineering  →  Human experience
// Everything here is grounded in real projects she's shipped.

/** Raw complexity that lands on my desk (hero left side) — my actual stack. */
export const complexityInputs: { label: string; hint: string }[] = [
  { label: "GraphQL schema", hint: "Apollo, deeply nested" },
  { label: "HLS video streams", hint: "adaptive, flaky networks" },
  { label: "Business rules", hint: "tiers, paywalls, gating" },
  { label: "Auth & sessions", hint: "next-auth, tokens, roles" },
  { label: "Design specs", hint: "tokens, states, motion" },
  { label: "Performance budgets", hint: "Core Web Vitals" },
];

/** Polished products I've actually shipped (hero right side). */
export const experienceOutputs: { label: string; hint: string }[] = [
  { label: "Custom HLS video player", hint: "adaptive, resume, live chat" },
  { label: "OTT streaming app", hint: "subscriptions + live" },
  { label: "~30-language SaaS", hint: "RTL-aware i18n" },
  { label: "AI education UI", hint: "type-safe GraphQL" },
  { label: "National campaign site", hint: "fast under spiky traffic" },
];

/** The four worlds I sit between on every project. */
export type TranslationNode = {
  id: string;
  label: string;
  role: string;
  icon: string;
  items: string[];
};

export const translationNodes: TranslationNode[] = [
  {
    id: "business",
    label: "Business",
    role: "Goals, rules & monetization",
    icon: "Building2",
    items: ["Subscriptions", "Paywalls", "Edge cases", "KPIs"],
  },
  {
    id: "design",
    label: "Design",
    role: "Intent & visual language",
    icon: "PenTool",
    items: ["Mockups", "Design tokens", "Dark mode", "Motion"],
  },
  {
    id: "backend",
    label: "Backend",
    role: "Data & systems",
    icon: "Server",
    items: ["GraphQL", "HLS / video", "next-auth", "Data models"],
  },
  {
    id: "users",
    label: "Users",
    role: "Context & ability",
    icon: "Users",
    items: ["Devices", "Bandwidth", "~30 locales", "Accessibility"],
  },
];

/** How I think — the engineering mindset, each tied to real work. */
export type Principle = {
  title: string;
  icon: string;
  description: string;
  example: string;
};

export const principles: Principle[] = [
  {
    title: "User Experience",
    icon: "MousePointerClick",
    description:
      "I want the interface to disappear. On the OTT player I sweated the small things — resume-where-you-left-off, storyboard scrubbing, instant playback — so watching just works.",
    example: "Resume + storyboard scrubbing on the Media Platform player",
  },
  {
    title: "Performance",
    icon: "Gauge",
    description:
      "Speed is a feature. On the He Gets Us campaign I budgeted for Core Web Vitals and tuned media-heavy pages to stay fast under sudden, national-scale traffic.",
    example: "He Gets Us — tuned for national traffic spikes",
  },
  {
    title: "Scalability",
    icon: "Scaling",
    description:
      "I build for the hundredth screen, not the first. One white-label platform engine I work on launches many branded streaming products from a single codebase.",
    example: "One engine → DailyWire, Zeale, FRC, ThinQ",
  },
  {
    title: "Accessibility",
    icon: "Accessibility",
    description:
      "Keyboard paths, semantics, focus and contrast are part of “done” for me, not a later pass — even inside complex, interactive streaming UIs.",
    example: "a11y baked into the platform suite",
  },
  {
    title: "Architecture",
    icon: "Boxes",
    description:
      "State machines over scattered flags. My custom HLS player runs on a React context state machine driving play, seek, quality and fullscreen — predictable, even on iOS.",
    example: "State-machine-driven HLS player",
  },
  {
    title: "Maintainability",
    icon: "RefreshCw",
    description:
      "Code is read far more than written. On EduScan AI and Western Tech I generate types straight from the GraphQL schema — zero hand-written query types for the team to drift from.",
    example: "GraphQL Codegen on EduScan AI & Western Tech",
  },
];

/** Engineering impact — the hard problem behind each project, and how I solved it. */
export type ImpactArea = {
  title: string;
  icon: string;
  challenge: string;
  solution: string;
  proof: string;
};

export const impactAreas: ImpactArea[] = [
  {
    title: "Video Experiences",
    icon: "PlayCircle",
    challenge:
      "Stream raw HLS into a player that feels instant, resumes anywhere, and survives flaky networks and iOS quirks.",
    solution:
      "I built a fully custom player on hls.js driven by a React state machine — adaptive bitrate, storyboard scrubbing, cross-device resume and live chat over playback.",
    proof: "Media Platform · OTT",
  },
  {
    title: "Frontend Architecture",
    icon: "GitBranch",
    challenge:
      "Launch many branded streaming products without re-building the app each time.",
    solution:
      "I help maintain a single white-label platform engine with themeable layers and clear data boundaries that spins up multiple client brands from one codebase.",
    proof: "White-label streaming engine",
  },
  {
    title: "Performance Optimization",
    icon: "Gauge",
    challenge:
      "Keep media-rich, content-heavy pages fast during national-campaign traffic spikes.",
    solution:
      "Cache-first GraphQL policies, lazy queries, deliberate code-splitting and Core Web Vitals budgets — measured, not guessed.",
    proof: "He Gets Us campaign",
  },
  {
    title: "Global i18n & Accessibility",
    icon: "Accessibility",
    challenge:
      "Make one product work for ~30 languages, RTL layouts, and keyboard / assistive-tech users.",
    solution:
      "Server-rendered i18n across ~30 locales, RTL-aware layouts, and semantic structure with managed focus and real contrast built into components.",
    proof: "CardZap · ~30 languages",
  },
  {
    title: "Component Systems",
    icon: "Component",
    challenge:
      "Stop teams reinventing the same UI and drifting out of sync across products.",
    solution:
      "I build reusable, typed component libraries and design-token systems that whole teams build on — consistent and quick to extend.",
    proof: "Reusable libraries at Logicwind",
  },
  {
    title: "Type-Safe Data Layers",
    icon: "Webhook",
    challenge:
      "Turn sprawling, fast-moving GraphQL APIs into data the UI can trust.",
    solution:
      "End-to-end type-safe GraphQL with codegen, Apollo cache design, fragments and optimistic updates — zero hand-written query types.",
    proof: "EduScan AI · Apollo + Codegen",
  },
];

/** Frontend Reality — perception vs. the job I actually do. */
export const frontendReality: {
  perception: string[];
  reality: string[];
} = {
  perception: [
    "Picking colors",
    "Styling buttons",
    "Tweaking CSS",
    "Making it “pretty”",
    "Centering a div",
  ],
  reality: [
    "System architecture",
    "State management",
    "Accessibility",
    "Performance engineering",
    "User psychology",
    "Business-logic integration",
    "Scalability & edge cases",
    "Type-safe data layers",
  ],
};
