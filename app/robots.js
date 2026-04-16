import { getSiteUrl } from "../lib/siteUrl";

const allowedUserAgents = [
  "*",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "GoogleOther",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "CCBot",
  "bingbot",
  "Applebot-Extended",
  "Amazonbot",
  "FacebookBot",
];

const blockedUserAgents = [
  "Bytespider",
];

export default function robots() {
  const baseUrl = getSiteUrl();
  return {
    rules: [
      ...allowedUserAgents.map((userAgent) => ({ userAgent, allow: "/" })),
      ...blockedUserAgents.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
