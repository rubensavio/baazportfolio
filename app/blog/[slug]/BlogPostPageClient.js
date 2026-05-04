import React from "react";
import Link from "next/link";
import ClientNavbar from "../../../components/ClientNavbar/ClientNavbar";
import FAQ from "../../../components/FAQ/FAQ";
import CTA from "../../../components/CTA/CTA";
import Footer from "../../../components/Footer/Footer";
import { getBlogRelatedInternalLinks } from "../../../lib/blogRelatedInternalLinks";
import "./page.scss";

export default function BlogPostPageClient({ slug, data }) {
  const relatedInternalLinks = getBlogRelatedInternalLinks(slug);

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
                  {section.items && (
                    <ul className="blog-section-list">
                      {section.items.map((item, iIndex) => (
                        <li key={iIndex} className="blog-section-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.steps && (
                    <ol className="blog-section-steps">
                      {section.steps.map((step, sIndex) => (
                        <li key={sIndex} className="blog-section-step-item">
                          {step}
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.body2?.map((paragraph, pIndex) => (
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
                  {section.references?.length > 0 && (
                    <div className="blog-section-references-wrap">
                      <p className="blog-section-references-label">
                        Sources &amp; further reading
                      </p>
                      <ul className="blog-section-references">
                        {section.references.map((ref, ri) => (
                          <li key={ri} className="blog-section-reference-item">
                            <a
                              href={ref.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {ref.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section
          className="blog-contextual-internal"
          aria-labelledby="blog-contextual-internal-heading"
        >
          <h2
            id="blog-contextual-internal-heading"
            className="blog-contextual-internal-title"
          >
            Related guides, services &amp; programmes
          </h2>
          <ul className="blog-contextual-internal-list">
            {relatedInternalLinks.map((lnk) => (
              <li key={lnk.href} className="blog-contextual-internal-item">
                <Link href={lnk.href} className="blog-contextual-internal-link">
                  {lnk.label}
                  <span className="blog-contextual-internal-chevron" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {data.faqs && <FAQ faqs={data.faqs} />}

        <div className="blog-explore">
          <p className="blog-explore-text">
            Want this distilled for your roadmap?{" "}
            <Link href="/get-in-touch">Brief the Baaz squad</Link> or scan{" "}
            <Link href="/case-studies">ship evidence in case studies</Link>.
          </p>
        </div>
      </article>

      <CTA />
      <Footer />
    </div>
  );
}
