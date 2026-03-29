const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

const shared = {
  allow: "/",
  disallow: ["/_next/"],
};

const userAgents = [
  "*",
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "CCBot",
];

export default function robots() {
  return {
    rules: userAgents.map((userAgent) => ({ userAgent, ...shared })),
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
