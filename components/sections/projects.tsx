"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, ChevronDown, Cpu } from "lucide-react";
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
              Real production work across{" "}
              <span className="text-gradient">very different problems.</span>
            </>
          }
          description="Streaming, content systems, global SaaS, AI tooling and high-traffic campaigns. For each, I've highlighted the engineering that's genuinely hard — and the impact it created."
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
            <span
              className="font-mono text-sm font-semibold"
              style={{ color: project.accent.from }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mono-label !text-fg-subtle">{project.category}</span>
            <span className="text-xs text-fg-subtle">· {project.year}</span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>

          <p className="mt-4 leading-relaxed text-fg-muted text-pretty">
            {project.summary}
          </p>

          {/* Impact metrics */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-surface px-3.5 py-2"
              >
                <div className="font-display text-sm font-bold text-fg">{m.value}</div>
                <div className="text-[11px] text-fg-subtle">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="mt-6 space-y-2.5">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-fg-muted">
                <Check
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: project.accent.from }}
                />
                <span className="text-pretty">{h}</span>
              </li>
            ))}
          </ul>

          {/* Expandable engineering depth */}
          <div className="mt-5">
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
                          style={{ background: project.accent.from }}
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
