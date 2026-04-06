"use client";

import React from "react";
import dynamic from "next/dynamic";
import CTA from "../../components/CTA/CTA";
import "../legal/legal-page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

export default function TermsPage() {
  return (
    <div className="marketing-legal-page" id="terms-of-service">
      <Headroom>
        <Navbar />
      </Headroom>
      <main className="legal-doc-main">
        <article className="legal-doc-sheet">
          <header className="legal-doc-header">
            <p className="legal-doc-kicker">Terms of use</p>
            <p className="legal-doc-entity">ATIIAD Technologies Pvt Ltd</p>
            <h1 id="terms-of-service-heading" className="legal-doc-title">
              Terms of Service
            </h1>
            <p className="legal-doc-meta">Effective date: April 6, 2026</p>
            <hr className="legal-doc-divider" aria-hidden="true" />
          </header>
          <div className="legal-doc-body">
            <p>
              Welcome to ATIIAD Technologies Pvt Ltd (&quot;Company&quot;,
              &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms of
              Service govern your use of our website and services.
            </p>

            <h2>1. Services</h2>
            <p>
              We provide IT consulting, product engineering, and software
              development services globally.
            </p>

            <h2>2. Client Responsibilities</h2>
            <p>
              Clients agree to provide accurate information and cooperate during
              project execution.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All deliverables become the client&apos;s property upon full
              payment unless otherwise agreed.
            </p>

            <h2>4. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of sensitive
              information.
            </p>

            <h2>5. Payments</h2>
            <p>
              All payments are governed by mutually agreed contracts. No online
              payments are processed via the website.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>We are not liable for indirect or consequential damages.</p>

            <h2>7. Termination</h2>
            <p>
              Either party may terminate services with written notice as per
              agreement.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms are governed by the laws of India, with jurisdiction
              in Bengaluru, Karnataka.
            </p>

            <h2>9. Arbitration</h2>
            <p>
              Disputes shall be resolved via arbitration in Bengaluru under
              Indian Arbitration laws.
            </p>

            <h2>10. Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:support@baaz.live">support@baaz.live</a>
              <br />
              Address: WeWork, RMZ Latitude, Hebbal, Bengaluru, Karnataka 560024
            </p>
          </div>
        </article>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
