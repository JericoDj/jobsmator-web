"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import type { Job } from "@/lib/contracts";

const TIER: Record<Job["tier"], string> = {
  strong: "bg-match-tint text-match-deep",
  good: "bg-volt-tint text-volt-deep",
  skip: "bg-surface-2 text-muted",
};

export function JobCard({ job }: { job: Job }) {
  const qc = useQueryClient();
  const invalidate = () => qc.invalidateQueries({ queryKey: ["run"] });
  const save = useMutation({ mutationFn: () => api.saveJob(job.id), onSuccess: invalidate });
  const hide = useMutation({ mutationFn: () => api.hideJob(job.id), onSuccess: invalidate });

  return (
    <li className="grid grid-cols-[1fr_auto] gap-4 rounded-[14px] border border-line bg-card p-5 shadow-[var(--jm-shadow)]">
      <div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="font-semibold text-text">{job.site}</span>·<span>{job.location}</span>
          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${TIER[job.tier]}`}>{job.tier}</span>
        </div>
        <h3 className="mt-1 text-lg font-semibold">{job.title}</h3>
        <p className="text-sm">{job.company}</p>
        <p className="mt-2 text-sm leading-relaxed">{job.why}</p>
        {job.redFlags.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {job.redFlags.map((f) => <li key={f} className="rounded-md bg-danger-tint px-2 py-0.5 text-xs font-semibold text-danger">{f}</li>)}
          </ul>
        )}
        <div className="mt-3 flex gap-2">
          <a href={job.url} target="_blank" rel="noreferrer" className="rounded-[10px] bg-cobalt px-3.5 py-1.5 text-sm font-semibold text-white hover:bg-cobalt-deep">Open on {job.site}</a>
          <button onClick={() => save.mutate()} className="rounded-[10px] px-3 py-1.5 text-sm font-semibold hover:bg-surface-2">{job.saved ? "Saved" : "Save"}</button>
          <button onClick={() => hide.mutate()} className="rounded-[10px] px-3 py-1.5 text-sm font-semibold hover:bg-surface-2">Hide</button>
        </div>
      </div>
      <div className="text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full font-display text-lg font-bold text-ink"
          style={{ background: `conic-gradient(${job.score >= 80 ? "var(--jm-match)" : "var(--jm-cobalt)"} ${job.score}%, var(--jm-surface-2) 0)` }}>
          <span className="grid h-13 w-13 place-items-center rounded-full bg-card">{job.score}</span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">Match</span>
      </div>
    </li>
  );
}
