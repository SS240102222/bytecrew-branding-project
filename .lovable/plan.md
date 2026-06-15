# Logo Replacement & Typography Plan

## Goal
Swap every logo across the site to the new ByteCrew brand assets, using the correct variant (transparent / opaque / tiny) per context. Set the tiny icon as the tab favicon. Verify typography matches the requested mapping. No other features, files, or code touched.

## New assets provided
- **Transparent full logo** (icon + "ByteCrew" text, transparent background) — `New_ByteCrew_logo_transparent_2.png`
- **Opaque full logo** (icon + text on dark navy background, square) — `New_ByteCrew_logo.png`
- **Tiny icon** (just the `{/}` brackets, transparent) — `tiny_icon.png`

## Step 1 — Add new logo files to `public/`
Copy the uploads into `public/` with clear names:
- `bytecrew-icon.png` ← tiny transparent bracket icon
- `bytecrew-logo.png` ← transparent full logo (icon + text)
- `bytecrew-logo-dark.png` ← opaque dark-background full logo
- Regenerate `public/favicon.ico` from the tiny icon (so browsers requesting `/favicon.ico` get the new mark)

## Step 2 — Replace logo references in code

| Location | Current | New |
|---|---|---|
| `src/components/Navigation.tsx` (32×32 mark beside "ByteCrew" text) | `/logo-removebg-preview.png` | `/bytecrew-icon.png` (tiny, transparent) |
| `src/components/Footer.tsx` (32×32 mark beside "ByteCrew" text) | `/logo-removebg-preview.png` | `/bytecrew-icon.png` (tiny, transparent) |
| `index.html` favicon (tab icon) | `/logo.png` | `/bytecrew-icon.png` (tiny) |
| `index.html` apple-touch-icon | `/logo.png` | `/bytecrew-logo-dark.png` (opaque, square) |
| `index.html` og:image / twitter:image | `https://bytecrew.vercel.app/Logo-Main.png` | opaque full logo URL (`/bytecrew-logo-dark.png`) |
| `src/seo.config.mjs` `DEFAULT_OG_IMAGE` | `Logo-Main.png` | `bytecrew-logo-dark.png` |

Rationale: nav and footer already show the word "ByteCrew" next to the mark, so the tiny bracket-only icon is the right fit there and as the favicon. Social/Open Graph cards and the apple-touch icon use the opaque full logo (it has a solid background and reads well as a card/home-screen tile).

## Step 3 — Remove now-unused old logo files
Delete `public/logo-removebg-preview.png`, `public/logo.png`, and `public/Logo-Main.png` once no references remain (keeps the repo clean; no code points to them after Step 2).

## Step 4 — Typography verification
Requested mapping:
- Headings → Tektur
- Sub-headings → JetBrains Mono
- Body → Lexend & JetBrains Mono

Current `src/index.css` already sets `h1,h2,h3 → Tektur`, `h4,h5,h6 → JetBrains Mono`, and `body → Lexend`; `tailwind.config.ts` exposes `font-mono` (JetBrains Mono) and `font-sans` (Lexend). This already satisfies the mapping, so no font changes are needed. If verification shows any heading/sub-heading not inheriting these, it will be corrected minimally without altering other styles.

## Out of scope
No changes to layout, components, animations, colors, content, or any other file beyond the logo references and asset files listed above.

## Verification
- Load home, services, footer in preview and confirm new tiny icon renders crisp on the dark background in nav + footer.
- Confirm the browser tab shows the new tiny icon favicon.
- Confirm no broken image references remain (grep for old filenames returns nothing).
