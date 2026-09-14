import { auth } from "./firebase";
import type { CreateRunBody, Job, Me, Resume, Run, UserDefaults } from "./contracts";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export class ApiError extends Error {
  constructor(public code: string, message: string, public status: number, public details?: unknown) {
    super(message);
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = await auth.currentUser?.getIdToken();
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "content-type": "application/json", ...(token && { authorization: `Bearer ${token}` }), ...init.headers },
  });
  if (res.status === 204) return undefined as T;
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(body.error ?? "internal", body.message ?? "Something went wrong.", res.status, body.details);
  return body as T;
}

export const api = {
  me: () => request<Me>("/v1/me"),
  updateMe: (patch: Partial<UserDefaults>) => request<Me>("/v1/me", { method: "PATCH", body: JSON.stringify(patch) }),

  resumes: () => request<{ items: Resume[] }>("/v1/resumes"),
  createResume: (body: { storagePath: string; filename: string; sizeBytes: number }) =>
    request<{ resumeId: string }>("/v1/resumes", { method: "POST", body: JSON.stringify(body) }),
  deleteResume: (id: string) => request<void>(`/v1/resumes/${id}`, { method: "DELETE" }),

  startRun: (body: CreateRunBody) => request<{ runId: string }>("/v1/runs", { method: "POST", body: JSON.stringify(body) }),
  runs: () => request<{ items: Run[] }>("/v1/runs"),
  run: (id: string) => request<Run>(`/v1/runs/${id}`),
  runJobs: (id: string, params: { tier?: string; site?: string } = {}) =>
    request<{ items: Job[]; nextCursor: string | null }>(`/v1/runs/${id}/jobs?${new URLSearchParams(params as Record<string, string>)}`),

  savedJobs: () => request<{ items: Job[] }>("/v1/jobs/saved"),
  saveJob: (id: string) => request<{ saved: boolean }>(`/v1/jobs/${id}/save`, { method: "POST" }),
  hideJob: (id: string) => request<{ hidden: boolean }>(`/v1/jobs/${id}/hide`, { method: "POST" }),
};
