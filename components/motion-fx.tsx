"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  useRef,
  useState,
  useEffect,
  useCallback,
  isValidElement,
  cloneElement,
  type ReactNode,
} from "react";

/* ── ScrambleText: hover-triggered decode/scramble effect ────
   Cycles through random characters before settling back to the
   real word, left to right. className fully controls appearance
   (color/font/etc inherit from className if omitted, so it drops
   cleanly into a parent heading's own styling). */
const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

export function ScrambleText({ word, className = "" }: { word: string; className?: string }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(word);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scramble = useCallback(() => {
    let iter = 0;
    const letters = word.split("");
    if (frameRef.current) clearTimeout(frameRef.current);
    const step = () => {
      setDisplay(
        letters
          .map((l, i) =>
            i < iter ? l : scrambleChars[Math.floor(Math.random() * scrambleChars.length)],
          )
          .join(""),
      );
      if (iter < letters.length) {
        iter += 0.4;
        frameRef.current = setTimeout(step, 40);
      }
    };
    step();
  }, [word]);

  useEffect(() => {
    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, []);

  return (
    <span
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => {
        if (!reduce) scramble();
      }}
      onMouseLeave={() => {
        if (frameRef.current) clearTimeout(frameRef.current);
        setDisplay(word);
      }}
    >
      {display}
    </span>
  );
}

/* ── Magnetic: element gently pulls toward the cursor ─────── */
export function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  if (reduce) return <span className={className}>{children}</span>;

  return (
    <motion.span
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.span>
  );
}

/* ── RevealHeading: scroll-linked word-by-word reveal ─────────
   Each word's opacity/blur is tied directly to scroll progress
   through the heading (à la Motion's "Scroll Word Reveal" example)
   instead of a single on/off viewport trigger — words light up in
   sequence as you scroll past, which reads as far more alive than
   a block fade, and it's driven by a continuous scroll value so
   there's no IntersectionObserver on/off edge case to get stuck in. */
function Word({
  progress,
  index,
  total,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  children: ReactNode;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const blurPx = useTransform(progress, [start, end], [6, 0]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;
  return (
    <motion.span style={{ opacity, filter }} className="inline-block will-change-[filter,opacity]">
      {children}
    </motion.span>
  );
}

/** Recursively wraps every word in text nodes with a <Word>, preserving
 *  surrounding elements (e.g. the italic <span>) and whitespace as-is. */
function wrapWords(
  node: ReactNode,
  progress: MotionValue<number>,
  total: number,
  counter: { i: number },
  keyPrefix: string,
): ReactNode {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, i) => {
      if (part.trim() === "") return part;
      const index = counter.i++;
      return (
        <Word key={`${keyPrefix}-${i}`} progress={progress} index={index} total={total}>
          {part}
        </Word>
      );
    });
  }
  if (Array.isArray(node)) {
    return node.map((child, i) => wrapWords(child, progress, total, counter, `${keyPrefix}-${i}`));
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return cloneElement(
      node,
      { key: keyPrefix },
      wrapWords(node.props.children, progress, total, counter, keyPrefix),
    );
  }
  return node;
}

function countWords(node: ReactNode): number {
  if (typeof node === "string") return node.split(/\s+/).filter(Boolean).length;
  if (Array.isArray(node)) return node.reduce((sum: number, child) => sum + countWords(child), 0);
  if (isValidElement<{ children?: ReactNode }>(node)) return countWords(node.props.children);
  return 0;
}

export function RevealHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.35"] });

  if (reduce) return <div className={className}>{children}</div>;

  const total = Math.max(countWords(children), 1);
  const counter = { i: 0 };
  const content = wrapWords(children, scrollYProgress, total, counter, "w");

  return (
    <div ref={ref} className={className}>
      {content}
    </div>
  );
}

/* ── TiltCard: 3D tilt + cursor spotlight ─────────────────── */
export function TiltCard({
  children,
  className = "",
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rxRaw = useMotionValue(0);
  const ryRaw = useMotionValue(0);
  const rx = useSpring(rxRaw, { stiffness: 150, damping: 15, mass: 0.5 });
  const ry = useSpring(ryRaw, { stiffness: 150, damping: 15, mass: 0.5 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const go = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const glow = useMotionTemplate`radial-gradient(240px circle at ${gx}% ${gy}%, var(--accent-soft), transparent 72%)`;

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        ryRaw.set((px - 0.5) * 2 * max);
        rxRaw.set(-(py - 0.5) * 2 * max);
        gx.set(px * 100);
        gy.set(py * 100);
        go.set(1);
      }}
      onMouseLeave={() => {
        rxRaw.set(0);
        ryRaw.set(0);
        go.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
        style={{ background: glow, opacity: go }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
}
