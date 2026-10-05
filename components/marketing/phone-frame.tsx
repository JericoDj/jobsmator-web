import Image from "next/image";

/**
 * The app itself, in a device shell drawn with borders rather than a bitmap —
 * it stays sharp at any size and inherits the page's own line colour, so the
 * screenshot looks set into the page instead of pasted onto it. Tilted a
 * couple of degrees and lifted on a soft shadow so it has somewhere to sit.
 */
export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[20rem] lg:max-w-[22rem]">
      <div
        aria-hidden
        className="absolute -inset-x-6 -bottom-6 top-10 -z-10 rounded-[3rem] bg-[var(--jm-cobalt-tint)] blur-2xl opacity-60"
      />
      <div className="rotate-[-1.5deg] rounded-[2.5rem] border border-line-strong/70 bg-card p-2.5 shadow-[0_28px_60px_-24px_rgba(11,31,58,.45)]">
        <div className="relative overflow-hidden rounded-[2rem] bg-surface">
          {/* Drawn, not screenshotted: the real status bar carried a half-scrolled
              ticker, and a clock frozen at one minute dates the shot. */}
          <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-semibold text-ink">
            <span>9:41</span>
            <span aria-hidden className="flex items-center gap-1">
              <span className="h-2.5 w-4 rounded-[2px] border border-ink/70" />
              <span className="h-2.5 w-1.5 rounded-[1px] bg-ink/70" />
            </span>
          </div>
          <Image
            src={src}
            alt={alt}
            width={1179}
            height={2287}
            priority
            sizes="(max-width: 1024px) 80vw, 22rem"
            className="h-auto w-full"
          />
          {/* A single diagonal sheen, the way light actually falls on a screen. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.45)_0%,rgba(255,255,255,0)_42%)]"
          />
        </div>
      </div>
    </div>
  );
}
