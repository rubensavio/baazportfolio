import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  alternates: getAlternates("/project-rescue"),
  title: "Software Project Rescue & Recovery | Baaz",
  description:
    "Stalled software project? Bad vendor experience? We take over mid-project, stabilize your codebase, and deliver what was promised. 50% of our projects are successful mid-project rescues.",
  openGraph: {
    title: "Software Project Rescue & Recovery | Baaz",
    description:
      "We rescue stalled, mismanaged, and abandoned software projects. No restart required. Pick up right where things were left.",
    url: `${baseUrl}/project-rescue`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Project Rescue & Recovery | Baaz",
    description:
      "We rescue stalled, mismanaged, and abandoned software projects. No restart required. Pick up right where things were left.",
  },
};

export default function ProjectRescueLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Project Rescue & Recovery", url: "/project-rescue" },
        ]}
      />
      {children}
    </>
  );
}
