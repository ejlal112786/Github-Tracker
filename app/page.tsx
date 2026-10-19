import Link from "next/link";
import { ArrowRight, GitBranch, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { PrivacySection } from "@/components/marketing/privacy-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publicConfig } from "@/lib/env";

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className="mx-auto w-full max-w-7xl px-4 pb-8 pt-16 text-center sm:px-6 sm:pt-24"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
            <Badge variant="secondary">
              Phase 1 preview — UI only, authentication ships in Phase 2
            </Badge>
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              {publicConfig.appName}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground sm:text-xl">
              Understand your GitHub activity. Track your progress. Improve
              your repositories.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/sign-in">
                  <GitBranch aria-hidden />
                  Get started with GitHub
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard">
                  Explore dashboard
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="max-w-md text-xs text-muted-foreground">
              “Get started with GitHub” opens the sign-in page. Real GitHub
              OAuth is connected in a later phase — no data is fetched and no
              account is linked yet.
            </p>
          </div>
        </section>

        {/* Dashboard preview */}
        <DashboardPreview />

        {/* Features */}
        <FeatureGrid />

        {/* Privacy & security */}
        <PrivacySection />

        {/* Closing CTA */}
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-col items-center gap-4 rounded-2xl border bg-muted/30 px-6 py-12 text-center">
            <ShieldCheck className="size-8 text-primary" aria-hidden />
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to understand your GitHub presence?
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Explore the layout now with clearly labeled sample data, or
              review the planned sign-in experience. Nothing you do in this
              preview touches a real GitHub account.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <Button asChild>
                <Link href="/sign-in">Continue with GitHub</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard">Open dashboard preview</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
