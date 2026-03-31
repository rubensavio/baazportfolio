import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { ABOUT_FAQ_ITEMS } from "../../lib/aboutFaq";
import { getAlternates } from "../../lib/regions";

import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();

export const metadata = {
  alternates: getAlternates("/about"),
  title: "About Baaz | Product Engineering Studio, Bangalore",
  description:
    "Baaz is a Bangalore product engineering studio since 2018—custom web and mobile software, values, and how we work with startups and enterprises from strategy through launch.",
  openGraph: {
    title: "About Baaz | Product Engineering Studio, Bangalore",
    description:
      "Bangalore studio, global clients—team, values, and how we ship product engineering since 2018.",
    url: `${baseUrl}/about`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Baaz | Product Engineering Studio, Bangalore",
    description:
      "Who we are: Bangalore product engineers for startups and enterprises—team, craft, and culture.",
  },
};

function aboutFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ABOUT_FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutFaqJsonLd()),
        }}
      />
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      {children}
    </>
  );
}
