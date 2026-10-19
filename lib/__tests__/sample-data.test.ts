import { describe, expect, it } from "vitest";
import {
  SAMPLE_DATA_NOTE,
  sampleActivitySeries,
  sampleEvents,
  sampleProfileStats,
  sampleRepos,
} from "@/lib/sample-data";

describe("sample data invariants", () => {
  it("carries an explicit sample-data disclaimer", () => {
    expect(SAMPLE_DATA_NOTE.toLowerCase()).toContain("sample data");
  });

  it("uses only obviously fictional `sample/` repo owners", () => {
    for (const repo of sampleRepos) {
      expect(repo.name.startsWith("sample/")).toBe(true);
    }
    for (const event of sampleEvents) {
      expect(event.repo.startsWith("sample/")).toBe(true);
    }
  });

  it("provides non-negative stats and a full activity series", () => {
    expect(sampleProfileStats.publicRepos).toBeGreaterThanOrEqual(0);
    expect(sampleProfileStats.followers).toBeGreaterThanOrEqual(0);
    expect(sampleActivitySeries.length).toBeGreaterThan(0);
    for (const point of sampleActivitySeries) {
      expect(point.commits).toBeGreaterThanOrEqual(0);
      expect(point.pullRequests).toBeGreaterThanOrEqual(0);
    }
  });

  it("gives every repo/event a unique id", () => {
    const repoIds = sampleRepos.map((r) => r.id);
    const eventIds = sampleEvents.map((e) => e.id);
    expect(new Set(repoIds).size).toBe(repoIds.length);
    expect(new Set(eventIds).size).toBe(eventIds.length);
  });
});
