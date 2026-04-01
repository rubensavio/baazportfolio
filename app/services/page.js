import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { servicesData } from "../../lib/servicesData";
import "./page.scss";

export default function ServicesHubPage() {
  const entries = Object.entries(servicesData).map(([slug, data]) => ({
    slug,
    label: data.label,
  }));

  return (
    <div className="services-hub-page">
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <Navbar />
      <main className="services-hub-main">
        <section className="services-hub-hero">
          <h1 className="services-hub-heading">Product engineering services</h1>
          <p className="services-hub-intro">
            Explore strategy, design, web, mobile, and AI—open a service for
            scope, FAQs, and next steps.
          </p>
        </section>
        <ul className="services-hub-list">
          {entries.map(({ slug, label }) => (
            <li key={slug}>
              <Link href={`/services/${slug}`} className="services-hub-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
