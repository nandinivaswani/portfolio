"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ScrambleText } from "@/components/motion-fx";

const ease = [0.16, 1, 0.3, 1] as const;

const beliefs = [
  {
    index: "I",
    statement: "Performance is a feature.",
    detail:
      "Every millisecond you steal from a viewer is a millisecond of trust you lose. There is no good UX without speed.",
  },
  {
    index: "II",
    statement: "Complexity should be invisible.",
    detail:
      "The harder the engineering problem underneath, the simpler the interface should feel on top. That tension — hard problem, easy experience — is the craft.",
  },
  {
    index: "III",
    statement: "Accessibility is not optional.",
    detail:
      "An interface some people can't use isn't finished. Inclusive, localized design is simply design done correctly.",
  },
  {
    index: "IV",
    statement: "Architecture is a force multiplier.",
    detail:
      "A clean, reusable platform engine lets one codebase launch many products. Good structure is how small teams ship big things.",
  },
  {
    index: "V",
    statement: "Own the entire experience.",
    detail:
      "Backend latency, slow fonts, layout shift, a janky seek bar — it all reaches the user through the frontend. Own all of it.",
  },
];

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} className="border-border bg-card relative overflow-hidden border-t">
      {/* Scrolling background text */}
      <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden">
        <motion.p
          style={{
            x: bgX,
            fontSize: "clamp(100px, 20vw, 280px)",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1.5px color-mix(in oklab, var(--fg) 12%, transparent)",
          }}
          className="font-display font-black whitespace-nowrap select-none"
        >
          MANIFESTO
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="border-border border-b py-16">
          <p className="text-accent mb-4 font-mono text-xs tracking-[0.2em] uppercase">
            Principles
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            I believe <ScrambleText word="INTERFACE" className="text-accent font-mono" /> is
            everything.
          </h2>
        </div>

        {/* Beliefs as rows */}
        <div>
          {beliefs.map((b, i) => (
            <motion.div
              key={b.index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="group border-border hover:bg-bg/50 grid grid-cols-12 items-start gap-6 border-b py-8 transition-colors"
            >
              <div className="col-span-1">
                <span className="text-fg-subtle font-mono text-xs">{b.index}</span>
              </div>
              <div className="col-span-11 md:col-span-5">
                <p className="text-fg group-hover:text-accent text-xl leading-tight font-bold transition-colors duration-300 md:text-2xl">
                  {b.statement}
                </p>
              </div>
              <div className="col-span-11 col-start-2 md:col-span-6 md:col-start-auto">
                <p className="text-fg-muted text-sm leading-relaxed">{b.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 text-center"
        >
          <p className="text-fg-subtle font-mono text-xs tracking-widest uppercase">
            These aren&apos;t opinions. They&apos;re lessons from building things that had to work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
