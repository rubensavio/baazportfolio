/**
 * Reusable FAQPage JSON-LD for hub/listing pages that don't have their own
 * data-driven FAQ schema. Pass an array of { question, answer }.
 */
export default function FaqJsonLd({ items }) {
  if (!items?.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
