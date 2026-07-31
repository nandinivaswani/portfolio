"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Subtle, cohesive background decorations used across sections.
 * All are decorative, pointer-events-none, and sit at -z-10 so section
 * content always paints on top. Callers size/position them via className
 * (e.g. "right-0 top-0 h-[420px] w-[420px]") and keep the parent section
 * `relative isolate overflow-hidden`.
 */

/** Masked dot-matrix that slowly drifts. */
export function DotField({
  className = "",
  strength = 20,
}: {
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${className}`}
      style={{
        backgroundImage: `radial-gradient(color-mix(in oklab, var(--accent) ${strength}%, transparent) 1px, transparent 1px)`,
        backgroundSize: "26px 26px",
        maskImage: "radial-gradient(ellipse at center, #000 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, #000 0%, transparent 70%)",
      }}
      animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "26px 26px"] }}
      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
    />
  );
}

/** Masked line-grid that slowly drifts. */
export function GridField({
  className = "",
  strength = 12,
  size = 54,
}: {
  className?: string;
  strength?: number;
  size?: number;
}) {
  const reduce = useReducedMotion();
  const line = `color-mix(in oklab, var(--accent) ${strength}%, transparent)`;
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${className}`}
      style={{
        backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        maskImage: "radial-gradient(ellipse at center, #000 0%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, #000 0%, transparent 75%)",
      }}
      animate={reduce ? undefined : { backgroundPosition: ["0px 0px", `${size}px ${size}px`] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  );
}

/** Soft blurred accent glow blob. */
export function SectionGlow({
  className = "",
  color = "var(--accent)",
  opacity = 0.06,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full blur-[130px] ${className}`}
      style={{ background: color, opacity }}
    />
  );
}
