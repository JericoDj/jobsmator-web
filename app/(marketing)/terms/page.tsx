import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/marketing/legal-page";
import { contact } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The agreement between you and JobsMator: what the service does, what it costs, and what it does not promise.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The agreement between you and JobsMator. Plain language, and short enough to actually read."
    >
      <section>
        <h2>1. The service</h2>
        <p>
          JobsMator reads the resume you upload, searches public job listings on third-party job boards, and returns a
          ranked shortlist with an explanation for each match. It also provides optional writing and preparation tools
          and an in-app assistant. It finds and ranks jobs; it does not apply to them for you, and it is not a
          recruitment agency or an employer.
        </p>
      </section>

      <section>
        <h2>2. Your account</h2>
        <p>
          You need an account, and you must be old enough to work where you live (at least 16). Keep your sign-in
          details to yourself — you are responsible for what happens under your account. One account per person; do not
          share it.
        </p>
      </section>

      <section>
        <h2>3. Your content</h2>
        <p>
          Your resume and anything else you upload stays yours. You give us permission to store and process it only to
          run the features you use — scoring matches, drafting applications, answering your questions. You confirm you
          have the right to upload what you upload, and that it does not contain other people&rsquo;s personal data
          beyond ordinary references.
        </p>
      </section>

      <section>
        <h2>4. Plans and payment</h2>
        <ul>
          <li>Free includes one search a day across three job sites.</li>
          <li>Pro includes all ten sites, five searches a day, the writing tools and Google Sheets export.</li>
          <li>
            Pro is sold as an auto-renewing subscription through the App Store or Google Play. It renews at the price
            shown until you cancel, and the store charges you, not us.
          </li>
          <li>
            Cancel any time in the store. Pro continues until the end of the period you have already paid for. Partial
            periods are not refunded, except where the law or the store&rsquo;s own policy requires it.
          </li>
          <li>
            Prices may change. We will tell you before a change affects a renewal, and you can cancel if you do not want
            to continue.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Fair use</h2>
        <p>Do not:</p>
        <ul>
          <li>Scrape, resell or redistribute the results.</li>
          <li>Upload someone else&rsquo;s resume as your own, or upload unlawful content.</li>
          <li>Use the service to spam employers or misrepresent your experience.</li>
          <li>Try to break, overload, or reverse-engineer the service, or get around its limits.</li>
        </ul>
        <p>We may suspend or close an account that does these things.</p>
      </section>

      <section>
        <h2>6. What we do not promise</h2>
        <p>
          Listings come from third-party job boards and may be out of date, inaccurate, or removed. Scores, reasons and
          red flags are generated automatically, including by AI, and can be wrong — treat them as a starting point, not
          advice. We do not promise that you will be offered an interview or a job, and we are not responsible for how
          any employer behaves. Always check a listing at its source before applying.
        </p>
      </section>

      <section>
        <h2>7. Availability</h2>
        <p>
          We aim to keep JobsMator running, but it is provided &ldquo;as is&rdquo; without warranties, and features may
          change or be withdrawn. To the extent the law allows, our total liability to you for any claim is limited to
          what you paid us in the twelve months before it arose.
        </p>
      </section>

      <section>
        <h2>8. Ending it</h2>
        <p>
          You can delete your account at any time in the app — Profile &rarr; Delete my account — which erases your data
          as described in the <Link href="/privacy">Privacy Policy</Link>. Remember to cancel any store subscription
          separately. We may close an account that breaks these terms, and will tell you why where we can.
        </p>
      </section>

      <section>
        <h2>9. Changes</h2>
        <p>
          We will post any update here with a new date and, for material changes, tell you in the app first. Continuing
          to use JobsMator after a change means you accept it.
        </p>
      </section>

      <section>
        <h2>10. Governing law and contact</h2>
        <p>
          These terms are governed by the laws of the Republic of the Philippines. Questions go to{" "}
          <a href={`mailto:${contact.supportEmail}`}>{contact.supportEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
