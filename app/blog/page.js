import BlogPageClient from "../../components/BlogPageClient/BlogPageClient";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <BlogPageClient />
    </>
  );
}
