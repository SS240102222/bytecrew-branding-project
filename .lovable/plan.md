# Navbar Gradient Blur & Fade

## Goal
When scrolled, the navbar currently gets the shared `glass-card` style (translucent card background + green border). Replace this with a dedicated backdrop that:
- Has **no green outline** anywhere.
- Blurs the page content behind it (gradient blur), strongest at the very top.
- Fades vertically: fully opaque at the top (100%), fully transparent at the bottom (0%) — no hard edge/outline at the bottom.
- Leaves the logo, nav links, "Let's Talk" button, and mobile menu icon fully visible and unaffected by the fade.

## Approach
The fix is scoped to `src/components/Navigation.tsx` only. We will **not** touch the shared `.glass-card` class in `index.css`, since it's reused by cards across the site.

### 1. Separate background layer from content
Make the `<nav>` a positioned container (`relative`, `overflow-hidden`) and stop applying `glass-card` to it. Add a dedicated absolutely-positioned background `<div>` (behind the content, `-z-10`) that carries the blur + fade. The existing content row stays on top (`relative z-10`) so its opacity is never reduced.

### 2. Gradient fade + blur on the background layer (scrolled state only)
The background div, shown only when `isScrolled`, gets:
- A translucent background tint using a semantic token (e.g. `bg-background/70`) — no border.
- `backdrop-blur` for the blur effect.
- A CSS `mask-image` / `-webkit-mask-image` of `linear-gradient(to bottom, black 0%, transparent 100%)` so both the tint and the blur fade from 100% opacity at the top to 0% at the bottom. This removes any visible bottom edge/outline and produces the gradient-blur look.

Because the mask is applied to the background layer, the navbar content (links/buttons/logo) is not masked or faded.

### 3. Remove the border
No `border` utilities on the nav or its background layer, eliminating the green outline on all sides.

### 4. Keep existing behavior
- Keep the `isScrolled` scroll listener and the `py-4`/`py-6` padding transition.
- Keep the entrance animation (`animate-fade-in-down`) and the mobile menu dropdown unchanged (its own solid background stays for readability).

## Technical Notes
- Mask gradient: `style={{ WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)', maskImage: 'linear-gradient(to bottom, black, transparent)' }}` on the background layer.
- Use `backdrop-blur-md` (or similar) plus `bg-background/70` token — no hardcoded colors.
- Background layer: `absolute inset-0 -z-10` and only rendered/visible when `isScrolled`; content wrapper gets `relative z-10`.
