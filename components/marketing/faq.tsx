import { site } from "@/lib/content/site";
import { Section, SectionHeader } from "@/components/ui";

/** Native <details> — keyboard and screen-reader behaviour for free, no JS. */
export function Faq() {
  return (
    <Section id="faq" tone="surface">
      <SectionHeader eyebrow="Questions" title="Before you upload anything." align="center" />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-[14px] border border-line bg-card">
        {site.faqs.map((f) => (
          <details key={f.question} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-6 text-[17px] font-semibold text-ink">
              {f.question}
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                aria-hidden="true"
                className="shrink-0 text-faint transition-transform group-open:rotate-45"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{f.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
