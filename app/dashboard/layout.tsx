import type { ReactNode } from "react";

/**
 * Dashboard section layout. The shell itself is a client component (it owns
 * mobile nav state + active-route highlighting); pages inside remain server
 * components by default.
 */
export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
