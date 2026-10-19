import Link from "next/link";
import { Compass } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

/** Global 404 handling for invalid routes. */
export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4">
      <Logo />
      <EmptyState
        icon={Compass}
        title="404 — page not found"
        description="That route doesn’t exist. Check the address, or head back to a page that does."
        className="max-w-md"
      />
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard">Dashboard preview</Link>
        </Button>
      </div>
    </div>
  );
}
