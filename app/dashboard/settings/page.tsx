import { Settings } from "lucide-react";
import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Settings",
  description: "Account and tracking preferences. Settings persistence requires sign-in in Phase 2.",
};

export default function SettingsPage() {
  return (
    <DashboardPage title="Settings">
      <div className="space-y-6">
        <PageHeader
          title="Settings"
          description="Planned options include sync cadence, email digests, theme preference persistence, and data export/deletion controls."
        />
        <EmptyState
          icon={Settings}
          title="Nothing to configure yet"
          description="Settings require an authenticated account so they can be stored and applied. This becomes available after sign-in ships in Phase 2."
          action={<Badge variant="secondary">Available after Phase 2</Badge>}
        />
      </div>
    </DashboardPage>
  );
}
