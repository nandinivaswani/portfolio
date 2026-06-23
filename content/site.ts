export const site = {
  name: "Nandini Vaswani",
  firstName: "Nandini",
  lastName: "Vaswani",
  role: "Senior Frontend Engineer",
  specialism: "Streaming & Media Platforms",
  tagline:
    "I build complex, high-performance React applications — from custom video players and streaming platforms to global SaaS, AI-assisted products, and reusable design systems.",
  shortBio:
    "Senior Frontend Engineer with 4.5+ years architecting complex React & Next.js applications. I've shipped custom HLS video players and OTT platforms, but also global multi-language SaaS, AI-assisted products, content systems, and reusable component libraries — always with a focus on performance, accessibility, and clean architecture.",
  location: "Surat, Gujarat, India",
  locationShort: "Surat, India · Remote-friendly",
  email: "nandinivaswani83@gmail.com",
  phone: "+91 99257 90306",
  availability: "Open to senior frontend & full-stack-leaning roles",
  yearsExperience: "4.5+",
  resumePath: "/resume",
  domain: "https://nandinivaswani.dev",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:nandinivaswani83@gmail.com",
  },
  // Quick credibility metrics shown in the hero trust bar
  heroStats: [
    { value: "4.5+", label: "Years building for production" },
    { value: "15+", label: "Platforms shipped end-to-end" },
    { value: "5+", label: "Domains: video, SaaS, AI & more" },
    { value: "~30", label: "Languages localized (i18n)" },
  ],
} as const;

export type Site = typeof site;
