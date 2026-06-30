"use client";

import { motion, useReducedMotion } from "motion/react";
import { X, Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { frontendReality } from "@/content/concept";

const ease = [0.22, 1, 0.36, 1] as const;

export function FrontendReality() {
  return (
    <section id="reality" className="relative scroll-mt-24 bg-bg-soft py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Frontend reality"
          title={
            <>
              What people think it is vs.{" "}
              <span className="text-gradient">what it actually is.</span>
            </>
          }
          description="“Frontend” is often mistaken for decoration. In reality it's where business logic, data, performance and human behavior all collide — and it's the part of the job I've spent 4.5+ years living in."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {/* Perception */}
          <Reveal y={24}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <p className="mono-label !text-fg-subtle">What people think</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-fg-muted">
                “It&apos;s just the pretty layer.”
              </h3>
              <ul className="mt-5 space-y-2.5">
                {frontendReality.perception.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-sm text-fg-subtle line-through decoration-fg-subtle/30"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-surface-2 text-fg-subtle">
                      <X size={12} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Reality */}
          <Reveal y={24} delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-accent/40 bg-surface p-6 shadow-[0_20px_60px_-32px_var(--accent)]">
              <div
                className="absolute -top-16 -right-10 h-40 w-40 rounded-full opacity-20 blur-3xl"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
                aria-hidden
              />
              <p className="mono-label">What it actually is</p>
              <h3 className="mt-2 font-display text-lg font-semibold">
                Engineering, all the way down.
              </h3>
              <ul className="mt-5 grid gap-2.5">
                {frontendReality.reality.map((r, i) => (
                  <RealityItem key={r} label={r} index={i} />
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function RealityItem({ label, index }: { label: string; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, x: 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease }}
      className="flex items-center gap-3 text-sm font-medium text-fg"
    >
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
        <Check size={12} />
      </span>
      {label}
    </motion.li>
  );
}
