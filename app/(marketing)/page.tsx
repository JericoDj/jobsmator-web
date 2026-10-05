import type { Metadata } from "next";
import { Cta, Faq, Features, Hero, HowItWorks, Pricing, PrivacyNote } from "@/components/marketing";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: { absolute: "JobsMator — Search less. Apply more." },
  description: site.subhead,
  openGraph: {
    title: "JobsMator — Search less. Apply more.",
    description: site.subhead,
    type: "website",
  },
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <PrivacyNote />
      <Faq />
      <Cta />
    </>
  );
}
