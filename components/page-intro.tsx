"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useState, useEffect } from "react";
import { site } from "@/content/site";

const ease = [0.16, 1, 0.3, 1] as const;

function SplitReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className="inline-flex overflow-hidden" style={{ lineHeight: "inherit" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className={`inline-block ${className ?? ""}`}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: delay + i * 0.05, duration: 0.7, ease }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * Full-screen name-reveal opener (adapted from the Replit design, re-themed
 * to our accent). Shown once per browser session — subsequent navigations in
 * the same session skip it so it never feels repetitive. Respects reduced
 * motion by not rendering at all.
 */
export function PageIntro() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem("intro-seen")) return;
    sessionStorage.setItem("intro-seen", "1");
    // One-time mount check against sessionStorage (external system), not derivable during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {show && (
        <motion.div
          key="intro"
          className="bg-bg fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Corner brackets */}
          {[
            "top-6 left-6 border-t border-l",
            "top-6 right-6 border-t border-r",
            "bottom-6 left-6 border-b border-l",
            "bottom-6 right-6 border-b border-r",
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`border-accent/40 absolute h-8 w-8 ${cls}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            />
          ))}

          <div className="text-center select-none">
            {/* Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5, ease }}
              className="border-accent/50 text-accent mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full border font-mono font-bold"
            >
              {site.firstName[0]}
              {site.lastName[0]}
            </motion.div>

            {/* Name */}
            <h1
              className="font-display leading-[0.88] font-extrabold tracking-tighter"
              style={{ fontSize: "clamp(64px, 14vw, 200px)" }}
            >
              <span className="block overflow-hidden">
                <SplitReveal text={site.firstName.toUpperCase()} className="text-fg" delay={0.3} />
              </span>
              <span className="block overflow-hidden">
                <SplitReveal
                  text={`${site.lastName.toUpperCase()}.`}
                  className="text-accent"
                  delay={0.55}
                />
              </span>
            </h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-fg-muted mt-6 font-mono text-xs tracking-[0.25em] uppercase md:text-sm"
            >
              {site.role}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.7, ease }}
              className="bg-accent mx-auto mt-6 h-px w-48 origin-center"
            />
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.4, ease: "linear" }}
            className="bg-accent/60 absolute bottom-0 left-0 h-px w-full origin-left"
          />

          {/* Radial glow behind text */}
          <div
            className="pointer-events-none absolute h-[600px] w-[600px]"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent) 9%, transparent) 0%, transparent 65%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
