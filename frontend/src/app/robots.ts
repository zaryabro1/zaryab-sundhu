import type { MetadataRoute } from "next";
import { siteUrl } from "../data/seo";

/**
 * robots.txt, generated so the sitemap URL tracks the canonical origin.
 *
 * Replaces the previous static file, which hard-coded the domain and carried a
 * `Crawl-delay: 10` that Google ignores outright and that only served to slow
 * the crawlers which do honour it — on a single-page site there is nothing to
 * throttle.
 *
 * The auth routes are disallowed: they hold no indexable content, and keeping
 * them out of the crawl budget avoids thin-content pages competing with the
 * one page that matters.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/login", "/register"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
