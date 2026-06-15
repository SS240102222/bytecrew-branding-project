// =============================================================================
// SEO CONFIG - SINGLE SOURCE OF TRUTH
// =============================================================================
// Consumed by BOTH:
//   1. The React app at runtime (src/utils/seo.ts -> applyRouteSeo) for in-app
//      navigation, AND
//   2. The build-time prerender script (scripts/prerender.mjs) that bakes these
//      tags into static HTML so link scrapers (WhatsApp, Facebook, Slack, etc.)
//      see the correct per-page preview WITHOUT running JavaScript.
//
// IMPORTANT: BASE_URL must exactly match the real deployed domain.
// Right now the site is inconsistent (index.html + sitemap use bytecrew.dev,
// the CORS header in vercel.json uses bytecrew.vercel.app). This file keeps the
// existing intent (bytecrew.dev). If the real live domain is different, change
// BASE_URL here ONCE and everything (canonical, og:url) follows.
// =============================================================================

export const BASE_URL = "https://bytecrew.vercel.app";

// Default share image used when a route does not specify its own.
// NOTE: this is the logo. For best-looking previews, replace per-route with a
// proper 1200x630 PNG/JPG share image (logos render poorly as social cards).
export const DEFAULT_OG_IMAGE = `${BASE_URL}/Logo-Main.png`;

// path -> metadata. Keep paths in sync with the routes in src/App.tsx.
export const SEO_ROUTES = {
  "/": {
    title: "ByteCrew | Smart Web & Tech Solutions in Lahore, Pakistan",
    description:
      "Lahore-based web development, custom PC builds, and repairs. Zero upfront payment. Pay only when satisfied. Founder-led, cost-efficient, performance-focused.",
  },
  "/services": {
    title: "Our Services | Web Development, PC Builds & Repairs — ByteCrew",
    description:
      "Business websites, e-commerce, custom PC builds, gaming rigs, laptop repairs and optimization. Every service starts with a free consultation and zero upfront payment.",
  },
  "/packages": {
    title: "Packages & Pricing | ByteCrew — No Upfront Payment",
    description:
      "Transparent packages for web development and tech services. 0% upfront, 30-day post-launch support, pay only when satisfied. Serving Lahore and worldwide.",
  },
  "/projects": {
    title: "Our Projects | Web Projects & PC Builds — ByteCrew",
    description:
      "See websites we've built, PC builds we've specced, and before/after optimization results. Real work, real outcomes, no fluff.",
  },
  "/about": {
    title: "About ByteCrew | Founder-Led Tech Startup, Lahore",
    description:
      "ByteCrew is a lean, founder-led tech startup from Lahore. We handle every project directly — no outsourcing, no juniors, no advance payment until you're satisfied.",
  },
  "/contact": {
    title: "Contact ByteCrew | Free Consultation, No Commitment",
    description:
      "Get in touch with ByteCrew via WhatsApp or email. Free consultation, zero pressure. Based in Lahore, serving clients in Pakistan and worldwide.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | ByteCrew",
    description:
      "How ByteCrew collects, uses, and protects your information. Read our privacy practices.",
  },
  "/return-refund-policy": {
    title: "Return & Refund Policy | ByteCrew",
    description:
      "ByteCrew's return and refund terms, built around our pay-only-when-satisfied model.",
  },
  "/shipping-service-policy": {
    title: "Shipping & Service Policy | ByteCrew",
    description:
      "How ByteCrew delivers services and ships hardware to clients in Lahore and worldwide.",
  },
  "/terms-conditions": {
    title: "Terms & Conditions | ByteCrew",
    description:
      "The terms governing the use of ByteCrew's website and services.",
  },
};

// Routes to prerender into static HTML at build time.
export const PRERENDER_ROUTES = Object.keys(SEO_ROUTES);

// Helper: full metadata object for a given path (falls back to homepage).
export function getRouteSeo(pathname) {
  const route = SEO_ROUTES[pathname] || SEO_ROUTES["/"];
  return {
    title: route.title,
    description: route.description,
    canonical: `${BASE_URL}${pathname === "/" ? "/" : pathname}`,
    ogTitle: route.title,
    ogDescription: route.description,
    ogImage: route.ogImage || DEFAULT_OG_IMAGE,
    ogUrl: `${BASE_URL}${pathname === "/" ? "/" : pathname}`,
  };
}
