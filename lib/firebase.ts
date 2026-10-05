import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/**
 * Firebase is created on first use, not on import. The marketing pages are
 * prerendered at build time and never touch auth — initialising eagerly made
 * every one of them fail when the web config wasn't present (a fresh clone, a
 * preview build, CI). Nothing calls these until the browser needs them.
 */
let app: FirebaseApp | undefined;
let authInstance: Auth | undefined;
let storageInstance: FirebaseStorage | undefined;
let provider: GoogleAuthProvider | undefined;

export function firebaseApp(): FirebaseApp {
  if (!config.apiKey) throw new Error("Firebase is not configured — set NEXT_PUBLIC_FIREBASE_* in the environment.");
  return (app ??= getApps().length ? getApp() : initializeApp(config));
}

export function firebaseAuth(): Auth {
  return (authInstance ??= getAuth(firebaseApp()));
}

export function firebaseStorage(): FirebaseStorage {
  return (storageInstance ??= getStorage(firebaseApp()));
}

export function googleProvider(): GoogleAuthProvider {
  return (provider ??= new GoogleAuthProvider());
}

/** True when the web config is present, so callers can degrade instead of throwing. */
export const firebaseConfigured = Boolean(config.apiKey);
