import { getRouteSeo } from "@/seo.config.mjs";

export interface MetaTagsConfig {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

// Small helper: find an existing tag or create it, then return it.
const ensureTag = (
  selector: string,
  create: () => HTMLElement
): HTMLElement => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const setMetaByName = (name: string, content: string) => {
  const el = ensureTag(`meta[name="${name}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("name", name);
    return m;
  });
  el.setAttribute("content", content);
};

const setMetaByProperty = (property: string, content: string) => {
  const el = ensureTag(`meta[property="${property}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("property", property);
    return m;
  });
  el.setAttribute("content", content);
};

export const updateMetaTags = (config: MetaTagsConfig) => {
  document.title = config.title;

  setMetaByName("description", config.description);

  // Canonical
  const canonical = ensureTag('link[rel="canonical"]', () => {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  });
  canonical.setAttribute("href", config.canonical);

  // Open Graph
  setMetaByProperty("og:title", config.ogTitle || config.title);
  setMetaByProperty("og:description", config.ogDescription || config.description);
  setMetaByProperty("og:type", "website");
  if (config.ogUrl) setMetaByProperty("og:url", config.ogUrl);
  if (config.ogImage) setMetaByProperty("og:image", config.ogImage);

  // Twitter
  setMetaByName("twitter:card", "summary_large_image");
  setMetaByName("twitter:title", config.ogTitle || config.title);
  setMetaByName("twitter:description", config.ogDescription || config.description);
  if (config.ogImage) setMetaByName("twitter:image", config.ogImage);
};

export const getBaseUrl = () => window.location.origin;

export const getCanonicalUrl = (pathname: string) => `${getBaseUrl()}${pathname}`;

/**
 * Apply SEO for a route using the shared seo.config single source of truth.
 * Pages should call this instead of hardcoding their own meta strings.
 */
export const applyRouteSeo = (pathname: string) => {
  updateMetaTags(getRouteSeo(pathname));
};
