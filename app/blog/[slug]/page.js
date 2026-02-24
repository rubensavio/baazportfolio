"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { blogData } from "../../../lib/blogData";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../../components/Navbar/Navbar"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../../../components/FAQ/FAQ"), {
  ssr: false,
});
const CTA = dynamic(() => import("../../../components/CTA/CTA"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../../components/Footer/Footer"), {
  ssr: false,
});

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug;
  const data = blogData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="blog-page">
        <Headroom>
          <Navbar />
        </Headroom>
        <section className="blog-hero">
          <div className="blog-hero-wrapper">
            <h1 className="blog-heading">Blog</h1>
            <p className="blog-intro">
              Guides and insights on product engineering, software development,
              and building digital products.{" "}
              <Link href="/blog/thoughtworks-alternatives">
                ThoughtWorks alternatives
              </Link>
              ,{" "}
              <Link href="/blog/how-to-choose-software-development-partner">
                how to choose a partner
              </Link>
              ,{" "}
              <Link href="/blog/how-to-build-ai-powered-product">
                how to build an AI-powered product
              </Link>
              , and more.
            </p>
          </div>
        </section>
        <CTA />
        <Footer />
      </div>
    );
  }

  const faqSchema = data.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="blog-page">
      <Headroom>
        <Navbar />
      </Headroom>

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="blog-article">
        <header className="blog-hero">
          <div className="blog-hero-wrapper">
            <span className="blog-label">{data.contentType}</span>
            <h1 className="blog-heading">{data.title}</h1>
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
                  {section.body.map((paragraph, pIndex) => (
                    <p key={pIndex} className="blog-section-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {data.faqs && (
          <FAQ faqs={data.faqs} />
        )}

        <div className="blog-explore">
          <p className="blog-explore-text">
            Explore our{" "}
            <Link href="/services/product-strategy">Product Strategy</Link>,{" "}
            <Link href="/services/web-development">Custom Software</Link>, and{" "}
            <Link href="/services/ai-solution">AI Development</Link> services, or{" "}
            <Link href="/get-in-touch">get in touch</Link> to discuss your project.
          </p>
        </div>
      </article>

      <CTA />
      <Footer />
    </div>
  );
}
