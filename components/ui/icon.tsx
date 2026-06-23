import {
  Code2,
  PlayCircle,
  Database,
  Gauge,
  Network,
  CreditCard,
  Globe,
  Layers,
  Rocket,
  Star,
  Trophy,
  Medal,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Code2,
  PlayCircle,
  Database,
  Gauge,
  Network,
  CreditCard,
  Globe,
  Layers,
  Rocket,
  Star,
  Trophy,
  Medal,
};

export function Icon({
  name,
  className,
  ...props
}: { name: string; className?: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = map[name] ?? Code2;
  return <Cmp className={className} aria-hidden {...props} />;
}
