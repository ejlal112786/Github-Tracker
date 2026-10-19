import { ActivityTrendChart } from "@/components/dashboard/activity-trend-chart";
import { EventFeed } from "@/components/dashboard/event-feed";
import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { PageHeader } from "@/components/page-header";
import { SampleDataBadge } from "@/components/sample-data-badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sampleActivitySeries, sampleEvents } from "@/lib/sample-data";

export const metadata = {
  title: "Activity",
  description: "Activity trends preview with sample data. Real event tracking arrives in a later phase.",
};

export default function ActivityPage() {
  return (
    <DashboardPage title="Activity">
      <div className="space-y-6">
        <PageHeader
          title="Development activity"
          description="Trend views across commits, pull requests, issues, and reviews. Full filtering and date ranges ship in a later phase — the widgets below preview the layout using sample data."
          actions={<SampleDataBadge />}
        />

        <Card>
          <CardHeader className="border-b">
            <div className="flex items-center justify-between gap-2">
              <div className="space-y-1">
                <CardTitle className="text-base">Weekly trend</CardTitle>
                <CardDescription>Commits vs. pull requests, last 8 weeks</CardDescription>
              </div>
              <SampleDataBadge />
            </div>
          </CardHeader>
          <CardContent>
            <ActivityTrendChart data={sampleActivitySeries} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <div className="flex items-center justify-between gap-2">
              <div className="space-y-1">
                <CardTitle className="text-base">Event stream</CardTitle>
                <CardDescription>Most recent sample events</CardDescription>
              </div>
              <SampleDataBadge />
            </div>
          </CardHeader>
          <CardContent>
            <EventFeed events={sampleEvents} />
          </CardContent>
        </Card>
      </div>
    </DashboardPage>
  );
}
