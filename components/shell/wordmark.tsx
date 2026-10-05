import Image from "next/image";

/**
 * The product's own mark — the assistant's face, one eye a check — beside the
 * Outfit wordmark. Same PNG the apps ship as their launcher icon, so the thing
 * on someone's home screen and the thing in this header are the same object.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/logo-robot.png"
        alt=""
        width={120}
        height={120}
        priority
        className="h-8 w-8 shrink-0"
      />
      <span className="font-display text-[19px] font-bold tracking-tight text-ink">JobsMator</span>
    </span>
  );
}
