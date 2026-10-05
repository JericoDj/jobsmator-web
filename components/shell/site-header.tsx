"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useSiteNav } from "@/lib/controllers/use-site-nav";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui";
import { Wordmark } from "./wordmark";

/**
 * Marketing header. Transparent over the hero, bordered once you scroll.
 * The right-hand action is the whole point of the page, so it changes with
 * the session: sign in, or straight back into the app.
 */
export function SiteHeader() {
  const { links, menuOpen, toggleMenu, closeMenu, scrolled } = useSiteNav();
  const { user, loading } = useAuth();

  const appHref = user ? "/upload" : "/sign-in";
  const appLabel = user ? "Open the app" : "Sign in";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors",
        scrolled ? "border-b border-line bg-ground/85 backdrop-blur" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-6">
        <Link href="/" className="shrink-0" aria-label="JobsMator home">
          <Wordmark />
        </Link>

        <nav className="hidden flex-1 items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          {!loading && !user && (
            <Link href="/sign-in" className="text-sm font-semibold text-ink transition-colors hover:text-cobalt-deep">
              Sign in
            </Link>
          )}
          <ButtonLink href={appHref}>{user ? appLabel : "Get started"}</ButtonLink>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="ml-auto grid h-11 w-11 place-items-center rounded-[10px] border border-line text-ink md:hidden"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
            {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="site-menu" className="border-t border-line bg-ground px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="rounded-[10px] px-2 py-3 text-base font-medium text-ink hover:bg-surface"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href={appHref} size="lg" className="mt-4 w-full" onClick={closeMenu}>
            {user ? appLabel : "Get started — it's free"}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
