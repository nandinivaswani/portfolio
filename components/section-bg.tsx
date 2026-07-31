"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   Distinctive per-section techie backdrops, ported from the
   Replit "Motion Design Studio" design and re-themed to our
   violet accent + design tokens. All are:
     • decorative, pointer-events-none, absolute inset-0 -z-10
     • theme-aware (read --accent at mount)
     • reduced-motion aware (single static frame, no rAF)
     • paused while off-screen (IntersectionObserver) for perf
   Sit inside a `relative isolate overflow-hidden` section so the
   -z-10 layer paints above the global backdrop, below content.
   ───────────────────────────────────────────────────────────── */

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

function readAccent(): { r: number; g: number; b: number } {
  if (typeof window === "undefined") return { r: 167, g: 139, b: 250 };
  const v = getComputedStyle(document.documentElement).getPropertyValue("--accent");
  return hexToRgb(v || "#a78bfa");
}

const softMask = "radial-gradient(ellipse at center, #000 0%, #000 55%, transparent 82%)";

/* ── Circuit traces with travelling pulses (WhyFE) ─────────── */
interface Path {
  x1: number;
  y1: number;
  cx: number;
  cy: number;
  x2: number;
  y2: number;
  t: number;
  speed: number;
  delay: number;
  started: boolean;
}

function buildPaths(w: number, h: number, count = 26): Path[] {
  const SNAP = 60;
  const snap = (v: number) => Math.round(v / SNAP) * SNAP;
  return Array.from({ length: count }, (_, i) => {
    const x1 = snap(Math.random() * w);
    const y1 = snap(Math.random() * h);
    const goRight = Math.random() > 0.5;
    const len1 = (Math.floor(Math.random() * 4) + 2) * SNAP;
    const len2 = (Math.floor(Math.random() * 4) + 2) * SNAP;
    const cx = goRight ? x1 + len1 : x1 - len1;
    const cy = y1;
    const x2 = cx;
    const y2 = Math.random() > 0.5 ? cy + len2 : cy - len2;
    return {
      x1,
      y1,
      cx,
      cy,
      x2,
      y2,
      t: Math.random(),
      speed: 0.0003 + Math.random() * 0.0003,
      delay: i * 0.12,
      started: false,
    };
  });
}

