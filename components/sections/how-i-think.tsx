import { Container, SectionHeading } from "@/components/ui/primitives";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { principles } from "@/content/concept";

export function HowIThink() {
  return (
    <section id="mindset" className="relative scroll-mt-24 bg-bg-soft py-24">
      <Container>
        <SectionHeading
          eyebrow="How I think"
          title={
            <>
              The mindset behind the{" "}
              <span className="text-gradient">interface.</span>
            </>
          }
          description="Tools change every year. After 4.5+ years across streaming, global SaaS and AI products, these are the principles I actually build by — and where each one showed up in my work."
        />

        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <StaggerItem key={p.title} className="h-full">
              <SpotlightCard
                icon={p.icon}
                title={p.title}
                description={p.description}
                index={i}
                footnote={p.example}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
