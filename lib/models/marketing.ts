/**
 * Shapes for everything the marketing pages render. The copy itself lives in
 * `lib/content/site.ts` — keeping the two apart means a wording change never
 * touches a component, and a component never invents a claim of its own.
 */

/** The four accent hues from the design guide; components map them to tokens. */
export type Hue = "cobalt" | "azure" | "match" | "volt";

/** A named icon from `components/ui/icon.tsx` — not a component, so content stays data. */
export type IconName =
  | "upload"
  | "target"
  | "sparkles"
  | "search"
  | "mail"
  | "chat"
  | "calendar"
  | "sheet"
  | "shield"
  | "flag"
  | "check"
  | "arrow";

export type Step = {
  title: string;
  body: string;
  icon: IconName;
};

export type Feature = {
  title: string;
  body: string;
  icon: IconName;
  hue: Hue;
};

export type PlanFeature = {
  label: string;
  /** Free plans list what they *don't* get too; a muted check reads as "not included". */
  included?: boolean;
};

export type Plan = {
  id: "free" | "pro";
  name: string;
  tagline: string;
  /** Monthly price in pesos; 0 for Free. */
  monthly: number;
  /** Yearly price in pesos; 0 for Free. */
  yearly: number;
  features: PlanFeature[];
  cta: string;
  featured?: boolean;
};

export type Faq = {
  question: string;
  answer: string;
};

/** One line of the ranked-results mock on the landing page. */
export type SampleMatch = {
  score: number;
  title: string;
  company: string;
  tag: string;
  why: string;
};

export type SiteContent = {
  tagline: string;
  headline: string;
  subhead: string;
  steps: Step[];
  features: Feature[];
  plans: Plan[];
  faqs: Faq[];
  sampleMatches: SampleMatch[];
  jobSites: string[];
};
