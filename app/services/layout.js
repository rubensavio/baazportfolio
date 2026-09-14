import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/services"),
  title: "Custom Software Dev | Baaz",
  description:
    "Baaz offers custom software development including scalable enterprise solutions, mobile apps, AI integrations, and ERP. Build with Baaz — book a free discovery call today.",
  openGraph: {
    title: "Custom Software Dev | Baaz",
    description:
      "Baaz offers custom software development including scalable enterprise solutions, mobile apps, AI integrations, and ERP. Build with Baaz — book a free discovery call today.",
    url: `${baseUrl}/services`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz custom software development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Dev | Baaz",
    description:
      "Baaz offers custom software development including scalable enterprise solutions, mobile apps, AI integrations, and ERP. Build with Baaz — book a free discovery call today.",
    images: [ogImage],
  },
};

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What custom software development services does Baaz offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baaz offers end-to-end custom software development including product strategy, UI/UX design, web and mobile app development, AI integrations, ERP systems, and cloud solutions. Every engagement is tailored to the client's industry and business goals.",
      },
    },
    {
      "@type": "Question",
      name: "How does Baaz approach custom software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baaz uses a discovery-to-launch methodology: a focused discovery phase to align on scope and architecture, iterative sprints for fast delivery, and a launch-and-scale phase for production readiness. This approach minimises risk and delivers working software quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Does Baaz build mobile apps for enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Baaz builds cross-platform and native mobile applications for enterprises and startups, covering iOS, Android, and React Native. Mobile solutions include field-ops apps, customer portals, and AI-powered mobile experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Can Baaz integrate AI into existing software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Baaz integrates AI capabilities — including LLM-powered chatbots, computer vision, and predictive analytics — into existing enterprise systems and custom-built applications.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take with Baaz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary by scope. An MVP can typically be delivered in 8–14 weeks. Larger enterprise builds use phased milestones. Book a free discovery call to get a scoped estimate for your project.",
      },
    },
  ],
};

export default function ServicesSegmentLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />
      {children}
    </>
  );
}
