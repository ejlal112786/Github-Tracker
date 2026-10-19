import { ShieldCheck } from "lucide-react";
import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Security",
  description: "Security visibility is planned for a later phase. Nothing is scanned yet.",
};

export default function SecurityPage() {
  return (
    <DashboardPage title="Security">
      <div className="space-y-6">
        <PageHeader
          title="Security visibility"
          description="Planned signals include dependency vulnerabilities, exposed secrets in public repos, and stale branch protections."
        />
        <EmptyState
          icon={ShieldCheck}
          title="Security scanning is coming in a later phase"
          description="No repository scanning, vulnerability checks, or secret detection is operational today. This page intentionally shows no findings because none have been computed — we never want to imply that analysis has run when it hasn’t."
          action={<Badge variant="secondary">Planned · Phase 7+</Badge>}
        />
      </div>
    </DashboardPage>
  );
}
