import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/marketing/legal-page";
import { contact } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What JobsMator collects, why, who it is shared with, and how to delete it. Written to be read, not to be skipped.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="A job search is personal. This explains exactly what JobsMator collects, why it needs it, who else sees it, and how to get rid of it."
    >
      <section>
        <h2>The short version</h2>
        <ul>
          <li>Your resume is used to score your matches and draft your applications. Nothing else.</li>
          <li>We never sell your data, and we never share your resume with employers or recruiters.</li>
          <li>Your resume and chats are not used to train anyone&rsquo;s AI models.</li>
          <li>You can delete your account, and everything in it, from inside the app at any time.</li>
        </ul>
        <p>
          The rest of this page is the detail behind those four lines. {contact.company} is the data controller; contact
          details are at the bottom.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>

        <h3>Account details</h3>
        <p>
          Your email address, display name, and — if you sign in with Google or Apple — the account identifier they give
          us. Authentication is handled by Google Firebase Authentication; we never see or store your password.
        </p>

        <h3>Your resume</h3>
        <p>
          The file you upload (PDF or Word) and the profile extracted from it: your seniority, skills, job titles you
          fit, industries, and a short written summary. Files are stored in Google Firebase Storage under your account.
        </p>

        <h3>Your job search</h3>
        <p>
          The job titles and job sites you choose, your location and salary preferences, the searches you run, the
          listings returned with their scores and reasons, and what you do with them — saved, hidden, applied,
          interviewing.
        </p>

        <h3>Assistant conversations</h3>
        <p>
          Messages you send to Ask JobsMator, the replies, and any images you attach (for example a screenshot of a job
          post). Images are stored in Firebase Storage; we also store a written description of each image so the
          conversation can refer back to it without re-sending the picture.
        </p>

        <h3>Subscription status</h3>
        <p>
          Whether you are on Free or Pro, when it renews, and where it came from. Purchases are processed by Apple or
          Google and recorded through RevenueCat. <strong>We never see your card details.</strong>
        </p>

        <h3>Technical data</h3>
        <p>
          Standard server logs — IP address, device and app version, timestamps, and error traces — kept to keep the
          service running and to investigate abuse and faults.
        </p>
      </section>

      <section>
        <h2>Why we are allowed to use it</h2>
        <p>
          Where UK/EU data protection law applies, we rely on: <strong>performance of a contract</strong> for everything
          needed to deliver the search, matching and assistant features you asked for; <strong>legitimate interests</strong>{" "}
          for security, fraud prevention, and keeping the service working; and <strong>consent</strong> where we ask for
          it separately, such as optional notifications. You can withdraw consent at any time without affecting the rest
          of the service.
        </p>
      </section>

      <section>
        <h2>Who else processes it</h2>
        <p>
          We use a small number of providers, each only for the job named. They act on our instructions and may not use
          your data for their own purposes.
        </p>
        <ul>
          <li>
            <strong>Google Firebase</strong> — authentication, file storage for resumes and attachments, and app
            infrastructure.
          </li>
          <li>
            <strong>Railway</strong> — hosting for our API and database.
          </li>
          <li>
            <strong>OpenRouter</strong> — routes assistant messages, resume analysis and image descriptions to the AI
            model that answers them. Content sent for processing is not used to train models.
          </li>
          <li>
            <strong>RevenueCat</strong>, with <strong>Apple</strong> and <strong>Google Play</strong> — subscription
            purchases and their status.
          </li>
          <li>
            <strong>Job boards</strong> — we read public listings from them. We do not send them your resume or tell
            them you are searching.
          </li>
          <li>
            <strong>Google Sheets</strong> — only if you choose to export a run to a spreadsheet you own.
          </li>
        </ul>
        <p>
          Some of these providers operate outside the Philippines, including in the United States and the European
          Union, so your data may be processed there under appropriate safeguards such as standard contractual clauses.
        </p>
      </section>

      <section>
        <h2>What we never do</h2>
        <ul>
          <li>Sell or rent your personal data to anyone.</li>
          <li>Share your resume, conversations, or search activity with employers or recruiters.</li>
          <li>Apply for jobs or message anyone on your behalf.</li>
          <li>Allow your content to be used to train third-party AI models.</li>
          <li>Show third-party advertising, or track you across other apps and sites for advertising.</li>
        </ul>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <ul>
          <li>
            <strong>While your account exists</strong> — your resume, searches, matches and conversations, so the
            product can keep working and avoid showing you the same listing twice.
          </li>
          <li>
            <strong>Deleted resumes</strong> — removed from storage when you delete them in the app.
          </li>
          <li>
            <strong>After you delete your account</strong> — your account record and personal data are erased
            immediately. Backups are overwritten on their normal cycle, within 30 days.
          </li>
          <li>
            <strong>Technical logs</strong> — up to 90 days.
          </li>
          <li>
            <strong>Purchase records</strong> — kept as long as tax and accounting law requires.
          </li>
        </ul>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>You can, at any time:</p>
        <ul>
          <li>
            <strong>Delete your account and everything in it</strong> — in the app under Profile &rarr; Delete my
            account, or on the web at <Link href="/delete-account">jobsmator.com/delete-account</Link>. This is
            immediate and cannot be undone.
          </li>
          <li>Delete individual resumes or conversations without deleting your account.</li>
          <li>Ask for a copy of the data we hold about you, or for it to be corrected.</li>
          <li>Object to, or ask us to restrict, certain processing.</li>
          <li>Complain to your data protection authority — in the Philippines, the National Privacy Commission.</li>
        </ul>
        <p>
          Email <a href={`mailto:${contact.supportEmail}`}>{contact.supportEmail}</a> for anything you cannot do in the
          app. We reply within 30 days.
        </p>
      </section>

      <section>
        <h2>Cancelling a subscription</h2>
        <p>
          Subscriptions are managed by the store you bought them from — the App Store or Google Play — and cancelling
          there is what stops the billing. Deleting your JobsMator account does not cancel an active subscription and
          does not refund it, so cancel first.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          Traffic is encrypted in transit with TLS. Resume files are stored in access-controlled cloud storage and are
          reachable only through short-lived signed links issued to your own account. API access requires a verified
          authentication token on every request. No system is perfectly secure, but we only collect what the product
          needs, which keeps the amount at risk small.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          JobsMator is for people old enough to work — at least 16, or the minimum working age where you live if that is
          higher. It is not directed at children, and we do not knowingly collect their data. If you believe a child has
          given us data, email us and we will delete it.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          If this policy changes in a way that affects you, we will update the date at the top and tell you in the app
          before the change takes effect. Continuing to use JobsMator after that means the new version applies.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          {contact.company} — <a href={`mailto:${contact.supportEmail}`}>{contact.supportEmail}</a>. See also our{" "}
          <Link href="/terms">Terms of Service</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
