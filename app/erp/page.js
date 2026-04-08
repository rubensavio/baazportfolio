import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { erpData } from "../../lib/erpData";
import "./page.scss";

export default function ErpHubPage() {
  const entries = Object.entries(erpData).map(([slug, data]) => ({
    slug,
    title: data.title,
  }));

  return (
    <div className="erp-hub-page">
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "ERP Solutions", url: "/erp" },
        ]}
      />
      <Navbar />
      <main className="erp-hub-main">
        <section className="erp-hub-hero">
          <h1 className="erp-hub-heading">ERP Solutions by Industry</h1>
          <p className="erp-hub-intro">
            Industry-ready ERP implementation for operations, finance,
            compliance, and integrations. Choose your industry to see approach,
            modules, and FAQs.
          </p>
        </section>
        <ul className="erp-hub-list">
          {entries.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/erp/${slug}`} className="erp-hub-link">
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
