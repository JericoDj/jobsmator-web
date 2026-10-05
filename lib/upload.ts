import { ref, uploadBytesResumable } from "firebase/storage";
import { firebaseAuth, firebaseStorage } from "./firebase";

/** Uploads straight to Firebase Storage; returns the storagePath to register with the API. */
export function uploadResume(file: File, onProgress: (fraction: number) => void): Promise<string> {
  const uid = firebaseAuth().currentUser?.uid;
  if (!uid) return Promise.reject(new Error("Sign in first."));
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "pdf";
  const path = `resumes/${uid}/${Date.now()}.${ext}`;
  const task = uploadBytesResumable(ref(firebaseStorage(), path), file, { contentType: file.type });
  return new Promise((resolve, reject) => {
    task.on(
      "state_changed",
      (s) => onProgress(s.totalBytes ? s.bytesTransferred / s.totalBytes : 0),
      reject,
      () => resolve(path),
    );
  });
}
