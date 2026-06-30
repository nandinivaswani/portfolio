"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, FileJson, Sparkles, Layers } from "lucide-react";
import { complexityInputs, experienceOutputs } from "@/content/concept";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const inputs = complexityInputs.slice(0, 4);
const outputs = experienceOutputs.slice(0, 4);

/**
 * The hero centerpiece: raw complexity (left) flows through the frontend
 * engineer — the translation layer (center) — and emerges as a polished
 * human experience (right). Animated packets travel along the rails.
 */
export function TransformFlow() {
  return (
    <div className="relative">
      {/* Desktop: complexity → engineer → experience, left to right */}
      <div className="hidden items-stretch gap-3 lg:grid lg:grid-cols-[minmax(0,1fr)_72px_auto_72px_minmax(0,1fr)]">
        <ComplexityStack />
        <Rail />
        <EngineerNode />
        <Rail />
        <ExperienceStack />
      </div>

      {/* Mobile: stacked top to bottom */}
      <div className="flex flex-col gap-3 lg:hidden">
        <ComplexityStack />
        <MobileArrow />
        <EngineerNode />
        <MobileArrow />
        <ExperienceStack />
      </div>
    </div>
  );
}

function ColLabel({ children, tone }: { children: string; tone: "muted" | "accent" }) {
  return (
    <span
      className={cn(
        "mono-label !text-[0.6rem]",
        tone === "muted" && "!text-fg-subtle",
      )}
    >
      {children}
    </span>
  );
}

function ComplexityStack() {
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col">
      <ColLabel tone="muted">Complex systems</ColLabel>
      <div className="mt-3 flex flex-1 flex-col justify-center gap-2">
        {inputs.map((it, i) => (
          <motion.div
            key={it.label}
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
            className="group flex items-center gap-2.5 rounded-lg border border-border bg-surface/70 px-3 py-2 backdrop-blur"
          >
            <FileJson size={14} className="shrink-0 text-fg-subtle" />
            <div className="min-w-0">
              <p className="truncate font-mono text-[12px] font-medium text-fg-muted">
                {it.label}
              </p>
              <p className="truncate text-[10px] text-fg-subtle">{it.hint}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ExperienceStack() {
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col">
      <ColLabel tone="accent">Human experience</ColLabel>
      <div className="mt-3 flex flex-1 flex-col justify-center gap-2">
        {outputs.map((it, i) => (
          <motion.div
            key={it.label}
            initial={reduce ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.08, ease }}
            className="relative flex items-center gap-2.5 overflow-hidden rounded-lg border border-accent/30 bg-surface px-3 py-2 shadow-[0_8px_30px_-18px_var(--accent)]"
          >
            <span
              className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-accent to-accent-2"
              aria-hidden
            />
            <Sparkles size={14} className="shrink-0 text-accent" />
            <div className="min-w-0">
              <p className="truncate text-[12px] font-semibold text-fg">{it.label}</p>
              <p className="truncate text-[10px] text-fg-subtle">{it.hint}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EngineerNode() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease }}
      className="relative flex items-center justify-center"
    >
      {/* pulsing halo */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-2xl"
          style={{ background: "radial-gradient(closest-side, var(--accent-soft), transparent)" }}
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <div className="relative flex w-full max-w-[230px] flex-col items-center rounded-2xl border border-accent/40 bg-surface/80 px-5 py-6 text-center backdrop-blur lg:w-[210px]">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl text-on-accent"
          style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
        >
          <Layers size={22} />
        </span>
        <p className="mono-label mt-4 !text-[0.58rem]">The translation layer</p>
        <p className="mt-1 font-display text-lg font-bold leading-tight">
          Frontend
          <br />
          Engineer
        </p>
        <p className="mt-2 text-[11px] leading-snug text-fg-subtle">
          Turns the left into the right.
        </p>
      </div>
    </motion.div>
  );
}

/** Horizontal rail with packets flowing left → right (desktop gutters). */
function Rail() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex items-center" aria-hidden>
      <div className="relative h-px w-full bg-gradient-to-r from-border via-accent/40 to-border">
        {!reduce &&
          [0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
              initial={{ left: "0%", opacity: 0 }}
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.8,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>
    </div>
  );
}

/** Vertical connector with a downward packet (mobile). */
function MobileArrow() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-9 items-center justify-center" aria-hidden>
      <div className="relative h-full w-px bg-gradient-to-b from-border via-accent/40 to-border">
        {!reduce && (
          <motion.span
            className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
            initial={{ top: "0%", opacity: 0 }}
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>
      <ArrowDown
        size={14}
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-accent/60"
      />
    </div>
  );
}
