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
  Brain,
  Truck,
  CalendarDays,
  Building2,
  DoorOpen,
  CalendarClock,
  Megaphone,
  Users,
  Newspaper,
  LayoutDashboard,
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
  Brain,
  Truck,
  CalendarDays,
  Building2,
  DoorOpen,
  CalendarClock,
  Megaphone,
  Users,
  Newspaper,
  LayoutDashboard,
};

export function Icon({
  name,
  className,
  ...props
}: { name: string; className?: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = map[name] ?? Code2;
  return <Cmp className={className} aria-hidden {...props} />;
}
