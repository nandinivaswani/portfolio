import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./ui/brand-icons";
import { Container } from "./ui/primitives";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-bg-soft">
      <Container className="py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-sm font-bold text-on-accent">
                N
              </span>
              {site.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              {site.role} · {site.specialism}. {site.availability}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="mono-label mb-3">Navigate</p>
              <ul className="space-y-2 text-sm text-fg-muted">
                {[
                  { label: "Approach", href: "#approach" },
                  { label: "Impact", href: "#impact" },
                  { label: "Work", href: "#work" },
                  { label: "Experience", href: "#experience" },
                  { label: "Contact", href: "#contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-fg">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono-label mb-3">Connect</p>
              <ul className="space-y-2 text-sm text-fg-muted">
                <li>
                  <a href={site.socials.linkedin} className="group inline-flex items-center gap-1.5 transition-colors hover:text-fg">
                    <Linkedin size={14} /> LinkedIn
                    <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a href={site.socials.github} className="group inline-flex items-center gap-1.5 transition-colors hover:text-fg">
                    <Github size={14} /> GitHub
                    <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a href={site.socials.email} className="group inline-flex items-center gap-1.5 transition-colors hover:text-fg">
                    <Mail size={14} /> Email
                    <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind & Motion.</p>
          <p className="font-mono">Designed & engineered for the web.</p>
        </div>
      </Container>
    </footer>
  );
}
