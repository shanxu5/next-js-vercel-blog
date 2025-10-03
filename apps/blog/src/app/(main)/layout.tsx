import { BlogNavigation } from '@/components/blog-navigation';
import { CategoryFilter } from '@/components/category-filter';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-4">
      <BlogNavigation />
      <div className="mt-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-semibold text-2xl text-foreground">Posts</h2>
          <CategoryFilter />
        </div>
        {children}
      </div>
    </main>
  );
}
