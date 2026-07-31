import { Container } from "@/components/ui/primitives";

const brands = [
  "DailyWire",
  "He Gets Us",
  "Zeale",
  "CardZap",
  "EduScan AI",
  "Big Time Rush",
  "FRC",
  "ThinQ Media",
];

export function Brands() {
  return (
    <section
      className="border-border bg-bg-soft border-y py-8"
      aria-label="Products and brands worked on"
    >
      <Container>
        <p className="text-fg-subtle mb-5 text-center text-xs font-medium tracking-[0.18em] uppercase">
          Frontend engineering for products people actually use
        </p>
      </Container>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-fg-subtle hover:text-fg text-lg font-semibold whitespace-nowrap transition-colors sm:text-xl"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12" aria-hidden>
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`dup-${b}-${i}`}
              className="font-display text-fg-subtle text-lg font-semibold whitespace-nowrap sm:text-xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
