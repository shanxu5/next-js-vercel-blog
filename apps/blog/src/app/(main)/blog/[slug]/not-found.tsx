import Link from 'next/link';

export default function PostNotFound() {
  return (
    <div>
      <h2>Blog Post Not Found</h2>
      <p>The post you're looking for doesn't exist.</p>
      <Link href="/blog">← Back to Blog</Link>
    </div>
  );
}
