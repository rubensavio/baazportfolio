import { notFound } from "next/navigation";
import { erpData } from "../../../lib/erpData";
import ErpPageClient from "./ErpPageClient";

export default async function ErpPage({ params }) {
  const resolved = await params;
  const erpSlug = resolved?.erpSlug;
  const data = erpSlug ? erpData[erpSlug] : null;
  if (!data) {
    notFound();
  }

  return <ErpPageClient data={{ ...data, slug: erpSlug }} />;
}
