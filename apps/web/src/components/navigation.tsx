import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-border/40 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link className="font-bold text-foreground text-xl" href="/">
            Portfolio
          </Link>
          <div className="flex items-center gap-8">
            <Link
              className="text-muted-foreground text-sm transition-colors hover:text-primary"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-muted-foreground text-sm transition-colors hover:text-primary"
              href="#contact"
            >
              Contact
            </Link>
            <Link
              className="text-muted-foreground text-sm transition-colors hover:text-primary"
              href="#gallery"
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
