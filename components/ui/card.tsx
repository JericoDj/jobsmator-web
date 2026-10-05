import { cn } from "@/lib/utils";

/** The app's card: white, hairline border, 14px radius. Shadow only when it lifts. */
export function Card({ className, children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-[14px] border border-line bg-card", className)} {...rest}>
      {children}
    </div>
  );
}
