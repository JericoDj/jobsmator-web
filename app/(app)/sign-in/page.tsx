"use client";

import { useAuth } from "@/lib/auth";

export default function SignInPage() {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="mx-auto max-w-sm py-24 text-center">
      <h1 className="text-3xl font-bold">Sign in to JobsMator</h1>
      <p className="mt-2 text-muted">Your resume stays private to your account.</p>
      <button onClick={signInWithGoogle} className="mt-8 h-12 w-full rounded-[10px] bg-cobalt font-semibold text-white hover:bg-cobalt-deep">
        Continue with Google
      </button>
    </div>
  );
}
