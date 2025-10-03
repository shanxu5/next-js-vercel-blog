import { fetchCategories } from '@repo/api/blog';
import CategoryLink from './category-link';

export async function CategoryFilter() {
  const categories = await fetchCategories();

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <CategoryLink category={category} key={category} />
      ))}
    </div>
  );
}
