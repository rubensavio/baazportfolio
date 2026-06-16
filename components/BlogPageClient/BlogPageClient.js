"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRightIcon } from "../icons/ArrowIcons";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";
import Reveal from "../Home/Reveal";
import { blogData } from "../../lib/blogData";
import "./BlogPageClient.scss";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "guide", label: "Guides" },
  { id: "architecture", label: "Architecture" },
  { id: "comparison", label: "Comparisons" },
  { id: "thought", label: "Thought Leadership" },
];

function getBlogCategory(contentType) {
  const type = (contentType || "").toLowerCase();
  if (type.includes("architecture")) return "architecture";
  if (type.includes("comparison")) return "comparison";
  if (
    type.includes("thought") ||
    type.includes("listicle") ||
    type.includes("deep-dive")
  ) {
    return "thought";
  }
  return "guide";
}

function getPostInitials(title) {
  return (title || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

function formatPostDate(datePublished) {
  if (!datePublished) return "";
  return new Date(datePublished).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
}

function formatAuthor(post) {
  if (!post.author?.name) return "";
  const role = post.author.jobTitle ? ` - ${post.author.jobTitle}` : "";
  return `${post.author.name}${role}`;
}

export default function BlogPageClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const posts = useMemo(
    () =>
      Object.values(blogData).sort((a, b) =>
        (b.datePublished || "").localeCompare(a.datePublished || ""),
      ),
    [],
  );

  const featuredPost = posts[0];
  const listPosts = posts.slice(1);

  const filteredFeatured =
    activeFilter === "all" ||
    getBlogCategory(featuredPost?.contentType) === activeFilter;

  const filteredList = listPosts.filter(
    (post) =>
      activeFilter === "all" ||
      getBlogCategory(post.contentType) === activeFilter,
  );

  return (
    <div className="baaz-v2 blog-v2">
      <ClientNavbar />

      <section className="blog-hero" aria-label="Blog">
        <div className="v2-wrap">
          <Reveal className="blog-hero-inner">
            <h1 className="blog-hero-title v2-display">
              Product engineering &amp; software insights
            </h1>
            <div className="blog-hero-right">
              <p className="blog-hero-direct">
                The Baaz blog publishes practical guides on product engineering,
                custom software, AI, architecture, and project rescue-written to
                answer buyer questions directly, with checklists and definitions you
                can quote or verify.
              </p>
              <p className="blog-hero-intro">
                Guides and insights on product engineering, software development,
                and building digital products. From the Baaz team, serving readers
                worldwide.
              </p>
              <p className="blog-hero-count v2-label">
                {posts.length} articles · Updated regularly
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="v2-wrap">
        <section
          className="blog-topic-intro"
          aria-labelledby="blog-topic-heading"
        >
          <Reveal>
            <h2 id="blog-topic-heading" className="blog-topic-heading v2-display">
              Which guides match your situation?
            </h2>
            <p className="blog-topic-lede">
              Browse by topic-product scoping, partner selection, rescue, and
              enterprise delivery. Each post opens with a direct answer you can
              quote or verify.
            </p>
          </Reveal>
        </section>

        <div className="blog-filter-bar" role="tablist" aria-label="Filter articles">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`blog-filter-btn${activeFilter === filter.id ? " active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {featuredPost && filteredFeatured && (
          <Reveal>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="blog-featured"
              data-category={getBlogCategory(featuredPost.contentType)}
            >
              <div className="blog-featured-visual">
                <span className="blog-featured-initials v2-display">
                  {getPostInitials(featuredPost.title)}
                </span>
              </div>
              <div className="blog-featured-body">
                <span className="blog-featured-tag v2-label">
                  {featuredPost.contentType}
                  {featuredPost.datePublished &&
                    ` · ${formatPostDate(featuredPost.datePublished)}`}
                </span>
                <h2 className="blog-featured-title v2-display">
                  {featuredPost.title}
                </h2>
                <p className="blog-featured-desc">{featuredPost.intro}</p>
                <div className="blog-featured-meta">
                  {formatAuthor(featuredPost) && (
                    <span>{formatAuthor(featuredPost)}</span>
                  )}
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="blog-list">
          {filteredList.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.03}>
              <Link
                href={`/blog/${post.slug}`}
                className="blog-article-item"
                data-category={getBlogCategory(post.contentType)}
              >
                <div className="blog-article-meta">
                  <span className="blog-article-cat v2-label">
                    {post.contentType}
                  </span>
                  {post.datePublished && (
                    <time
                      dateTime={post.datePublished}
                      className="blog-article-date"
                    >
                      {formatPostDate(post.datePublished)}
                    </time>
                  )}
                </div>
                <div className="blog-article-content">
                  <h3 className="blog-article-title v2-display">{post.title}</h3>
                  {formatAuthor(post) && (
                    <span className="blog-article-author">
                      {formatAuthor(post)}
                    </span>
                  )}
                </div>
                <ArrowUpRightIcon className="blog-article-arrow" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
