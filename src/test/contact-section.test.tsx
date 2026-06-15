import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactSection from "@/components/ContactSection";

// framer-motion animations are not needed for logic; jsdom renders the DOM.
describe("ContactSection (smoke + validation)", () => {
  it("renders the form fields and submit button", () => {
    render(<ContactSection />);
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
    expect(screen.getByText(/Send Message/i)).toBeInTheDocument();
  });

  it("shows a validation error when submitting empty", async () => {
    render(<ContactSection />);
    fireEvent.click(screen.getByText(/Send Message/i));
    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
    });
  });

  it("submits to Web3Forms with valid input", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactSection />);
    fireEvent.change(screen.getByPlaceholderText("Your name"), { target: { value: "Raybal" } });
    fireEvent.change(screen.getByPlaceholderText("your@email.com"), { target: { value: "ray@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Tell us about your project..."), {
      target: { value: "Need a site" },
    });
    fireEvent.click(screen.getByText(/Send Message/i));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.email).toBe("ray@example.com");
    expect(body.access_key).toBeTruthy();
    vi.restoreAllMocks();
  });
});
