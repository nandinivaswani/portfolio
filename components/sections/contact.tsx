"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/brand-icons";
import { site } from "@/content/site";
import { SectionGlow } from "@/components/section-fx";
import { HexField } from "@/components/section-bg";
import { Magnetic } from "@/components/motion-fx";

const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  { label: "GitHub", href: site.socials.github, icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
  { label: "Email", href: site.socials.email, icon: Mail },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-border relative isolate scroll-mt-16 overflow-hidden border-t"
    >
      <SectionGlow className="top-1/3 right-[-6%] h-[520px] w-[520px]" opacity={0.08} />
      <HexField />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="border-border border-b py-20 md:py-24">
          <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase">05 // Contact</p>
        </div>

        {/* Giant CTA block */}
        <div className="flex flex-col items-start py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-fg-muted mb-6 max-w-md text-lg"
          >
            Have a product that deserves world-class frontend engineering — streaming, SaaS or
            something new? Let&apos;s talk.
          </motion.p>

          <motion.a
            href={`mailto:${site.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            whileHover={{ x: 6 }}
            className="group flex items-baseline gap-4"
          >
            <span
              className="font-display text-fg group-hover:text-accent leading-[0.9] font-extrabold tracking-tight transition-colors duration-300"
              style={{ fontSize: "clamp(28px, 5.5vw, 72px)", wordBreak: "break-word" }}
            >
              {site.email}
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-accent self-center text-2xl"
            >
              →
            </motion.span>
          </motion.a>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="bg-border mt-16 h-px w-full origin-left"
          />

          {/* Bottom strip */}
          <div className="mt-12 flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
              <span className="text-fg text-sm font-medium">
                {site.availability} — {site.locationShort}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {socials.map(({ label, href, icon: Icon }) => (
                <Magnetic key={label} strength={0.4}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="border-border text-fg-muted hover:border-fg/30 hover:text-fg flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
                  >
                    <Icon className="h-4 w-4" size={16} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
