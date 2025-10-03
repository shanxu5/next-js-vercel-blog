import { BlogGrid } from '@/components/blog-grid';

export default async function PostByCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogGrid category={slug} />;
}
