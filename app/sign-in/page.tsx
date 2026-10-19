import Link from "next/link";
import { GitBranch, Info } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { EmailSignInForm } from "@/components/auth/email-sign-in-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Sign in",
  description:
    "Sign in to GitHub Tracker with GitHub OAuth or email verification. Authentication is connected in Phase 2.",
};

/**
 * Sign-in page — visual and structural foundation ONLY.
 *
 * Permitted methods (and the only ones shown): GitHub OAuth and email
 * verification (OTP / magic link). No passwords, no Google sign-in. Nothing
 * here authenticates a user; the real flows arrive in Phase 2 with Supabase.
 */
export default function SignInPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex h-14 items-center justify-between px-4 sm:px-6">
        <Logo />
        <ThemeToggle />
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-3">
            <div className="space-y-1">
              <CardTitle className="text-xl">Sign in to GitHub Tracker</CardTitle>
              <CardDescription>
                Choose how you’d like to continue. No account exists yet —
                this preview shows the planned experience.
              </CardDescription>
            </div>
            <Badge variant="warning" className="w-fit">
              Preview — authentication connects in Phase 2
            </Badge>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Method 1: GitHub OAuth */}
            <Button asChild size="lg" className="w-full">
              <Link href="/sign-in/github-placeholder">
                <GitBranch aria-hidden />
                Continue with GitHub
              </Link>
            </Button>

            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                or
              </span>
              <Separator className="flex-1" />
            </div>

            {/* Method 2: Email verification */}
            <EmailSignInForm />

            <div className="flex items-start gap-2 rounded-lg border bg-muted/30 p-3 text-xs text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
              <p>
                Email verification confirms you control this inbox. It does{" "}
                <strong className="font-medium text-foreground">not</strong>{" "}
                prove ownership of a GitHub account — connecting GitHub data
                requires signing in with GitHub OAuth, which is implemented in
                Phase 2. Entering a username or profile URL never links an
                account.
              </p>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              By continuing you agree to our{" "}
              <Link className="underline underline-offset-2 hover:text-foreground" href="/terms">
                Terms
              </Link>{" "}
              and{" "}
              <Link className="underline underline-offset-2 hover:text-foreground" href="/privacy">
                Privacy Policy
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="px-4 pb-6 text-center text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          ← Back to home
        </Link>
        <span className="mx-2" aria-hidden>·</span>
        GitHub Tracker is independent and not affiliated with GitHub, Inc.
      </footer>
    </div>
  );
}
