"use client";

import { useRef, type PointerEvent } from "react";
import { Icon } from "./icon";

/**
 * Interactive card: a cursor-following accent spotlight + a dot-grid texture
 * that's masked to reveal only around the pointer. Pure CSS vars, no re-render.
 */
export function SpotlightCard({
  icon,
  title,
  description,
  index,
  footnote,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
  footnote?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      style={{ "--mx": "50%", "--my": "0%" } as React.CSSProperties}
      className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/50"
    >
      {/* dot-grid texture, revealed around the cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-fg-subtle) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          WebkitMaskImage:
            "radial-gradient(170px circle at var(--mx) var(--my), black 0%, transparent 70%)",
          maskImage:
            "radial-gradient(170px circle at var(--mx) var(--my), black 0%, transparent 70%)",
        }}
        aria-hidden
      />
      {/* accent spotlight glow following the cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--mx) var(--my), var(--accent-soft), transparent 70%)",
        }}
        aria-hidden
      />
      {/* gradient hairline on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx) var(--my), color-mix(in oklab, var(--accent) 45%, transparent), transparent 65%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
        aria-hidden
      />

      <div className="relative">
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
            <Icon name={icon} className="h-5 w-5" />
          </span>
          <span className="font-mono text-[11px] text-fg-subtle/70 transition-colors group-hover:text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-display text-base font-semibold">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{description}</p>
        {footnote && (
          <p className="mt-3 flex items-start gap-1.5 border-t border-border-soft pt-3 font-mono text-[11px] leading-snug text-fg-subtle">
            <span className="text-accent">↳</span>
            {footnote}
          </p>
        )}
      </div>
    </div>
  );
}
