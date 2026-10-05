import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "inverseGhost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-cobalt text-white hover:bg-cobalt-deep",
  secondary: "border border-line-strong bg-card text-ink hover:border-cobalt hover:text-cobalt-deep",
  ghost: "text-ink hover:text-cobalt-deep",
  // For the ink panels: declared here so these never collide with a variant's
  // own text colour the way an appended `text-*` class would.
  inverse: "bg-white text-[color:var(--jm-ink)] hover:bg-white/90",
  inverseGhost: "text-white/80 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: React.ReactNode };

/** Link styled as a button — the marketing pages' default, since nearly every CTA navigates. */
export function ButtonLink({ href, variant = "primary", size = "md", className, children, ...rest }: Common & { href: string } & React.ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({ variant = "primary", size = "md", className, children, ...rest }: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
