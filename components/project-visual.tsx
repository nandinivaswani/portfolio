"use client";

import { motion } from "motion/react";
import {
  Play,
  Zap,
  Sparkles,
  ScanLine,
  BookOpen,
  BarChart3,
  ShieldCheck,
  Users,
  Compass,
} from "lucide-react";
import type { Project } from "@/content/projects";

/**
 * A lightweight, themed visual that hints at each project's domain.
 * Pure CSS/SVG — no real media, keeps the page fast (and sidesteps
 * client-confidentiality issues around real screenshots).
 */
export function ProjectVisual({ project }: { project: Project }) {
  const grad = `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`;

  if (project.slug === "media-platform") return <TalksMock grad={grad} />;
  if (project.slug === "cardzap") return <CardMock grad={grad} />;
  if (project.slug === "eduscan-ai") return <BookScanMock grad={grad} />;
  return <CampaignMock grad={grad} />;
}

function Frame({ children, grad }: { children: React.ReactNode; grad: string }) {
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-30 blur-3xl"
        style={{ background: grad }}
        aria-hidden
      />
      <div className="border-border bg-surface overflow-hidden rounded-2xl border shadow-[0_24px_70px_-30px_rgba(0,0,0,0.45)]">
        <div className="border-border bg-surface-2 flex items-center gap-1.5 border-b px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        {children}
      </div>
    </div>
  );
}

