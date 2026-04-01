import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { industryData } from "../../lib/industryData";
import "./page.scss";

export default function IndustryHubPage() {
  const entries = Object.entries(industryData).map(([slug, data]) => ({
    slug,
    title: data.title,
  }));

  return (
    <div className="industry-hub-page">
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industry" },
        ]}
      />
      <Navbar />
      <main className="industry-hub-main">
        <section className="industry-hub-hero">
          <h1 className="industry-hub-heading">Industries we serve</h1>
          <p className="industry-hub-intro">
            Sector-specific software—compliance, workflows, and integrations.
            Choose an industry for how we work and common FAQs.
          </p>
        </section>
        <ul className="industry-hub-list">
          {entries.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/industry/${slug}`} className="industry-hub-link">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
