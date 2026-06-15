// =============================================================================
// PRERENDER SCRIPT  (runs after `vite build`)
// =============================================================================
// Problem it solves: this is a client-rendered SPA. Per-page <title> and OG
// tags were injected by JavaScript after load, so link scrapers (WhatsApp,
// Facebook, Slack, LinkedIn) — which do NOT run JS — only ever saw the generic
// homepage preview for every URL.
//
// This script takes the built dist/index.html template and writes one static
// HTML file per route with that route's real meta tags baked directly into the
// HTML <head>. Scrapers now get correct title/description/image with zero JS.
//
// The React app still hydrates and handles meta for in-app navigation exactly
// as before. This only changes what a non-JS client sees on first byte.
// =============================================================================

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  BASE_URL,
  DEFAULT_OG_IMAGE,
  SEO_ROUTES,
  PRERENDER_ROUTES,
} from "../src/seo.config.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const TEMPLATE_PATH = join(DIST, "index.html");

// --- HTML attribute escaping -------------------------------------------------
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// --- upsert helpers: replace tag if present, otherwise inject before </head> -
const injectBeforeHead = (html, tag) =>
  html.includes("</head>") ? html.replace("</head>", `    ${tag}\n  </head>`) : html + tag;

function upsertTitle(html, title) {
  const tag = `<title>${esc(title)}</title>`;
  return /<title>[\s\S]*?<\/title>/.test(html)
    ? html.replace(/<title>[\s\S]*?<\/title>/, tag)
    : injectBeforeHead(html, tag);
}

function upsertMetaName(html, name, content) {
  const tag = `<meta name="${name}" content="${esc(content)}" />`;
  const re = new RegExp(`<meta\\s+name="${name}"[^>]*>`, "i");
  return re.test(html) ? html.replace(re, tag) : injectBeforeHead(html, tag);
}

function upsertMetaProperty(html, property, content) {
  const tag = `<meta property="${property}" content="${esc(content)}" />`;
  const re = new RegExp(`<meta\\s+property="${property}"[^>]*>`, "i");
  return re.test(html) ? html.replace(re, tag) : injectBeforeHead(html, tag);
}

function upsertCanonical(html, href) {
  const tag = `<link rel="canonical" href="${esc(href)}" />`;
  const re = /<link\s+rel="canonical"[^>]*>/i;
  return re.test(html) ? html.replace(re, tag) : injectBeforeHead(html, tag);
}

function buildHtml(template, pathname) {
  const route = SEO_ROUTES[pathname];
  const title = route.title;
  const description = route.description;
  const image = route.ogImage || DEFAULT_OG_IMAGE;
  const url = `${BASE_URL}${pathname === "/" ? "/" : pathname}`;

  let html = template;
  html = upsertTitle(html, title);
  html = upsertMetaName(html, "description", description);
  html = upsertCanonical(html, url);

  html = upsertMetaProperty(html, "og:title", title);
  html = upsertMetaProperty(html, "og:description", description);
  html = upsertMetaProperty(html, "og:type", "website");
  html = upsertMetaProperty(html, "og:url", url);
  html = upsertMetaProperty(html, "og:image", image);

  html = upsertMetaName(html, "twitter:card", "summary_large_image");
  html = upsertMetaName(html, "twitter:title", title);
  html = upsertMetaName(html, "twitter:description", description);
  html = upsertMetaName(html, "twitter:image", image);

  return html;
}

// --- run ---------------------------------------------------------------------
const template = readFileSync(TEMPLATE_PATH, "utf8");
let count = 0;

for (const pathname of PRERENDER_ROUTES) {
  const html = buildHtml(template, pathname);
  const outPath =
    pathname === "/"
      ? join(DIST, "index.html")
      : join(DIST, pathname.replace(/^\//, ""), "index.html");

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
  count++;
  console.log(`  prerendered ${pathname.padEnd(26)} -> ${outPath.replace(DIST + "/", "dist/")}`);
}

console.log(`\n[prerender] wrote ${count} static HTML files with per-route meta.`);
