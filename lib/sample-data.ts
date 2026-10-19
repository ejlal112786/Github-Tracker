import type {
  ActivityEvent,
  ActivityPoint,
  ProfileStats,
  RepoSummary,
} from "@/types";

/**
 * SAMPLE DATA ONLY — Phase 1 preview content.
 *
 * These values are illustrative placeholders. They are NOT real user data and
 * must always be rendered inside components that display a visible
 * "Sample data" badge. Real data arrives in later phases after GitHub OAuth
 * sign-in and API synchronization.
 */

export const SAMPLE_DATA_NOTE =
  "This is sample data for layout preview only. It does not represent any real GitHub account.";

export const sampleProfileStats: ProfileStats = {
  publicRepos: 42,
  followers: 1_284,
  following: 316,
  publicStars: 5_730,
};

export const sampleActivitySeries: ActivityPoint[] = [
  { label: "Wk 1", commits: 18, pullRequests: 4, issues: 3, reviews: 6 },
  { label: "Wk 2", commits: 26, pullRequests: 7, issues: 2, reviews: 9 },
  { label: "Wk 3", commits: 12, pullRequests: 3, issues: 5, reviews: 4 },
  { label: "Wk 4", commits: 31, pullRequests: 8, issues: 4, reviews: 11 },
  { label: "Wk 5", commits: 22, pullRequests: 5, issues: 1, reviews: 7 },
  { label: "Wk 6", commits: 35, pullRequests: 9, issues: 6, reviews: 12 },
  { label: "Wk 7", commits: 28, pullRequests: 6, issues: 3, reviews: 8 },
  { label: "Wk 8", commits: 41, pullRequests: 11, issues: 5, reviews: 14 },
];

export const sampleRepos: RepoSummary[] = [
  {
    id: "sample-repo-1",
    name: "sample/awesome-cli-tool",
    description: "A fast command-line companion for everyday developer tasks.",
    language: "TypeScript",
    stars: 1_842,
    forks: 121,
    openIssues: 23,
    isPrivate: false,
    updatedAt: "2026-10-17T09:30:00Z",
  },
  {
    id: "sample-repo-2",
    name: "sample/api-gateway",
    description: "Lightweight edge gateway with rate limiting and caching.",
    language: "Go",
    stars: 934,
    forks: 64,
    openIssues: 11,
    isPrivate: false,
    updatedAt: "2026-10-15T18:05:00Z",
  },
  {
    id: "sample-repo-3",
    name: "sample/design-system",
    description: "Accessible React component library and design tokens.",
    language: "TypeScript",
    stars: 612,
    forks: 48,
    openIssues: 17,
    isPrivate: false,
    updatedAt: "2026-10-12T11:45:00Z",
  },
  {
    id: "sample-repo-4",
    name: "sample/ml-notebooks",
    description: "Experiments and notebooks for tabular machine learning.",
    language: "Jupyter Notebook",
    stars: 208,
    forks: 19,
    openIssues: 4,
    isPrivate: false,
    updatedAt: "2026-10-09T08:15:00Z",
  },
];

export const sampleEvents: ActivityEvent[] = [
  {
    id: "sample-event-1",
    type: "pull_request",
    repo: "sample/api-gateway",
    message: "Opened PR #142 — “Add token-bucket rate limiter”",
    timestamp: "2026-10-18T15:20:00Z",
  },
  {
    id: "sample-event-2",
    type: "commit",
    repo: "sample/awesome-cli-tool",
    message: "Pushed 6 commits to main",
    timestamp: "2026-10-18T12:02:00Z",
  },
  {
    id: "sample-event-3",
    type: "issue",
    repo: "sample/design-system",
    message: "Closed issue #87 — “Focus ring invisible in dark mode”",
    timestamp: "2026-10-17T20:41:00Z",
  },
  {
    id: "sample-event-4",
    type: "release",
    repo: "sample/awesome-cli-tool",
    message: "Published release v3.4.0",
    timestamp: "2026-10-16T09:10:00Z",
  },
  {
    id: "sample-event-5",
    type: "star",
    repo: "sample/ml-notebooks",
    message: "Repository passed 200 cumulative stars",
    timestamp: "2026-10-15T14:55:00Z",
  },
];
