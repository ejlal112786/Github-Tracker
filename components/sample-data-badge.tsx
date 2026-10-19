import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Always render this next to preview/sample content so users can never
 * mistake placeholder numbers for their real GitHub data.
 */
export function SampleDataBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="warning"
      role="note"
      className={cn("select-none", className)}
      title="This content is illustrative sample data, not real user data."
    >
      Sample data
    </Badge>
  );
}
