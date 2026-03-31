import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();

export const metadata = {
  alternates: getAlternates("/get-in-touch"),
  title: "Contact Baaz | Product Strategy, Design & Engineering",
  description:
    "Contact Baaz for product strategy, UI/UX, custom web and mobile software, AI, or project rescue. Tell us your goals—we respond fast and scope honestly.",
  openGraph: {
    title: "Contact Baaz | Product Strategy, Design & Engineering",
    description:
      "Reach Baaz for strategy, design, engineering, mobile, AI, or rescue—fast replies from Bangalore.",
    url: `${baseUrl}/get-in-touch`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Baaz | Product Strategy, Design & Engineering",
    description:
      "Product strategy, UI/UX, custom software, mobile, and AI—message Baaz today.",
  },
};

export default function GetInTouchLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Get in Touch", url: "/get-in-touch" },
        ]}
      />
      {children}
    </>
  );
}
