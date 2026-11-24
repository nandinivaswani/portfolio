"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { buttonStyles } from "./ui/primitives";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { Magnetic } from "./motion-fx";

const links = [
  { href: "#about", label: "About", index: "01" },
  { href: "#work", label: "Work", index: "02" },
  { href: "#experience", label: "Experience", index: "03" },
  { href: "#skills", label: "Skills", index: "04" },
  { href: "#ai", label: "AI Workflow", index: "05" },
  { href: "#contact", label: "Contact", index: "06" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link whose section is in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        }
        // pick the most-visible section currently intersecting the active band
        let best = "";
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio >= bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        // Sections like Principles sit between tracked anchors with no nav
        // link of their own — keep the last matched link highlighted through
        // those gaps instead of clearing to nothing.
        if (best) setActive(best);
      },
      // active band = upper-middle of the viewport, below the fixed nav
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "relative flex max-w-[95vw] flex-shrink-0 items-center gap-4 overflow-hidden rounded-full px-4 py-2.5 transition-all duration-300 sm:gap-6 sm:px-5 md:gap-8",
          scrolled
            ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)]"
            : "border border-transparent",
        )}
      >
        {/* Scroll-progress line along the pill's bottom edge */}
        <motion.span
          aria-hidden
          className="bg-accent/70 pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="flex items-center gap-8">
          <Magnetic strength={0.15}>
            <Link
              href="#top"
              className="group font-display flex items-center gap-2.5 pl-1 text-lg font-extrabold"
            >
              <span className="bg-accent h-2 w-2 flex-shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125" />
              <span>
                <span className="text-fg mr-1.5">{site.firstName}</span>
                <span className="text-accent transition-[text-shadow] duration-300 group-hover:[text-shadow:0_0_18px_var(--accent-soft)]">
                  {site.lastName}
                </span>
              </span>
            </Link>
          </Magnetic>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-base font-medium transition-colors",
                    isActive ? "text-fg font-semibold" : "text-fg-muted hover:text-fg",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="bg-accent-soft border-accent/25 absolute inset-0 -z-10 rounded-full border"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={cn(
                      "font-mono text-[10px] transition-colors",
                      isActive ? "text-accent" : "text-fg-subtle",
                    )}
                  >
                    {l.index}
                  </span>
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/resume"
            className={cn(buttonStyles("primary"), "hidden px-4 py-2 text-[13px] sm:inline-flex")}
          >
            Resume
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="border-border text-fg-muted grid h-9 w-9 place-items-center rounded-full border md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute top-20 z-50 w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-2xl p-2 md:hidden"
          >
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-accent-soft border-accent/25 text-fg border font-semibold"
                      : "text-fg-muted hover:bg-surface-2 hover:text-fg",
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "font-mono text-[10px]",
                        isActive ? "text-accent" : "text-fg-subtle",
                      )}
                    >
                      {l.index}
                    </span>
                    {l.label}
                  </span>
                  {isActive && <span className="bg-accent h-1.5 w-1.5 rounded-full" />}
                </Link>
              );
            })}
            <Link
              href="/resume"
              onClick={() => setOpen(false)}
              className={cn(buttonStyles("primary"), "mt-1 w-full")}
            >
              View Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
