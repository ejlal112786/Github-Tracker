import {
  CircleDot,
  GitCommitHorizontal,
  GitPullRequest,
  Radio,
  Star,
  Tag,
} from "lucide-react";
import type { ActivityEvent } from "@/types";

const eventIcons: Record<ActivityEvent["type"], { icon: React.ComponentType<{ className?: string }>; label: string }> = {
  commit: { icon: GitCommitHorizontal, label: "Commit" },
  pull_request: { icon: GitPullRequest, label: "Pull request" },
  issue: { icon: CircleDot, label: "Issue" },
  star: { icon: Star, label: "Star" },
  fork: { icon: Radio, label: "Fork" },
  release: { icon: Tag, label: "Release" },
};

function timeAgo(iso: string): string {
  const minutes = Math.max(
    0,
    Math.round((Date.now() - new Date(iso).getTime()) / 60_000),
  );
  if (minutes < 60) return `${Math.max(1, minutes)}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

/** Recent activity feed preview (sample events only). */
export function EventFeed({ events }: { events: ActivityEvent[] }) {
  return (
    <ol className="space-y-4" aria-label="Recent sample activity">
      {events.map((event) => {
        const meta = eventIcons[event.type];
        const Icon = meta.icon;
        return (
          <li key={event.id} className="flex gap-3">
            <span
              aria-hidden
              className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground"
            >
              <Icon className="size-3.5" />
            </span>
            <div className="min-w-0 text-sm">
              <p className="leading-snug">{event.message}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {meta.label} · <span className="font-mono">{event.repo}</span> ·{" "}
                {timeAgo(event.timestamp)}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
