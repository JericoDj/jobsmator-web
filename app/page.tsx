import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cobalt-deep">JobsMator</p>
      <h1 className="mt-3 text-5xl font-bold tracking-tight">Search less. Apply more.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Upload your resume, pick a few job titles and the sites you trust, and get a shortlist scored 0–100 with a reason for every match.
      </p>
      <Link href="/upload" className="mt-8 inline-flex h-12 items-center rounded-[10px] bg-cobalt px-6 font-semibold text-white hover:bg-cobalt-deep">
        Find matching jobs
      </Link>
    </main>
  );
}
