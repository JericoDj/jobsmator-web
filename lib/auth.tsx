"use client";

import { onAuthStateChanged, signInWithPopup, signOut as fbSignOut, type User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth, firebaseConfigured, googleProvider } from "./firebase";

type AuthState = { user: User | null; loading: boolean; signInWithGoogle: () => Promise<void>; signOut: () => Promise<void> };
const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  // Nothing to wait for when Firebase has no config — there is no session to resolve.
  const [loading, setLoading] = useState(firebaseConfigured);
  useEffect(() => {
    // Without a web config there is no session to listen for — the public pages
    // still render, they just never see a signed-in user.
    if (!firebaseConfigured) return;
    return onAuthStateChanged(firebaseAuth(), (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user, loading,
        signInWithGoogle: async () => { await signInWithPopup(firebaseAuth(), googleProvider()); },
        signOut: () => fbSignOut(firebaseAuth()),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
