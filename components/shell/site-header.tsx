"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useSiteNav } from "@/lib/controllers/use-site-nav";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui";
import { Wordmark } from "./wordmark";

/**
 * A floating glass bar rather than a full-width band: it lifts off the page on
 * scroll, blurs and saturates what passes underneath, and carries a hairline
 * highlight on its top edge so the panel reads as a physical surface instead
 * of a translucent rectangle. Flat and borderless while you are still at the
 * top of the hero, so nothing competes with the headline.
 */
export function SiteHeader() {
  const { links, menuOpen, toggleMenu, closeMenu, scrolled } = useSiteNav();
  const { user, loading } = useAuth();

  const appHref = user ? "/upload" : "/sign-in";

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div
        className={cn(
          "glass pointer-events-auto mx-auto flex h-14 w-full max-w-6xl items-center gap-6 rounded-2xl px-3 shadow-[0_1px_0_0_rgba(255,255,255,.7)_inset] transition-all duration-300 sm:px-4",
          // The panel is always glass; scrolling just gives it an edge and a
          // shadow, so it detaches from the page rather than appearing on it.
          scrolled
            ? "border border-white/70 shadow-[0_1px_0_0_rgba(255,255,255,.7)_inset,0_10px_30px_-12px_rgba(11,31,58,.28)]"
            : "border border-line/50",
        )}
      >
        <Link href="/" className="shrink-0 px-1" aria-label="JobsMator home">
          <Wordmark />
        </Link>

        <nav className="hidden flex-1 items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-1.5 md:flex">
          {!loading && !user && (
            <Link
              href="/sign-in"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              Sign in
            </Link>
          )}
          <ButtonLink href={appHref} className="h-10 px-4 text-sm">
            {user ? "Open the app" : "Get started"}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="ml-auto grid h-10 w-10 place-items-center rounded-xl text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
            {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="site-menu"
          className="glass pointer-events-auto mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-white/60 p-3 shadow-[0_10px_30px_-12px_rgba(11,31,58,.28)] md:hidden"
        >
          <nav className="flex flex-col" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-ink/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href={appHref} size="lg" className="mt-2 w-full" onClick={closeMenu}>
            {user ? "Open the app" : "Get started — it's free"}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
