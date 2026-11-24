// Career highlights, impact metrics, testimonials, achievements

export const impactMetrics: { value: string; suffix?: string; label: string; sub: string }[] = [
  {
    value: "5",
    suffix: "",
    label: "Years in production",
    sub: "Frontend engineering since 2021",
  },
  {
    value: "10",
    suffix: "+",
    label: "Platforms shipped",
    sub: "Across streaming, SaaS & marketing",
  },
  { value: "5", suffix: "+", label: "Product domains", sub: "Video, SaaS, AI, CMS & marketing" },
  { value: "30", suffix: "~", label: "Languages localized", sub: "Built for a global audience" },
];

export const careerHighlights: { title: string; description: string; icon: string }[] = [
  {
    title: "Built a custom HLS video player, start to finish",
    description:
      "Designed and shipped the video player — adaptive streaming, scrubbing previews, resume, and live chat — that powers the main streaming product.",
    icon: "PlayCircle",
  },
  {
    title: "Set the frontend standard for the whole platform",
    description:
      "Built the React/Next.js patterns and shared structure the team reuses to launch new branded streaming products.",
    icon: "Layers",
  },
  {
    title: "Adopted the newest stack, ahead of most teams",
    description:
      "Took Next.js 16, React 19, Apollo 4 and next-auth 5 to production early, without breaking things.",
    icon: "Rocket",
  },
  {
    title: "Delivered global, accessible products",
    description:
      "Localized products into ~30 languages and shipped accessible apps that work offline and support light/dark themes.",
    icon: "Globe",
  },
];

export const achievements: { title: string; org: string; icon: string }[] = [
  { title: "Rising Star of the Month", org: "Logicwind", icon: "Star" },
  { title: "Winner — Innovation Category", org: "Smart India Hackathon 2020", icon: "Trophy" },
  { title: "Participant", org: "Gujarat Hackathon 2019", icon: "Medal" },
];
