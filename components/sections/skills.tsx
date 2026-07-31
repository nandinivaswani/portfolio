"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { skillGroups, languages, softSkills } from "@/content/skills";
import { Icon } from "@/components/ui/icon";
import { GridField, SectionGlow } from "@/components/section-fx";
import { RevealHeading, TiltCard } from "@/components/motion-fx";

const ease = [0.16, 1, 0.3, 1] as const;

// Restrained palette that echoes the project accents — accent stays dominant.
const groupAccents = ["var(--accent)", "var(--accent-2)", "#f472b6", "#34d399"];

const npmPackages = [
  "next@16.2.9",
  "react@19.2.4",
  "typescript@5.7.0",
  "@apollo/client@4.0.0",
  "hls.js@1.5.0",
  "next-intl@3.0.0",
  "motion@12.40.0",
  "@stripe/stripe-js@4.0.0",
  "tailwindcss@4.0.0",
  "next-auth@5.0.0",
];

/* ── segmented fluency meter ──────────────────────────────── */
const FLUENCY: Record<string, number> = { Native: 5, Fluent: 4, Professional: 3 };
const SEGMENTS = 5;

function FluencyMeter({ level, index }: { level: string; index: number }) {
  const filled = FLUENCY[level] ?? 3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: SEGMENTS }).map((_, k) => (
        <motion.span
          key={k}
          initial={{ opacity: 0, scaleY: 0.35 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, delay: index * 0.08 + k * 0.05, ease }}
          className={`h-4 w-1.5 origin-bottom rounded-full ${
            k < filled ? "bg-accent shadow-[0_0_8px_var(--accent-soft)]" : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}

function NpmInstall() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      // Syncing to the inView observer firing (external system), not derivable during render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShown(npmPackages.length);
      setDone(true);
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      i++;
      setShown(i);
      if (i >= npmPackages.length) {
        clearInterval(t);
        setTimeout(() => setDone(true), 300);
      }
    }, 150);
    return () => clearInterval(t);
  }, [inView, reduce]);

  return (
    <div ref={ref} className="border-border bg-card/40 mt-8 overflow-hidden rounded-lg border">
      <div className="border-border bg-bg/30 flex items-center gap-2 border-b px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-red-500/50" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/50" />
        <span className="h-2 w-2 rounded-full bg-green-500/50" />
        <span className="text-fg-subtle ml-3 font-mono text-[10px]">terminal</span>
      </div>
      <div className="p-4 font-mono text-[11px] leading-5">
        <div className="text-fg/60 mb-2">
          $ pnpm add @nandini/frontend-stack
          <span className="cursor-blink text-accent ml-0.5">▊</span>
        </div>
        {npmPackages.slice(0, shown).map((pkg) => (
          <motion.div
            key={pkg}
            initial={reduce ? false : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className="text-fg-subtle"
          >
            <span className="text-accent/60">+</span> {pkg}
          </motion.div>
        ))}
        {done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent mt-2"
          >
            ✓ added {npmPackages.length} packages in 0.8s
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="border-border relative isolate scroll-mt-16 overflow-hidden border-t"
    >
      <GridField className="top-[4%] right-[-10%] h-[500px] w-[500px]" />
      <SectionGlow className="bottom-[8%] left-[-8%] h-[440px] w-[440px]" opacity={0.05} />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="border-border grid grid-cols-1 gap-10 border-b py-20 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-accent mb-4 font-mono text-xs tracking-[0.2em] uppercase">
              04 // Skills
            </p>
            <RevealHeading>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                The full stack{" "}
                <span className="text-fg-muted font-light italic">of the frontend.</span>
              </h2>
            </RevealHeading>
            <p className="text-fg-muted mt-4 max-w-sm text-sm">
              4.5+ years across streaming, SaaS, AI and CMS — one philosophy: every technical choice
              should make the experience better.
            </p>
          </div>
          <NpmInstall />
        </div>

        {/* Skill group cards */}
        <div className="grid grid-cols-1 gap-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => {
            const accent = groupAccents[i % groupAccents.length];
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
                className="h-full"
              >
                <TiltCard className="border-border bg-card/40 hover:border-accent/50 h-full rounded-xl border p-6 transition-colors duration-300">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="border-border grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border"
                      style={{ color: accent }}
                    >
                      <Icon name={g.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-fg truncate text-sm font-bold">{g.title}</h3>
                      <span className="text-fg-subtle font-mono text-[10px] tracking-wider uppercase">
                        {g.skills.length} tools
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {g.skills.map((s, j) => (
                      <motion.li
                        key={s.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.28, delay: i * 0.08 + j * 0.04 + 0.1 }}
                        whileHover={{ scale: 1.06 }}
                        className="border-border bg-secondary/40 text-fg/90 hover:border-accent/60 hover:text-accent cursor-default rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200"
                      >
                        {s.name}
                      </motion.li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Languages + soft skills */}
        <div className="border-border grid gap-10 border-t py-16 md:grid-cols-2 md:gap-16">
          {/* Languages */}
          <div>
            <p className="text-fg-muted mb-8 font-mono text-xs tracking-[0.2em] uppercase">
              {"// Languages"}
            </p>
            <div className="divide-border border-border flex flex-col divide-y overflow-hidden rounded-xl border">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="hover:bg-card flex items-center justify-between gap-4 px-5 py-4 transition-colors"
                >
                  <span className="font-display text-fg text-base font-semibold">{lang.name}</span>
                  <div className="flex items-center gap-4">
                    <FluencyMeter level={lang.level} index={i} />
                    <span className="text-fg-muted w-24 text-right font-mono text-[11px] tracking-wider uppercase">
                      {lang.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div>
            <p className="text-fg-muted mb-8 font-mono text-xs tracking-[0.2em] uppercase">
              {"// How I work"}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease }}
                  whileHover={{ y: -3 }}
                  className="group border-border bg-card/40 text-fg-muted hover:border-accent/60 hover:text-fg inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-200"
                >
                  <span className="bg-accent h-1.5 w-1.5 rounded-full transition-transform duration-200 group-hover:scale-150" />
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
