'use client';
import { Button } from '@repo/ui/components/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CategoryLink({ category }: { category: string }) {
  const params = useParams();
  const isSelected = params.slug === category;

  return (
    <Button asChild size="sm" variant={isSelected ? 'default' : 'outline'}>
      <Link href={`/category/${encodeURIComponent(category)}`}>{category}</Link>
    </Button>
  );
}
