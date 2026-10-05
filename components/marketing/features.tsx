import { site } from "@/lib/content/site";
import type { Hue } from "@/lib/models";
import { Card, Icon, Section, SectionHeader } from "@/components/ui";

/** Each hue maps to the tint/deep pair the app uses for that family of tiles. */
const hueClasses: Record<Hue, string> = {
  cobalt: "bg-cobalt-tint text-cobalt-deep",
  azure: "bg-azure-tint text-azure-deep",
  match: "bg-match-tint text-match-deep",
  volt: "bg-volt-tint text-volt-deep",
};

export function Features() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="What you get"
        title="Everything the search needs, nothing that gets in the way."
        lede="A score with no reasoning is a guess. JobsMator shows its working, then helps you act on it."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.features.map((f) => (
          <Card key={f.title} className="p-6 transition-shadow hover:shadow-card">
            <span className={`grid h-11 w-11 place-items-center rounded-[12px] ${hueClasses[f.hue]}`}>
              <Icon name={f.icon} size={21} />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
