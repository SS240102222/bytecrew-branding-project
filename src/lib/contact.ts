import { z } from "zod";

// Web3Forms access key. NOTE: this key is public by design (Web3Forms keys live
// in client-side code). Spam is mitigated via the honeypot field below.
export const WEB3FORMS_ACCESS_KEY = "e6a57735-3e0b-48f6-846f-55db3515c04e";

const ENDPOINT = "https://api.web3forms.com/submit";

// Homepage contact form (name / email / message)
export const homeContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be under 1000 characters"),
  // Honeypot: real users never fill this. If present, we drop the submission.
  botcheck: z.string().optional(),
});
export type HomeContactValues = z.infer<typeof homeContactSchema>;

// Dedicated Contact page form (name / contact / service / message)
export const fullContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  contact: z
    .string()
    .trim()
    .min(1, "WhatsApp number or email is required")
    .max(255, "Contact is too long"),
  service: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be under 1000 characters"),
  botcheck: z.string().optional(),
});
export type FullContactValues = z.infer<typeof fullContactSchema>;

/**
 * POST a payload to Web3Forms as JSON. Throws on failure so callers can show
 * an error state. The access key is injected automatically.
 */
export async function submitToWeb3Forms(
  payload: Record<string, unknown>
): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...payload,
    }),
  });

  let data: { success?: boolean; message?: string } = {};
  try {
    data = await response.json();
  } catch {
    // non-JSON response
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Submission failed. Please try again.");
  }
}
