import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import type { ReactNode } from "react";

/** Server-side convenience wrapper: every dashboard page renders inside the shell. */
export function DashboardPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return <DashboardShell title={title}>{children}</DashboardShell>;
}
