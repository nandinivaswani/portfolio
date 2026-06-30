"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/brand-icons";
import { Container, buttonStyles } from "@/components/ui/primitives";
import { TransformFlow } from "@/components/transform-flow";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section
      id="top"
      className="grain relative overflow-hidden pt-32 pb-20 sm:pt-36"
    >
      {/* Background mesh glows + grid */}
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
            maskImage: "radial-gradient(ellipse 80% 55% at 50% 30%, black, transparent)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item} className="flex justify-center">
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
            className="mt-6 font-display text-[clamp(2.25rem,6vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-balance"
          >
            Turning complex systems into{" "}
            <span className="text-gradient">intuitive experiences.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty"
          >
            Designs are ideas. APIs are data. I build the experience between
            them. I&apos;m {site.firstName} — a {site.role.toLowerCase()} with{" "}
            {site.yearsExperience} years turning custom video players, ~30-language
            SaaS and AI products into fast, accessible experiences people
            actually understand.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="#work" className={buttonStyles("primary")}>
              See the work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
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

          {/* Credibility strip — real numbers */}
          <motion.dl
            variants={item}
            className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
          >
            {site.heroStats.map((s) => (
              <div key={s.label} className="bg-bg-soft px-4 py-3.5 text-center">
                <dt className="font-display text-xl font-bold text-fg sm:text-2xl">
                  {s.value}
                </dt>
                <dd className="mt-0.5 text-[11px] leading-snug text-fg-subtle">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* The transformation centerpiece */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="mx-auto mt-16 max-w-5xl rounded-[1.75rem] border border-border bg-bg-soft/60 p-4 backdrop-blur sm:p-7"
        >
          <TransformFlow />
        </motion.div>
      </Container>
    </section>
  );
}
