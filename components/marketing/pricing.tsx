"use client";

import { site } from "@/lib/content/site";
import { usePricing, type BillingTerm } from "@/lib/controllers/use-pricing";
import { ButtonLink, Card, Icon, Section, SectionHeader } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * The same two plans as the app's paywall, same numbers, same ordering —
 * someone who reads this page and then opens the app should not be surprised.
 */
export function Pricing() {
  const { term, setTerm, plans, savings } = usePricing(site.plans);

  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title="Free covers a careful search a day."
        lede="Pro is for the weeks you are actually applying — more sites, more searches, and the writing tools."
        align="center"
      />

      <div className="mt-8 flex justify-center">
        <TermToggle term={term} onChange={setTerm} savings={savings} />
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={cn(
              "flex flex-col p-7",
              plan.featured && "border-cobalt bg-cobalt-tint/35 shadow-card ring-1 ring-cobalt/20",
            )}
          >
            <div className="flex items-center gap-3">
              <h3 className="font-display text-xl font-bold text-ink">{plan.name}</h3>
              {plan.featured && (
                <span className="rounded-full bg-cobalt px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
            </div>
            <p className="mt-1 text-[15px] text-muted">{plan.tagline}</p>

            <p className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold tracking-tight text-ink">{plan.price}</span>
              <span className="text-sm text-muted">{plan.cadence}</span>
            </p>
            <p className="mt-1 min-h-5 text-[13px] text-faint">{plan.note ?? ""}</p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => {
                const included = f.included !== false;
                return (
                  <li key={f.label} className="flex gap-3 text-[15px]">
                    {included ? (
                      <Icon name="check" size={17} className="mt-[3px] shrink-0 text-match-deep" />
                    ) : (
                      <span aria-hidden className="mt-[11px] h-px w-[13px] shrink-0 bg-line-strong" />
                    )}
                    <span className={included ? "text-text" : "text-faint"}>
                      {f.label}
                      {!included && <span className="sr-only"> — not included</span>}
                    </span>
                  </li>
                );
              })}
            </ul>

            <ButtonLink
              href="/sign-in"
              variant={plan.featured ? "primary" : "secondary"}
              size="lg"
              className="mt-8 w-full"
            >
              {plan.cta}
            </ButtonLink>
          </Card>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-xl text-center text-sm text-faint">
        Pro is billed through the App Store or Google Play. Cancel any time; it stays on until the period you paid for ends.
      </p>
    </Section>
  );
}

function TermToggle({
  term,
  onChange,
  savings,
}: {
  term: BillingTerm;
  onChange: (t: BillingTerm) => void;
  savings: number;
}) {
  const options: { id: BillingTerm; label: string }[] = [
    { id: "monthly", label: "Monthly" },
    { id: "yearly", label: "Yearly" },
  ];
  return (
    <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-full border border-line bg-card p-1">
      {options.map((o) => (
        <button
          key={o.id}
          role="radio"
          aria-checked={term === o.id}
          onClick={() => onChange(o.id)}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors",
            term === o.id ? "bg-cobalt text-white" : "text-muted hover:text-ink",
          )}
        >
          {o.label}
          {o.id === "yearly" && savings > 0 && (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-bold",
                term === o.id ? "bg-white/20 text-white" : "bg-match-tint text-match-deep",
              )}
            >
              Save {savings}%
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
