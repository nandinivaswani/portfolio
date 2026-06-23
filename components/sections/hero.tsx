"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowDown, Sparkles, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/brand-icons";
import { Container, buttonStyles } from "@/components/ui/primitives";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background mesh glows */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="glow absolute -top-32 -left-20 h-[420px] w-[420px] opacity-30 dark:opacity-40 animate-float" />
        <div
          className="glow absolute top-1/3 -right-24 h-[460px] w-[460px] opacity-20 dark:opacity-30"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-fg-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {site.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.02] tracking-tight"
          >
            Senior Frontend Engineer
            <br />
            <span className="text-gradient">who builds the hard parts.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty"
          >
            {site.tagline} {site.yearsExperience} years turning hard problems —
            custom video players, type-safe GraphQL data layers, multi-language
            SaaS — into fast, accessible products.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="#work" className={buttonStyles("primary")}>
              <Sparkles size={16} />
              View featured work
            </Link>
            <Link href="/resume" className={buttonStyles("outline")}>
              View resume
            </Link>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: site.socials.github, icon: Github, label: "GitHub" },
                { href: site.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: site.socials.email, icon: Mail, label: "Email" },
              ].map(({ href, icon: I, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-fg-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <I size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Trust / stats bar */}
          <motion.dl
            variants={item}
            className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
          >
            {site.heroStats.map((s) => (
              <div key={s.label} className="bg-surface px-5 py-4">
                <dt className="font-display text-2xl font-bold text-fg">{s.value}</dt>
                <dd className="mt-0.5 text-xs leading-snug text-fg-subtle">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className={cn(
          "absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-fg-subtle",
        )}
      >
        <ArrowDown size={18} className="animate-bounce" aria-hidden />
      </motion.div>
    </section>
  );
}
