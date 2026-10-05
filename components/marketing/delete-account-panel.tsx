"use client";

import Link from "next/link";
import { CONFIRM_WORD, useAccountDeletion } from "@/lib/controllers/use-account-deletion";
import { contact } from "@/lib/content/site";
import { Button, ButtonLink, Card, Icon } from "@/components/ui";

/**
 * The panel that actually deletes the account. It changes with the session:
 * signed in, you can finish here; signed out, you are offered the two other
 * routes rather than a dead end. The stores require this page to be reachable
 * by anyone, including someone who has already removed the app.
 */
export function DeleteAccountPanel() {
  const { user, loading, stage, error, confirmText, setConfirmText, canConfirm, start, cancel, confirm } =
    useAccountDeletion();

  if (loading) {
    return <Card className="h-44 animate-pulse bg-surface" aria-hidden />;
  }

  if (stage === "done") {
    return (
      <Card className="border-match/40 bg-match-tint/40 p-7">
        <span className="grid h-11 w-11 place-items-center rounded-[12px] bg-match-tint text-match-deep">
          <Icon name="check" size={21} />
        </span>
        <h2 className="mt-5 text-xl font-semibold">Your account is deleted</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          Your resumes, searches, saved jobs and conversations are gone, and you have been signed out everywhere.
          Backups are overwritten within 30 days. If you had a subscription, cancel it in the App Store or Google Play —
          deleting the account does not stop the billing.
        </p>
        <ButtonLink href="/" variant="secondary" className="mt-6">
          Back to JobsMator
        </ButtonLink>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card className="p-7">
        <h2 className="text-xl font-semibold">Sign in to delete your account</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          We ask you to sign in first so that nobody else can delete your account for you. If you can no longer sign in,
          email us from the address on the account and we will do it for you.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/sign-in">Sign in</ButtonLink>
          <ButtonLink href={`mailto:${contact.supportEmail}?subject=Delete%20my%20JobsMator%20account`} variant="secondary">
            Email {contact.supportEmail}
          </ButtonLink>
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-danger/40 p-7">
      <h2 className="text-xl font-semibold">Delete the account for {user.email ?? "this user"}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">
        This erases everything listed above, immediately and permanently. There is no undo and no way for us to restore
        it afterwards.
      </p>

      {stage === "idle" ? (
        <Button
          onClick={start}
          className="mt-6 border border-danger bg-transparent text-[color:var(--jm-danger)] hover:bg-danger-tint"
        >
          Delete my account
        </Button>
      ) : (
        <div className="mt-6">
          <label htmlFor="confirm" className="block text-sm font-medium text-ink">
            Type <span className="font-mono font-bold">{CONFIRM_WORD}</span> to confirm
          </label>
          <input
            id="confirm"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            disabled={stage === "deleting"}
            autoComplete="off"
            spellCheck={false}
            className="mt-2 h-11 w-full max-w-xs rounded-[10px] border border-line-strong bg-card px-3 font-mono text-[15px] text-ink outline-none focus:border-cobalt"
          />

          {error && (
            <p role="alert" className="mt-3 text-sm text-[color:var(--jm-danger)]">
              {error}
            </p>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={confirm}
              disabled={!canConfirm || stage === "deleting"}
              className="bg-[color:var(--jm-danger)] text-white hover:opacity-90"
            >
              {stage === "deleting" ? "Deleting…" : "Delete everything"}
            </Button>
            <Button variant="secondary" onClick={cancel} disabled={stage === "deleting"}>
              Keep my account
            </Button>
          </div>
        </div>
      )}

      <p className="mt-6 text-sm text-faint">
        Prefer to do it in the app? Profile → <span className="text-muted">Delete my account</span>. See the{" "}
        <Link href="/privacy" className="font-medium text-cobalt-deep hover:underline">
          Privacy Policy
        </Link>{" "}
        for what we keep and for how long.
      </p>
    </Card>
  );
}