export function CircuitField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { r, g, b } = readAccent();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let paths: Path[] = [];
    let last = 0;
    let elapsed = 0;
    let running = false;

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      paths = buildPaths(canvas.width, canvas.height);
      elapsed = 9999; // reveal instantly on (re)size
    };

    const draw = (now: number) => {
      const dt = running ? now - last : 16;
      last = now;
      elapsed += dt;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (const p of paths) {
        if (!p.started && elapsed > p.delay * 1000) p.started = true;
        if (!p.started) continue;

        ctx.beginPath();
        ctx.moveTo(p.x1, p.y1);
        ctx.lineTo(p.cx, p.cy);
        ctx.lineTo(p.x2, p.y2);
        ctx.strokeStyle = `rgba(${r},${g},${b},0.06)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        for (const [nx, ny] of [
          [p.x1, p.y1],
          [p.cx, p.cy],
          [p.x2, p.y2],
        ]) {
          ctx.beginPath();
          ctx.arc(nx, ny, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},0.2)`;
          ctx.fill();
        }

        if (running) {
          p.t += p.speed * dt;
          if (p.t > 1) p.t = 0;
        }
        let px: number, py: number;
        if (p.t < 0.5) {
          px = p.x1 + (p.cx - p.x1) * (p.t * 2);
          py = p.y1;
        } else {
          px = p.cx;
          py = p.cy + (p.y2 - p.cy) * ((p.t - 0.5) * 2);
        }
        const grd = ctx.createRadialGradient(px, py, 0, px, py, 8);
        grd.addColorStop(0, `rgba(${r},${g},${b},0.75)`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
        ctx.fill();
      }

      if (running) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const ro = new ResizeObserver(() => {
      init();
      if (reduce) draw(performance.now());
    });
    ro.observe(canvas);
    init();
    if (reduce) {
      draw(performance.now());
    } else {
      const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), {
        threshold: 0,
      });
      io.observe(canvas);
      return () => {
        stop();
        ro.disconnect();
        io.disconnect();
      };
    }
    return () => {
      stop();
      ro.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      style={{ maskImage: softMask, WebkitMaskImage: softMask }}
    >
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

/* ── Hexagon grid with random glowing cells (Contact) ─────── */
interface Hex {
  cx: number;
  cy: number;
  glow: number;
  target: number;
  timer: number;
}

export function HexField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { r, g, b } = readAccent();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const SIZE = 34;
    const W_STEP = SIZE * Math.sqrt(3);
    const H_STEP = SIZE * 1.5;
    let hexes: Hex[] = [];
    let raf = 0;
    let frame = 0;
    let running = false;

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      hexes = [];
      const cols = Math.ceil(canvas.width / W_STEP) + 2;
      const rows = Math.ceil(canvas.height / H_STEP) + 2;
      for (let rr = -1; rr < rows; rr++) {
        for (let c = -1; c < cols; c++) {
          const cx = c * W_STEP + (rr % 2 === 0 ? 0 : W_STEP / 2);
          const cy = rr * H_STEP;
          hexes.push({ cx, cy, glow: 0, target: 0, timer: Math.random() * 200 });
        }
      }
    };

    const drawHex = (cx: number, cy: number, alpha: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + SIZE * Math.cos(angle);
        const y = cy + SIZE * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(${r},${g},${b},${0.04 + alpha * 0.2})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
      if (alpha > 0.3) {
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.05})`;
        ctx.fill();
      }
    };

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (running && frame % 8 === 0 && Math.random() < 0.5) {
        const hh = hexes[Math.floor(Math.random() * hexes.length)];
        hh.target = 1;
        hh.timer = 60;
      }
      for (const hh of hexes) {
        if (running && hh.timer > 0) {
          hh.timer--;
          if (hh.timer === 0) hh.target = 0;
        }
        hh.glow += (hh.target - hh.glow) * 0.06;
        drawHex(hh.cx, hh.cy, hh.glow);
      }
      if (running) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const ro = new ResizeObserver(() => {
      init();
      draw();
    });
    ro.observe(canvas);
    init();
    if (reduce) {
      draw();
    } else {
      const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), {
        threshold: 0,
      });
      io.observe(canvas);
      return () => {
        stop();
        ro.disconnect();
        io.disconnect();
      };
    }
    return () => {
      stop();
      ro.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      style={{ maskImage: softMask, WebkitMaskImage: softMask }}
    >
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

/* ── Scrolling git commit log (Projects) ──────────────────── */
// Grounded in Nandini's real stack & work (HLS player, Apollo GraphQL,
// i18n, Stripe, next-auth, MobX, Ant Design, Firebase, react-player).
const commits = [
  "a4b3c2d feat: custom HLS player — adaptive streaming + storyboard scrub",
  "9f1e7b8 feat: resume-where-you-left-off across sessions",
  "3c2a1f5 perf: Apollo cache-first policy — fewer network round-trips",
  "e8d4f92 feat: live video + chat for the streaming product",
  "7b6c3e1 feat: i18n — localized into ~30 locales, RTL-safe",
  "2f9a8d4 feat: white-label engine — one codebase, many brands",
  "c1d5e3a feat: Stripe subscriptions, donations & content gating",
  "4e7f2b9 chore: migrate to Next.js 16 + React 19 + Apollo 4",
  "8a3c6d0 feat: next-auth single-login, dual-session cookie flow",
  "6b1f4e7 feat: GraphQL Codegen — end-to-end type-safe queries",
  "1e5d8c2 feat: playback analytics wired via Matomo",
  "f3a7e9b feat: ship CardZap as an offline-capable PWA",
  "0d2b5f8 feat: subtitle + audio-track switching in player core",
  "9c4a1e6 fix: video element cleanup on route change",
  "5f8d3b2 feat: role-based access control across dashboards",
  "b2e6f7a feat: Firebase auth for the CardZap product",
  "7a1c4d9 perf: React lazy queries — defer non-critical data",
  "3d8b2f5 feat: Ant Design admin — data-dense tables & forms",
  "e4f1a7c feat: react-player integration with custom controls",
  "c9b3d6e feat: MobX stores for complex client state",
  "2a7f5b1 feat: fullscreen + iOS playback handling",
  "8f4e2c9 feat: blurhash placeholders for media-heavy grids",
  "1b6d3a8 fix: hydration mismatch in SSR date formatting",
  "6c2f9e4 perf: Core Web Vitals tuning for spiky traffic",
  "4a8b1d7 feat: CMS-driven slug-routed marketing pages",
  "d5f3c2e feat: shared component library across brands",
];
const half = Math.ceil(commits.length / 2);
const cols = [commits.slice(0, half), commits.slice(half)];

export function GitLogField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none ${className}`}
    >
      <div className="flex gap-12 px-8 pt-8" style={{ opacity: 0.12 }}>
        {cols.map((col, ci) => (
          <div
            key={ci}
            className="flex-1 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            <div
              className="git-log-scroll"
              style={{
                animation: `git-log-up ${ci === 0 ? 30 : 38}s linear infinite`,
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                lineHeight: "1.9",
                whiteSpace: "nowrap",
              }}
            >
              {[...col, ...col].map((c, i) => (
                <div key={i} className="flex gap-3">
                  <span style={{ color: "color-mix(in oklab, var(--accent) 85%, transparent)" }}>
                    {c.slice(0, 7)}
                  </span>
                  <span style={{ color: "var(--fg-muted)" }}>{c.slice(8)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
