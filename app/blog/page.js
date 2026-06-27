import BlogPageClient from "../../components/BlogPageClient/BlogPageClient";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import FaqJsonLd from "../../components/FaqJsonLd";

const BLOG_FAQS = [
  {
    question: "What does the Baaz blog cover?",
    answer:
      "The Baaz blog covers practical product engineering topics: choosing a software development partner, custom software and MVP builds, AI-powered products, architecture decisions, and rescuing stalled projects - written by the Baaz engineering team.",
  },
  {
    question: "Who writes the Baaz blog?",
    answer:
      "Articles are written by Baaz's product engineering team, drawing on real client work delivered across 26+ countries since 2018.",
  },
  {
    question: "How often is the blog updated?",
    answer:
      "New guides and updates are published regularly, and existing posts are revised to stay current with how teams build and ship software in 2026.",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <FaqJsonLd items={BLOG_FAQS} />
      <BlogPageClient />
    </>
  );
}
