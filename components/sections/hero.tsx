"use client";

import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { site } from "@/content/site";
import { techStack } from "@/content/skills";
import { Magnetic } from "@/components/motion-fx";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── tech marquee ─────────────────────────────────────────── */
const tech = techStack.flatMap((g) => g.items);

function Marquee() {
  const doubled = [...tech, ...tech];
  return (
    <div className="border-border overflow-hidden border-y py-3">
      <div className="animate-marquee flex w-max">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="text-fg-muted font-mono text-xs tracking-widest whitespace-nowrap uppercase">
              {t}
            </span>
            <span className="bg-accent h-1 w-1 flex-shrink-0 rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── floating code fragments ──────────────────────────────── */
const codeFragments = [
  "const player = new Hls();",
  "useResumePosition(videoId);",
  "apollo.cache.modify({ fields });",
  "type Props<T> = Readonly<{",
  "export default memo(Player);",
  "hls.loadSource(manifestUrl);",
  "t('nav.home', { locale });",
  "onTimeUpdate(persistWatch);",
  "scrollY.on('change', reveal);",
  "codegen: schema → types;",
  "await stripe.subscribe(tier);",
  "storyboard.seekPreview(t);",
];

function FloatingCode() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {codeFragments.map((frag, i) => {
        const left = ((i * 67 + 13) % 82) + 6;
        const delay = (i * 1.3) % 8;
        const duration = 18 + (i % 5) * 4;
        const opacity = 0.05 + (i % 3) * 0.02;
        const top = ((i * 53 + 7) % 88) + 5;
        return (
          <motion.span
            key={i}
            className="text-accent absolute font-mono whitespace-nowrap"
            style={{ left: `${left}%`, top: `${top}%`, fontSize: "11px", opacity: 0 }}
            animate={{ opacity: [0, opacity, opacity, 0], y: [-20, 0, 0, 20] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.1, 0.9, 1],
            }}
          >
            {frag}
          </motion.span>
        );
      })}
    </div>
  );
}

/* ── animated typing code block ──────────────────────────── */
const codeLines: { tokens: { t: string; c: string }[] }[] = [
  {
    tokens: [
      { t: "const", c: "code-function" },
      { t: " nandini", c: "text-fg/80" },
      { t: " = {", c: "text-fg-muted" },
    ],
  },
  {
    tokens: [
      { t: "  role:", c: "code-type" },
      { t: ' "Senior Frontend Engineer"', c: "code-string" },
      { t: ",", c: "text-fg-muted" },
    ],
  },
  {
    tokens: [
      { t: "  focus:", c: "code-type" },
      { t: " [", c: "text-fg-muted" },
      { t: '"streaming"', c: "code-string" },
      { t: ", ", c: "text-fg-muted" },
      { t: '"video"', c: "code-string" },
      { t: "],", c: "text-fg-muted" },
    ],
  },
  {
    tokens: [
      { t: "  stack:", c: "code-type" },
      { t: " [", c: "text-fg-muted" },
      { t: '"React"', c: "code-string" },
      { t: ", ", c: "text-fg-muted" },
      { t: '"Next.js"', c: "code-string" },
      { t: "],", c: "text-fg-muted" },
    ],
  },
  {
    tokens: [
      { t: "  available:", c: "code-type" },
      { t: " true", c: "code-keyword" },
      { t: ",", c: "text-fg-muted" },
    ],
  },
  { tokens: [{ t: "};", c: "text-fg-muted" }] },
  { tokens: [] },
  { tokens: [{ t: "// turns complex systems into human experiences", c: "code-comment italic" }] },
];

