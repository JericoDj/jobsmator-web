"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { JobCard } from "@/components/job-card";
import { api } from "@/lib/api";
import type { Tier } from "@/lib/contracts";

const FAILED_COPY: Record<string, string> = {
  resume_unreadable: "We couldn't read that resume. Try a text-based PDF instead of a scan.",
  invalid_request: "Pick at least one job site and one interest to search.",
};

export default function RunPage() {
  const { id } = useParams<{ id: string }>();
  const [tier, setTier] = useState<Tier | undefined>();

  const run = useQuery({
    queryKey: ["run", id],
    queryFn: () => api.run(id),
    refetchInterval: (q) => (q.state.data && (q.state.data.status === "queued" || q.state.data.status === "running") ? 3000 : false),
  });
  const jobs = useQuery({ queryKey: ["run", id, "jobs", tier], queryFn: () => api.runJobs(id, tier ? { tier } : {}), enabled: run.data?.status === "done" });

  if (!run.data) return null;
  if (run.data.status === "failed") return <p className="py-24 text-center">{FAILED_COPY[run.data.errorCode ?? ""] ?? "Job sites are slow right now. Try again in a minute."}</p>;
  if (run.data.status !== "done") {
    return (
      <div className="py-24 text-center">
        <div className="mx-auto h-1.5 w-64 animate-pulse rounded bg-cobalt" />
        <p className="mt-4 font-semibold text-ink">Searching job sites…</p>
        <p className="text-sm text-muted">This usually takes about a minute.</p>
      </div>
    );
  }

  const stats = run.data.stats;
  return (
    <>
      <h1 className="text-3xl font-bold">{stats?.recommended ?? 0} matches</h1>
      <div className="mt-4 flex gap-2">
        {([undefined, "strong", "good"] as const).map((t) => (
          <button key={t ?? "all"} onClick={() => setTier(t)}
            className={`rounded-full border px-3 py-1 text-sm font-semibold ${tier === t ? "border-cobalt bg-cobalt-tint text-cobalt-deep" : "border-line-strong text-muted"}`}>
            {t ? t[0].toUpperCase() + t.slice(1) : "All"}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid gap-3">
        {jobs.data?.items.filter((j) => !j.hidden).map((j) => <JobCard key={j.id} job={j} />)}
        {jobs.data && jobs.data.items.length === 0 && (
          <li className="py-16 text-center text-muted">No matches at this tier yet. Adding another interest usually helps.</li>
        )}
      </ul>
    </>
  );
}
