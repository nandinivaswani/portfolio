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
              The work I&apos;m <span className="text-gradient">proud of.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {careerHighlights.map((h) => (
              <StaggerItem key={h.title} className="h-full">
                <div className="group border-border bg-surface relative h-full overflow-hidden rounded-2xl border p-6">
                  <div className="card-sheen absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <span className="bg-accent-soft text-accent inline-flex h-11 w-11 items-center justify-center rounded-xl">
                      <Icon name={h.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-4 text-base leading-snug font-semibold">
                      {h.title}
                    </h3>
                    <p className="text-fg-muted mt-2 text-sm leading-relaxed text-pretty">
                      {h.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Achievements panel */}
          <Reveal y={28} className="h-full">
            <div className="border-border from-surface to-bg-soft flex h-full flex-col rounded-2xl border bg-gradient-to-b p-6">
              <p className="mono-label mb-5">Recognition</p>
              <div className="space-y-4">
                {achievements.map((a) => (
                  <div key={a.title} className="flex items-start gap-3.5">
                    <span className="border-border bg-surface text-accent grid h-10 w-10 shrink-0 place-items-center rounded-xl border">
                      <Icon name={a.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm leading-snug font-semibold">{a.title}</p>
                      <p className="text-fg-subtle text-xs">{a.org}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <div className="border-border bg-surface/50 rounded-xl border border-dashed p-4">
                  <p className="text-fg-muted text-sm leading-relaxed">
                    <span className="text-fg font-semibold">Innovation-driven:</span> a national
                    hackathon win and a consistent track record of shipping the hard, novel features
                    first.
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
