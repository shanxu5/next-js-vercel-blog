import { fetchPostBySlug } from '@repo/api/blog';
import { Button } from '@repo/ui/components/button';
import { ArrowLeft, Badge, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: new Date(post.publishedAt).toISOString(),
      authors: ['Blog Team'],
      tags: [post.category],
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 800,
              height: 400,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return (
    <main className="flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Blog Post</h1>

      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/">
            <Button
              className="-ml-4 mb-8 text-muted-foreground hover:text-foreground"
              variant="ghost"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <article>
            <header className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                <Badge className="border-primary/30 text-primary">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.publishedAt.getDate()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                </div>
              </div>

              <h1 className="mb-4 text-balance font-bold text-4xl text-foreground sm:text-5xl">
                {post.title}
              </h1>

              <p className="text-pretty text-muted-foreground text-xl leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {post.coverImage && (
              <div className="relative mb-12 aspect-[2/1] w-full overflow-hidden rounded-lg">
                <Image
                  alt={post.title}
                  className="object-cover"
                  fill
                  src={post.coverImage || '/placeholder.svg'}
                />
              </div>
            )}
            <p className="text-pretty text-muted-foreground text-xl leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
