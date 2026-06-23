import { Container, SectionHeading } from "@/components/ui/primitives";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { specialties } from "@/content/skills";
import { site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  I make hard frontend problems
                  <br className="hidden sm:block" /> feel{" "}
                  <span className="text-gradient">simple.</span>
                </>
              }
            />
            <div className="mt-7 space-y-4 text-base leading-relaxed text-fg-muted text-pretty">
              <p>
                I&apos;m {site.firstName}, a Senior Frontend Engineer based in{" "}
                {site.location}. For the last {site.yearsExperience} years I&apos;ve
                lived inside <strong className="text-fg">complex React &amp; Next.js
                applications</strong> — across streaming, global SaaS, AI products,
                content systems and high-traffic marketing.
              </p>
              <p>
                I&apos;m happy to own the parts most engineers avoid. That&apos;s
                meant building a{" "}
                <strong className="text-fg">custom HLS video player</strong> from
                primitives, but also a ~30-language SaaS, a type-safe GraphQL data
                layer for an AI tool, an editorial CMS, and reusable component
                systems that whole teams build on.
              </p>
              <p>
                What ties it together is how I work: I care about the things that
                don&apos;t show up in a demo but decide whether a product is good —
                performance under real traffic, accessibility, internationalization,
                and clean architecture other engineers can extend.
              </p>
            </div>
          </div>

          <Stagger className="grid gap-3 sm:grid-cols-2">
            {specialties.map((s, i) => (
              <StaggerItem key={s.title} className="h-full">
                <SpotlightCard
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  index={i}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
