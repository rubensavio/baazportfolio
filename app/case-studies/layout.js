import { getAlternates } from "../../lib/regions";

export const metadata = {
  title: "Case Studies | Baaz — Product Engineering",
  description:
    "How we architect and ship production systems: manufacturing AI, hiring automation, and technical deep-dives on SaaS platforms, reliability, and data integration.",
  alternates: getAlternates("/case-studies"),
  openGraph: {
    title: "Case Studies | Baaz",
    description:
      "Production case studies and architecture guides from the Baaz product engineering team.",
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
