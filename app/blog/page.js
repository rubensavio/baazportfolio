import React from "react";
import Link from "next/link";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import Footer from "../../components/Footer/Footer";
import { blogData } from "../../lib/blogData";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import "./page.scss";

export default function BlogIndexPage() {
  const posts = Object.values(blogData).sort((a, b) =>
    (b.datePublished || "").localeCompare(a.datePublished || "")
  );

  return (
    <div className="blog-index-page">
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <ClientNavbar />

      <section className="blog-index-hero">
        <div className="blog-index-hero-wrapper">
          <h1 className="blog-index-heading">
            Product engineering & software insights
          </h1>
          <p className="blog-index-direct-answer">
            The Baaz blog publishes practical guides on product engineering,
            custom software, AI, architecture, and project rescue—written to
            answer buyer questions directly, with checklists and definitions
            you can quote or verify.
          </p>
          <p className="blog-index-intro">
            Guides and insights on product engineering, software development,
            and building digital products. From the Baaz team in Bangalore,
            serving readers worldwide.
          </p>
        </div>
      </section>

      <div className="blog-index-list">
        {posts.map((post) => (
          <article key={post.slug} className="blog-index-card">
            <Link href={`/blog/${post.slug}`} className="blog-index-card-link">
              <span className="blog-index-card-type">{post.contentType}</span>
              <h2 className="blog-index-card-title">{post.title}</h2>
              {(post.author || post.datePublished) && (
                <div className="blog-index-card-meta">
                  {post.author && (
                    <span className="blog-index-card-author">
                      {post.author.name}
                      {post.author.jobTitle && ` · ${post.author.jobTitle}`}
                    </span>
                  )}
                  {post.datePublished && (
                    <time
                      dateTime={post.datePublished}
                      className="blog-index-card-date"
                    >
                      {new Date(post.datePublished).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                      })}
                    </time>
                  )}
                </div>
              )}
              <p className="blog-index-card-excerpt">{post.intro}</p>
            </Link>
          </article>
        ))}
      </div>

      <Footer />
    </div>
  );
}
