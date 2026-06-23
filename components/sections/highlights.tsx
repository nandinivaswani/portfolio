import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { careerHighlights, achievements } from "@/content/highlights";

export function Highlights() {
  return (
    <section className="relative scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          eyebrow="Career highlights"
          title={
            <>
              The work I&apos;m{" "}
              <span className="text-gradient">proud of.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {careerHighlights.map((h) => (
              <StaggerItem key={h.title} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6">
                  <div className="card-sheen absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon name={h.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold leading-snug">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted text-pretty">
                      {h.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Achievements panel */}
          <Reveal y={28} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-gradient-to-b from-surface to-bg-soft p-6">
              <p className="mono-label mb-5">Recognition</p>
              <div className="space-y-4">
                {achievements.map((a) => (
                  <div key={a.title} className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-accent">
                      <Icon name={a.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-snug">{a.title}</p>
                      <p className="text-xs text-fg-subtle">{a.org}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-dashed border-border bg-surface/50 p-4">
                  <p className="text-sm leading-relaxed text-fg-muted">
                    <span className="font-semibold text-fg">Innovation-driven:</span>{" "}
                    a national hackathon win and a consistent track record of
                    shipping the hard, novel features first.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
