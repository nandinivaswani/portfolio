"use client";

import { motion } from "motion/react";
import {
  Play,
  Pause,
  Volume2,
  Maximize,
  Settings,
  Globe,
  CreditCard,
  Code2,
  MessageSquare,
} from "lucide-react";
import type { Project } from "@/content/projects";

/**
 * A lightweight, themed visual that hints at each project's domain.
 * Pure CSS/SVG — no real media, keeps the page fast.
 */
export function ProjectVisual({ project }: { project: Project }) {
  const grad = `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`;

  if (project.slug === "media-platform") {
    return <VideoPlayerMock grad={grad} live />;
  }
  if (project.slug === "cardzap") return <CardMock grad={grad} />;
  if (project.slug === "eduscan-ai") return <CodeMock grad={grad} />;
  return <CampaignMock grad={grad} />;
}

function Frame({
  children,
  grad,
}: {
  children: React.ReactNode;
  grad: string;
}) {
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-30 blur-3xl"
        style={{ background: grad }}
        aria-hidden
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_70px_-30px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        {children}
      </div>
    </div>
  );
}

function VideoPlayerMock({ grad, live }: { grad: string; live: boolean }) {
  return (
    <Frame grad={grad}>
      <div className="relative aspect-video w-full" style={{ background: grad }}>
        <div className="absolute inset-0 bg-black/30" />
        {/* storyboard scrub markers */}
        <div className="absolute inset-x-0 top-3 flex justify-between px-3">
          {live && (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Live
            </span>
          )}
          <span className="ml-auto inline-flex items-center gap-1 rounded-md bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
            <Settings size={11} /> 1080p · Auto
          </span>
        </div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0.85 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 grid place-items-center"
        >
          <div className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-black shadow-xl backdrop-blur">
            <Play size={24} className="ml-1 fill-current" />
          </div>
        </motion.div>

        {live && (
          <div className="absolute right-3 bottom-16 w-40 space-y-1.5">
            {["Great stream 🔥", "loving this", "🙌🙌"].map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 rounded-lg bg-black/40 px-2 py-1 text-[10px] text-white/90 backdrop-blur"
              >
                <MessageSquare size={10} /> {m}
              </div>
            ))}
          </div>
        )}

        {/* controls */}
        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/25">
            <motion.div
              initial={{ width: "10%" }}
              whileInView={{ width: "62%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 rounded-full bg-white"
            />
          </div>
          <div className="mt-2.5 flex items-center gap-3 text-white">
            <Pause size={15} />
            <Volume2 size={15} />
            <span className="text-[10px] font-medium tabular-nums opacity-80">
              24:18 / 39:02
            </span>
            <span className="ml-auto" />
            <Maximize size={15} />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function CardMock({ grad }: { grad: string }) {
  const langs = ["EN", "ES", "日本", "AR", "FR", "हिं", "DE", "中文"];
  return (
    <Frame grad={grad}>
      <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto]">
        <div>
          <div
            className="grid h-12 w-12 place-items-center rounded-xl text-white"
            style={{ background: grad }}
          >
            <Globe size={22} />
          </div>
          <p className="mt-4 font-display text-lg font-bold">CardZap</p>
          <p className="text-xs text-fg-muted">Digital business cards · PWA</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {langs.map((l) => (
              <span
                key={l}
                className="rounded-md border border-border bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium text-fg-muted"
              >
                {l}
              </span>
            ))}
            <span className="rounded-md bg-accent-soft px-1.5 py-0.5 text-[10px] font-medium text-accent">
              +22 more
            </span>
          </div>
        </div>
        <div className="grid aspect-[3/4] w-24 place-items-center self-center rounded-lg border border-border bg-surface-2">
          <div className="grid grid-cols-4 grid-rows-4 gap-0.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-[2px] ${i % 3 === 0 ? "bg-fg" : "bg-fg/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function CodeMock({ grad }: { grad: string }) {
  const lines = [
    { w: "60%", c: "text-accent" },
    { w: "85%", c: "text-fg/70" },
    { w: "45%", c: "text-emerald-400" },
    { w: "70%", c: "text-fg/70" },
    { w: "55%", c: "text-accent-2" },
    { w: "38%", c: "text-fg/70" },
  ];
  return (
    <Frame grad={grad}>
      <div className="p-5 font-mono text-xs">
        <div className="mb-3 flex items-center gap-2 text-fg-subtle">
          <Code2 size={14} /> use-courses.generated.ts
        </div>
        <div className="space-y-2">
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <span className="w-4 text-right text-fg-subtle">{i + 1}</span>
              <span className={`h-2.5 rounded-full ${l.c} bg-current opacity-60`} style={{ width: l.w }} />
            </motion.div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-500">
          ✓ Types generated from schema · 0 errors
        </div>
      </div>
    </Frame>
  );
}

function CampaignMock({ grad }: { grad: string }) {
  return (
    <Frame grad={grad}>
      <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: grad }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium backdrop-blur">
              <CreditCard size={11} /> National Campaign
            </span>
            <div className="h-3 w-3/4 rounded-full bg-white/90" />
            <div className="h-3 w-1/2 rounded-full bg-white/50" />
          </motion.div>
        </div>
        {/* scroll reveal hint blocks */}
        <div className="absolute right-5 top-5 space-y-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="h-8 w-8 rounded-lg bg-white/25 backdrop-blur"
            />
          ))}
        </div>
      </div>
    </Frame>
  );
}
