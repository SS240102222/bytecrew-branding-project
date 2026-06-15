import { describe, it, expect } from "vitest";
import { getRouteSeo, SEO_ROUTES, BASE_URL } from "@/seo.config.mjs";

describe("seo.config getRouteSeo", () => {
  it("returns the correct metadata for a known route", () => {
    const seo = getRouteSeo("/about");
    expect(seo.title).toBe(SEO_ROUTES["/about"].title);
    expect(seo.canonical).toBe(`${BASE_URL}/about`);
    expect(seo.ogTitle).toBe(seo.title);
    expect(seo.ogUrl).toBe(seo.canonical);
  });

  it("builds the homepage canonical with a trailing slash", () => {
    expect(getRouteSeo("/").canonical).toBe(`${BASE_URL}/`);
  });

  it("falls back to the homepage for an unknown route", () => {
    expect(getRouteSeo("/does-not-exist").title).toBe(SEO_ROUTES["/"].title);
  });

  it("always provides an og:image", () => {
    for (const path of Object.keys(SEO_ROUTES)) {
      expect(getRouteSeo(path).ogImage).toMatch(/^https?:\/\//);
    }
  });

  it("uses the configured base url (no leftover bytecrew.dev)", () => {
    expect(getRouteSeo("/contact").canonical.startsWith(BASE_URL)).toBe(true);
    expect(BASE_URL).not.toContain("bytecrew.dev");
  });
});
