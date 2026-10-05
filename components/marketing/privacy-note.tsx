import Link from "next/link";
import { Icon, Section } from "@/components/ui";

/** A job search is sensitive. Say what happens to the resume, early and plainly. */
export function PrivacyNote() {
  return (
    <Section>
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 rounded-[14px] border border-line bg-card p-7 sm:flex-row sm:items-center">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-match-tint text-match-deep">
          <Icon name="shield" size={23} />
        </span>
        <div>
          <h2 className="text-lg font-semibold">Your resume is yours</h2>
          <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
            It is used to score your own matches and draft your own applications — never shared with employers, never
            sold, never used to train a model. Delete it, or your whole account, whenever you like.{" "}
            <Link href="/privacy" className="font-medium text-cobalt-deep hover:underline">
              Read the privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
