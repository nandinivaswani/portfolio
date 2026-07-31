"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis-powered inertia scrolling. Disabled under prefers-reduced-motion.
 * Also upgrades in-page anchor links (#work, #contact…) to smooth scroll,
 * offset for the fixed nav.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8, // shorter travel per notch — calmer, more readable
      touchMultiplier: 1.4,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Web fonts (display: "swap") and viewport-triggered reveals can grow
    // the page's height after Lenis has already cached its scroll limit,
    // leaving users stuck short of the real bottom. Force a recompute
    // whenever content is likely to have resized.
    document.fonts?.ready.then(() => lenis.resize());
    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.body);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -64 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
