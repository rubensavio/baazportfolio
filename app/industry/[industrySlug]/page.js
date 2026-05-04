import { notFound } from "next/navigation";
import { industryData } from "../../../lib/industryData";
import { erpData } from "../../../lib/erpData";
import { erpLandingSlugForIndustrySlug } from "../../../lib/industryErpHints";
import { BreadcrumbScript } from "../../../lib/breadcrumbSchema";
import IndustryPageClient from "./IndustryPageClient";

export default async function IndustryPage({ params }) {
  const resolved = await params;
  const industrySlug = resolved?.industrySlug;
  const data = industrySlug ? industryData[industrySlug] : null;
  if (!data) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industry" },
    { name: data.title, url: `/industry/${industrySlug}` },
  ];

  const erpDeepSlug = erpLandingSlugForIndustrySlug[industrySlug];
  const erpIndustryDeepLink =
    erpDeepSlug && erpData[erpDeepSlug]
      ? { href: `/erp/${erpDeepSlug}`, label: erpData[erpDeepSlug].title }
      : null;

  return (
    <>
      <BreadcrumbScript items={breadcrumbItems} />
      <IndustryPageClient
        data={{ ...data, slug: industrySlug }}
        erpIndustryDeepLink={erpIndustryDeepLink}
      />
    </>
  );
}
