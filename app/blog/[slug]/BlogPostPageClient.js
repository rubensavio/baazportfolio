import React from "react";
import Link from "next/link";
import ClientNavbar from "../../../components/ClientNavbar/ClientNavbar";
import FAQ from "../../../components/FAQ/FAQ";
import CTA from "../../../components/CTA/CTA";
import Footer from "../../../components/Footer/Footer";
import "./page.scss";

export default function BlogPostPageClient({ slug, data }) {
  return (
    <div className="blog-page">
      <ClientNavbar />

      <article className="blog-article">
        <header className="blog-hero">
          <div className="blog-hero-wrapper">
            <span className="blog-label">{data.contentType}</span>
            <h1 className="blog-heading">{data.title}</h1>

            {(data.author || data.datePublished) && (
              <div className="blog-meta">
                {data.author && (
                  <span className="blog-meta-author">
                    By{" "}
                    <a
                      href={data.author.url || data.author.personalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-meta-author-link"
                    >
                      {data.author.name}
                    </a>
                    {data.author.jobTitle && (
                      <span className="blog-meta-author-role">
                        {" "}
                        · {data.author.jobTitle}
                      </span>
                    )}
                  </span>
                )}
                {data.datePublished && (
                  <span className="blog-meta-dates">
                    <time dateTime={data.datePublished}>
                      Published{" "}
                      {new Date(data.datePublished).toLocaleDateString(
                        "en-GB",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </time>
                    {data.dateModified &&
                      data.dateModified !== data.datePublished && (
                        <>
                          {" · Updated "}
                          <time dateTime={data.dateModified}>
                            {new Date(data.dateModified).toLocaleDateString(
                              "en-GB",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )}
                          </time>
                        </>
                      )}
                  </span>
                )}
              </div>
            )}

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
            <Link href="/services/ai-solution">AI Development</Link>. If a build
            has stalled, see{" "}
            <Link href="/project-rescue">software project rescue</Link>. When
            you are ready to talk,{" "}
            <Link href="/get-in-touch">get in touch</Link>.
          </p>
        </div>
      </article>

      <CTA />
      <Footer />
    </div>
  );
}
