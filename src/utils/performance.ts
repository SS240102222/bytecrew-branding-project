// Performance optimization utilities

/**
 * Report web vitals to analytics or monitoring services
 * Used to track LCP, CLS, FID/INP for performance monitoring
 */
export const reportWebVitals = (metric: any) => {
  if (typeof window !== 'undefined') {
    // Minimal logging - log only critical metrics exceeding thresholds
    if (metric.rating === 'poor') {
      console.warn(`[Performance] ${metric.name}: ${metric.value}ms (${metric.rating})`);
    }
  }
};

/**
 * Prefetch a route to improve navigation performance
 */
export const prefetchRoute = (url: string) => {
  if (typeof window === 'undefined') return;
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
};

/**
 * Defer non-critical images from loading
 */
export const deferImages = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const images = document.querySelectorAll('img[data-defer]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.removeAttribute('data-defer');
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => observer.observe(img));
};

/**
 * Monitor Core Web Vitals using web-vitals library pattern
 */
export const initializeWebVitalsMonitoring = () => {
  if (typeof window === 'undefined') return;

  // Monitor CLS (Cumulative Layout Shift)
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Layout shift detected - log if significant
          if ((entry as any).hadRecentInput === false) {
            // Only log unexpected shifts (not caused by user input)
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Older browsers don't support this
    }
  }
};
