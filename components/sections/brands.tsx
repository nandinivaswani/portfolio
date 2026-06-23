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
      className="border-y border-border bg-bg-soft py-8"
      aria-label="Products and brands worked on"
    >
      <Container>
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
          Frontend engineering for products people actually use
        </p>
      </Container>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap font-display text-lg font-semibold text-fg-subtle transition-colors hover:text-fg sm:text-xl"
            >
              {b}
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee items-center gap-12 pr-12"
          aria-hidden
        >
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`dup-${b}-${i}`}
              className="whitespace-nowrap font-display text-lg font-semibold text-fg-subtle sm:text-xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
