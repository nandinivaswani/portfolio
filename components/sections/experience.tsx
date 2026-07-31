"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { experience, education } from "@/content/experience";
import { DotField, SectionGlow } from "@/components/section-fx";
import { RevealHeading } from "@/components/motion-fx";

const ease = [0.16, 1, 0.3, 1] as const;

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="border-border relative isolate scroll-mt-16 overflow-hidden border-t"
    >
      <SectionGlow className="top-[6%] left-[-8%] h-[420px] w-[420px]" />
      <DotField className="right-[-8%] bottom-[6%] h-[440px] w-[440px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="border-border flex items-end justify-between gap-6 border-b py-20 md:py-24">
          <div>
            <p className="text-accent mb-4 font-mono text-xs tracking-[0.2em] uppercase">
              03 // Experience
            </p>
            <RevealHeading>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Where I&apos;ve <span className="text-fg-muted font-light italic">shipped.</span>
              </h2>
            </RevealHeading>
          </div>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative py-12">
          {/* Vertical line */}
          <div className="bg-border absolute top-0 bottom-0 left-0 hidden w-px overflow-hidden lg:block">
            <motion.div
              style={reduce ? { height: "100%" } : { height: lineH }}
              className="bg-accent w-full origin-top"
            />
          </div>

          <div className="flex flex-col">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.title}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="border-border relative grid grid-cols-1 gap-6 border-b py-10 last:border-b-0 md:grid-cols-12 lg:pl-12"
              >
                {/* Timeline dot */}
                <div className="border-bg bg-accent absolute top-11 left-0 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 lg:block" />

                {/* Left: meta */}
                <div className="md:col-span-4">
                  <p className="text-fg-subtle mb-3 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase">
                    {job.period}
                    {job.current && (
                      <span className="border-accent/40 text-accent inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px]">
                        <span className="bg-accent h-1 w-1 animate-pulse rounded-full" /> Current
                      </span>
                    )}
                  </p>
                  <h3 className="font-display text-fg text-2xl font-extrabold">{job.company}</h3>
                  <p className="text-accent mt-1 text-sm font-medium">{job.title}</p>
                  <p className="text-fg-muted mt-2 font-mono text-xs">{job.location}</p>
                </div>

                {/* Right: content */}
                <div className="md:col-span-8">
                  <p className="text-fg-muted mb-6 leading-relaxed">{job.summary}</p>
                  <ul className="flex flex-col gap-3">
                    {job.achievements.map((a, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + j * 0.06, duration: 0.5 }}
                        className="text-fg-muted flex items-start gap-3 text-sm"
                      >
                        <span className="bg-accent mt-2 h-1 w-1 flex-shrink-0 rounded-full" />
                        {a}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="border-border text-fg-subtle rounded-full border px-2.5 py-1 font-mono text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="border-border border-t py-12">
          <p className="text-fg-muted mb-8 font-mono text-xs tracking-[0.2em] uppercase">
            {"// Education"}
          </p>
          {education.map((ed) => (
            <div
              key={ed.school}
              className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-baseline"
            >
              <p className="text-fg-subtle font-mono text-[10px] tracking-widest uppercase md:col-span-4">
                {ed.period}
              </p>
              <div className="md:col-span-8">
                <h3 className="font-display text-fg text-lg font-bold">{ed.school}</h3>
                <p className="text-fg-muted mt-1 text-sm">
                  {ed.degree} · <span className="text-accent">{ed.detail}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
