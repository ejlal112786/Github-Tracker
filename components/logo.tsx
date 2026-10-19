import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Product mark. Original branding — intentionally NOT GitHub's Octocat or
 * logo, and the product does not imply endorsement by GitHub, Inc.
 */
export function Logo({
  className,
  withText = true,
}: {
  className?: string;
  withText?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="GitHub Tracker — home"
      className={cn("flex items-center gap-2 font-semibold", className)}
    >
      <span
        aria-hidden
        className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground"
      >
        {/* Simple original glyph: rising bars inside a circle track */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle
            cx="8"
            cy="8"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.45"
          />
          <path
            d="M5 10.5V8M8 10.5V5.5M11 10.5V7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {withText ? (
        <span className="text-balance leading-none">
          GitHub <span className="text-muted-foreground">Tracker</span>
        </span>
      ) : null}
    </Link>
  );
}
