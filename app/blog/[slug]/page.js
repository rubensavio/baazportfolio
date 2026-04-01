import { notFound } from "next/navigation";
import { blogData } from "../../../lib/blogData";
import BlogPostPageClient from "./BlogPostPageClient";

export default async function BlogPostPage({ params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const data = slug ? blogData[slug] : null;
  if (!data) {
    notFound();
  }
  return <BlogPostPageClient slug={slug} data={data} />;
}
