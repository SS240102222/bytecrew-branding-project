// Type declarations for src/seo.config.mjs so the TypeScript app can import it.

export interface RouteSeo {
  title: string;
  description: string;
  ogImage?: string;
}

export interface ResolvedRouteSeo {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
}

export const BASE_URL: string;
export const DEFAULT_OG_IMAGE: string;
export const SEO_ROUTES: Record<string, RouteSeo>;
export const PRERENDER_ROUTES: string[];
export function getRouteSeo(pathname: string): ResolvedRouteSeo;
