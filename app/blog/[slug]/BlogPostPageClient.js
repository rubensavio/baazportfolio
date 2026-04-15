"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../../components/Navbar/Navbar"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../../../components/FAQ/FAQ"));
const CTA = dynamic(() => import("../../../components/CTA/CTA"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../../components/Footer/Footer"), {
  ssr: false,
});

export default function BlogPostPageClient({ slug, data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="blog-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <article className="blog-article">
        <header className="blog-hero">
          <div className="blog-hero-wrapper">
            <span className="blog-label">{data.contentType}</span>
            <h1 className="blog-heading">{data.title}</h1>
            {data.directAnswer && (
              <p className="blog-direct-answer">{data.directAnswer}</p>
            )}
            <p className="blog-intro">{data.intro}</p>
          </div>
        </header>

        <div className="blog-sections">
          {data.sections.map((section, index) => (
            <section
              key={index}
              className="blog-section"
              aria-labelledby={`blog-section-${index}`}
            >
              <div className="blog-section-wrapper">
                <h2
                  id={`blog-section-${index}`}
                  className="blog-section-heading"
                >
                  {section.heading}
                </h2>
                <div className="blog-section-body">
                  {section.body?.map((paragraph, pIndex) => (
                    <p key={pIndex} className="blog-section-paragraph">
                      {paragraph}
                    </p>
                  ))}
                  {section.table && (
                    <div className="blog-table-wrapper">
                      <table className="blog-comparison-table">
                        {section.table.caption && (
                          <caption className="blog-table-caption">
                            {section.table.caption}
                          </caption>
                        )}
                        <thead>
                          <tr>
                            {section.table.headers.map((header, hi) => (
                              <th key={hi} scope="col">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        {data.faqs && <FAQ faqs={data.faqs} />}

        <div className="blog-explore">
          <p className="blog-explore-text">
            Explore{" "}
            <Link href="/services/product-strategy">Product Strategy</Link>,{" "}
            <Link href="/services/web-development">Custom Software</Link>, and{" "}
            <Link href="/services/ai-solution">AI Development</Link>. If a build has
            stalled, see{" "}
            <Link href="/project-rescue">software project rescue</Link>. When you are
            ready to talk,{" "}
            <Link href="/get-in-touch">get in touch</Link>.
          </p>
        </div>
      </article>

      <CTA />
      <Footer />
    </div>
  );
}
