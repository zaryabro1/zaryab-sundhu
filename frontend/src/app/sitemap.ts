import type { MetadataRoute } from "next";
import { siteUrl } from "../data/seo";

/**
 * The sitemap, generated rather than hand-written.
 *
 * Replaces the previous static `sitemap.xml`, which had hard-coded 2024
 * `lastmod` dates that went stale the moment anything shipped, and which
 * listed `/login`, `/register` and `/dashboard` — routes that carry no public
 * content and are now explicitly noindex. Submitting noindex URLs in a sitemap
 * is a contradiction search engines report as an error.
 *
 * Only the single public page is listed, because the site is a one-pager;
 * in-page anchors are not separate URLs and do not belong here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
