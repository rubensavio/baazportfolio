"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { caseStudiesData, architectureBlogSlugs } from "../../lib/caseStudiesData";
import { blogData } from "../../lib/blogData";
import "../blog/page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

export default function CaseStudiesIndexPage() {
  const architecturePosts = architectureBlogSlugs
    .map((slug) => blogData[slug])
    .filter(Boolean);

  return (
    <div className="blog-index-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <section className="blog-index-hero">
        <div className="blog-index-hero-wrapper">
          <h1 className="blog-index-heading">Case studies</h1>
          <p className="blog-index-intro">
            Product outcomes and system design notes from Baaz: full case studies
            on shipped platforms, plus architecture guides you can cite for
            boundaries, reliability, and data integration.
          </p>
        </div>
      </section>

      <div className="blog-index-list">
        <section className="case-studies-group" aria-labelledby="case-studies-shipped">
          <h2 id="case-studies-shipped" className="case-studies-subheading">
            Shipped work
          </h2>
          {caseStudiesData.map((item) => (
            <article key={item.href} className="blog-index-card">
              <Link href={item.href} className="blog-index-card-link">
                <span className="blog-index-card-type">{item.contentType}</span>
                <h3 className="blog-index-card-title">{item.title}</h3>
                <p className="blog-index-card-excerpt">{item.intro}</p>
              </Link>
            </article>
          ))}
        </section>

        <section className="case-studies-group" aria-labelledby="case-studies-arch">
          <h2 id="case-studies-arch" className="case-studies-subheading">
            Architecture deep-dives
          </h2>
          {architecturePosts.map((post) => (
            <article key={post.slug} className="blog-index-card">
              <Link href={`/blog/${post.slug}`} className="blog-index-card-link">
                <span className="blog-index-card-type">{post.contentType}</span>
                <h3 className="blog-index-card-title">{post.title}</h3>
                <p className="blog-index-card-excerpt">{post.intro}</p>
              </Link>
            </article>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
}
