import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { impactAreas } from "@/content/concept";

export function EngineeringImpact() {
  return (
    <section id="impact" className="relative scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          eyebrow="Engineering impact"
          title={
            <>
              Not technologies —{" "}
              <span className="text-gradient">problems solved.</span>
            </>
          }
          description="Anyone can list a stack. Here's the hard problem behind each project I've shipped — and how I turned it into something users never have to think about."
        />

        <Stagger className="mt-12 grid gap-3 md:grid-cols-2">
          {impactAreas.map((a) => (
            <StaggerItem key={a.title} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_50px_-28px_var(--accent)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon name={a.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {a.title}
                    </h3>
                    <p className="truncate font-mono text-[11px] text-accent">{a.proof}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="mono-label !text-[0.58rem] !text-fg-subtle">
                      The hard part
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted text-pretty">
                      {a.challenge}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-bg-soft p-3.5">
                    <p className="mono-label !text-[0.58rem] inline-flex items-center gap-1.5">
                      <ArrowRight size={11} /> How I solve it
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg text-pretty">
                      {a.solution}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
