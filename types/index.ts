/**
 * Shared TypeScript types for GitHub Tracker.
 * Phase 1 defines the shape of data used by the UI preview. Real, verified
 * data arrives in later phases via GitHub OAuth + Supabase.
 */

/** A public GitHub repository summary (UI-facing shape). */
export interface RepoSummary {
  id: string;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  isPrivate: boolean;
  updatedAt: string; // ISO date string
}

/** One point on a contribution / activity time series. */
export interface ActivityPoint {
  /** Short label, e.g. "Mon" or "W01". */
  label: string;
  commits: number;
  pullRequests: number;
  issues: number;
  reviews: number;
}

/** A recent feed item shown in the dashboard preview. */
export interface ActivityEvent {
  id: string;
  type: "commit" | "pull_request" | "issue" | "star" | "fork" | "release";
  repo: string;
  message: string;
  timestamp: string; // ISO date string
}

/** Headline counters for the overview cards. */
export interface ProfileStats {
  publicRepos: number;
  followers: number;
  following: number;
  publicStars: number;
}

/** Marker type to make sample data explicit at call sites. */
export interface SampleDataBundle<T = unknown> {
  isSampleData: true;
  note: string;
  data: T;
}

/** Navigation entry used by sidebar and top navigation. */
export interface NavItem {
  href: string;
  label: string;
  /** Optional lucide icon name key resolved by the component layer. */
  phase?: number;
}

/** Sign-in methods permitted by product constraints. */
export type SignInMethod = "github-oauth" | "email-otp";
