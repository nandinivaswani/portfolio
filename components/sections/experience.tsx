"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Check, TrendingUp } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { experience, education } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 bg-bg-soft py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Measured in complexity solved,{" "}
              <span className="text-gradient">not years served.</span>
            </>
          }
          description="A focused trajectory — one company, steadily harder problems: from shipping features, to owning whole product frontends, to architecting the streaming platform's hardest surfaces."
        />

        <div className="relative mt-16">
          {/* vertical line */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-[23px]"
            aria-hidden
          />

          <div className="space-y-10">
            {experience.map((role, i) => (
              <Reveal key={`${role.title}-${i}`} y={28} delay={i * 0.05}>
                <div className="relative grid grid-cols-[40px_1fr] gap-4 sm:grid-cols-[48px_1fr] sm:gap-6">
                  <div className="relative z-10 flex justify-center">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`grid h-10 w-10 place-items-center rounded-full border-2 sm:h-12 sm:w-12 ${
                        role.current
                          ? "border-accent bg-accent text-on-accent"
                          : "border-border bg-surface text-fg-muted"
                      }`}
                    >
                      <Briefcase size={18} />
                    </motion.span>
                  </div>

                  <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-lg font-bold">{role.title}</h3>
                      <span className="font-mono text-xs text-accent">{role.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-fg-muted">
                      {role.company} · {role.location}
                      {role.current && (
                        <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current
                        </span>
                      )}
                    </p>
                    <p className="mt-3 inline-flex items-start gap-2 rounded-lg border border-accent/25 bg-accent-soft px-3 py-2 text-[13px] font-medium text-fg">
                      <TrendingUp size={14} className="mt-0.5 shrink-0 text-accent" />
                      {role.scope}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted text-pretty">
                      {role.summary}
                    </p>
                    <ul className="mt-4 grid gap-2">
                      {role.achievements.map((a) => (
                        <li key={a} className="flex gap-2.5 text-sm text-fg-muted">
                          <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                          <span className="text-pretty">{a}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {role.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-fg-subtle"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Education node */}
            <Reveal y={28}>
              <div className="relative grid grid-cols-[40px_1fr] gap-4 sm:grid-cols-[48px_1fr] sm:gap-6">
                <div className="relative z-10 flex justify-center">
                  <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-border bg-surface text-fg-muted sm:h-12 sm:w-12">
                    <GraduationCap size={18} />
                  </span>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                  {education.map((e) => (
                    <div key={e.school}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="font-display text-lg font-bold">{e.degree}</h3>
                        <span className="font-mono text-xs text-accent">{e.period}</span>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-fg-muted">
                        {e.school} · {e.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
