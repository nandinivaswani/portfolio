// Career highlights, impact metrics, testimonials, achievements

export const impactMetrics: { value: string; suffix?: string; label: string; sub: string }[] = [
  { value: "4.5", suffix: "+", label: "Years in production", sub: "Frontend engineering since 2021" },
  { value: "15", suffix: "+", label: "Platforms shipped", sub: "Across streaming, SaaS & marketing" },
  { value: "5", suffix: "+", label: "Product domains", sub: "Video, SaaS, AI, CMS & marketing" },
  { value: "30", suffix: "~", label: "Languages localized", sub: "Global i18n delivery" },
];

export const careerHighlights: { title: string; description: string; icon: string }[] = [
  {
    title: "Owned a custom HLS video player end-to-end",
    description:
      "Designed and shipped the playback engine — adaptive streaming, scrubbing previews, resume, and live chat — that powers the flagship streaming product.",
    icon: "PlayCircle",
  },
  {
    title: "Set the frontend standard for a platform suite",
    description:
      "Established the React/Next.js patterns and shared architecture the team reuses to launch new white-label streaming brands.",
    icon: "Layers",
  },
  {
    title: "Shipped on the bleeding edge in production",
    description:
      "Took Next.js 16, React 19, Apollo 4 and next-auth 5 to production — staying ahead of the ecosystem without sacrificing stability.",
    icon: "Rocket",
  },
  {
    title: "Delivered global, accessible products",
    description:
      "Localized products into ~30 languages and shipped accessible, themeable, offline-capable experiences.",
    icon: "Globe",
  },
];

export const achievements: { title: string; org: string; icon: string }[] = [
  { title: "Rising Star of the Month", org: "Logicwind", icon: "Star" },
  { title: "Winner — Innovation Category", org: "Smart India Hackathon 2020", icon: "Trophy" },
  { title: "Participant", org: "Gujarat Hackathon 2019", icon: "Medal" },
];
