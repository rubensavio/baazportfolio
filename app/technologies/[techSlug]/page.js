import { notFound } from "next/navigation";
import {
  technologyCapabilitiesData,
  technologyCapabilitySlugs,
} from "../../../lib/technologyCapabilitiesData";
import TechnologyPageClient from "./TechnologyPageClient";

export async function generateStaticParams() {
  return technologyCapabilitySlugs.map((techSlug) => ({ techSlug }));
}

export default async function TechnologyPage({ params }) {
  const resolved = await params;
  const techSlug = resolved?.techSlug;

  if (!techSlug || !technologyCapabilitiesData[techSlug]) {
    notFound();
  }

  return <TechnologyPageClient techSlug={techSlug} />;
}
