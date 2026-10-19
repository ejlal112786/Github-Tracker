import { UserRound } from "lucide-react";
import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Profile",
  description: "Connected GitHub profile view. Sign-in is implemented in Phase 2.",
};

export default function ProfilePage() {
  return (
    <DashboardPage title="Profile">
      <div className="space-y-6">
        <PageHeader
          title="GitHub profile"
          description="Once you sign in with GitHub OAuth, your verified avatar, username, and linked-account status will appear here."
        />
        <EmptyState
          icon={UserRound}
          title="No profile linked yet"
          description="You are not signed in, so there is no profile to display. Entering a GitHub username would not prove ownership — only the OAuth flow in Phase 2 can link an account."
          action={<Badge variant="secondary">Connects in Phase 2</Badge>}
        />
      </div>
    </DashboardPage>
  );
}
