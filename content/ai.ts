// AI & Modern Development Workflow — only tools and projects confirmed by Nandini.
// Items with no `mine` field are prototypes whose details are still to be added.

export const aiIntro =
  "AI tools speed up my work. They don't replace the fundamentals. The architecture, debugging, performance and release decisions on every product above are mine, built on 5 years of JavaScript, React and Next.js.";

export const aiTools: { name: string; icon: string; use: string }[] = [
  {
    name: "Claude Code",
    icon: "Brain",
    use: "Reading unfamiliar code, implementing features, debugging, refactoring. Several of my repos keep a CLAUDE.md with the project's commands and architecture.",
  },
  {
    name: "Replit & Replit Agent",
    icon: "Rocket",
    use: "Fast working prototypes, from a VR experience to a full parent portal, before moving the promising ones into a proper codebase.",
  },
  {
    name: "v0.dev",
    icon: "LayoutDashboard",
    use: "Responsive UI concepts and component starting points, including admin-panel layouts.",
  },
  {
    name: "Lovable",
    icon: "Layers",
    use: "Mini application prototypes such as an admin panel and a school management app.",
  },
];

export type AiProject = {
  name: string;
  built: string;
  tools: string[];
  how: string;
  mine?: string;
  decisions?: string[];
};

export const aiProjects: AiProject[] = [
  {
    name: "Book Analysis Parent Portal",
    built: "A portal where school districts review books and see content concerns on a heatmap.",
    tools: ["Replit", "Claude Code"],
    how: "Built the first version in Replit, then continued in code.",
    mine: "Owned the codebase after the Replit stage: React, TypeScript, Vite, Express, PostgreSQL with Drizzle, shadcn/ui, TanStack Query.",
    decisions: [
      "Analysis modules are generated through the Claude API and rendered in sandboxed iframes.",
      "A one-time, authenticated seeding flow for an empty production database.",
    ],
  },
  {
    name: "EduScan AI",
    built: "The frontend of an AI-assisted education platform.",
    tools: ["Replit", "Claude Code"],
    how: "Tried a new UI on a separate Replit branch. Claude Code works from the repo's CLAUDE.md.",
    mine: "Built the frontend on React 19, React Router 7, Apollo and GraphQL Codegen, so queries are typed from the schema.",
  },
  {
    name: "VR prayer and reflection experience",
    built:
      "A prototype where the user walks through a scene and interacts with others through prayer and reflection.",
    tools: ["Replit"],
    how: "Prototyped with Replit Agent.",
  },
  {
    name: "Admin panel and school management app",
    built: "Two mini applications: an admin panel and a school management system.",
    tools: ["v0.dev", "Lovable"],
    how: "Generated the first screens and flows with the tools, then reviewed them.",
  },
];
