import { Container, SectionHeading } from "@/components/ui/primitives";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { moreProjects } from "@/content/more-projects";

export function MoreProjects() {
  return (
    <section className="relative scroll-mt-24 pb-8">
      <Container>
        <SectionHeading
          eyebrow="More work"
          title={
            <>
              A wider body of <span className="text-gradient">production work.</span>
            </>
          }
          description="Beyond the case studies above — streaming platforms, content-management dashboards, portals, marketing sites and enterprise tools I've shipped across React, Next.js and GraphQL."
        />

        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <article className="group border-border bg-surface hover:border-accent/40 relative flex h-full flex-col overflow-hidden rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_44px_-22px_var(--accent)]">
                <span
                  className="via-accent absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="mono-label !text-fg-subtle group-hover:!text-accent !text-[0.62rem] transition-colors">
                  {p.category}
                </span>
                <h3 className="font-display mt-2 text-lg font-semibold tracking-tight">{p.name}</h3>
                <p className="text-fg-muted mt-1.5 flex-1 text-sm leading-relaxed text-pretty">
                  {p.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border-border bg-surface-2 text-fg-subtle rounded-md border px-2 py-0.5 text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
