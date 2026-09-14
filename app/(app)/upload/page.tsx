"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/lib/api";
import { uploadResume } from "@/lib/upload";

export default function UploadPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onFile(file: File | undefined) {
    if (!file) return;
    setError(null);
    setProgress(0);
    try {
      const storagePath = await uploadResume(file, setProgress);
      await api.createResume({ storagePath, filename: file.name, sizeBytes: file.size });
      router.push("/interests");
    } catch (e) {
      setError(e instanceof Error ? e.message : "We couldn't upload that file. Try again.");
      setProgress(null);
    }
  }

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cobalt-deep">Step 1 of 3</p>
      <h1 className="mt-2 text-3xl font-bold">Upload your resume</h1>
      <label className="mt-8 grid cursor-pointer place-items-center gap-2 rounded-[14px] border-2 border-dashed border-line-strong bg-card p-10 text-center hover:border-cobalt hover:bg-azure-tint">
        <span className="font-display text-lg font-semibold text-ink">Drop your resume here</span>
        <span className="text-sm text-muted">PDF or DOCX, up to 10 MB</span>
        <input id="resume-file" type="file" accept=".pdf,.docx" className="sr-only" onChange={(e) => onFile(e.target.files?.[0])} />
      </label>
      {progress !== null && (
        <div className="mt-4 h-1.5 overflow-hidden rounded bg-surface-2"><div className="h-full bg-cobalt" style={{ width: `${progress * 100}%` }} /></div>
      )}
      {error && <p className="mt-4 text-sm text-danger">{error}</p>}
    </>
  );
}
