import { notFound } from "next/navigation";
import { industryData } from "../../../lib/industryData";
import IndustryPageClient from "./IndustryPageClient";

export default async function IndustryPage({ params }) {
  const resolved = await params;
  const industrySlug = resolved?.industrySlug;
  const data = industrySlug ? industryData[industrySlug] : null;
  if (!data) {
    notFound();
  }
  return <IndustryPageClient data={{ ...data, slug: industrySlug }} />;
}
