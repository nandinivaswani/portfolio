"use client";

import { motion } from "motion/react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { skillGroups, techStack } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills & stack"
          title={
            <>
              The toolkit behind the{" "}
              <span className="text-gradient">work.</span>
            </>
          }
          description="Depth where it matters — frontend architecture, streaming media, and the data layer — with the modern ecosystem to ship it fast."
        />

        {/* Animated skill bars */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} y={28} delay={gi * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent">
                    <Icon name={group.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="font-display text-base font-semibold">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-fg-muted">{s.name}</span>
                        <span className="font-mono text-xs text-fg-subtle">{s.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tech stack chips */}
        <div className="mt-14">
          <h3 className="mb-6 text-center font-display text-sm font-semibold uppercase tracking-[0.15em] text-fg-subtle">
            Full tech stack
          </h3>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((cat) => (
              <StaggerItem key={cat.group}>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <p className="mono-label mb-3">{cat.group}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
