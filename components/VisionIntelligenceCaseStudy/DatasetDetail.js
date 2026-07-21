"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowBackIcon, ArrowLinkIcon } from "../icons/ArrowIcons";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";
import FAQ from "../FAQ/FAQ";
import { HOME_CTA } from "../../lib/homePageData";
import "./VisionIntelligenceCaseStudy.scss";
import "./DatasetDetail.scss";

const PAYANA_FAQ = {
  question: "Is this a managed service? What is it called?",
  answer:
    "Yes. We deliver these datasets as a fully managed data-annotation service called Payana (payana.ai) - you hand us raw images or video and receive training-ready, human-reviewed datasets in the format your pipeline expects.",
};

export default function DatasetDetail({ data, media }) {
  const videoRef = useRef(null);
  const faqs = [...(data.faqs || []), PAYANA_FAQ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (videoRef.current && media?.playbackRate) {
      videoRef.current.playbackRate = media.playbackRate;
    }
  }, [media]);

  return (
    <div className="baaz-v2 vi-casestudy vi-cs-detail">
      <ClientNavbar />

      <div className="v2-wrap vi-cs-back-wrap">
        <Link
          href="/technologies/vision-intelligence/case-studies"
          className="vi-cs-back v2-arrow-link"
        >
          <ArrowBackIcon className="vi-cs-back-icon" />
          All datasets
        </Link>
      </div>

      <main className="vi-cs-main v2-wrap">
        <header className="vi-cs-hero vi-cs-detail-hero">
          <span className="vi-cs-label">{data.eyebrow}</span>
          <h1 className="vi-cs-title vi-cs-detail-title">{data.title}</h1>
          <p className="vi-cs-summary">{data.lede}</p>
        </header>

        {media && (
          <div className="vi-cs-detail-media">
            {media.video ? (
              <video
                ref={videoRef}
                poster={media.poster}
                src={media.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={data.title}
                onLoadedMetadata={(e) => {
                  if (media.playbackRate)
                    e.currentTarget.playbackRate = media.playbackRate;
                }}
              />
            ) : (
              <img src={media.image} alt={data.title} />
            )}
          </div>
        )}

        {data.sections.map((section) => (
          <section
            className="vi-cs-section vi-cs-detail-section"
            key={section.heading}
          >
            <h2 className="vi-cs-section-heading">{section.heading}</h2>

            {section.body?.map((p, i) => (
              <p className="vi-cs-body" key={i}>
                {p}
              </p>
            ))}

            {section.items && (
              <ul className="vi-cs-detail-list">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.table && (
              <div className="vi-cs-detail-tablewrap">
                <table className="vi-cs-detail-table">
                  <thead>
                    <tr>
                      {section.table.headers.map((h) => (
                        <th key={h}>{h}</th>
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
          </section>
        ))}

        {data.callout && (
          <div className="vi-cs-detail-callout">{data.callout}</div>
        )}
      </main>

      {faqs.length > 0 && (
        <div className="v2-faq">
          <FAQ faqs={faqs} heading="Frequently asked questions" />
        </div>
      )}

      <div className="v2-wrap">
        <section className="vi-cs-closing">
          <h2 className="vi-cs-closing-heading">
            Have a dataset like this to build?
          </h2>
          <p className="vi-cs-closing-sub">
            Tell us what you want to label - we'll tell you how fast we can ship
            it and what it'll cost. Delivered as Payana (payana.ai), our managed
            data-annotation service.
          </p>
          <div className="vi-cs-hero-actions">
            <Link
              href={HOME_CTA.briefHref}
              className="vi-cs-btn vi-cs-btn--primary"
            >
              Get in touch <ArrowLinkIcon />
            </Link>
            <Link
              href={HOME_CTA.callHref}
              className="vi-cs-btn vi-cs-btn--secondary"
            >
              Schedule a call
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
