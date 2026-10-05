import type { Metadata } from "next";
import Link from "next/link";
import { DeleteAccountPanel } from "@/components/marketing/delete-account-panel";
import { contact } from "@/lib/content/site";
import { Icon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "Delete your JobsMator account and everything in it — here on the web, or from inside the app. What gets removed, what is kept, and how long it takes.",
};

const removed = [
  "Your account, email and sign-in",
  "Every resume you uploaded, and the profile read from it",
  "Your searches, matched jobs, scores and saved jobs",
  "Ask JobsMator conversations and any images you attached",
  "Your job preferences, job sites and scheduled searches",
];

const kept = [
  {
    label: "Purchase records",
    body: "Kept as long as tax and accounting law requires. They hold the transaction, not your resume or searches.",
  },
  {
    label: "Backups",
    body: "Overwritten on their normal cycle, within 30 days of deletion.",
  },
  {
    label: "Server logs",
    body: "Technical logs such as IP address and error traces age out after 90 days.",
  },
];

/**
 * The account-deletion page the App Store and Play listings point at. It has to
 * work for someone who has already removed the app, so everything needed is
 * here: what goes, what stays, and three ways to actually do it.
 */
export default function DeleteAccountPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cobalt-deep">Your data</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Delete your account</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        You can delete your JobsMator account and everything in it at any time — here, or from inside the app. It is
        immediate and permanent.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">What gets deleted</h2>
        <ul className="mt-4 space-y-2.5">
          {removed.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <Icon name="check" size={17} className="mt-[3px] shrink-0 text-match-deep" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">What we have to keep for a while</h2>
        <dl className="mt-4 space-y-4">
          {kept.map((k) => (
            <div key={k.label}>
              <dt className="text-[15px] font-semibold text-ink">{k.label}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-muted">{k.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 rounded-[14px] border border-warning/40 bg-[color:var(--jm-warning-tint)] p-5">
        <h2 className="text-base font-semibold text-ink">Cancel your subscription first</h2>
        <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
          Pro is billed by the App Store or Google Play, not by us. Deleting your account does not cancel it and does not
          refund it — cancel it in the store first, then come back here.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Delete it now</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          Signed in? Finish it on this page. You can also do it in the app under Profile → Delete my account, or email{" "}
          <a href={`mailto:${contact.supportEmail}`} className="font-medium text-cobalt-deep hover:underline">
            {contact.supportEmail}
          </a>{" "}
          from the address on your account and we will delete it within 30 days.
        </p>
        <div className="mt-6">
          <DeleteAccountPanel />
        </div>
      </section>

      <p className="mt-10 text-sm text-faint">
        More detail in the{" "}
        <Link href="/privacy" className="font-medium text-cobalt-deep hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
