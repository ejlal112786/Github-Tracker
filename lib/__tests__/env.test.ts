import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getIntegrationReadiness, isEnvConfigured, requireEnv } from "@/lib/env";

const KEYS = [
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "GITHUB_CLIENT_ID",
  "GITHUB_CLIENT_SECRET",
  "NEXT_PUBLIC_APP_URL",
] as const;

describe("env helpers (Phase 1 contract)", () => {
  const original = { ...process.env };

  beforeEach(() => {
    for (const key of KEYS) delete process.env[key];
  });

  afterEach(() => {
    process.env = { ...original };
  });

  it("runs with NO credentials configured (UI must not require them)", () => {
    const readiness = getIntegrationReadiness();
    expect(readiness.supabaseConfigured).toBe(false);
    expect(readiness.githubOAuthConfigured).toBe(false);
  });

  it("requireEnv throws naming ONLY the variable, never a value", () => {
    process.env.GITHUB_CLIENT_SECRET = "super-secret-value";
    expect(() => requireEnv("GITHUB_CLIENT_ID")).toThrow(/GITHUB_CLIENT_ID/);
    try {
      requireEnv("GITHUB_CLIENT_ID");
    } catch (error) {
      expect(String(error)).not.toContain("super-secret-value");
    }
  });

  it("requireEnv returns trimmed values when present", () => {
    process.env.SUPABASE_URL = "  https://example.supabase.co  ";
    expect(requireEnv("SUPABASE_URL")).toBe("https://example.supabase.co");
    expect(isEnvConfigured("SUPABASE_URL")).toBe(true);
  });

  it("treats blank strings as unconfigured", () => {
    process.env.GITHUB_CLIENT_ID = "   ";
    expect(isEnvConfigured("GITHUB_CLIENT_ID")).toBe(false);
  });
});
