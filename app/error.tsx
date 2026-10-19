"use client";

import { useEffect } from "react";
import { RotateCcw, TriangleAlert } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";

/** Global error boundary — resets the tree without exposing stack traces. */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Structured, minimal logging; no secrets or query strings.
    console.error("Unhandled UI error:", error.digest ?? error.message);
  }, [error]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4">
      <EmptyState
        icon={TriangleAlert}
        title="Something went wrong"
        description="An unexpected error interrupted rendering. Try again — if it keeps happening, the issue will be visible in server logs (not exposed here)."
        action={
          <Button onClick={reset}>
            <RotateCcw aria-hidden />
            Try again
          </Button>
        }
        className="max-w-md"
      />
    </div>
  );
}
