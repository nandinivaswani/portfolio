import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/brand-icons";
import { Container, buttonStyles } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24">
      <Container>
        <Reveal y={28}>
          <div className="grain relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-surface to-bg-soft p-8 sm:p-14">
            <div
              className="glow absolute -top-20 left-1/2 h-72 w-[560px] -translate-x-1/2 opacity-20"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <span className="mono-label">Contact</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl text-balance">
                Let&apos;s build something{" "}
                <span className="text-gradient">worth streaming.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-fg-muted text-pretty">
                I&apos;m currently {site.availability.toLowerCase()}. If you&apos;re
                building a media platform, a complex React product, or just need a
                senior frontend engineer who owns the hard parts — let&apos;s talk.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href={site.socials.email} className={buttonStyles("primary")}>
                  <Mail size={16} />
                  {site.email}
                </a>
                <Link href="/resume" className={buttonStyles("outline")}>
                  <FileText size={16} />
                  View resume
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-fg-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} /> {site.locationShort}
                </span>
                <a
                  href={site.socials.linkedin}
                  className="group inline-flex items-center gap-1.5 transition-colors hover:text-fg"
                >
                  <Linkedin size={14} /> LinkedIn
                  <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <a
                  href={site.socials.github}
                  className="group inline-flex items-center gap-1.5 transition-colors hover:text-fg"
                >
                  <Github size={14} /> GitHub
                  <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
