export const site = {
  name: "Nandini Vaswani",
  firstName: "Nandini",
  lastName: "Vaswani",
  role: "Senior Frontend Engineer",
  specialism: "JavaScript · React · Next.js · AI-Assisted Development",
  tagline:
    "I build video players, GraphQL data layers and multi-language apps in React and Next.js, and I use AI tools like Claude Code to move faster without giving up code quality.",
  shortBio:
    "Senior Frontend Engineer with 5 years building complex React & Next.js applications. I've shipped custom HLS video players and OTT platforms, plus global multi-language SaaS, AI-assisted products, content systems, and reusable component libraries — always focused on performance, accessibility, and clean structure. I started my career with hands-on AI/ML work, which still shapes how I build AI-assisted products today.",
  location: "Surat, Gujarat, India",
  locationShort: "Surat, India · Remote-friendly",
  email: "nandinivaswani83@gmail.com",
  phone: "+91 99257 90306",
  availability: "Open to senior frontend & full-stack-leaning roles",
  yearsExperience: "5",
  resumePath: "/resume",
  resumePdf: "/nandini-vaswani-resume.pdf",
  domain: "https://nandini-vaswani.vercel.app",
  socials: {
    github: "https://github.com/nandinivaswani",
    linkedin: "https://www.linkedin.com/in/nandini-vaswani-65ba0a19b/",
    email: "mailto:nandinivaswani83@gmail.com",
  },
  // Quick credibility metrics shown in the hero trust bar
  heroStats: [
    { value: "5", label: "Years building for production" },
    { value: "15+", label: "Platforms shipped, start to finish" },
    { value: "5+", label: "Domains: video, SaaS, AI & more" },
    { value: "~30", label: "Languages localized" },
  ],
} as const;

export type Site = typeof site;
