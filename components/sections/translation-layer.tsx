"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Layers } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { translationNodes } from "@/content/concept";

export function TranslationLayer() {
  return (
    <section id="approach" className="relative scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The translation layer"
          title={
            <>
              Every project, I sit between{" "}
              <span className="text-gradient">four worlds.</span>
            </>
          }
          description="Across OTT streaming, ~30-language SaaS and AI products, this is the job I've done for 4.5+ years: reconcile business goals, design intent, backend systems and real users into one product that feels obvious."
        />

        {/* Four input worlds */}
        <Stagger className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {translationNodes.map((n) => (
            <StaggerItem key={n.id} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={n.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{n.label}</h3>
                <p className="text-xs text-fg-subtle">{n.role}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {n.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-md border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-fg-muted"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Converging flow → synthesis → outcome */}
        <Reveal className="mx-auto mt-4 flex max-w-5xl flex-col items-center" y={20}>
          <ConvergingDots />

          <div className="relative flex w-full max-w-md flex-col items-center rounded-2xl border border-accent/40 bg-surface px-6 py-6 text-center shadow-[0_18px_60px_-30px_var(--accent)]">
            <div
              className="absolute -inset-3 -z-10 rounded-[1.6rem] opacity-25 blur-2xl"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
              aria-hidden
            />
            <span
              className="grid h-11 w-11 place-items-center rounded-xl text-on-accent"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
            >
              <Layers size={20} />
            </span>
            <p className="mono-label mt-3 !text-[0.58rem]">Frontend engineering</p>
            <p className="mt-1 max-w-xs text-sm leading-relaxed text-fg-muted text-pretty">
              I hold the tension between all four and make the calls the others
              can&apos;t see — state, performance, edge cases, accessibility.
            </p>
          </div>

          <div className="my-3 text-accent/60">
            <ArrowDown size={18} />
          </div>

          <div className="w-full max-w-2xl rounded-2xl border border-border bg-gradient-to-r from-accent/10 via-accent-2/10 to-transparent px-6 py-5 text-center">
            <p className="font-display text-lg font-bold tracking-tight sm:text-xl">
              One coherent product experience.
            </p>
            <p className="mt-1 text-sm text-fg-muted">
              Fast, accessible, and obvious to the person using it.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** Four streams of dots converging downward into the synthesis node. */
function ConvergingDots() {
  const reduce = useReducedMotion();
  const lanes = [0, 1, 2, 3];
  return (
    <div className="relative my-6 h-14 w-full max-w-md" aria-hidden>
      {lanes.map((i) => {
        const left = `${12 + i * 25.3}%`;
        return (
          <div
            key={i}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-border to-accent/40"
            style={{ left }}
          >
            {!reduce && (
              <motion.span
                className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
                initial={{ top: "0%", opacity: 0 }}
                animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 1.6,
                  delay: i * 0.25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
