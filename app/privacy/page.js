import React from "react";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import "../legal/legal-page.scss";

export default function PrivacyPage() {
  return (
    <div className="marketing-legal-page" id="privacy-policy">
      <ClientNavbar />
      <main className="legal-doc-main">
        <article className="legal-doc-sheet">
          <header className="legal-doc-header">
            <p className="legal-doc-kicker">Privacy &amp; data</p>
            <p className="legal-doc-entity">ATIIAD Technologies Pvt Ltd</p>
            <h1 id="privacy-policy-heading" className="legal-doc-title">
              Privacy Policy
            </h1>
            <p className="legal-doc-meta">Effective date: April 6, 2026</p>
            <hr className="legal-doc-divider" aria-hidden="true" />
          </header>
          <div className="legal-doc-body">
            <p>
              ATIIAD Technologies Pvt Ltd respects your privacy and is committed
              to protecting your data.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect name, email, phone, and usage data via cookies.
            </p>

            <h2>2. Use of Information</h2>
            <p>
              We use data to improve services, communicate with users, and
              analyze website usage.
            </p>

            <h2>3. Cookies</h2>
            <p>We use cookies for analytics and performance tracking.</p>

            <h2>4. Data Storage</h2>
            <p>
              Client project data is not stored on our systems; it remains in
              client-controlled environments.
            </p>

            <h2>5. Data Sharing</h2>
            <p>
              We do not sell personal data. Data may be shared with trusted
              third-party tools (analytics, CRM).
            </p>

            <h2>6. International Transfers</h2>
            <p>
              Data may be processed globally, including EU and US regions.
            </p>

            <h2>7. User Rights</h2>
            <p>
              Users may request access, correction, or deletion of their data.
            </p>

            <h2>8. Security</h2>
            <p>We implement reasonable safeguards to protect data.</p>

            <h2>9. Contact</h2>
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
