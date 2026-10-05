import { ButtonLink, Icon } from "@/components/ui";

/** The last ask. Dark ink panel so it closes the page rather than trailing off. */
export function Cta() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[20px] bg-ink px-8 py-14 text-center sm:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(32rem_22rem_at_82%_-20%,rgba(46,168,255,.35),transparent_70%),radial-gradient(28rem_20rem_at_10%_110%,rgba(30,94,255,.45),transparent_70%)]"
        />
        <div className="on-dark relative">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop reading job boards. Start reading shortlists.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            Upload a resume and run your first search in under a minute. Free, no card, and your resume stays yours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/sign-in" size="lg" variant="inverse">
              Find matching jobs
              <Icon name="arrow" size={18} />
            </ButtonLink>
            <ButtonLink href="/#pricing" size="lg" variant="inverseGhost">
              Compare plans
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
