import { notFound } from "next/navigation";
import { servicesData } from "../../../lib/servicesData";
import ServicesPageClient from "./ServicesPageClient";

export default async function ServicesPage({ params }) {
  const resolved = await params;
  const serviceType = resolved?.serviceType;
  if (!serviceType || !servicesData[serviceType]) {
    notFound();
  }
  return <ServicesPageClient serviceType={serviceType} />;
}
