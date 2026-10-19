import { cn } from "@/lib/utils";

/** Lightweight inline spinner with accessible label. */
export function Spinner({
  className,
  label = "Loading",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span role="status" aria-live="polite" className="inline-flex items-center gap-2">
      <svg
        aria-hidden
        className={cn("size-4 animate-spin text-current", className)}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-80"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8v3a5 5 0 0 0-5 5H4z"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}
