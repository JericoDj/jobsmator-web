"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ApiError } from "@/lib/api";
import { JOB_SITES, type JobSite } from "@/lib/contracts";

export default function SitesPage() {
  const router = useRouter();
  const me = useQuery({ queryKey: ["me"], queryFn: api.me });
  const resumes = useQuery({ queryKey: ["resumes"], queryFn: api.resumes });
  const [sites, setSites] = useState<JobSite[] | null>(null);
  const selected = sites ?? me.data?.defaults.sites ?? [...JOB_SITES];

  const start = useMutation({
    mutationFn: async () => {
      const resume = resumes.data?.items[0];
      if (!resume) throw new ApiError("not_found", "Upload a resume first.", 404);
      await api.updateMe({ sites: selected });
      return api.startRun({ resumeId: resume.id, interests: me.data!.defaults.interests, sites: selected, jobsPerSite: me.data!.defaults.jobsPerSite, saveToSheet: false });
    },
    onSuccess: ({ runId }) => router.push(`/runs/${runId}`),
  });

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cobalt-deep">Step 3 of 3</p>
      <h1 className="mt-2 text-3xl font-bold">Where should we look?</h1>
      <ul className="mt-6 flex flex-wrap gap-2">
        {JOB_SITES.map((s) => {
          const on = selected.includes(s);
          return (
            <li key={s}>
              <button onClick={() => setSites(on ? selected.filter((x) => x !== s) : [...selected, s])}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium ${on ? "border-cobalt bg-cobalt-tint font-semibold text-cobalt-deep" : "border-line-strong bg-card text-text"}`}>
                {on ? "✓ " : ""}{s}
              </button>
            </li>
          );
        })}
      </ul>
      {start.error && <p className="mt-4 text-sm text-danger">{(start.error as Error).message}</p>}
      <button disabled={selected.length === 0 || start.isPending} onClick={() => start.mutate()}
        className="mt-10 h-12 rounded-[10px] bg-cobalt px-6 font-semibold text-white hover:bg-cobalt-deep disabled:opacity-45">
        {start.isPending ? "Starting…" : "Find matching jobs"}
      </button>
    </>
  );
}
