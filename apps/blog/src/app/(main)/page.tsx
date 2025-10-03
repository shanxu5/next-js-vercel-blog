import type { Metadata } from 'next';
import { BlogGrid } from '@/components/blog-grid';

export const metadata: Metadata = {
  title: 'Cool Stuff Company Blog | Insights, Tutorials & Updates',
  description:
    'Explore our latest articles on design, development, and engineering. Stay updated with industry insights, tutorials, and best practices.',
  openGraph: {
    title: 'Blog | Insights, Tutorials & Updates',
    description:
      'Explore our latest articles on design, development, and engineering. Stay updated with industry insights, tutorials, and best practices.',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Insights, Tutorials & Updates',
    description:
      'Explore our latest articles on design, development, and engineering. Stay updated with industry insights, tutorials, and best practices.',
  },
};

export default function HomePage() {
  return (
    <div className="mt-20">
      <BlogGrid />
    </div>
  );
}
