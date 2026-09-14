"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;
    if (!user && pathname !== "/sign-in") router.replace("/sign-in");
    if (user && pathname === "/sign-in") router.replace("/upload");
  }, [user, loading, pathname, router]);

  if (loading) return null;
  return <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>;
}
