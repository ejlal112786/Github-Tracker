import { describe, expect, it } from "vitest";
import { cn, formatCompactNumber } from "@/lib/utils";

describe("formatCompactNumber", () => {
  it("formats thousands compactly", () => {
    expect(formatCompactNumber(1284)).toBe("1.3K");
    expect(formatCompactNumber(5730)).toBe("5.7K");
  });

  it("keeps small numbers plain", () => {
    expect(formatCompactNumber(42)).toBe("42");
    expect(formatCompactNumber(0)).toBe("0");
  });
});

describe("cn", () => {
  it("merges conflicting tailwind classes", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("drops falsy values", () => {
    expect(cn("a", false, undefined, null, "b")).toBe("a b");
  });
});
