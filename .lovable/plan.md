

# Add Policy Pages with Footer Links

## Overview

Create 4 new policy pages using the uploaded markdown content, and add links to them in the footer.

## Pages to Create

1. `/privacy-policy` - from `privacy-policy.md`
2. `/return-refund-policy` - from `return-refund-policy.md`
3. `/shipping-service-policy` - from `shipping-service-policy.md`
4. `/terms-conditions` - from `terms-conditions.md`

## Implementation

### Step 1: Create a reusable PolicyPage component

Create `src/components/PolicyPage.tsx` -- a simple component that renders a page with:
- Navigation bar (reusing existing `Navigation` component)
- Styled markdown-like content area with proper heading/paragraph/list styling
- Footer

### Step 2: Create the 4 page files

Each page file (e.g., `src/pages/PrivacyPolicy.tsx`) will import the `PolicyPage` component and pass the content as JSX. The markdown content will be converted to JSX with appropriate heading, paragraph, and list elements styled to match the site's dark theme.

Files:
- `src/pages/PrivacyPolicy.tsx`
- `src/pages/ReturnRefundPolicy.tsx`
- `src/pages/ShippingServicePolicy.tsx`
- `src/pages/TermsConditions.tsx`

### Step 3: Add routes in App.tsx

Add 4 new routes:
```text
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
<Route path="/shipping-service-policy" element={<ShippingServicePolicy />} />
<Route path="/terms-conditions" element={<TermsConditions />} />
```

### Step 4: Update Footer.tsx

Add a row of policy links below the existing footer content:
- Privacy Policy
- Return/Refund Policy
- Shipping & Service Policy
- Terms & Conditions

These will be simple links styled as `text-muted-foreground hover:text-primary`, separated by dividers.

### Step 5: Update sitemap.xml

Add the 4 new URLs with appropriate priority (0.5).

## Technical Notes

- Content styling: Use Tailwind `prose`-like classes (custom) for headings, paragraphs, lists, and horizontal rules to render the markdown content cleanly against the dark background.
- Each page scrolls to top on mount.
- The policy pages will use the existing Navigation and Footer components for consistency.

