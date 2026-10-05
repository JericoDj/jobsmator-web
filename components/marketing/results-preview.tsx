import { site } from "@/lib/content/site";
import { Card, Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * A shortlist the way the app draws one: score first, then the role, then the
 * line that says why. Illustrative data, labelled as an example — the point is
 * to show the shape of the answer, not to imply these are live listings.
 */
export function ResultsPreview() {
  return (
    <div className="relative">
      <Card className="overflow-hidden shadow-card">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <p className="text-[13px] font-semibold text-ink">Your shortlist</p>
            <p className="text-xs text-faint">Example results · 10 sites · 2 minutes ago</p>
          </div>
          <span className="rounded-full bg-match-tint px-2.5 py-1 text-xs font-semibold text-match-deep">24 matches</span>
        </div>

        <ul className="divide-y divide-line">
          {site.sampleMatches.map((m) => (
            <li key={m.title} className="flex gap-4 px-5 py-4">
              <ScorePill score={m.score} />
              <div className="min-w-0">
                <p className="truncate text-[15px] font-semibold text-ink">{m.title}</p>
                <p className="mt-0.5 text-[13px] text-muted">
                  {m.company} · {m.tag}
                </p>
                <p className="mt-2 flex gap-2 text-[13px] leading-snug text-muted">
                  <Icon name="check" size={15} className="mt-[2px] shrink-0 text-match-deep" />
                  <span>{m.why}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 border-t border-line bg-surface px-5 py-3.5 text-[13px] text-muted">
          <Icon name="flag" size={15} className="text-warning" />
          Two listings hid their salary — flagged, not hidden from you.
        </div>
      </Card>

      {/* Floating stat, the same "why it fits" idea in one number. */}
      <Card className="absolute -bottom-9 left-4 hidden items-center gap-3 px-4 py-3 shadow-card sm:flex lg:-left-8">
        <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-cobalt-tint text-cobalt-deep">
          <Icon name="search" size={19} />
        </span>
        <span>
          <span className="block font-display text-lg font-bold leading-none text-ink">200+</span>
          <span className="text-xs text-muted">listings read per search</span>
        </span>
      </Card>
    </div>
  );
}

function ScorePill({ score }: { score: number }) {
  const strong = score >= 70;
  return (
    <span
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-[12px] font-display text-[15px] font-bold",
        strong ? "bg-match-tint text-match-deep" : "bg-cobalt-tint text-cobalt-deep",
      )}
    >
      {score}
    </span>
  );
}
