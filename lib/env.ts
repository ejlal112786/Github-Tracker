/**
 * Centralized environment-variable access and validation.
 *
 * Phase 1 principles:
 * - The unauthenticated UI (landing, sign-in shell, dashboard preview) must run
 *   locally WITHOUT any Supabase / GitHub credentials configured.
 * - Secret values are NEVER logged or exposed to the browser. Only boolean
 *   "is configured" checks and non-secret names are surfaced in diagnostics.
 * - Later phases (auth, data sync) call `requireEnv()` server-side and fail
 *   fast with a safe message if a variable is missing.
 */

type ServerEnv = {
  /** Supabase project URL — required from Phase 2 (database + auth). */
  SUPABASE_URL?: string;
  /** Supabase server-side key — required from Phase 2. Never expose to client. */
  SUPABASE_SERVICE_ROLE_KEY?: string;
  /** Supabase anon key — publishable by design, used from Phase 2. */
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  /** GitHub OAuth app client ID — required from Phase 2. */
  GITHUB_CLIENT_ID?: string;
  /** GitHub OAuth app client secret — required from Phase 2. Server only. */
  GITHUB_CLIENT_SECRET?: string;
  /** Canonical app URL used for OAuth redirects (e.g. Vercel deployment URL). */
  NEXT_PUBLIC_APP_URL?: string;
};

function read(name: keyof ServerEnv): string | undefined {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value.trim() : undefined;
}

/**
 * Return an env var's value on the server, or throw a descriptive error that
 * lists ONLY the variable name (never its value) when it is required but
 * missing. Use this in future API routes / server actions.
 */
export function requireEnv(name: keyof ServerEnv): string {
  const value = read(name);
  if (!value) {
    throw new Error(
      `Missing required environment variable "${name}". ` +
        `Configure it in .env.local for local development, or in Vercel → ` +
        `Project Settings → Environment Variables for deployments.`,
    );
  }
  return value;
}

/** Safe boolean check — never reveals the value. */
export function isEnvConfigured(name: keyof ServerEnv): boolean {
  return read(name) !== undefined;
}

/**
 * Non-secret summary of which integrations are ready. Safe to use in server
 * components (e.g. banners on placeholder pages). Contains no values.
 */
export function getIntegrationReadiness(): {
  supabaseConfigured: boolean;
  githubOAuthConfigured: boolean;
} {
  return {
    supabaseConfigured:
      isEnvConfigured("NEXT_PUBLIC_SUPABASE_ANON_KEY") &&
      isEnvConfigured("SUPABASE_URL"),
    githubOAuthConfigured:
      isEnvConfigured("GITHUB_CLIENT_ID") &&
      isEnvConfigured("GITHUB_CLIENT_SECRET"),
  };
}

/** App metadata that is public by design (safe for client components). */
export const publicConfig = {
  appName: "GitHub Tracker",
  tagline:
    "Understand your GitHub activity. Track your progress. Improve your repositories.",
} as const;
