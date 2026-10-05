/**
 * The mark: a cobalt tile with a check cut through it — the same "found it"
 * gesture the app uses on a strong match — set against the Outfit wordmark.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-cobalt text-white shadow-[0_2px_8px_rgba(30,94,255,.35)]">
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      </span>
      <span className="font-display text-[19px] font-bold tracking-tight text-ink">JobsMator</span>
    </span>
  );
}
