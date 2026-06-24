import ErpHubPageClient from "../../components/ErpHubPageClient/ErpHubPageClient";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";

export default function ErpHubPage() {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "ERP Solutions", url: "/erp" },
        ]}
      />
      <ErpHubPageClient />
    </>
  );
}
