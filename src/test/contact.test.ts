import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  homeContactSchema,
  fullContactSchema,
  submitToWeb3Forms,
  WEB3FORMS_ACCESS_KEY,
} from "@/lib/contact";

describe("contact schemas", () => {
  it("accepts a valid homepage submission", () => {
    const r = homeContactSchema.safeParse({
      name: "Raybal",
      email: "ray@example.com",
      message: "Need a website.",
    });
    expect(r.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const r = homeContactSchema.safeParse({
      name: "Raybal",
      email: "not-an-email",
      message: "Hi",
    });
    expect(r.success).toBe(false);
  });

  it("rejects an empty required field", () => {
    expect(homeContactSchema.safeParse({ name: "", email: "a@b.com", message: "x" }).success).toBe(false);
  });

  it("treats service as optional on the full form", () => {
    const r = fullContactSchema.safeParse({
      name: "Raybal",
      contact: "ray@example.com",
      message: "Hello",
    });
    expect(r.success).toBe(true);
  });
});

describe("submitToWeb3Forms", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("posts the payload with the access key injected", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    await submitToWeb3Forms({ name: "Raybal", message: "Hi" });

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, opts] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.web3forms.com/submit");
    const body = JSON.parse(opts.body);
    expect(body.access_key).toBe(WEB3FORMS_ACCESS_KEY);
    expect(body.name).toBe("Raybal");
  });

  it("throws when the API reports failure", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, json: async () => ({ success: false, message: "bad" }) })
    );
    await expect(submitToWeb3Forms({ name: "x" })).rejects.toThrow("bad");
  });
});
