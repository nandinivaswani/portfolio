"use client";

import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState, useEffect, type PointerEvent } from "react";
import { Plus } from "lucide-react";
import { featuredProjects } from "@/content/projects";
import { moreProjects } from "@/content/more-projects";
import { SectionGlow } from "@/components/section-fx";
import { GitLogField } from "@/components/section-bg";
import { RevealHeading, ScrambleText } from "@/components/motion-fx";
import { ProjectVisual } from "@/components/project-visual";
import { Icon } from "@/components/ui/icon";

const ease = [0.16, 1, 0.3, 1] as const;

type FeaturedProject = (typeof featuredProjects)[number];

function ProjectRow({
  project,
  index,
  active = false,
  registerRef,
}: {
  project: FeaturedProject;
  index: number;
  active?: boolean;
  registerRef?: (el: HTMLDivElement | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "0.4 1"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -30 : 30, 0]);
  const accent = project.accent.from;
  const num = String(index + 1).padStart(2, "0");
  // `open` (accordion expanded) highlights on every breakpoint; `active` (the
  // sticky preview panel is currently showing this project) only makes sense
  // where that panel is visible — lg and up — so it's gated accordingly.
  const highlighted = open || active;
  const activeOnly = active && !open;

  return (
    <motion.div
      ref={(el) => {
        ref.current = el;
        registerRef?.(el);
      }}
      style={reduce ? undefined : { opacity, x }}
      className="group border-border relative border-b"
    >
      {/* Accent bar — on only while expanded (all sizes) or the active scroll preview (lg+). No hover trigger: hover used to make a row look "active" independent of the real active state, which fought the scrollspy. */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 hidden h-0.5 w-full origin-left lg:block"
        style={{ background: accent }}
        animate={{ scaleX: open || activeOnly ? 1 : 0 }}
        transition={{ duration: 0.5, ease }}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute top-0 left-0 h-0.5 w-full origin-left transition-transform duration-500 ease-out lg:hidden ${open ? "scale-x-100" : "scale-x-0"}`}
        style={{ background: accent }}
      />

      {/* Header row — always visible */}
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        whileTap={{ scale: 0.995 }}
        className={`flex w-full items-center gap-6 px-6 py-7 text-left transition-colors duration-300 ${open ? "bg-card" : ""} ${activeOnly ? "lg:bg-card" : ""}`}
      >
        <span
          className="font-display text-fg/15 w-12 flex-shrink-0 text-3xl leading-none font-black transition-colors duration-300 md:text-4xl"
          style={{ color: highlighted ? accent : undefined }}
        >
          {num}
        </span>
        <h3 className="font-display text-fg flex-1 text-xl font-extrabold md:text-2xl">
          {project.name}
        </h3>
        <span className="text-fg-muted hidden flex-1 text-sm lg:block">{project.tagline}</span>
        <div className="flex flex-shrink-0 items-center gap-4">
          <span className="text-fg-muted hidden font-mono text-xs md:block">{project.year}</span>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            animate={activeOnly ? { scale: [1, 1.08, 1] } : { scale: 1 }}
            transition={
              activeOnly
                ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.2 }
            }
            className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
            style={
              open
                ? { background: accent, borderColor: accent }
                : { borderColor: activeOnly ? accent : "var(--color-border)" }
            }
          >
            {/* Radar-style pulse — invites the click while this row is the active preview */}
            {activeOnly && (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ border: `1px solid ${accent}` }}
                animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center"
              style={{ color: open ? "#08080a" : activeOnly ? accent : undefined }}
            >
              <Plus size={16} strokeWidth={2.25} />
            </motion.span>
          </motion.div>
        </div>
      </motion.button>

      {/* Expanded case study */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease }}
        className="overflow-hidden"
      >
        <div className="border-border grid grid-cols-1 gap-8 border-t px-6 pt-6 pb-8 md:grid-cols-12">
          {/* Left: narrative */}
          <div className="grid grid-cols-1 gap-6 md:col-span-7">
            <div>
              <p
                className="mb-2 font-mono text-[10px] tracking-[0.15em] uppercase"
                style={{ color: accent }}
              >
                Overview
              </p>
              <p className="text-fg-muted text-sm leading-relaxed">{project.summary}</p>
            </div>
            <div>
              <p
                className="mb-2 font-mono text-[10px] tracking-[0.15em] uppercase"
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

          {/* Right: visual + metrics + tech + role */}
          <div className="flex flex-col gap-8 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={open ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.5, delay: open ? 0.15 : 0, ease }}
            >
              <ProjectVisual project={project} />
            </motion.div>
            <div className="flex flex-wrap gap-6">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-mono text-2xl font-black" style={{ color: accent }}>
                    {m.value}
                  </p>
                  <p className="text-fg-muted mt-1 text-xs">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="border-border text-fg-muted hover:border-fg/30 rounded-full border px-3 py-1.5 font-mono text-xs transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-fg-subtle font-mono text-xs">{project.role}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Featured list + sticky live-preview panel (desktop) ─────
   A scrollspy — not hover — drives the active project: whichever
   row is crossing a thin band near the vertical center of the
   viewport becomes active, so scrolling down/up naturally advances
   the sticky preview beside the list, like paging through a case
   study. Falls back to the plain list + click-to-expand on touch/
   smaller screens, where the panel isn't shown anyway. */
function FeaturedWork() {
  const [previewSlug, setPreviewSlug] = useState(featuredProjects[0]?.slug);
  const previewProject =
    featuredProjects.find((p) => p.slug === previewSlug) ?? featuredProjects[0];
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rows = rowRefs.current;
    // A fixed line near the top of the viewport (just under the fixed nav) —
    // the active project is whichever row's top has most recently scrolled
    // past it, same technique docs sites use for sidebar TOC highlighting.
    // This is what a viewport-*center* band got wrong: landing on the
    // section from a nav click puts the header (not row 1) at the center,
    // so "closest to center" could pick row 2 depending on header height.
    // A fixed top line has no such dependency — with nothing scrolled past
    // it yet, it correctly defaults to row 1.
    const ACTIVATION_LINE = 160;
    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      let activeIdx = 0;
      for (let i = 0; i < rows.length; i++) {
        const top = rows[i]?.getBoundingClientRect().top;
        if (top !== undefined && top <= ACTIVATION_LINE) activeIdx = i;
      }
      setPreviewSlug(featuredProjects[activeIdx].slug);
    };
    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-[1fr_360px] lg:items-start lg:gap-12">
      <div>
        {featuredProjects.map((p, i) => (
          <ProjectRow
            key={p.slug}
            project={p}
            index={i}
            active={p.slug === previewSlug}
            registerRef={(el) => {
              rowRefs.current[i] = el;
            }}
          />
        ))}
      </div>

      <div className="hidden lg:sticky lg:top-28 lg:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={previewProject.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease }}
          >
            <ProjectVisual project={previewProject} />
            <div className="mt-6">
              <p
                className="font-mono text-[10px] tracking-[0.15em] uppercase"
                style={{ color: previewProject.accent.from }}
              >
                {previewProject.category}
              </p>
              <h4 className="font-display text-fg mt-2 text-xl font-bold">{previewProject.name}</h4>
              <p className="text-fg-muted mt-2 text-sm leading-relaxed">{previewProject.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {previewProject.stack.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="border-border text-fg-muted rounded-full border px-2.5 py-1 font-mono text-[10px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
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
              <span className="border-accent/40 text-accent rounded-full border px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase">
                Featured
              </span>
            )}
          </div>
          <p className="text-fg-subtle mt-1.5 flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase">
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
              className="border-border/80 text-fg-subtle group-hover:border-accent/30 group-hover:text-fg-muted rounded border px-2 py-0.5 font-mono text-[10px] transition-colors"
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
        <span className="text-fg-subtle font-mono text-[10px]">{moreProjects.length} projects</span>
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
            Scroll to preview a project. Click to expand the full case study.
          </p>
        </div>

        {/* Featured project rows + sticky live preview */}
        <FeaturedWork />

        {/* More work — scroll-driven index + preview */}
        <MoreWork />
      </div>
    </section>
  );
}
