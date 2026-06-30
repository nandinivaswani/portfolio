"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown, Cpu, Sparkles } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { ProjectVisual } from "@/components/project-visual";
import { featuredProjects, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured work"
          title={
            <>
              Complex problems, told as{" "}
              <span className="text-gradient">problem → solution.</span>
            </>
          }
          description="Streaming, global SaaS, AI tooling and high-traffic campaigns. For each, here's the constraint that made it hard — and the engineering that resolved it."
        />

        <div className="mt-16 space-y-20 sm:space-y-28">
          {featuredProjects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} reversed={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  reversed,
}: {
  project: Project;
  index: number;
  reversed: boolean;
}) {
  const [open, setOpen] = useState(false);
  const accent = project.accent.from;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Visual */}
      <Reveal
        className={cn("order-1", reversed ? "lg:order-2" : "lg:order-1")}
        y={32}
        delay={0.05}
      >
        <ProjectVisual project={project} />
      </Reveal>

      {/* Content */}
      <div className={cn("order-2", reversed ? "lg:order-1" : "lg:order-2")}>
        <Reveal y={24}>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold" style={{ color: accent }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mono-label !text-fg-subtle">{project.category}</span>
            <span className="text-xs text-fg-subtle">· {project.year}</span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>

          {/* Problem → Constraints → Solution → Impact */}
          <div className="mt-6 space-y-5 border-l border-border pl-5">
            <Step label="Problem" accent={accent}>
              <p className="text-sm leading-relaxed text-fg-muted text-pretty">
                {project.problem}
              </p>
            </Step>

            <Step label="Constraints" accent={accent}>
              <ul className="flex flex-wrap gap-1.5">
                {project.constraints.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[11px] font-medium text-fg-muted"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Step>

            <Step label="Solution" accent={accent}>
              <p className="text-sm leading-relaxed text-fg text-pretty">
                {project.solution}
              </p>
            </Step>

            <Step label="Impact" accent={accent}>
              <ul className="space-y-2">
                {project.impact.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm text-fg-muted">
                    <Sparkles size={14} className="mt-0.5 shrink-0" style={{ color: accent }} />
                    <span className="text-pretty">{it}</span>
                  </li>
                ))}
              </ul>
            </Step>
          </div>

          {/* Expandable engineering depth */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <Cpu size={15} />
              How it&apos;s engineered
              <ChevronDown
                size={15}
                className={cn("transition-transform duration-300", open && "rotate-180")}
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2.5 rounded-xl border border-border bg-bg-soft p-4">
                    {project.engineering.map((e) => (
                      <li key={e} className="flex gap-2.5 text-sm text-fg-muted">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: accent }}
                        />
                        <span className="font-mono text-[13px] leading-relaxed">{e}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stack */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[11px] font-medium text-fg-muted"
              >
                {s}
              </span>
            ))}
          </div>

          <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-fg-subtle">
            <ArrowUpRight size={13} /> {project.role}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

function Step({
  label,
  accent,
  children,
}: {
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <span
        className="absolute -left-[1.4rem] top-1 h-2 w-2 rounded-full ring-4 ring-bg"
        style={{ background: accent }}
        aria-hidden
      />
      <p className="mono-label !text-[0.58rem] !text-fg-subtle">{label}</p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
