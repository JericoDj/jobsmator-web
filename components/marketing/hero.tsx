import { site } from "@/lib/content/site";
import { ButtonLink, Icon } from "@/components/ui";
import { PhoneFrame } from "./phone-frame";

/**
 * The opening. Structure before decoration: a hairline grid and a single soft
 * wash, the headline set tight with the operative line picked out in cobalt,
 * and the real app on the right — an actual screenshot rather than a drawing
 * of one, because the shortlist is the thing being sold.
 */
export function Hero() {
  return (
    <section className="grain relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,#000,transparent)]" />
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-[var(--jm-cobalt-tint)] blur-3xl opacity-70" />
        <div className="absolute -left-32 top-40 h-[28rem] w-[28rem] rounded-full bg-[var(--jm-azure-tint)] blur-3xl opacity-60" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-xl">
            <p className="flex items-center gap-2.5 text-[13px] font-medium text-muted">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-match" />
              Built in the Philippines for Philippine and remote roles
            </p>

            <h1 className="mt-6 text-[2.75rem] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[3.75rem]">
              Ten job sites,
              <br />
              read for you,
              <br />
              <span className="text-cobalt">ranked for you.</span>
            </h1>

            <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{site.subhead}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/sign-in" size="lg" className="shadow-[0_10px_24px_-10px_rgba(30,94,255,.8)]">
                Find matching jobs
                <Icon name="arrow" size={18} />
              </ButtonLink>
              <ButtonLink href="/#how" variant="ghost" size="lg" className="px-2 sm:px-4">
                See how it works
              </ButtonLink>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-7">
              {[
                { k: "10", v: "job sites, one search" },
                { k: "0–100", v: "score, with the reason" },
                { k: "₱0", v: "to start, no card" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-bold leading-none tracking-tight text-ink">{s.k}</dt>
                  <dd className="mt-1.5 text-[13px] text-muted">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <PhoneFrame
            src="/shots/app-jobs-board.png"
            alt="The JobsMator app showing a job database with four new matches, two applied, and listings picked for Flutter Developer and Mobile Engineer roles."
          />
        </div>
      </div>

      <SiteStrip />
    </section>
  );
}

/** The boards, named. Quiet proof of breadth with no logos to licence. */
function SiteStrip() {
  return (
    <div className="border-y border-line bg-ground/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:gap-10">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-faint">Searched in one go</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {site.jobSites.map((name) => (
            <li key={name} className="text-sm font-semibold text-muted">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
