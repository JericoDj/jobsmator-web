"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/lib/api";

export default function InterestsPage() {
  const router = useRouter();
  const me = useQuery({ queryKey: ["me"], queryFn: api.me });
  const [draft, setDraft] = useState("");
  const [interests, setInterests] = useState<string[] | null>(null);
  const list = interests ?? me.data?.defaults.interests ?? [];
  const save = useMutation({ mutationFn: () => api.updateMe({ interests: list }), onSuccess: () => router.push("/sites") });

  function add() {
    const v = draft.trim();
    if (!v || list.length >= 5) return;
    setInterests([...list, v]);
    setDraft("");
  }

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cobalt-deep">Step 2 of 3</p>
      <h1 className="mt-2 text-3xl font-bold">What are you looking for?</h1>
      <p className="mt-1 text-muted">Up to 5 job titles.</p>
      <form className="mt-6 flex gap-2" onSubmit={(e) => { e.preventDefault(); add(); }}>
        <input id="interest" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Flutter Developer"
          className="h-11 flex-1 rounded-[10px] border border-line-strong bg-card px-3 text-ink" />
        <button type="submit" className="h-11 rounded-[10px] border border-line-strong px-4 font-semibold text-cobalt-deep hover:bg-cobalt-tint">Add</button>
      </form>
      <ul className="mt-4 flex flex-wrap gap-2">
        {list.map((i) => (
          <li key={i} className="flex items-center gap-2 rounded-full border border-cobalt bg-cobalt-tint px-3 py-1 text-sm font-semibold text-cobalt-deep">
            {i}<button aria-label={`Remove ${i}`} onClick={() => setInterests(list.filter((x) => x !== i))}>×</button>
          </li>
        ))}
      </ul>
      <button disabled={list.length === 0 || save.isPending} onClick={() => save.mutate()}
        className="mt-10 h-12 rounded-[10px] bg-cobalt px-6 font-semibold text-white hover:bg-cobalt-deep disabled:opacity-45">
        Next: job sites
      </button>
    </>
  );
}
