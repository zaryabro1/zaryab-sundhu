/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /**
   * Keep this build out of search results entirely.
   *
   * The `X-Robots-Tag` header applies to every response, not just HTML — so it
   * also covers the PDF, the images and any other asset, none of which can
   * carry a `<meta name="robots">` tag but all of which can otherwise be
   * indexed on their own.
   *
   * `noindex` keeps the page out of results, `nofollow` stops link equity
   * flowing onward, and `noarchive` suppresses the cached copy.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
