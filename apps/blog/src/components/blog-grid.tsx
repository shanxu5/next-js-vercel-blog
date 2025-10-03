// import type { BlogPost } from '@repo/api/blog';
import { fetchPosts, fetchPostsByCategory } from '@repo/api/blog';
import { ArrowUpRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export async function BlogGrid({ category }: { category?: string }) {
  const posts = category
    ? await fetchPostsByCategory(decodeURIComponent(category))
    : await fetchPosts();
  // if (!posts) {
  //   notFound();
  // }
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* <div className="mb-12">
          <h2 className="font-normal font-serif text-3xl text-foreground md:text-4xl">
            Posts
          </h2>
        </div> */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
                href={`/blog/${post.slug}`}
                key={post.id}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs">
                    {post.category}
                  </span>
                </div>
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    alt={post.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    src={post.coverImage || '/placeholder.svg'}
                  />
                </div>
                <h3 className="mb-3 font-normal font-serif text-foreground text-xl transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-6 flex-grow text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-border border-t pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-foreground text-sm">
                      {post.author.name}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Clock className="h-3 w-3" />
                      <span>{post.readingTime}</span>
                      <span>•</span>
                      <span>{post.publishedAt.getDate()}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="group-hover:-translate-y-1 h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span className="text-muted-foreground text-xs" key={tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          ) : (
            <div>No posts here</div>
          )}
        </div>
      </div>
    </section>
  );
}
