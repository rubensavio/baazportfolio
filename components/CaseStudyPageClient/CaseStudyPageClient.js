"use client";

import Link from "next/link";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import CaseStudyCrossLinks from "../CaseStudyCrossLinks/CaseStudyCrossLinks";
import { ArrowBackIcon, ArrowLinkIcon } from "../icons/ArrowIcons";
import { HOME_CTA } from "../../lib/homePageData";
import "./CaseStudyPageClient.scss";
import "../../styles/case-study-v2-text.scss";

export default function CaseStudyPageClient({
  children,
  className = "",
  faqs,
  faqHeading,
  faqSchema,
  crossLinks,
}) {
  return (
    <div className={`baaz-v2 case-study-v2 ${className}`.trim()}>
      <ClientNavbar />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="v2-wrap case-study-back-wrap">
        <Link href="/case-studies" className="case-study-back v2-arrow-link">
          <ArrowBackIcon className="case-study-back-icon" />
          All case studies
        </Link>
      </div>

      <main className="case-study-main">
        <div className="case-study-content v2-wrap">{children}</div>
      </main>

      {crossLinks && <CaseStudyCrossLinks {...crossLinks} />}

      {faqs?.length > 0 && (
        <div className="v2-faq v2-wrap">
          <FAQ faqs={faqs} heading={faqHeading} />
        </div>
      )}

      <section className="case-study-closing v2-wrap">
        <p className="case-study-closing-text">
          Want this playbook on your roadmap?{" "}
          <Link href="/get-in-touch">Brief the Baaz squad</Link> or browse{" "}
          <Link href="/case-studies">more shipped programmes</Link>.
        </p>
        <div className="case-study-closing-cta">
          <p className="case-study-closing-sub">{HOME_CTA.sub}</p>
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

      <Footer />
    </div>
  );
}
