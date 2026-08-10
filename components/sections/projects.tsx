"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useState, type PointerEvent } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { featuredProjects } from "@/content/projects";
import { moreProjects } from "@/content/more-projects";
import { SectionGlow } from "@/components/section-fx";
import { GitLogField } from "@/components/section-bg";
import { RevealHeading, ScrambleText, TiltCard } from "@/components/motion-fx";
import { ProjectVisual } from "@/components/project-visual";
import { Icon } from "@/components/ui/icon";

const ease = [0.16, 1, 0.3, 1] as const;

type FeaturedProject = (typeof featuredProjects)[number];

/* ── Featured work: one big case-study "hero" at a time, switched by an
   animated tab bar (sliding pill — same idea as Motion's "smooth tabs"
   example) instead of a scroll-position heuristic or a cramped side
   panel. That removes the whole class of bug we kept hitting: there's
   nothing for a click to fight, because the tabs ARE the state — and
   the active project's name is always the biggest thing on screen, not
   something tucked in a rail you can scroll past and lose track of. */

function FeaturedTabs({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex flex-1 items-center gap-2 overflow-x-auto">
      {featuredProjects.map((p, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={p.slug}
            type="button"
            onClick={() => onSelect(i)}
            aria-current={active}
            className="relative grid h-11 flex-shrink-0 place-items-center rounded-full px-4 text-sm font-medium whitespace-nowrap transition-colors"
          >
            {active && (
              <motion.span
                layoutId="featured-tab-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: p.accent.from }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className="relative z-10 flex items-center gap-2 leading-none"
              style={{ color: active ? "#08080a" : undefined }}
            >
              <span
                className={
                  active
                    ? "font-mono text-xs leading-none opacity-70"
                    : "text-fg-subtle font-mono text-xs leading-none"
                }
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={active ? "leading-none" : "text-fg-muted leading-none"}>
                {p.name.split(" — ")[0]}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FeaturedHero({ project, direction }: { project: FeaturedProject; direction: number }) {
  const [showDetails, setShowDetails] = useState(false);
  const reduce = useReducedMotion();
  const accent = project.accent.from;

  return (
    <motion.div
      custom={direction}
      initial={reduce ? false : { opacity: 0, x: direction >= 0 ? 40 : -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? undefined : { opacity: 0, x: direction >= 0 ? -40 : 40 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <TiltCard className="rounded-2xl">
          <ProjectVisual project={project} />
        </TiltCard>

        <div className="flex flex-col justify-center gap-6">
          <div>
            <p
              className="font-mono text-[12px] tracking-[0.15em] uppercase"
              style={{ color: accent }}
            >
              {project.category}
            </p>
            <h3 className="font-display text-fg mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              {project.name}
            </h3>
            <p className="text-fg-muted mt-3 text-base leading-relaxed">{project.summary}</p>
          </div>

          <div className="flex flex-wrap gap-8">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-mono text-2xl font-black" style={{ color: accent }}>
                  {m.value}
                </p>
                <p className="text-fg-muted mt-1 text-sm">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="border-border text-fg-muted rounded-full border px-3 py-1.5 font-mono text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowDetails((v) => !v)}
            aria-expanded={showDetails}
            className="text-fg hover:text-accent inline-flex items-center gap-2 self-start text-sm font-semibold transition-colors"
          >
            {showDetails ? "Hide" : "View"} the engineering details
            <motion.span
              animate={{ rotate: showDetails ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: showDetails ? "auto" : 0, opacity: showDetails ? 1 : 0 }}
        transition={{ duration: 0.4, ease }}
        className="overflow-hidden"
      >
        <div className="border-border mt-10 grid grid-cols-1 gap-10 border-t pt-10 md:grid-cols-2">
          <div>
            <p
              className="mb-3 font-mono text-[12px] tracking-[0.15em] uppercase"
              style={{ color: accent }}
            >
              Impact
            </p>
            <ul className="flex flex-col gap-2.5">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="text-fg-muted flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                    style={{ background: accent }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="mb-3 font-mono text-[12px] tracking-[0.15em] uppercase"
              style={{ color: accent }}
            >
              Engineering
            </p>
            <ul className="flex flex-col gap-2.5">
              {project.engineering.map((e) => (
                <li
                  key={e}
                  className="text-fg-muted flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                    style={{ background: accent }}
                  />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-fg-subtle mt-6 font-mono text-sm">{project.role}</p>
      </motion.div>
    </motion.div>
  );
}

function FeaturedWork() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const project = featuredProjects[index];

  const go = (i: number) => {
    setDirection(i > index ? 1 : i < index ? -1 : 0);
    setIndex(i);
  };

  return (
    <div className="px-6">
      <div className="border-border flex flex-wrap items-center justify-between gap-4 border-b py-8">
        <FeaturedTabs activeIndex={index} onSelect={go} />
        <div className="flex flex-shrink-0 items-center gap-3">
          <motion.button
            type="button"
            aria-label="Previous project"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => go((index - 1 + featuredProjects.length) % featuredProjects.length)}
            className="border-border bg-card text-fg hover:border-accent hover:bg-accent-soft hover:text-accent grid h-11 w-11 place-items-center rounded-full border-2 transition-colors"
          >
            <ArrowLeft size={18} strokeWidth={2.25} />
          </motion.button>
          <motion.button
            type="button"
            aria-label="Next project"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => go((index + 1) % featuredProjects.length)}
            className="border-border bg-card text-fg hover:border-accent hover:bg-accent-soft hover:text-accent grid h-11 w-11 place-items-center rounded-full border-2 transition-colors"
          >
            <ArrowRight size={18} strokeWidth={2.25} />
          </motion.button>
        </div>
      </div>

      <div className="overflow-hidden py-10">
        <AnimatePresence mode="wait" custom={direction}>
          <FeaturedHero key={project.slug} project={project} direction={direction} />
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── "more work" — rows, kept true to the site's terminal/IDE
   visual language (mono numerals, list rows) rather than turning
   into generic cards. The interest comes from motion instead:
   a cursor-tracking spotlight glow tinted per project domain, and
   the project name decodes via the same scramble effect used on
   "INTERFACE" in the manifesto, so the two sections share a
   consistent "hacker-ish" hover language. */
type MoreProject = (typeof moreProjects)[number];

function categoryVisual(category: string): { icon: string; color: string } {
  const c = category.toLowerCase();
  if (c.includes("streaming") || c.includes("video") || c.includes("media")) {
    return { icon: "PlayCircle", color: "#818cf8" };
  }
  if (c.includes("logistics") || c.includes("fleet")) return { icon: "Truck", color: "#34d399" };
  if (c.includes("event")) return { icon: "CalendarDays", color: "#f472b6" };
  if (c.includes("enterprise")) return { icon: "Building2", color: "#a78bfa" };
  if (c.includes("portal")) return { icon: "DoorOpen", color: "#38bdf8" };
  if (c.includes("scheduling")) return { icon: "CalendarClock", color: "#fb923c" };
  if (c.includes("marketing")) return { icon: "Megaphone", color: "#fbbf24" };
  if (c.includes("community")) return { icon: "Users", color: "#4ade80" };
  if (c.includes("saas")) return { icon: "Layers", color: "#22d3ee" };
  if (c.includes("cms")) return { icon: "Newspaper", color: "#f87171" };
  return { icon: "LayoutDashboard", color: "#c4b5fd" };
}

function WorkRow({
  project,
  index,
  featured,
}: {
  project: MoreProject;
  index: number;
  featured: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");
  const { icon, color } = categoryVisual(project.category);

  const onMove = (e: PointerEvent<HTMLLIElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.li
      onPointerMove={onMove}
      style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: Math.min(index, 6) * 0.05, ease }}
      className="group border-border relative overflow-hidden border-t last:border-b"
    >
      {/* Cursor-tracking spotlight, tinted to the project's domain color */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(380px circle at var(--mx) var(--my), color-mix(in oklab, ${color} 16%, transparent), transparent 70%)`,
        }}
      />

      <motion.div
        whileHover={{ x: 8 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className="relative grid grid-cols-12 items-center gap-x-3 gap-y-2 px-2 py-7 md:py-8"
      >
        {/* Index */}
        <span className="font-display text-fg/15 group-hover:text-accent col-span-2 text-3xl leading-none font-black transition-colors duration-300 md:col-span-1 md:text-4xl">
          {num}
        </span>

        {/* Name + category (+ blurb for featured) */}
        <div className="col-span-10 md:col-span-6">
          <div className="flex flex-wrap items-center gap-3">
            <h4 className="font-display text-fg group-hover:text-accent text-2xl font-extrabold tracking-tight transition-colors duration-300 md:text-3xl">
              <ScrambleText word={project.name} />
            </h4>
            {featured && (
              <span className="border-accent/40 text-accent rounded-full border px-2 py-0.5 font-mono text-[11px] tracking-wider uppercase">
                Featured
              </span>
            )}
          </div>
          <p className="text-fg-subtle mt-1.5 flex items-center gap-1.5 font-mono text-[13px] tracking-wider uppercase">
            <Icon name={icon} className="h-3 w-3" style={{ color }} />
            {project.category}
          </p>
          {featured && (
            <p className="text-fg-muted mt-3 max-w-xl text-sm leading-relaxed">{project.blurb}</p>
          )}
        </div>

        {/* Tags */}
        <div className="col-span-12 flex flex-wrap gap-1.5 md:col-span-4 md:justify-end">
          {project.tags.map((t) => (
            <span
              key={t}
              className="border-border/80 text-fg-subtle group-hover:border-accent/30 group-hover:text-fg-muted rounded border px-2 py-0.5 font-mono text-[12px] transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <span className="text-accent pointer-events-none col-span-1 hidden justify-self-end font-mono text-lg opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:block">
          →
        </span>
      </motion.div>

      {/* Accent underline that draws on hover */}
      <span className="bg-accent pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </motion.li>
  );
}

// Strongest work first — the top two are marked "Featured" (badge + blurb).
const DISPLAY_ORDER = [
  "Western Tech — Parent Portal", // featured
  "FRC", // featured
  "ThinQ Media",
  "Zipcast",
  "FPIW",
  "Marketplace Chaplains",
  "Hope4America",
  "Visible Things",
  "DRF",
  "Barnabas",
  "OmniDuct",
  "Seabreeze",
];

const orderedMore: MoreProject[] = [
  ...DISPLAY_ORDER.map((n) => moreProjects.find((p) => p.name === n)).filter(
    (p): p is MoreProject => Boolean(p),
  ),
  ...moreProjects.filter((p) => !DISPLAY_ORDER.includes(p.name)),
];

/* Techie blueprint-grid backdrop unique to the More-work mosaic. */
function MoreWorkBackdrop() {
  const reduce = useReducedMotion();
  const line = "color-mix(in oklab, var(--accent) 7%, transparent)";
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 42%, #000 0%, transparent 88%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 42%, #000 0%, transparent 88%)",
        }}
        animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "46px 46px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <SectionGlow
        className="top-[18%] left-1/2 h-[440px] w-[440px] -translate-x-1/2"
        color="var(--accent-2)"
        opacity={0.05}
      />
    </>
  );
}

function MoreWork() {
  return (
    <div className="border-border relative isolate overflow-hidden border-b px-6 py-20 md:py-24">
      <MoreWorkBackdrop />
      <div className="mb-12 flex items-center gap-3">
        <p className="text-fg-muted font-mono text-xs tracking-[0.2em] uppercase">
          {"// More work"}
        </p>
        <span className="bg-border h-px flex-1" />
        <span className="text-fg-subtle font-mono text-[12px]">{moreProjects.length} projects</span>
      </div>
      <ul>
        {orderedMore.map((m, i) => (
          <WorkRow key={m.name} project={m} index={i} featured={i < 2} />
        ))}
      </ul>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      className="border-border relative isolate scroll-mt-16 overflow-hidden border-t"
    >
      <GitLogField />
      <SectionGlow
        className="top-[10%] right-[-8%] h-[460px] w-[460px]"
        color="var(--accent-2)"
        opacity={0.05}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="border-border flex items-end justify-between gap-6 border-b px-6 py-20 md:py-24">
          <div>
            <p className="text-accent mb-4 font-mono text-xs tracking-[0.2em] uppercase">
              02 // Selected Work
            </p>
            <RevealHeading>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Featured builds.{" "}
                <span className="text-fg-muted font-light italic">One standard.</span>
              </h2>
            </RevealHeading>
          </div>
          <p className="text-fg-muted hidden max-w-xs text-right text-sm lg:block">
            Switch projects with the tabs below.
          </p>
        </div>

        {/* Featured work — one case study at a time, tab-driven */}
        <FeaturedWork />

        {/* More work — scroll-driven index + preview */}
        <MoreWork />
      </div>
    </section>
  );
}
