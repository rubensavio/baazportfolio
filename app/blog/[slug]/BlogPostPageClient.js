"use client";

import Link from "next/link";
import {
  ArrowBackIcon,
  ArrowLinkIcon,
  ArrowUpRightIcon,
} from "../../../components/icons/ArrowIcons";
import ClientNavbar from "../../../components/ClientNavbar/ClientNavbar";
import FAQ from "../../../components/FAQ/FAQ";
import Footer from "../../../components/Footer/Footer";
import { getBlogRelatedInternalLinks } from "../../../lib/blogRelatedInternalLinks";
import { HOME_CTA } from "../../../lib/homePageData";
import { getBlogPostRootClass } from "../../../lib/blogPostTheme";
import "./page.scss";

export default function BlogPostPageClient({ slug, data }) {
  const relatedInternalLinks = getBlogRelatedInternalLinks(slug);
  const rootClass = getBlogPostRootClass(data);

  return (
    <div className={rootClass}>
      <ClientNavbar />

      <article className="blog-article">
        <header className="blog-post-hero">
          <div className="v2-wrap blog-post-hero-inner">
            <Link href="/blog" className="blog-post-back v2-arrow-link">
              <ArrowBackIcon className="blog-post-back-icon" />
              All writing
            </Link>
            <span className="blog-label v2-label">{data.contentType}</span>
            <h1 className="blog-heading v2-display">{data.title}</h1>

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

        <div className="blog-sections v2-wrap">
          {data.sections.map((section, index) => (
            <section
              key={index}
              className="blog-section"
              aria-labelledby={`blog-section-${index}`}
            >
              <h2
                id={`blog-section-${index}`}
                className="blog-section-heading v2-display"
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
                    <p className="blog-section-references-label v2-label">
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
            </section>
          ))}
        </div>

        <section
          className="blog-contextual-internal v2-wrap"
          aria-labelledby="blog-contextual-internal-heading"
        >
          <h2
            id="blog-contextual-internal-heading"
            className="blog-contextual-internal-title v2-display"
          >
            Related guides, services &amp; programmes
          </h2>
          <ul className="blog-contextual-internal-list">
            {relatedInternalLinks.map((lnk, index) => (
              <li key={lnk.href} className="blog-contextual-internal-item">
                <Link href={lnk.href} className="blog-contextual-internal-link">
                  <span className="blog-contextual-internal-index v2-label">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="blog-contextual-internal-label">
                    {lnk.label}
                  </span>
                  <ArrowUpRightIcon className="blog-contextual-internal-icon" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {data.faqs && (
          <div className="v2-faq v2-wrap">
            <FAQ faqs={data.faqs} />
          </div>
        )}

        <section className="blog-post-closing v2-wrap">
          <p className="blog-explore-text">
            Want this distilled for your roadmap?{" "}
            <Link href="/get-in-touch">Brief the Baaz squad</Link> or scan{" "}
            <Link href="/case-studies">ship evidence in case studies</Link>.
          </p>
          <div className="blog-post-cta">
            <p className="blog-post-cta-sub">{HOME_CTA.sub}</p>
            <div className="v2-cta-actions">
              <Link
                href={HOME_CTA.briefHref}
                className="v2-arrow-link v2-arrow-link--light v2-cta-brief-link"
              >
                Get in touch <ArrowLinkIcon />
              </Link>
              <Link
                href={HOME_CTA.callHref}
                className="v2-arrow-link v2-arrow-link--light v2-cta-call-link"
              >
                Schedule a call <ArrowLinkIcon />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
