import { Spinner } from "@/components/ui/spinner";

/** Loading placeholder block composed from the Skeleton primitive. */
export function LoadingBlock({ className }: { className?: string }) {
  return (
    <div
      className={
        className ??
        "flex h-24 w-full items-center justify-center rounded-xl border bg-muted/30"
      }
    >
      <Spinner label="Loading content" />
    </div>
  );
}
