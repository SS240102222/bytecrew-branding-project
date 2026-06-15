import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { webProjects } from "@/data/projects";

describe("project data integrity", () => {
  it("has at least one project", () => {
    expect(webProjects.length).toBeGreaterThan(0);
  });

  it("every project has required fields and an https url", () => {
    for (const p of webProjects) {
      expect(p.title.trim().length).toBeGreaterThan(0);
      expect(p.description.trim().length).toBeGreaterThan(0);
      expect(p.url).toMatch(/^https:\/\//);
      expect(p.image).toMatch(/^\/projects\/.+\.webp$/);
    }
  });

  it("references image files that actually exist in /public", () => {
    for (const p of webProjects) {
      expect(existsSync(join(process.cwd(), "public", p.image))).toBe(true);
    }
  });

  it("has unique titles (no accidental duplicates)", () => {
    const titles = webProjects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
