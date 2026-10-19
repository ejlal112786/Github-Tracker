import { GitFork, Star } from "lucide-react";
import type { RepoSummary } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/utils";

function relativeDate(iso: string): string {
  const then = new Date(iso).getTime();
  const days = Math.max(
    0,
    Math.round((Date.now() - then) / 86_400_000),
  );
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

/** Read-only repository list preview. Rows are not links because no real repo exists behind them. */
export function RepoList({ repos }: { repos: RepoSummary[] }) {
  return (
    <ul className="space-y-2" aria-label="Sample repositories">
      {repos.map((repo) => (
        <li key={repo.id}>
          <Card className="py-4">
            <CardContent className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-sm font-medium">{repo.name}</span>
                {repo.isPrivate ? (
                  <Badge variant="outline">Private</Badge>
                ) : (
                  <Badge variant="secondary">Public</Badge>
                )}
                <span className="ml-auto text-xs text-muted-foreground">
                  Updated {relativeDate(repo.updatedAt)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{repo.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                {repo.language ? (
                  <span className="flex items-center gap-1.5">
                    <span
                      aria-hidden
                      className="size-2.5 rounded-full bg-chart-1"
                    />
                    {repo.language}
                  </span>
                ) : null}
                <span className="flex items-center gap-1">
                  <Star className="size-3.5" aria-hidden />
                  {formatCompactNumber(repo.stars)} stars
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="size-3.5" aria-hidden />
                  {formatCompactNumber(repo.forks)} forks
                </span>
                <span>{repo.openIssues} open issues</span>
              </div>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}
