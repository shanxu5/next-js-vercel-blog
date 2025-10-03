export function BlogNavigation() {
  return (
    <nav className="border-border/40 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <a
            className="flex items-center space-x-2"
            href={process.env.NEXT_PUBLIC_WEB_URL}
          >
            <span className="font-bold text-xl tracking-tight">
              Cool Stuff Company
            </span>
          </a>
          <div className="flex items-center gap-8">
            <a
              className="text-muted-foreground text-sm transition-colors hover:text-primary"
              href={process.env.NEXT_PUBLIC_WEB_ABOUT_URL}
            >
              About
            </a>
            <a
              className="text-muted-foreground text-sm transition-colors hover:text-primary"
              href={process.env.NEXT_PUBLIC_WEB_GALLERY_URL}
            >
              Gallery
            </a>
            <a
              className="text-muted-foreground text-sm transition-colors hover:text-primary"
              href={process.env.NEXT_PUBLIC_WEB_CONTACT_URL}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
