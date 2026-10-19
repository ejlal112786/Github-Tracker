import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reusable empty / placeholder state for sections that have no data yet or
 * are scheduled for a later phase. Keeps messaging honest: never implies a
 * feature works before it ships.
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed px-6 py-12 text-center",
        className,
      )}
    >
      {Icon ? (
        <span
          aria-hidden
          className="grid size-11 place-items-center rounded-full bg-muted text-muted-foreground"
        >
          <Icon className="size-5" />
        </span>
      ) : null}
      <div className="space-y-1">
        <p className="font-medium">{title}</p>
        {description ? (
          <p className="mx-auto max-w-md text-sm text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
