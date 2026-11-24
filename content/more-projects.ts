// Additional production projects — the wider body of work beyond the featured
// case studies. Grounded in the real repos (stack + domain verified in code).

export type MoreProject = {
  name: string;
  category: string;
  blurb: string;
  tags: string[];
};

export const moreProjects: MoreProject[] = [
  {
    name: "Membership Streaming Platform",
    category: "Streaming · Membership",
    blurb:
      "Subscription streaming & content platform — on-demand video, podcasts, articles and playlists with member plans, gated content and donations.",
    tags: ["Next.js", "Apollo GraphQL", "next-auth", "react-player"],
  },
  {
    name: "Media Streaming Website",
    category: "Streaming · Media",
    blurb:
      "A media streaming platform — on-demand video & TV, playlists, speakers and topic-based discovery, with donation support.",
    tags: ["Next.js", "Apollo GraphQL", "next-auth", "react-player"],
  },
  {
    name: "Video & Podcast CMS",
    category: "Video CMS · Admin",
    blurb:
      "Video & podcast management dashboard — HLS preview playback, content scheduling and publishing workflows.",
    tags: ["React", "Apollo GraphQL", "hls.js", "Ant Design"],
  },
  {
    name: "Media Publishing CMS",
    category: "Media CMS · Admin",
    blurb:
      "Content-management dashboard for a media platform — publishing tools with in-app video preview on a modern Ant Design 5 + GraphQL stack.",
    tags: ["React 18", "Apollo GraphQL", "Ant Design 5", "react-player"],
  },
  {
    name: "Scheduling & Content Admin",
    category: "Scheduling · Admin",
    blurb:
      "Scheduling & content admin — calendar-based planning, media preview and content-management workflows.",
    tags: ["React", "Apollo GraphQL", "react-big-calendar", "Ant Design"],
  },
  {
    name: "SaaS Admin Dashboard",
    category: "SaaS · Admin",
    blurb:
      "Admin dashboard for a SaaS platform — data-dense tables, forms and management workflows over a GraphQL API.",
    tags: ["React", "Apollo GraphQL", "Ant Design"],
  },
  {
    name: "Parent Portal — Replit to Code",
    category: "Portal · Modern Stack",
    blurb:
      "Book-analysis portal for school districts. Prototyped in Replit, then continued in code: React, Vite, Express, PostgreSQL with Drizzle, shadcn/ui, and Claude API for generated analysis modules.",
    tags: ["React", "TypeScript", "Express", "Drizzle", "shadcn/ui", "Claude API"],
  },
  {
    name: "Campaign Marketing Site",
    category: "Marketing · CMS",
    blurb:
      "High-traffic, fully CMS-driven marketing site — dynamic slug-routed pages rendered from a GraphQL content model.",
    tags: ["Next.js", "Apollo GraphQL", "Ant Design"],
  },
  {
    name: "Workplace Services Admin",
    category: "Enterprise · Admin",
    blurb:
      "Admin platform for an enterprise workplace-services company — managing companies, organizations and chaplains with multi-language support.",
    tags: ["React", "MobX", "GraphQL", "React Router"],
  },
  {
    name: "Events Management App",
    category: "Event Management",
    blurb:
      "Events web app — event RSVPs, member dashboards and Constant Contact email integration over a GraphQL API.",
    tags: ["React", "GraphQL", "Ant Design", "Constant Contact"],
  },
  {
    name: "Logistics & Fleet App",
    category: "Logistics · Fleet",
    blurb:
      "Logistics & fleet-management web app — trucks, trailers, jobs and real-time notifications, backed by Firebase.",
    tags: ["React", "MobX", "Firebase", "React Router"],
  },
  {
    name: "Community Association Site",
    category: "Community Site",
    blurb:
      "Community-association website — an events calendar, image carousels and informational content pages.",
    tags: ["React", "react-big-calendar"],
  },
];
