import { fetchContactInfo } from '@repo/api/brand';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default async function ContactUs() {
  const contactInfo = await fetchContactInfo();
  return (
    <section
      className="border-border/40 border-t bg-card/30 py-24 md:py-32"
      id="contact"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            {/* <span className="font-mono text-primary text-sm">
                {'// Get in touch'}
              </span> */}
          </div>
          <h2 className="mb-12 text-balance font-bold text-4xl md:text-5xl">
            Contact Us
          </h2>

          <div className="mx-auto max-w-4xl">
            <ContactForm />
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-semibold text-foreground text-xl">
                Email
              </h3>
              <a
                className="group inline-flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-primary"
                href="mailto:hello@example.com"
              >
                <Mail className="h-5 w-5" />
                <span className="border-transparent border-b group-hover:border-primary">
                  {contactInfo.email}
                </span>
              </a>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-foreground text-xl">
                Social Media
              </h3>
              <div className="space-y-3">
                <a
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  href={contactInfo.socialMedia.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github className="h-5 w-5" />
                  <span className="border-transparent border-b group-hover:border-primary">
                    GitHub
                  </span>
                </a>
                <a
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  href={contactInfo.socialMedia.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="border-transparent border-b group-hover:border-primary">
                    LinkedIn
                  </span>
                </a>
                <a
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  href={contactInfo.socialMedia.twitter}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="border-transparent border-b group-hover:border-primary">
                    Twitter
                  </span>
                </a>
                <a
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  href={contactInfo.socialMedia.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="border-transparent border-b group-hover:border-primary">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            {/* <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Send me a message
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
