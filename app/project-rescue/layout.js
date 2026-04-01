import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { rescueFaqs } from "../../lib/projectRescueFaqs";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

const pageDescription =
  "Stalled project or bad vendor? Baaz takes over mid-project, stabilizes codebase, and delivers outcomes—50%+ of our work is rescues. Book a free codebase audit.";

const serviceDescription =
  "We rescue stalled, mismanaged, and abandoned software projects. Mid-project takeover, codebase stabilization, technical debt resolution, and ongoing delivery — without starting from scratch.";

function projectRescueJsonLd() {
  const faqPage = {
    "@type": "FAQPage",
    "@id": `${baseUrl}/project-rescue#faq`,
    mainEntity: rescueFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const service = {
    "@type": "Service",
    "@id": `${baseUrl}/project-rescue#service`,
    name: "Software Project Rescue & Recovery",
    description: serviceDescription,
    url: `${baseUrl}/project-rescue`,
    provider: {
      "@type": "Organization",
      name: "Baaz",
      url: baseUrl,
    },
    serviceType: "Software Project Rescue & Recovery",
    areaServed: { "@type": "Place", name: "Worldwide" },
  };

  const article = {
    "@type": "Article",
    "@id": `${baseUrl}/project-rescue#article`,
    headline: "We Rescue Failed Software Projects. No Restart Required.",
    description: pageDescription,
    url: `${baseUrl}/project-rescue`,
    author: {
      "@type": "Organization",
      name: "Baaz",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Baaz",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/Logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/project-rescue`,
    },
    datePublished: "2018-01-01",
    dateModified: "2026-03-01",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [article, service, faqPage],
  };
}

export const metadata = {
  alternates: getAlternates("/project-rescue"),
  title: "Software Project Rescue & Recovery | Baaz",
  description: pageDescription,
  openGraph: {
    title: "Software Project Rescue & Recovery | Baaz",
    description:
      "Rescue stalled or abandoned software—no full restart. Audit, stabilize, and ship again with Baaz. Mid-project takeovers are over half our engagements.",
    url: `${baseUrl}/project-rescue`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Software project rescue and recovery — Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Project Rescue & Recovery | Baaz",
    description:
      "Stalled vendor or failing build? Baaz rescues mid-project—stabilize the codebase and resume delivery. Free codebase health audit available.",
    images: [ogImage],
  },
};

export default function ProjectRescueLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectRescueJsonLd()),
        }}
      />
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Project Rescue & Recovery", url: "/project-rescue" },
        ]}
      />
      {children}
    </>
  );
}
