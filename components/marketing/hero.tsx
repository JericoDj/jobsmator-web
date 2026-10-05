import { site } from "@/lib/content/site";
import { ButtonLink, Icon } from "@/components/ui";
import { ResultsPreview } from "./results-preview";

/**
 * The promise, the one action, and proof — a real-looking shortlist sitting
 * beside the words rather than a stock photo, because the ranked list *is*
 * the product. The wash behind it is the same cobalt→azure pair the app's
 * search card uses.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_78%_-10%,var(--jm-cobalt-tint),transparent_70%),radial-gradient(45rem_32rem_at_8%_18%,var(--jm-azure-tint),transparent_72%)]"
      />
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold text-cobalt-deep">
              <Icon name="sparkles" size={14} />
              {site.tagline}
            </p>

            <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.08] tracking-tight sm:text-6xl">
              {site.headline}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{site.subhead}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/sign-in" size="lg">
                Find matching jobs
                <Icon name="arrow" size={18} />
              </ButtonLink>
              <ButtonLink href="/#how" variant="secondary" size="lg">
                See how it works
              </ButtonLink>
            </div>

            <p className="mt-4 text-sm text-faint">Free to start · No card needed · Your resume stays private</p>
          </div>

          <ResultsPreview />
        </div>

        <SiteStrip />
      </div>
    </section>
  );
}

/** Quiet proof of breadth: the boards, named, with no logos to licence. */
function SiteStrip() {
  return (
    <div className="mt-16 border-t border-line pt-8 sm:mt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-faint">Searched in one go</p>
      <ul className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
        {site.jobSites.map((name) => (
          <li key={name} className="text-sm font-semibold text-muted">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
