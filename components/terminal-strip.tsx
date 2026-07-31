"use client";

import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const buildLines = [
  { delay: 0, text: "$ pnpm run build", color: "text-fg/70" },
  { delay: 400, text: "next build  ·  compiling for production...", color: "text-fg-muted" },
  { delay: 900, text: "✓  TypeScript  0 errors, 0 warnings", color: "text-accent" },
  { delay: 1400, text: "✓  ESLint      0 problems", color: "text-accent" },
  { delay: 1800, text: "✓  Route (app)  12 pages prerendered", color: "text-fg-muted" },
  {
    delay: 2200,
    text: "  ○  /                        4.1 kB │ First Load 96 kB",
    color: "text-fg-subtle",
  },
  {
    delay: 2500,
    text: "  ○  /resume                  2.3 kB │ First Load 88 kB",
    color: "text-fg-subtle",
  },
  {
    delay: 2800,
    text: "  λ  /player/[slug]           6.8 kB │ First Load 118 kB",
    color: "text-fg-subtle",
  },
  { delay: 3200, text: "✓  built in 142ms", color: "text-accent" },
  { delay: 3700, text: "$ lighthouse --url https://nandinivaswani.dev", color: "text-fg/70" },
  { delay: 4200, text: "  Performance:    99  ●●●●●●●●●●", color: "text-accent" },
  { delay: 4600, text: "  Accessibility:  98  ●●●●●●●●●○", color: "text-accent" },
  { delay: 5000, text: "  Best Practices: 100 ●●●●●●●●●●", color: "text-accent" },
  { delay: 5400, text: "  SEO:            100 ●●●●●●●●●●", color: "text-accent" },
  { delay: 5900, text: "▶  All checks passed. Ready to ship.", color: "text-fg" },
];

export function TerminalStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [shown, setShown] = useState<number[]>([]);

  useEffect(() => {
    if (!inView) return;
    const timers = buildLines.map((line, i) =>
      setTimeout(() => setShown((prev) => [...prev, i]), line.delay),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="border-border bg-card/50 overflow-hidden border-y backdrop-blur">
      {/* Terminal header bar */}
      <div className="border-border bg-bg/30 flex items-center justify-between border-b px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
          <span className="text-fg-subtle ml-4 font-mono text-[11px]">
            nandini@studio — zsh — 120×32
          </span>
        </div>
        <span className="text-accent/70 font-mono text-[10px] tracking-widest uppercase">
          Build Output
        </span>
      </div>

      {/* Scrolling output */}
      <div className="overflow-x-auto px-6 py-5">
        <div className="flex min-w-0 flex-col gap-1">
          {buildLines.map((line, i) => (
            <div
              key={i}
              className={`font-mono text-[12px] leading-5 transition-opacity duration-150 ${shown.includes(i) ? "opacity-100" : "opacity-0"} ${line.color}`}
            >
              {line.text}
              {shown.includes(i) && i === shown[shown.length - 1] && i < buildLines.length - 1 && (
                <span className="cursor-blink ml-1 inline-block h-[13px] w-[7px] bg-current align-middle opacity-70" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
