"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { Button } from "@/components/ui/button";

/**
 * Responsive dashboard shell: fixed sidebar on desktop, slide-over panel on
 * mobile/tablet, and a top bar that renders each page via `title` + children.
 */
export function DashboardShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-dvh">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r bg-muted/20 p-4 lg:flex">
        <Logo className="mb-6 px-1" />
        <SidebarNav />
        <div className="mt-auto space-y-2 px-1 text-xs text-muted-foreground">
          <p className="rounded-md border border-dashed p-2">
            You are viewing a layout preview with sample data. GitHub sign-in
            connects in Phase 2.
          </p>
          <Link href="/" className="block hover:text-foreground">
            ← Back to home
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b bg-background/85 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/70 sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-dashboard-nav"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
          <h1 className="truncate text-sm font-semibold sm:text-base">{title}</h1>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            {/* Avatar placeholder — real profile arrives after Phase 2 sign-in */}
            <span
              role="img"
              aria-label="Profile avatar placeholder (sign-in not connected yet)"
              title="Not signed in — avatar appears after GitHub sign-in (Phase 2)"
              className="grid size-8 shrink-0 place-items-center rounded-full border border-dashed bg-muted text-xs font-medium text-muted-foreground select-none"
            >
              ?
            </span>
          </div>
        </header>

        {/* Mobile navigation panel */}
        {mobileOpen ? (
          <nav
            id="mobile-dashboard-nav"
            aria-label="Dashboard mobile"
            className="border-b bg-background px-4 py-3 lg:hidden"
          >
            <SidebarNav onNavigate={() => setMobileOpen(false)} />
          </nav>
        ) : null}

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">
          {children}
        </main>
      </div>
    </div>
  );
}
