import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

type ButtonProps = {
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  children: ReactNode;
} & ComponentProps<typeof Link>;

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(buttonStyles(variant), className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export function buttonStyles(variant: "primary" | "outline" | "ghost" = "primary") {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary:
      "bg-accent text-on-accent hover:brightness-110 hover:shadow-[0_8px_30px_-8px_var(--accent)] shadow-[0_4px_20px_-10px_var(--accent)]",
    outline:
      "border border-border bg-surface/60 text-fg hover:border-accent hover:text-accent backdrop-blur",
    ghost: "text-fg-muted hover:text-fg hover:bg-surface-2",
  };
  return cn(base, variants[variant]);
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <span className="mono-label">{eyebrow}</span>}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.6rem] text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-fg-muted text-pretty",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
