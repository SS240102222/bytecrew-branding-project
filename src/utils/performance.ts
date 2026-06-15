// Core Web Vitals monitoring (dependency-free).
//
// Captures the two field metrics most worth watching for a content site — LCP
// (loading) and CLS (visual stability) — using native PerformanceObserver, and
// logs a console warning when a metric lands in the "poor" band. Values are
// finalized when the page is hidden/unloaded, which is when the browser knows
// the final LCP candidate and accumulated layout shift.
//
// For production-grade field data (percentiles across real users), add Vercel
// Speed Insights or Google Analytics and forward `report()` to it — the hook is
// already here.

interface WebVitalMetric {
  name: "LCP" | "CLS";
  value: number;
  rating: "good" | "needs-improvement" | "poor";
}

const rate = (
  value: number,
  goodMax: number,
  poorMin: number
): WebVitalMetric["rating"] =>
  value <= goodMax ? "good" : value < poorMin ? "needs-improvement" : "poor";

const report = (metric: WebVitalMetric) => {
  if (metric.rating === "poor") {
    console.warn(
      `[web-vitals] ${metric.name}: ${Math.round(metric.value * 1000) / 1000} (${metric.rating})`
    );
  }
  // Forward to analytics here if/when configured, e.g.:
  // window.dataLayer?.push({ event: "web-vitals", ...metric });
};

export const initializeWebVitalsMonitoring = () => {
  if (typeof window === "undefined" || !("PerformanceObserver" in window)) return;

  let lcp = 0;
  let cls = 0;
  let reported = false;

  // Largest Contentful Paint: keep the latest candidate.
  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      if (last) lcp = last.startTime;
    });
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
  } catch {
    /* unsupported browser */
  }

  // Cumulative Layout Shift: sum shifts not caused by recent user input.
  try {
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as Array<
        PerformanceEntry & { value: number; hadRecentInput: boolean }
      >) {
        if (!entry.hadRecentInput) cls += entry.value;
      }
    });
    clsObserver.observe({ type: "layout-shift", buffered: true });
  } catch {
    /* unsupported browser */
  }

  // Finalize once, when the page is backgrounded or unloaded.
  const finalize = () => {
    if (reported) return;
    reported = true;
    report({ name: "LCP", value: lcp, rating: rate(lcp, 2500, 4000) });
    report({ name: "CLS", value: cls, rating: rate(cls, 0.1, 0.25) });
  };

  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") finalize();
  });
  addEventListener("pagehide", finalize);
};
