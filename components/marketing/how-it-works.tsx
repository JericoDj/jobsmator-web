import { site } from "@/lib/content/site";
import { Icon, Section, SectionHeader } from "@/components/ui";

/** Three steps, numbered, in the order the app asks for them. */
export function HowItWorks() {
  return (
    <Section id="how" tone="surface">
      <SectionHeader
        eyebrow="How it works"
        title="Resume in, shortlist out — in about a minute."
        lede="No job-board tabs, no keyword guessing. You answer three short questions once, and JobsMator does the reading."
      />

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {site.steps.map((step, i) => (
          <li key={step.title} className="rounded-[14px] border border-line bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[11px] bg-cobalt text-white">
                <Icon name={step.icon} size={20} />
              </span>
              <span className="font-mono text-sm text-faint">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
