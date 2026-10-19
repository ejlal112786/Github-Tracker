import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { RepoList } from "@/components/dashboard/repo-list";
import { PageHeader } from "@/components/page-header";
import { SampleDataBadge } from "@/components/sample-data-badge";
import { Alert } from "@/components/ui/alert";
import { sampleRepos } from "@/lib/sample-data";

export const metadata = {
  title: "Repositories",
  description: "Repository insights preview with sample data. Real repository sync arrives in a later phase.",
};

export default function RepositoriesPage() {
  return (
    <DashboardPage title="Repositories">
      <div className="space-y-6">
        <PageHeader
          title="Your repositories"
          description="Sorting, language breakdowns, and per-repo trend charts arrive in a later phase. This preview shows the planned layout with fabricated sample repositories."
          actions={<SampleDataBadge />}
        />
        <Alert variant="info">
          No GitHub account is connected, so nothing here reflects a real
          repository. Values come from the sample dataset in lib/sample-data.ts.
        </Alert>
        <RepoList repos={sampleRepos} />
      </div>
    </DashboardPage>
  );
}
