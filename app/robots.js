import { getSiteUrl } from "../lib/siteUrl";

const shared = {
  allow: "/",
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
  const baseUrl = getSiteUrl();
  return {
    rules: userAgents.map((userAgent) => ({ userAgent, ...shared })),
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
