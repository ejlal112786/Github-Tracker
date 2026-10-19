import Link from "next/link";
import { Logo } from "@/components/logo";

/** Marketing / legal footer. Privacy, Terms, and Contact links required. */
export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Understand your GitHub activity. Track your progress. Improve your
            repositories.
          </p>
          <p className="text-xs text-muted-foreground">
            GitHub Tracker is an independent product and is not affiliated
            with, endorsed by, or sponsored by GitHub, Inc.
          </p>
        </div>

        <nav aria-label="Footer" className="flex gap-10 text-sm">
          <ul className="space-y-2">
            <li className="font-medium">Product</li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="/#features">
                Features
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="/dashboard">
                Dashboard preview
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="/sign-in">
                Sign in
              </Link>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="font-medium">Legal</li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 text-xs text-muted-foreground sm:px-6">
          <span>© {new Date().getFullYear()} GitHub Tracker</span>
          <span>Built for developers, deployed on the free tier.</span>
        </div>
      </div>
    </footer>
  );
}
