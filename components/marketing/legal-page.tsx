import { legalUpdated } from "@/lib/content/site";

/**
 * Shared chrome for the policy pages: a narrow measure, generous line height,
 * and typographic rules applied once here so the pages themselves stay prose.
 */
export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cobalt-deep">Legal</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
      <p className="mt-3 text-sm text-faint">Last updated {legalUpdated}</p>

      <div
        className="
          mt-12 space-y-8
          [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight
          [&_h3]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink
          [&_p]:mt-3 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-muted
          [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:text-[15px] [&_ul]:leading-relaxed [&_ul]:text-muted
          [&_li]:relative [&_li]:pl-5
          [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.6em] [&_li]:before:h-1.5 [&_li]:before:w-1.5
          [&_li]:before:rounded-full [&_li]:before:bg-line-strong
          [&_a]:font-medium [&_a]:text-cobalt-deep hover:[&_a]:underline
          [&_strong]:font-semibold [&_strong]:text-ink
        "
      >
        {children}
      </div>
    </div>
  );
}