function TypedCode() {
  const reduce = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(reduce ? codeLines.length : 0);
  const [done, setDone] = useState(!!reduce);

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= codeLines.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 260);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <div className="border-border bg-card/60 overflow-hidden rounded-lg border backdrop-blur">
      <div className="border-border bg-bg/40 flex items-center gap-2 border-b px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="text-fg-subtle ml-3 font-mono text-[10px]">nandini.ts</span>
      </div>
      <div className="min-h-[168px] p-4 text-[12px] leading-6">
        {codeLines.map((line, li) => (
          <AnimatePresence key={li}>
            {li < visibleLines && (
              <motion.div
                initial={reduce ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start"
              >
                <span className="text-fg-subtle/60 mr-4 w-6 flex-shrink-0 text-right font-mono text-[10px] leading-6 select-none">
                  {li + 1}
                </span>
                <span className="font-mono">
                  {line.tokens.map((tok, ti) => (
                    <span key={ti} className={tok.c}>
                      {tok.t}
                    </span>
                  ))}
                  {li === visibleLines - 1 && !done && (
                    <span className="cursor-blink bg-accent ml-0.5 inline-block h-[14px] w-[2px] align-middle" />
                  )}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
        {done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 flex items-start"
          >
            <span className="mr-4 w-6" />
            <span className="text-accent/70 font-mono text-[10px]">
              ▶ Compiled in 142ms — 0 errors
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── git-log terminal bento card ─────────────────────────── */
const commits = [
  { hash: "a4f2c1", msg: "feat: custom HLS player — storyboard scrub" },
  { hash: "b7e930", msg: "perf: apollo cache-first, fewer round-trips" },
  { hash: "c1d8a2", msg: "i18n: localize into ~30 locales" },
  { hash: "f9b341", msg: "chore: ship Next.js 16 + React 19" },
];

function GitTerminal() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? commits.length : 0);
  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setShown(i);
      if (i >= commits.length) clearInterval(t);
    }, 400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className="flex h-full flex-col">
      <span className="text-fg-muted mb-3 font-mono text-xs tracking-widest uppercase">
        git log
      </span>
      <div className="flex flex-1 flex-col gap-1.5">
        {commits.slice(0, shown).map((c) => (
          <motion.div
            key={c.hash}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-2"
          >
            <span className="text-accent mt-0.5 flex-shrink-0 font-mono text-[10px]">{c.hash}</span>
            <span className="text-fg-muted flex-1 truncate font-mono text-[10px] leading-tight">
              {c.msg}
            </span>
          </motion.div>
        ))}
        {shown < commits.length && (
          <span className="cursor-blink text-fg-subtle font-mono text-[10px]">█</span>
        )}
      </div>
    </div>
  );
}

/* ── bento cards ──────────────────────────────────────────── */
function bentoCards() {
  return [
    {
      id: "status",
      content: (
        <div className="flex h-full flex-col justify-between">
          <span className="text-fg-muted flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
            <span className="bg-accent h-1.5 w-1.5 animate-pulse rounded-full" /> Status
          </span>
          <div>
            <p className="text-fg text-2xl font-bold">Open to</p>
            <p className="text-accent text-2xl font-bold">senior roles</p>
          </div>
        </div>
      ),
    },
    {
      id: "exp",
      content: (
        <div className="flex h-full flex-col justify-between">
          <span className="text-fg-muted font-mono text-xs tracking-widest uppercase">
            Experience
          </span>
          <div>
            <p className="text-fg text-5xl font-black">4.5+</p>
            <p className="text-fg-muted mt-1 text-sm font-medium">years in production</p>
          </div>
        </div>
      ),
    },
    {
      id: "apps",
      content: (
        <div className="flex h-full flex-col justify-between">
          <span className="text-fg-muted font-mono text-xs tracking-widest uppercase">Shipped</span>
          <div className="flex items-end gap-2">
            <p className="text-fg text-5xl font-black">15+</p>
            <p className="text-fg-muted mb-1.5 text-sm">platforms end-to-end</p>
          </div>
        </div>
      ),
    },
    {
      id: "domains",
      content: (
        <div className="flex h-full flex-col justify-between">
          <span className="text-fg-muted font-mono text-xs tracking-widest uppercase">Domains</span>
          <div>
            <p className="text-accent text-5xl font-black">5+</p>
            <p className="text-fg-muted mt-1 text-sm">video · SaaS · AI · CMS</p>
          </div>
        </div>
      ),
    },
    {
      id: "location",
      content: (
        <div className="flex h-full flex-col justify-between">
          <span className="text-fg-muted font-mono text-xs tracking-widest uppercase">
            Based in
          </span>
          <p className="text-fg text-lg font-semibold">Surat, India · Remote</p>
        </div>
      ),
    },
    { id: "git", content: <GitTerminal /> },
  ];
}

/* ── animated tech-grid background ────────────────────────── */
function TechGrid() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(color-mix(in oklab, var(--accent) 16%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--accent) 16%, transparent) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
        maskImage: "radial-gradient(ellipse 90% 70% at 70% 45%, #000 0%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 70% 45%, #000 0%, transparent 80%)",
      }}
      animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "52px 52px"] }}
      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
    />
  );
}

