"use client";

import { onAuthStateChanged, signInWithPopup, signOut as fbSignOut, type User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "./firebase";

type AuthState = { user: User | null; loading: boolean; signInWithGoogle: () => Promise<void>; signOut: () => Promise<void> };
const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => onAuthStateChanged(auth, (u) => { setUser(u); setLoading(false); }), []);
  return (
    <AuthContext.Provider
      value={{
        user, loading,
        signInWithGoogle: async () => { await signInWithPopup(auth, googleProvider); },
        signOut: () => fbSignOut(auth),
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
