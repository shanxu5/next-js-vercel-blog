import { fetchServices } from '@repo/api/brand';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

import Link from 'next/link';

export async function CompanyFooter() {
  const services = await fetchServices();
  return (
    <footer className="border-border/40 border-t bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              className="font-bold text-2xl text-foreground tracking-tight"
              href="/"
            >
              COMPANY
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Delivering exceptional solutions that drive business growth and
              innovation.
            </p>
            <div className="flex gap-4">
              <Link
                aria-label="Twitter"
                className="text-muted-foreground transition-colors hover:text-primary"
                href="https://twitter.com"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
                href="https://linkedin.com"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Facebook"
                className="text-muted-foreground transition-colors hover:text-primary"
                href="https://facebook.com"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-primary"
                href="https://instagram.com"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
                href="https://github.com"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                    href="#services"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href="#clients"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href="/terms"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href="/cookies"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  href="/accessibility"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-border/40 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Company. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with care in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