/* ── slow scanning accent line ────────────────────────────── */
function ScanLine() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent) 45%, transparent), transparent)",
      }}
      animate={{ top: ["8%", "92%", "8%"], opacity: [0, 0.7, 0.7, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.55, 1] }}
    />
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const cards = bentoCards();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden pt-14 pb-0"
    >
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-end">
        <div className="bg-accent/5 h-[800px] w-[800px] translate-x-1/4 translate-y-1/4 rounded-full blur-[200px]" />
      </div>

      <TechGrid />
      <ScanLine />
      <FloatingCode />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Top strip */}
        <div className="border-border flex items-center justify-between border-b px-6 py-4">
          <span className="text-fg-muted font-mono text-xs tracking-widest uppercase">
            {site.role} · {site.specialism}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-fg-subtle hidden font-mono text-xs sm:inline">~/portfolio</span>
            <span className="text-accent font-mono text-xs">main ✓</span>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid flex-1 grid-cols-1 lg:min-h-[calc(100dvh-10rem)] lg:grid-cols-2">
          {/* Left: name + typed code */}
          <motion.div
            style={reduce ? undefined : { y: nameY }}
            className="border-border flex flex-col justify-between p-8 md:p-12 lg:border-r"
          >
            <div className="flex flex-col gap-8">
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.1 }}
                className="font-display text-[clamp(48px,8vw,92px)] leading-[0.92] font-extrabold tracking-tight"
              >
                {site.firstName}
                <br />
                <span className="text-accent">{site.lastName}.</span>
              </motion.h1>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.3 }}
                className="text-fg-muted max-w-md text-base leading-relaxed"
              >
                {site.tagline}
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <TypedCode />
              </motion.div>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex items-center gap-4"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="bg-accent text-primary-foreground hover:bg-accent/85 inline-flex h-12 items-center rounded-full px-7 text-sm font-bold transition-all hover:shadow-[0_0_32px_var(--accent-soft)]"
                >
                  View Work
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="border-border text-fg-muted hover:border-fg/30 hover:text-fg inline-flex h-12 items-center rounded-full border px-7 text-sm font-medium transition-colors"
                >
                  Get in Touch
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right: bento grid */}
          <motion.div
            style={reduce ? undefined : { y: gridY }}
            className="border-border grid auto-rows-[148px] grid-cols-2 border-b lg:self-center"
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease }}
                className="border-border hover:bg-card border-r border-b p-6 transition-colors duration-300 odd:last:col-span-2"
              >
                {card.content}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 md:mt-12"
        >
          <Marquee />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-28 left-2 hidden items-center gap-2 lg:flex"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="from-fg/20 h-10 w-px bg-gradient-to-b to-transparent"
        />
        <span className="text-fg-muted rotate-180 font-mono text-[10px] tracking-widest uppercase [writing-mode:vertical-lr]">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
