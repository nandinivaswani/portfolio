"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "motion/react";
import { useRef } from "react";
import { site } from "@/content/site";
import { SectionGlow } from "@/components/section-fx";
import { CircuitField } from "@/components/section-bg";
import { RevealHeading } from "@/components/motion-fx";

const ease = [0.16, 1, 0.3, 1] as const;

const impacts = [
  {
    stat: "100ms",
    label: "is roughly when a delay starts to feel broken",
    body: "That's a well-known threshold in UX research for when something stops feeling instant. On a video player, that gap is often the difference between someone staying and someone closing the tab.",
    index: "01",
  },
  {
    stat: "1",
    label: "moment is often enough to lose someone",
    body: "A confusing button, a form that silently fails, a page that doesn't respond — people rarely complain, they just leave. Frontend engineering is what quietly prevents that moment.",
    index: "02",
  },
  {
    stat: "~30",
    label: "languages, one product that never breaks",
    body: "Supporting a global audience means every layout, direction, and edge case has to hold up in someone else's language — not just yours. I've shipped that at scale, RTL included.",
    index: "03",
  },
  {
    stat: "0",
    label: "of the backend complexity should reach the user",
    body: "Video encoding, live data syncing, subscription logic — none of it is the user's problem. Good frontend engineering takes all of that and hands back something that just makes sense.",
    index: "04",
  },
];

export function WhyFE() {
  const lineRef = useRef<HTMLDivElement>(null);
  // Scroll "draws" the headline: outlined letters fill left→right with the
  // accent as the strip crosses the viewport. Fully readable, no pin, no
  // wasted height — the fill pulls the eye across the line.
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 0.9", "start 0.25"] });
  const fillPct = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgSize = useMotionTemplate`${fillPct}% 100%`;

  return (
    <section
      id="about"
      className="border-border relative isolate scroll-mt-16 overflow-hidden border-t"
    >
      <CircuitField />
      <SectionGlow className="bottom-[8%] left-[-6%] h-[420px] w-[420px]" />

      {/* Self-drawing headline */}
      <div
        ref={lineRef}
        className="border-border relative flex items-center justify-center overflow-hidden border-b px-6 py-7 md:py-10"
      >
        <motion.h2
          aria-label="Frontend that performs"
          style={{
            backgroundImage: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            backgroundRepeat: "no-repeat",
            backgroundSize: bgSize,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1.4px color-mix(in oklab, var(--fg) 20%, transparent)",
            fontSize: "clamp(34px, 8.4vw, 108px)",
            lineHeight: 1.05,
          }}
          className="font-display text-center font-extrabold tracking-tight whitespace-nowrap select-none"
        >
          FRONTEND THAT PERFORMS
        </motion.h2>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="border-border flex items-end justify-between border-b py-20 md:py-24">
          <div>
            <p className="text-accent mb-4 font-mono text-xs tracking-[0.2em] uppercase">
              01 // Why it matters
            </p>
            <RevealHeading>
              <h2 className="font-display max-w-2xl text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
                Frontend isn&apos;t the last mile.
                <br />
                <span className="text-fg-muted font-light italic">
                  It&apos;s the only mile users ever see.
                </span>
              </h2>
            </RevealHeading>
          </div>
          <p className="text-fg-muted hidden max-w-xs text-right text-sm leading-relaxed lg:block">
            Users never see your architecture, your APIs, or your database. Whatever they experience
            — good or bad — was built by the frontend.
          </p>
        </div>

        {/* Impact grid */}
        <div className="divide-border border-border grid grid-cols-1 divide-x divide-y border-b md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((item, i) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="hover:bg-card p-8 transition-colors duration-300"
            >
              <p className="text-fg-subtle mb-6 font-mono text-[10px] tracking-widest">
                {item.index}
              </p>
              <p className="text-accent mb-3 text-5xl leading-none font-black md:text-6xl">
                {item.stat}
              </p>
              <p className="text-fg mb-4 text-sm font-semibold tracking-wide uppercase">
                {item.label}
              </p>
              <p className="text-fg-muted text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Code + quote strip */}
        <div className="border-border grid grid-cols-1 border-b lg:grid-cols-2">
          {/* Performance code snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="border-border p-8 lg:border-r"
          >
            <p className="text-accent/70 mb-4 font-mono text-[10px] tracking-widest uppercase">
              {"// resume-where-you-left-off"}
            </p>
            <div className="border-border bg-card/60 overflow-hidden rounded-lg border">
              <div className="border-border bg-bg/40 flex items-center gap-2 border-b px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-red-500/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                <span className="h-2 w-2 rounded-full bg-green-500/60" />
                <span className="text-fg-subtle ml-3 font-mono text-[10px]">player.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6">
                <code>
                  <span className="code-comment">
                    {"// persist watch-time, throttled to the cache"}
                  </span>
                  {"\n"}
                  <span className="code-function">video</span>
                  <span className="text-fg-muted">.</span>
                  <span className="code-function">on</span>
                  <span className="text-fg-muted">(</span>
                  <span className="code-string">&quot;timeupdate&quot;</span>
                  <span className="text-fg-muted">, </span>
                  <span className="code-keyword">throttle</span>
                  <span className="text-fg-muted">{"(() => {"}</span>
                  {"\n"}
                  <span className="text-fg-muted">{"  "}</span>
                  <span className="code-function">apollo</span>
                  <span className="text-fg-muted">.</span>
                  <span className="code-function">writeFragment</span>
                  <span className="text-fg-muted">{"({"}</span>
                  {"\n"}
                  <span className="text-fg-muted">{"    id, data: { position: video."}</span>
                  <span className="code-function">currentTime</span>
                  <span className="text-fg-muted">{" },"}</span>
                  {"\n"}
                  <span className="text-fg-muted">{"  });"}</span>
                  {"\n"}
                  <span className="text-fg-muted">{"}, "}</span>
                  <span className="code-number">2000</span>
                  <span className="text-fg-muted">{"));"}</span>
                  {"\n"}
                  <span className="code-comment">{"\n// → resumes instantly on any device"}</span>
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col justify-center p-8 lg:p-16"
          >
            <p className="text-fg text-2xl leading-relaxed font-medium md:text-3xl">
              &ldquo;The gap between a <span className="text-accent font-bold">tool</span> and a{" "}
              <span className="text-accent font-bold">product </span>
              is made entirely of frontend engineering decisions.&rdquo;
            </p>
            <p className="text-fg-muted mt-6 font-mono text-sm">— {site.name}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
