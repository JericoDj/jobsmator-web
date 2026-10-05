"use client";

import { useCallback, useState } from "react";
import { api, ApiError } from "@/lib/api";
import { useAuth } from "@/lib/auth";

export type DeletionStage = "idle" | "confirming" | "deleting" | "done" | "error";

/** Typed exactly, so the button cannot be armed by anything but this word. */
export const CONFIRM_WORD = "DELETE";

/**
 * The web half of account deletion. The store listings have to point at a page
 * anyone can reach, so this works for a signed-in visitor end to end rather
 * than telling them to go and find the app.
 *
 * Deliberately a two-step: pressing a button once should not be able to erase
 * someone's job search.
 */
export function useAccountDeletion() {
  const { user, loading, signOut } = useAuth();
  const [stage, setStage] = useState<DeletionStage>("idle");
  const [confirmText, setConfirmText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const canConfirm = confirmText.trim().toUpperCase() === CONFIRM_WORD;

  const start = useCallback(() => {
    setError(null);
    setStage("confirming");
  }, []);

  const cancel = useCallback(() => {
    setConfirmText("");
    setError(null);
    setStage("idle");
  }, []);

  const confirm = useCallback(async () => {
    if (!canConfirm) return;
    setStage("deleting");
    setError(null);
    try {
      await api.deleteAccount();
      // The API has already removed the Firebase user; dropping the local
      // session keeps this tab from holding a token for an account that is gone.
      await signOut().catch(() => {});
      setStage("done");
    } catch (e) {
      setError(
        e instanceof ApiError ? e.message : "We couldn't delete your account just now. Try again, or email us.",
      );
      setStage("error");
    }
  }, [canConfirm, signOut]);

  return {
    user,
    loading,
    stage,
    error,
    confirmText,
    setConfirmText,
    canConfirm,
    start,
    cancel,
    confirm,
  };
}
