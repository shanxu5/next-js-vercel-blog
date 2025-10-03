export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-16 space-y-4">
          <div className="h-12 w-48 animate-pulse rounded-lg bg-muted" />
          <div className="h-6 w-96 animate-pulse rounded-lg bg-muted" />
        </div>

        {/* Featured Posts Skeleton */}
        <div className="mb-16">
          <div className="mb-8 h-8 w-48 animate-pulse rounded-lg bg-muted" />
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                className="overflow-hidden rounded-xl border border-border bg-card"
                key={i}
              >
                <div className="h-64 w-full animate-pulse bg-muted" />
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-24 animate-pulse rounded-full bg-muted" />
                    <div className="h-4 w-32 animate-pulse rounded bg-muted" />
                  </div>
                  <div className="h-8 w-3/4 animate-pulse rounded-lg bg-muted" />
                  <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-muted" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Skeleton */}
        <div className="mb-8 flex flex-wrap gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              className="h-10 w-24 animate-pulse rounded-full bg-muted"
              key={i}
            />
          ))}
        </div>

        {/* Blog Grid Skeleton */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              className="overflow-hidden rounded-xl border border-border bg-card"
              key={i}
            >
              <div className="h-48 w-full animate-pulse bg-muted" />
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-4">
                  <div className="h-6 w-20 animate-pulse rounded-full bg-muted" />
                  <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                </div>
                <div className="h-7 w-4/5 animate-pulse rounded-lg bg-muted" />
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-muted" />
                  <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
