import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  alternates: getAlternates("/enterprise"),
  title:
    "Custom Software Development Agency for Enterprise | Baaz — Product Engineering",
  description:
    "Custom software development agency for enterprise. Scalable solutions, internal tools, and digital transformation. We build for large organizations.",
  openGraph: {
    title:
      "Custom Software Development Agency for Enterprise | Baaz — Product Engineering",
    description:
      "Custom software development agency for enterprise. Scalable solutions for large organizations.",
    url: `${baseUrl}/enterprise`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Software Development Agency for Enterprise | Baaz — Product Engineering",
    description:
      "Custom software development agency for enterprise. Scalable solutions for large organizations.",
  },
};

export default function EnterpriseLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Enterprise", url: "/enterprise" },
        ]}
      />
      {children}
    </>
  );
}
