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
    name: "FRC",
    category: "Streaming · Membership",
    blurb:
      "Subscription streaming & content platform — on-demand video, podcasts, articles and playlists with member plans, gated content and donations.",
    tags: ["Next.js", "Apollo GraphQL", "next-auth", "react-player"],
  },
  {
    name: "ThinQ Media",
    category: "Streaming · Media",
    blurb:
      "A media streaming platform — on-demand video & TV, playlists, speakers and topic-based discovery, with donation support.",
    tags: ["Next.js", "Apollo GraphQL", "next-auth", "react-player"],
  },
  {
    name: "Zipcast",
    category: "Video CMS · Admin",
    blurb:
      "Video & podcast management dashboard — HLS preview playback, content scheduling and publishing workflows.",
    tags: ["React", "Apollo GraphQL", "hls.js", "Ant Design"],
  },
  {
    name: "FPIW",
    category: "Media CMS · Admin",
    blurb:
      "Content-management dashboard for a media platform — publishing tools with in-app video preview on a modern Ant Design 5 + GraphQL stack.",
    tags: ["React 18", "Apollo GraphQL", "Ant Design 5", "react-player"],
  },
  {
    name: "Visible Things",
    category: "Scheduling · Admin",
    blurb:
      "Scheduling & content admin — calendar-based planning, media preview and content-management workflows.",
    tags: ["React", "Apollo GraphQL", "react-big-calendar", "Ant Design"],
  },
  {
    name: "DRF",
    category: "SaaS · Admin",
    blurb:
      "Admin dashboard for a SaaS platform — data-dense tables, forms and management workflows over a GraphQL API.",
    tags: ["React", "Apollo GraphQL", "Ant Design"],
  },
  {
    name: "Western Tech — Parent Portal",
    category: "Portal · Modern Stack",
    blurb:
      "A parent portal on the very latest stack — Next.js 15, React 19 and Ant Design 6 with end-to-end type-safe GraphQL codegen.",
    tags: ["Next.js 15", "React 19", "GraphQL Codegen", "Ant Design 6"],
  },
  {
    name: "Hope4America",
    category: "Marketing · CMS",
    blurb:
      "High-traffic, fully CMS-driven marketing site — dynamic slug-routed pages rendered from a GraphQL content model.",
    tags: ["Next.js", "Apollo GraphQL", "Ant Design"],
  },
  {
    name: "Marketplace Chaplains",
    category: "Enterprise · Admin",
    blurb:
      "Admin platform for an enterprise workplace-chaplaincy service — managing companies, organizations and chaplains with multi-language support.",
    tags: ["React", "MobX", "GraphQL", "React Router"],
  },
  {
    name: "Barnabas",
    category: "Event Management",
    blurb:
      "Ministry & events web app — event RSVPs, member dashboards and Constant Contact email integration over a GraphQL API.",
    tags: ["React", "GraphQL", "Ant Design", "Constant Contact"],
  },
  {
    name: "OmniDuct",
    category: "Logistics · Fleet",
    blurb:
      "Logistics & fleet-management web app — trucks, trailers, jobs and real-time notifications, backed by Firebase.",
    tags: ["React", "MobX", "Firebase", "React Router"],
  },
  {
    name: "Seabreeze",
    category: "Community Site",
    blurb:
      "Community-association website — an events calendar, image carousels and informational content pages.",
    tags: ["React", "react-big-calendar"],
  },
];
