import { notFound } from "next/navigation";
import { erpData } from "../../../lib/erpData";
import { getRelatedErpSolutions } from "../../../lib/erpRelated";
import { BreadcrumbScript } from "../../../lib/breadcrumbSchema";
import ErpPageClient from "./ErpPageClient";

export default async function ErpPage({ params }) {
  const resolved = await params;
  const erpSlug = resolved?.erpSlug;
  const data = erpSlug ? erpData[erpSlug] : null;
  if (!data) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "ERP Solutions", url: "/erp" },
    { name: data.title, url: `/erp/${erpSlug}` },
  ];

  const relatedErpSolutions = getRelatedErpSolutions(erpSlug, 6);

  return (
    <>
      <BreadcrumbScript items={breadcrumbItems} />
      <ErpPageClient
        data={{ ...data, slug: erpSlug }}
        relatedErpSolutions={relatedErpSolutions}
      />
    </>
  );
}
