import { fetchGalleryItems } from '@repo/api/brand';
import Image from 'next/image';

export default async function Gallery() {
  const galleryItems = await fetchGalleryItems();
  return (
    <section className="border-border/40 border-t py-24 md:py-32" id="gallery">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* <div className="mb-6">
              <span className="font-mono text-primary text-sm">
                {'// Featured work'}
              </span>
            </div> */}
          <h2 className="mb-16 text-balance font-bold text-4xl md:text-5xl">
            Recent Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                className="group overflow-hidden border-border/40 bg-card transition-all hover:border-primary/50"
                key={item.id}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw,(max-width: 1024px) 50vw,33vw"
                    src={item.imageUrl}
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center">
                      <span className="font-medium text-primary text-sm">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-2 font-mono text-primary text-sm">
                    {item.category}
                  </p>
                  <h3 className="font-semibold text-foreground text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
