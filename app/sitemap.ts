const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000";

function normalizeUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export default function sitemap() {
  const baseUrl = normalizeUrl(SITE_URL);

  const pages = [
    "/",
    "/tools",
    "/tools/case-converter",
    "/tools/lorem-ipsum",
    "/tools/random-text-generator",
    "/tools/remove-duplicate-lines",
    "/tools/remove-extra-spaces",
    "/tools/slug-generator",
    "/tools/text-sorter",
    "/tools/word-counter",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
