import type { Faq, Feature, Plan, SampleMatch, SiteContent, Step } from "@/lib/models";

/**
 * Every word on the marketing pages. It mirrors what the apps actually do —
 * if a claim here stops being true in the product, it is a bug in both places.
 * Voice, per the design guide: calm, specific, never noisy.
 */

export const JOB_SITES = [
  "LinkedIn",
  "JobStreet",
  "Indeed",
  "Kalibrr",
  "OnlineJobs.ph",
  "BossJob",
  "Glassdoor",
  "ZipRecruiter",
  "Google Jobs",
  "Wellfound",
];

const steps: Step[] = [
  {
    icon: "upload",
    title: "Upload your resume",
    body: "PDF or Word. It is read once, and what it learns about you — your level, skills and the roles you fit — is what every match is scored against.",
  },
  {
    icon: "target",
    title: "Pick roles and sites",
    body: "Up to five job titles and the boards you trust. Sensible defaults are already filled in, so this takes about twenty seconds.",
  },
  {
    icon: "sparkles",
    title: "Get a ranked shortlist",
    body: "Ten sites searched at once, every listing scored 0–100 against your resume, with the reason it fits and anything that looks off.",
  },
];

const features: Feature[] = [
  {
    icon: "search",
    hue: "cobalt",
    title: "Ten job sites, one search",
    body: "LinkedIn, JobStreet, Indeed, Kalibrr, OnlineJobs.ph and five more — searched together, de-duplicated, and never showing you the same listing twice.",
  },
  {
    icon: "flag",
    hue: "match",
    title: "A reason for every score",
    body: "Each match says why it fits you and flags what to watch for: hidden salary, mismatched experience, vague scope. A score without a reason is a guess.",
  },
  {
    icon: "chat",
    hue: "azure",
    title: "Ask JobsMator",
    body: "An assistant that already knows your resume and your matches. Show it a job post as a screenshot and ask whether it is worth your afternoon.",
  },
  {
    icon: "mail",
    hue: "cobalt",
    title: "Applications in your voice",
    body: "Cover letters and application emails drafted from your real experience and the listing in front of you — short, specific, and easy to reply to.",
  },
  {
    icon: "calendar",
    hue: "volt",
    title: "Searches that run themselves",
    body: "Schedule a search for every morning or once a week. New matches are waiting when you open the app, so the hunt continues while you work.",
  },
  {
    icon: "sheet",
    hue: "match",
    title: "Your shortlist, exportable",
    body: "Every run can be saved to a Google Sheet you own, so you can track applications the way you already do.",
  },
];

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "A careful search a day.",
    monthly: 0,
    yearly: 0,
    cta: "Start free",
    features: [
      { label: "One search a day", included: true },
      { label: "LinkedIn, JobStreet and Kalibrr", included: true },
      { label: "Ranked results with reasons and red flags", included: true },
      { label: "Ask JobsMator, 30 messages a day", included: true },
      { label: "All ten job sites", included: false },
      { label: "Cover letters, salary check and interview prep", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For the weeks you are actually applying.",
    monthly: 299,
    yearly: 1999,
    cta: "Get Pro",
    featured: true,
    features: [
      { label: "All ten job sites, not three", included: true },
      { label: "Five searches a day", included: true },
      { label: "Cover letters, salary check and interview prep", included: true },
      { label: "Every run saved to Google Sheets", included: true },
      { label: "Up to 50 jobs per site", included: true },
      { label: "Ask JobsMator, 300 messages a day", included: true },
    ],
  },
];

const faqs: Faq[] = [
  {
    question: "Where do the jobs come from?",
    answer:
      "Public listings on ten job boards, including LinkedIn, JobStreet, Indeed, Kalibrr and OnlineJobs.ph. JobsMator does not post on your behalf or apply for you — it finds and ranks, you decide.",
  },
  {
    question: "How is the score worked out?",
    answer:
      "Your resume is read once into a profile — level, skills, industries, the roles you fit. Every listing is compared against that profile and your chosen job titles, then scored 0–100 with the reasoning shown in plain language.",
  },
  {
    question: "Is my resume private?",
    answer:
      "Yes. It is stored against your account and used only to score your own matches and draft your own applications. It is never shared with employers, sold, or used to train a model. You can delete it, or your whole account, from inside the app.",
  },
  {
    question: "Do I need to pay to try it?",
    answer:
      "No. The free plan gives you a full search a day across three sites, with the same ranking and reasons as Pro. Pro widens it to all ten sites, five searches a day and the writing tools.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Through the App Store or Google Play, wherever you subscribed. Pro stays on until the period you have paid for ends — there is no partial refund, and nothing is lost: your account drops back to Free.",
  },
  {
    question: "Is there a web app?",
    answer:
      "Yes — sign in above and you can upload a resume and run searches in the browser. The phone apps add the assistant, scheduled searches and notifications.",
  },
];

const sampleMatches: SampleMatch[] = [
  {
    score: 87,
    title: "Senior Flutter Developer",
    company: "Sprout Solutions",
    tag: "Remote",
    why: "Three years of Flutter, Firebase and REST line up with the whole must-have list.",
  },
  {
    score: 84,
    title: "Mobile Engineer",
    company: "GCash",
    tag: "Hybrid · Taguig",
    why: "Fintech onboarding work matches their payments team; salary is above your floor.",
  },
  {
    score: 81,
    title: "Flutter Developer",
    company: "Maya",
    tag: "Remote",
    why: "Strong on state management; they also want Kotlin, which you have less of.",
  },
];

export const site: SiteContent = {
  tagline: "Search less. Apply more.",
  headline: "Ten job sites, read for you, ranked for you.",
  subhead:
    "Upload your resume once. JobsMator searches ten job boards, scores every listing against your actual experience, and tells you why each one fits — and what to watch out for.",
  steps,
  features,
  plans,
  faqs,
  sampleMatches,
  jobSites: JOB_SITES,
};

/** Store links — empty until the listings are live, which hides the badges. */
export const storeLinks = {
  appStore: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "",
  playStore: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "",
};

export const contact = {
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@jobsmator.com",
  company: "JobsMator",
};

/** Last time the policy pages changed, shown at the top of each. */
export const legalUpdated = "5 October 2026";