function TalksMock({ grad }: { grad: string }) {
  // Placeholder names/photos only — real speakers and thumbnails belong to
  // the client, not a public portfolio. Layout mirrors the real catalog:
  // a dark top bar, a "most popular" thumbnail row, and colored topic tiles.
  const talks = ["#c9a35a", "#8a8f6b", "#b7c9cf"];
  const topics = [
    { label: "New This Week", bg: "#f2b93b" },
    { label: "Big Questions", bg: "#b7cdd2" },
    { label: "Technology", bg: "#e2572c" },
    { label: "Culture", bg: "#a79a5e" },
  ];

  return (
    <Frame grad={grad}>
      <div className="bg-[#fbf4e8]">
        <div className="flex items-center justify-between bg-[#15151a] px-4 py-2.5">
          <span className="font-display text-xs font-extrabold tracking-wide text-white">
            WATCH
          </span>
          <div className="hidden items-center gap-3 text-[10px] font-semibold tracking-wide text-white/60 sm:flex">
            <span>NEW</span>
            <span>TOPICS</span>
            <span>EVENTS</span>
          </div>
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-bold text-[#15151a]"
            style={{ background: "#f2b93b" }}
          >
            JOIN
          </span>
        </div>

        <div className="p-4">
          <p className="text-[11px] font-bold text-[#2b2b2b]">Most Popular Talks</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {talks.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="relative aspect-square overflow-hidden rounded-md"
                  style={{ background: c }}
                >
                  {i === 0 && (
                    <span className="absolute right-1 bottom-1 grid h-5 w-5 place-items-center rounded-full bg-white/90 text-[#15151a]">
                      <Play size={9} className="ml-px fill-current" />
                    </span>
                  )}
                </div>
                <div className="mt-1 h-1.5 w-[70%] rounded-full bg-[#2b2b2b]/15" />
              </motion.div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {topics.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="flex aspect-[3/4] flex-col justify-end rounded-md p-1.5"
                style={{ background: t.bg }}
              >
                <span className="text-[8px] leading-tight font-bold text-[#15151a]">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function CardMock({ grad }: { grad: string }) {
  // Placeholder names/numbers only — the real app shows actual users' saved
  // contacts. Layout mirrors the real product: a dark marketing page with a
  // phone frame showing a stack of colorful digital business cards.
  const cards = [
    { name: "Jordan Cole", role: "Product Manager", bg: "#f3dfae" },
    { name: "Maya Torres", role: "SEO Specialist", bg: grad },
  ];
  return (
    <Frame grad={grad}>
      <div className="bg-[#0c0c0e] p-6">
        <div className="flex items-center gap-1.5">
          <span
            className="grid h-5 w-5 flex-shrink-0 place-items-center rounded text-white"
            style={{ background: grad }}
          >
            <Zap size={11} className="fill-current" />
          </span>
          <span className="text-xs font-extrabold text-white">CardZap</span>
        </div>

        <div className="mt-5 flex justify-center">
          <div className="w-32 rounded-[1.25rem] border-2 border-white/15 bg-black p-1.5">
            <div className="flex items-center justify-between px-1.5 py-1 text-[7px] text-white/60">
              <span>09:41</span>
              <span>●●●</span>
            </div>
            <div className="relative mt-1 h-[104px]">
              {cards.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: i * 26 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="absolute inset-x-0 flex items-center gap-1.5 rounded-md p-1.5"
                  style={{ background: c.bg }}
                >
                  <span className="h-5 w-5 flex-shrink-0 rounded-full bg-black/15" />
                  <div className="min-w-0">
                    <p className="truncate text-[7px] font-bold text-black/80">{c.name}</p>
                    <p className="truncate text-[6px] text-black/55">{c.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] font-medium text-white/60">
          Your business cards, always in your pocket.
        </p>
      </div>
    </Frame>
  );
}

function BookScanMock({ grad }: { grad: string }) {
  // Placeholder titles only — the real dashboard scans and classifies actual
  // (often client-owned/copyrighted) book content, which has no place in a
  // public portfolio visual. The layout below mirrors the real product.
  const books = [
    { title: "The Wandering Atlas", author: "M. Kade", status: "Done" },
    { title: "Beneath Quiet Skies", author: "R. Solano", status: "Pending" },
    { title: "Circuits & Sparrows", author: "J. Okafor", status: "Done" },
    { title: "The Long Recess", author: "T. Bianchi", status: "Pending" },
  ];
  const navIcons = [BookOpen, Users, BarChart3, ShieldCheck];

  return (
    <Frame grad={grad}>
      <div className="flex bg-white">
        {/* dark sidebar */}
        <div className="flex w-12 flex-shrink-0 flex-col items-center gap-3 bg-[#111114] py-4">
          <span
            className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-md text-white"
            style={{ background: grad }}
          >
            <Sparkles size={13} />
          </span>
          <span className="mt-1 h-px w-6 bg-white/10" />
          {navIcons.map((Icon, i) => (
            <span
              key={i}
              className={`grid h-7 w-7 place-items-center rounded-md ${
                i === 0 ? "bg-white/10 text-white" : "text-white/35"
              }`}
            >
              <Icon size={13} />
            </span>
          ))}
        </div>

        {/* light content area — matches the real product's theme */}
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-bold text-[#15151a]">Book Library</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#111114] px-2.5 py-1 text-[10px] font-semibold text-white">
              <ScanLine size={11} /> Bulk Scan
            </span>
          </div>

          <div className="mt-3.5 flex flex-col gap-1.5">
            {books.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2.5 rounded-md border border-black/[0.06] px-2.5 py-2"
              >
                <span className="h-7 w-[22px] flex-shrink-0 rounded-[3px] bg-[#e5e5ea]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-[#15151a]">{b.title}</p>
                  <p className="truncate text-[10px] text-[#8a8a92]">{b.author}</p>
                </div>
                <span
                  className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                    b.status === "Done"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-[#f1f1f3] text-[#8a8a92]"
                  }`}
                >
                  {b.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function CampaignMock({ grad }: { grad: string }) {
  const cards = [
    { label: "Explore", icon: Compass },
    { label: "Stories", icon: Play },
  ];
  return (
    <Frame grad={grad}>
      <div className="bg-[#0a0a0c] p-5">
        <p className="text-xs font-medium text-white/70">
          He Gets <span style={{ color: "#f2c14e" }}>Us.</span>
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <h4 className="font-display text-xl font-extrabold tracking-tight text-white uppercase">
            A Space to <span style={{ color: "#f2c14e" }}>Wonder</span>
          </h4>
          <p className="mt-2 text-[11px] text-white/50">
            What if the noise could finally quiet down?
          </p>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 gap-2.5">
          {cards.map(({ label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12 }}
              className="relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-lg p-2.5"
              style={{ background: grad }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <Icon size={13} className="relative z-10 text-white" />
              <span className="relative z-10 mt-1 text-[10px] font-semibold text-white">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Frame>
  );
}
