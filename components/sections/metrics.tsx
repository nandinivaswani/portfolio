"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/primitives";
import { impactMetrics } from "@/content/highlights";

function Counter({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const target = parseFloat(value);
  const isFloat = value.includes(".");
  const [display, setDisplay] = useState(reduce ? value : "0");

  useEffect(() => {
    // Reduced-motion users get the final value from initial state — no animation.
    if (!inView || reduce) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      setDisplay(isFloat ? current.toFixed(1) : Math.round(current).toString());
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, isFloat, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {suffix === "~" && <span className="text-accent">~</span>}
      {display}
      {suffix && suffix !== "~" && <span className="text-accent">{suffix}</span>}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-bg-soft py-16">
      <div className="glow absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 opacity-10" aria-hidden />
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:gap-4 lg:grid-cols-4">
          {impactMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-2 text-sm font-semibold text-fg">{m.label}</p>
              <p className="mt-0.5 text-xs text-fg-subtle">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
