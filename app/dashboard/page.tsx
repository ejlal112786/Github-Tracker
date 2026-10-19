import Link from "next/link";
import { GitBranch, Star, Users, UserRoundPlus, FolderGit2 } from "lucide-react";
import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { ActivityTrendChart } from "@/components/dashboard/activity-trend-chart";
import { EventFeed } from "@/components/dashboard/event-feed";
import { RepoList } from "@/components/dashboard/repo-list";
import { StatCard } from "@/components/dashboard/stat-card";
import { EmptyState } from "@/components/empty-state";
import { SampleDataBadge } from "@/components/sample-data-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  SAMPLE_DATA_NOTE,
  sampleActivitySeries,
  sampleEvents,
  sampleProfileStats,
  sampleRepos,
} from "@/lib/sample-data";

export const metadata = {
  title: "Overview",
  description:
    "Dashboard preview with clearly labeled sample data. Real data arrives after GitHub sign-in in a later phase.",
};

/**
 * Overview page — dashboard preview. NOT connected to GitHub: every number
 * below comes from lib/sample-data.ts and is visibly badged as sample data.
 */
export default function DashboardOverviewPage() {
  return (
    <DashboardPage title="Overview">
    <div className="space-y-6">
      {/* Not-connected empty state (honest about Phase 1) */}
      <EmptyState
        icon={GitBranch}
        title="You haven’t connected GitHub yet"
        description="Authentication and repository sync arrive in Phase 2. Everything on this page is a layout preview built from fabricated sample data."
        action={
          <Button asChild>
            <Link href="/sign-in">Get started with GitHub</Link>
          </Button>
        }
        className="bg-muted/20"
      />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold tracking-tight">Profile snapshot</h2>
        <SampleDataBadge />
      </div>
      <p className="-mt-4 text-xs text-muted-foreground">{SAMPLE_DATA_NOTE}</p>

      {/* Overview cards */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard icon={FolderGit2} label="Public repositories" value={sampleProfileStats.publicRepos} />
        <StatCard icon={Users} label="Followers" value={sampleProfileStats.followers} />
        <StatCard icon={UserRoundPlus} label="Following" value={sampleProfileStats.following} />
        <StatCard icon={Star} label="Public stars" value={sampleProfileStats.publicStars} />
      </div>

      {/* Activity chart */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="space-y-1">
              <CardTitle className="text-base">Contribution activity</CardTitle>
              <CardDescription>
                Weekly commits and pull requests — last 8 weeks
              </CardDescription>
            </div>
            <SampleDataBadge />
          </div>
        </CardHeader>
        <CardContent>
          <ActivityTrendChart data={sampleActivitySeries} />
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Repository list preview */}
        <section aria-labelledby="repos-preview-heading" className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 id="repos-preview-heading" className="text-lg font-semibold tracking-tight">
              Top repositories
            </h2>
            <SampleDataBadge />
          </div>
          <RepoList repos={sampleRepos} />
        </section>

        {/* Recent activity preview */}
        <section aria-labelledby="activity-preview-heading" className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 id="activity-preview-heading" className="text-lg font-semibold tracking-tight">
              Recent activity
            </h2>
            <SampleDataBadge />
          </div>
          <Card>
            <CardContent>
              <EventFeed events={sampleEvents} />
            </CardContent>
          </Card>
          <p className="text-xs text-muted-foreground">
            <Badge variant="outline" className="mr-2">Note</Badge>
            This feed is fabricated for layout review. Real events appear only
            after you sign in with GitHub and the tracker begins syncing.
          </p>
        </section>
      </div>
    </div>
    </DashboardPage>
  );
}
