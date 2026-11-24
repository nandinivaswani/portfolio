"use client";

import { motion } from "motion/react";
import { aiIntro, aiTools, aiProjects } from "@/content/ai";
import { Icon } from "@/components/ui/icon";
import { GridField, SectionGlow } from "@/components/section-fx";
import { RevealHeading } from "@/components/motion-fx";

const ease = [0.16, 1, 0.3, 1] as const;

export function AiWorkflow() {
  return (
    <section
      id="ai"
      className="border-border relative isolate scroll-mt-16 overflow-hidden border-t"
    >
      <GridField className="top-[6%] left-[-10%] h-[460px] w-[460px]" />
      <SectionGlow className="right-[-8%] bottom-[6%] h-[420px] w-[420px]" opacity={0.05} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="border-border grid grid-cols-1 gap-10 border-b py-20 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-accent mb-4 font-mono text-xs tracking-[0.2em] uppercase">
              05 // AI Workflow
            </p>
            <RevealHeading>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                AI &amp; Modern Development{" "}
                <span className="text-fg-muted font-light italic">Workflow.</span>
              </h2>
            </RevealHeading>
          </div>
          <p className="text-fg-muted max-w-xl self-end text-base leading-relaxed">{aiIntro}</p>
        </div>

        <ul className="grid grid-cols-1 gap-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.5, ease }}
              className="border-border bg-card/40 hover:border-accent/50 rounded-xl border p-6 transition-colors duration-300"
            >
              <span className="text-accent border-border mb-4 grid h-9 w-9 place-items-center rounded-lg border">
                <Icon name={t.icon} className="h-[18px] w-[18px]" />
              </span>
              <h3 className="font-display text-fg text-sm font-bold">{t.name}</h3>
              <p className="text-fg-muted mt-2 text-sm leading-relaxed">{t.use}</p>
            </motion.li>
          ))}
        </ul>

        <div className="border-border border-t py-12">
          <h3 className="text-fg-subtle mb-6 font-mono text-xs tracking-[0.2em] uppercase">
            Built with AI tools
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {aiProjects.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.5, ease }}
                className="border-border bg-card/40 rounded-xl border p-6"
              >
                <h4 className="font-display text-fg text-lg font-semibold">{p.name}</h4>
                <p className="text-fg-muted mt-2 text-sm leading-relaxed">{p.built}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="AI tools used">
                  {p.tools.map((t) => (
                    <li
                      key={t}
                      className="border-border bg-secondary/40 text-fg/90 rounded-md border px-2.5 py-1 font-mono text-[13px]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <dl className="mt-4 space-y-2 text-sm">
                  <div>
                    <dt className="text-fg font-semibold">How</dt>
                    <dd className="text-fg-muted">{p.how}</dd>
                  </div>
                  {p.mine && (
                    <div>
                      <dt className="text-fg font-semibold">What I built</dt>
                      <dd className="text-fg-muted">{p.mine}</dd>
                    </div>
                  )}
                  {p.decisions && (
                    <div>
                      <dt className="text-fg font-semibold">Decisions</dt>
                      <dd>
                        <ul className="text-fg-muted list-disc space-y-1 pl-4">
                          {p.decisions.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                </dl>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
