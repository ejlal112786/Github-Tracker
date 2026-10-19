import Link from "next/link";
import { Construction } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "GitHub sign-in placeholder",
  description:
    "GitHub OAuth is not connected yet. This placeholder marks where the real flow will live.",
};

/**
 * Honest placeholder for the GitHub OAuth step. Clicking "Continue with
 * GitHub" lands here instead of pretending to authenticate. The real OAuth
 * redirect is wired up in Phase 2.
 */
export default function GitHubPlaceholderPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4">
      <Logo />
      <EmptyState
        icon={Construction}
        title="GitHub OAuth isn’t connected yet"
        description="This route is a clearly marked placeholder. In Phase 2 it will redirect to GitHub’s authorization page and verify account ownership. No request was sent and no account was linked."
        className="max-w-md"
      />
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/sign-in">← Back to sign in</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard">View dashboard preview</Link>
        </Button>
      </div>
    </div>
  );
}
