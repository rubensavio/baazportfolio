import { notFound } from "next/navigation";
import {
  selectedWorkData,
  selectedWorkSlugs,
} from "../../../lib/selectedWorkData";
import { BreadcrumbScript } from "../../../lib/breadcrumbSchema";
import CaseStudyDetailClient from "../../../components/CaseStudyDetailClient/CaseStudyDetailClient";

export async function generateStaticParams() {
  return selectedWorkSlugs.map((slug) => ({ slug }));
}

export default async function CaseStudyDetailPage({ params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const data = slug ? selectedWorkData[slug] : null;
  if (!data) {
    notFound();
  }

  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Case studies", url: "/case-studies" },
          { name: data.title, url: `/case-studies/${slug}` },
        ]}
      />
      <CaseStudyDetailClient slug={slug} />
    </>
  );
}
