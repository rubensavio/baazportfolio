import IndustryHubPageClient from "../../components/IndustryHubPageClient/IndustryHubPageClient";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";

export default function IndustryHubPage() {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industry" },
        ]}
      />
      <IndustryHubPageClient />
    </>
  );
}
