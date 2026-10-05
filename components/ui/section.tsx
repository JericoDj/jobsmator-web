import { cn } from "@/lib/utils";

/** One band of the page: consistent vertical rhythm and a 72rem reading column. */
export function Section({
  id,
  className,
  children,
  tone = "ground",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "ground" | "surface";
}) {
  return (
    <section id={id} className={cn(tone === "surface" && "bg-surface", "py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

/** Eyebrow, heading and optional lede — every section opens the same way. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cobalt-deep">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {lede && <p className="mt-4 text-lg leading-relaxed text-muted">{lede}</p>}
    </header>
  );
}
