export const site = {
  name: "Nandini Vaswani",
  firstName: "Nandini",
  lastName: "Vaswani",
  role: "Senior Frontend Engineer",
  specialism: "Complex Web Applications",
  tagline:
    "I take hard engineering problems — video streaming, global scale, AI-assisted products — and turn them into interfaces that feel effortless. Here's what that looks like in practice.",
  shortBio:
    "Senior Frontend Engineer with 4.5+ years building complex React & Next.js applications. I've shipped custom HLS video players and OTT platforms, plus global multi-language SaaS, AI-assisted products, content systems, and reusable component libraries — always focused on performance, accessibility, and clean structure. I started my career with hands-on AI/ML work, which still shapes how I build AI-assisted products today.",
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
    { value: "15+", label: "Platforms shipped, start to finish" },
    { value: "5+", label: "Domains: video, SaaS, AI & more" },
    { value: "~30", label: "Languages localized" },
  ],
} as const;

export type Site = typeof site;
