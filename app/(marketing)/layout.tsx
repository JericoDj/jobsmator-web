import { SiteFooter, SiteHeader } from "@/components/shell";

/**
 * Marketing shell: header, page, footer. Separate from the app shell in
 * `(app)` because these pages are public — no auth gate, no redirects.
 */
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
