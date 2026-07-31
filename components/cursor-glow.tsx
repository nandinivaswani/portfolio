"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Soft accent glow that trails the cursor — desktop only, purely decorative. */
export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { damping: 28, stiffness: 140 });
  const sy = useSpring(y, { damping: 28, stiffness: 140 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[9998] hidden h-[560px] w-[560px] rounded-full mix-blend-screen lg:block"
      style={{
        left: sx,
        top: sy,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--accent) 24%, transparent) 0%, color-mix(in oklab, var(--accent) 10%, transparent) 36%, transparent 68%)",
      }}
    />
  );
}
