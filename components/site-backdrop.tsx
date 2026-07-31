"use client";

import { useEffect, useRef } from "react";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const m = hex.replace("#", "").trim();
  if (m.length === 3) {
    return {
      r: parseInt(m[0] + m[0], 16),
      g: parseInt(m[1] + m[1], 16),
      b: parseInt(m[2] + m[2], 16),
    };
  }
  if (m.length >= 6) {
    return {
      r: parseInt(m.slice(0, 2), 16),
      g: parseInt(m.slice(2, 4), 16),
      b: parseInt(m.slice(4, 6), 16),
    };
  }
  return { r: 167, g: 139, b: 250 };
}

/**
 * Site-wide living backdrop:
 *  1. A slow-drifting mesh-gradient aurora (CSS-animated blobs) — the "alive
 *     even when idle" baseline.
 *  2. A faint dot-grid on canvas that reacts to the cursor: dots near the
 *     pointer brighten, grow and drift outward, so the motion is driven by the
 *     user rather than idle decoration.
 * Fixed behind all content, very low opacity so it never competes with text.
 * Under prefers-reduced-motion the grid is a single static frame and the
 * aurora is frozen by the global reduced-motion rule.
 */
export function SiteBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const accentVar = getComputedStyle(document.documentElement).getPropertyValue("--accent");
    const c = hexToRgb(accentVar || "#a78bfa");

    let w = 0;
    let h = 0;
    let gap = 34 * dpr;
    let raf = 0;

    // pointer in device pixels; start off-screen so nothing is highlighted
    let mx = -9999;
    let my = -9999;
    // eased pointer for smooth trailing influence
    let ex = mx;
    let ey = my;
    let t = 0; // seconds, drives the ambient wave
    const radius = () => Math.min(190, window.innerWidth * 0.16) * dpr;

    const build = () => {
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gap = (window.innerWidth < 640 ? 28 : 36) * dpr;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const R = radius();
      const baseAlpha = 0.05;
      const dotBase = 0.9 * dpr;

      // Cursor-following light pool — a soft accent glow behind the dots so
      // the brightened grid sits inside a moving spotlight.
      const onScreen = ex > 0 && ex < w && ey > 0 && ey < h;
      if (onScreen) {
        const gR = R * 1.5;
        const glow = ctx.createRadialGradient(ex, ey, 0, ex, ey, gR);
        glow.addColorStop(0, `rgba(${c.r},${c.g},${c.b},0.14)`);
        glow.addColorStop(0.45, `rgba(${c.r},${c.g},${c.b},0.05)`);
        glow.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(ex, ey, gR, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          // Ambient life: two slow waves travelling across the grid so it
          // breathes/shimmers on its own, independent of the cursor.
          const phase = ((x + y) / gap) * 0.55 - t * 1.4;
          const phase2 = ((x - y * 0.6) / gap) * 0.4 + t * 0.9;
          const wave = (Math.sin(phase) * 0.6 + Math.sin(phase2) * 0.4) * 0.5 + 0.5; // 0..1
          let alpha = baseAlpha + wave * 0.06;
          let r = dotBase * (0.85 + wave * 0.4);

          const dx = x - ex;
          const dy = y - ey;
          const dist = Math.hypot(dx, dy);
          let ox = 0;
          let oy = 0;
          if (dist < R) {
            const k = 1 - dist / R; // 0..1, strongest at cursor
            alpha += k * 0.5; // adds on top of the ambient wave
            r += k * 1.6 * dpr;
            // gentle outward push so the grid "parts" around the cursor
            const push = k * 6 * dpr;
            ox = (dx / (dist || 1)) * push;
            oy = (dy / (dist || 1)) * push;
          }
          ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
          ctx.beginPath();
          ctx.arc(x + ox, y + oy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (ts: number) => {
      t = ts / 1000;
      ex += (mx - ex) * 0.12;
      ey += (my - ey) * 0.12;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX * dpr;
      my = e.clientY * dpr;
    };
    const onLeave = () => {
      mx = -9999;
      my = -9999;
    };

    build();
    if (reduce) {
      draw();
    } else {
      ex = mx;
      ey = my;
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseout", onLeave);
      raf = requestAnimationFrame(loop);
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        build();
        if (reduce) draw();
      }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Mesh-gradient aurora — slow-drifting accent blobs */}
      <div
        className="absolute -top-48 -left-48 h-[620px] w-[620px] rounded-full blur-[150px]"
        style={{
          background: "var(--accent)",
          opacity: 0.07,
          animation: "aurora-a 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/4 -right-48 h-[560px] w-[560px] rounded-full blur-[150px]"
        style={{
          background: "var(--accent-2)",
          opacity: 0.06,
          animation: "aurora-b 32s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-12rem] left-1/3 h-[520px] w-[520px] rounded-full blur-[160px]"
        style={{
          background: "var(--accent)",
          opacity: 0.045,
          animation: "aurora-c 38s ease-in-out infinite",
        }}
      />
      {/* Cursor-reactive dot-grid + cursor light pool */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Fine grain for depth */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Soft vignette so the center / cursor pool reads brighter */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 40%, transparent 55%, color-mix(in oklab, var(--bg) 65%, transparent) 100%)",
        }}
      />
    </div>
  );
}
