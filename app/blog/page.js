"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { blogData } from "../../lib/blogData";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

export default function BlogIndexPage() {
  const posts = Object.values(blogData);

  return (
    <div className="blog-index-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <section className="blog-index-hero">
        <div className="blog-index-hero-wrapper">
          <h1 className="blog-index-heading">Blog</h1>
          <p className="blog-index-intro">
            Guides and insights on product engineering, software development,
            and building digital products. From the Baaz team.
          </p>
        </div>
      </section>

      <div className="blog-index-list">
        {posts.map((post) => (
          <article key={post.slug} className="blog-index-card">
            <Link href={`/blog/${post.slug}`} className="blog-index-card-link">
              <span className="blog-index-card-type">{post.contentType}</span>
              <h2 className="blog-index-card-title">{post.title}</h2>
              <p className="blog-index-card-excerpt">{post.intro}</p>
            </Link>
          </article>
        ))}
      </div>

      <Footer />
    </div>
  );
}
