import { ActivityTrendChart } from "@/components/dashboard/activity-trend-chart";
import { SampleDataBadge } from "@/components/sample-data-badge";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sampleActivitySeries } from "@/lib/sample-data";

/**
 * Landing-page teaser of the dashboard. Everything here is illustrative and
 * visibly labeled as sample data.
 */
export function DashboardPreview() {
  return (
    <section
      id="preview"
      aria-labelledby="preview-heading"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6"
    >
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h2
            id="preview-heading"
            className="text-3xl font-semibold tracking-tight"
          >
            Dashboard preview
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A calm, information-dense overview of profile stats and weekly
            development activity.
          </p>
        </div>
        <SampleDataBadge />
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="border-b bg-muted/30">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <CardTitle className="text-base">
                Weekly development activity
              </CardTitle>
              <CardDescription>
                Commits and pull requests over the last 8 weeks
              </CardDescription>
            </div>
            <Badge variant="info">Illustrative</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ActivityTrendChart data={sampleActivitySeries} />
          <p className="mt-3 text-xs text-muted-foreground">
            All figures above are fabricated sample values used to preview the
            layout. They do not represent any real GitHub account.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
