// ATS resume page content. Mirrors ~/projects/resume/resume.md — keep the two in sync.
export const resume = {
  name: "Nandini Vaswani",
  title: "Senior Frontend Engineer | JavaScript | React | Next.js | AI-Assisted Development",
  location: "Surat, Gujarat, India",
  email: "nandinivaswani83@gmail.com",
  phone: "+91 99257 90306",
  links: [
    { label: "Portfolio", href: "nandini-vaswani.vercel.app" },
    { label: "LinkedIn", href: "linkedin.com/in/nandini-vaswani-65ba0a19b" },
    { label: "GitHub", href: "github.com/nandinivaswani" },
  ],
  summary:
    "Senior Frontend Engineer with 5 years of experience building production React and Next.js applications, specializing in video streaming platforms, GraphQL data layers and multi-language products. Built a custom YouTube-style HLS video player, worked with THEOplayer, and raised a streaming site's Lighthouse performance score from 36 to 80. Experienced across 15+ client products, from Next.js 16 and React 19 streaming apps to admin CMS dashboards. Uses Claude Code, Replit, v0 and Lovable to prototype and ship faster, while owning architecture, debugging and production quality.",
  skills: [
    {
      group: "Programming Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS", "Python"],
    },
    {
      group: "Frontend Technologies",
      items: [
        "Responsive design",
        "Semantic HTML and ARIA accessibility",
        "Progressive Web Apps (PWA)",
        "i18n (30 languages)",
        "Server-side rendering",
      ],
    },
    {
      group: "Frameworks and Libraries",
      items: [
        "React 19",
        "Next.js (App Router)",
        "React Router 7",
        "Node.js (basic)",
        "Express (basic)",
      ],
    },
    {
      group: "State Management",
      items: [
        "Apollo Client cache",
        "MobX",
        "React Context",
        "TanStack Query",
        "React Hook Form",
        "Zod",
      ],
    },
    {
      group: "API and Integrations",
      items: [
        "GraphQL",
        "GraphQL Codegen",
        "REST",
        "Firebase Authentication",
        "next-auth",
        "JWT",
        "Role-based access control",
        "Stripe",
        "Matomo",
        "Sentry",
        "hls.js",
        "THEOplayer",
        "react-player",
      ],
    },
    {
      group: "Styling and UI Libraries",
      items: [
        "Tailwind CSS",
        "Ant Design",
        "shadcn/ui",
        "Radix UI",
        "SCSS",
        "Emotion",
        "GSAP",
        "Motion (Framer Motion)",
      ],
    },
    {
      group: "Performance Optimization",
      items: [
        "Core Web Vitals",
        "Google Lighthouse",
        "Chrome DevTools profiling",
        "Apollo cache policies",
        "Lazy queries",
        "Image and media optimization",
      ],
    },
    {
      group: "Testing and Development Tools",
      items: ["ESLint", "Prettier", "GraphQL Codegen", "Chrome DevTools", "Vite", "Turbopack"],
    },
    { group: "Version Control and Deployment", items: ["Git", "GitHub", "Vercel"] },
    {
      group: "Soft Skills",
      items: [
        "Team management",
        "Ownership",
        "Leadership",
        "Mentoring",
        "Collaboration",
        "Communication",
        "Problem solving",
        "Time management",
        "Quick learner",
      ],
    },
    {
      group: "AI Tools and AI-Assisted Development",
      items: [
        "Claude and Claude Code",
        "Replit and Replit Agent",
        "v0.dev",
        "Lovable",
        "AI-assisted coding, debugging and refactoring",
        "AI-powered UI prototyping",
        "Prompt engineering",
        "Rapid application development",
      ],
    },
  ],
  experience: [
    {
      company: "Logicwind",
      title: "Frontend Engineer (ReactJS / Next.js)",
      location: "Surat, India",
      period: "Aug 2021 — Present (senior-level ownership since 2024)",
      bullets: [
        "Built a custom HLS video player for a subscription streaming platform, with thumbnail scrubbing, resume-where-you-left-off, quality and fullscreen controls and live chat, giving viewers a YouTube-style experience.",
        "Integrated THEOplayer in additional streaming products and shared the playback patterns across client brands.",
        "Raised the Lighthouse performance score of a production streaming site from 36 to 80 by profiling with Google Lighthouse and Chrome DevTools and fixing the bottlenecks they exposed.",
        "Took Next.js 16, React 19, Apollo Client 4 and next-auth 5 into production and set the frontend patterns the team reuses across white-label streaming products.",
        "Reduced network round trips by caching recent data with Apollo Client and using React lazy queries.",
        "Built subscription and paywall flows with Stripe and playback analytics with Matomo.",
        "Implemented Firebase authentication with one login across two sessions (cookie-based) and role-based access across multiple web apps.",
        "Localized a digital business card SaaS into 30 languages and shipped it as an offline-capable PWA.",
        "Delivered 15+ client products across streaming, media CMS, SaaS and campaign sites, using Next.js, MobX and Ant Design.",
        "Used Claude Code and Replit to build prototypes, such as a client parent portal that began in Replit and was then rebuilt in code by hand.",
        "Named Best Team Player of the Year 2025 at the company annual meet.",
      ],
    },
    {
      company: "Logicwind",
      title: "AI / ML Intern",
      location: "Surat, India",
      period: "Jan 2021 — Jun 2021",
      bullets: [
        "Built a business card scanner that extracts text from card images and sorts it into contact fields.",
        "Built a contact merging app that finds duplicate contacts and merges the ones the user picks.",
        "Built a whiteboard detection app that keeps focus on the whiteboard in screen recordings when obstacles appear.",
      ],
    },
  ],
  projects: [
    {
      name: "Media Platform, subscription OTT streaming",
      detail:
        "Built the custom HLS player and the viewing experience: adaptive streaming, thumbnail scrubbing, resume and live chat. Added Stripe plans and donation flows, Matomo analytics and light and dark themes. Next.js 16, React 19, TypeScript, Apollo GraphQL, hls.js, Stripe, next-auth, Matomo.",
    },
    {
      name: "Media streaming website",
      detail:
        "Improved the Lighthouse performance score from 36 to 80. Next.js, Apollo GraphQL, next-auth.",
    },
    {
      name: "CardZap, digital business cards",
      detail:
        "Owned the frontend: 30 languages, Firebase login with a dual-session setup and offline support. Next.js, i18next, Firebase, PWA, Sentry.",
    },
    {
      name: "EduScan AI, education platform",
      detail:
        "Built the frontend on a type-safe GraphQL pipeline and prototyped in Replit and Claude Code. React 19, React Router 7, TypeScript, Apollo, GraphQL Codegen, Tailwind, shadcn/ui.",
    },
    {
      name: "Admin CMS dashboards, media and scheduling",
      detail:
        "Contributed to several admin products used to manage video, podcasts and scheduling, including in-app video preview. React, Apollo GraphQL, Ant Design, hls.js, THEOplayer.",
    },
    {
      name: "AI-assisted prototypes",
      detail:
        "Built prototypes with AI tools (Replit, v0.dev, Lovable, Claude), including a VR prayer and reflection experience, an admin panel and a school management app, then reviewed and customized the output by hand.",
    },
  ],
  education: {
    degree: "B.Tech, Information Technology",
    school: "CGPIT, Uka Tarsadia University, Bardoli",
    period: "2017 — 2021",
    detail: "GPA 8.88",
  },
  languages: ["Gujarati (native)", "Sindhi (native)", "Hindi (fluent)", "English (professional)"],
  achievements: [
    "Best Team Player of the Year 2025, Logicwind",
    "Rising Star of the Month, Logicwind",
    "Winner, Innovation Category, Smart India Hackathon 2020",
    "Participant, Gujarat Hackathon 2019",
  ],
} as const;
