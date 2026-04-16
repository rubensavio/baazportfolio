import React from "react";
import Link from "next/link";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import Footer from "../../components/Footer/Footer";
import CaseStudiesHub from "../../components/CaseStudiesHub/CaseStudiesHub";
import "../blog/page.scss";
import "./case-studies-hub.scss";

export default function CaseStudiesIndexPage() {
  return (
    <div className="blog-index-page case-studies-hub-page">
      <ClientNavbar />

      <section className="blog-index-hero">
        <div className="blog-index-hero-wrapper">
          <h1 className="blog-index-heading">Case studies</h1>
          <p className="blog-index-intro">
            Product outcomes and system design notes from Baaz: shipped
            platforms, measurable marketplace and engineering outcomes, plus
            architecture guides for technical evaluation. Exploring{" "}
            <Link href="/ecommerce">Amazon &amp; Flipkart growth</Link>,{" "}
            <Link href="/enterprise">enterprise delivery</Link>, or{" "}
            <Link href="/project-rescue">project rescue</Link>? Start here, then
            get in touch.
          </p>
        </div>
      </section>

      <CaseStudiesHub />

      <Footer />
    </div>
  );
}
