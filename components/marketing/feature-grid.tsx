import Link from "next/link";
import { Activity, BarChart3, History, Lock, Package, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: UserRound,
    title: "GitHub profile analytics",
    description:
      "See your public footprint at a glance — repositories, stars, followers, and how they change over time.",
  },
  {
    icon: Package,
    title: "Repository insights",
    description:
      "Understand which repos drive your growth: languages, engagement, issues, and fork activity.",
  },
  {
    icon: Activity,
    title: "Development activity trends",
    description:
      "Track commits, pull requests, issues, and reviews in weekly and monthly trend views.",
  },
  {
    icon: Lock,
    title: "Security visibility",
    description:
      "Surface dependency and repository security signals so you know what to fix first. (Planned for a later phase.)",
  },
  {
    icon: History,
    title: "Historical tracking",
    description:
      "Your stats are snapshotted over time so you can measure progress instead of chasing a live counter.",
  },
  {
    icon: BarChart3,
    title: "One honest dashboard",
    description:
      "A calm, information-dense overview built for developers — sample data is always labeled as sample data.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" aria-labelledby="features-heading" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-10 max-w-2xl space-y-2">
        <Badge variant="secondary">Planned capabilities</Badge>
        <h2 id="features-heading" className="text-3xl font-semibold tracking-tight">
          Everything you need to understand your GitHub presence
        </h2>
        <p className="text-muted-foreground">
          GitHub Tracker is being built in phases. The landing page and
          dashboard preview are live now; analytics, authentication, and
          security scanning arrive in later phases.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <span
                aria-hidden
                className="mb-1 grid size-9 place-items-center rounded-lg bg-primary/10 text-primary"
              >
                <feature.icon className="size-5" />
              </span>
              <CardTitle className="text-base">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild>
          <Link href="/sign-in">Get started with GitHub</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard">Explore dashboard</Link>
        </Button>
      </div>
    </section>
  );
}
