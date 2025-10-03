import type { Metadata } from 'next';
import { CompanyHero } from '../components/company-hero';

export const metadata: Metadata = {
  title: 'Home - Cool Stuff Company | Professional Services & Solutions',
  description:
    'Welcome to Cool Stuff Company. We provide innovative solutions and professional services to help your business grow. Explore our portfolio, learn about our team, and get in touch today.',
  keywords: [
    'company name',
    'professional services',
    'business solutions',
    'portfolio',
    'contact us',
  ],
  authors: [{ name: 'Cool Stuff Company' }],
  creator: 'Cool Stuff Company',
  publisher: 'Cool Stuff Company',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // url: 'https://yourcompany.com',
    siteName: 'Cool Stuff Company',
    title: 'Cool Stuff Company | Professional Services & Solutions',
    description:
      'Welcome to Cool Stuff Company. We provide innovative solutions and professional services to help your business grow.',
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Cool Stuff Company',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cool Stuff Company | Professional Services & Solutions',
    description:
      'Welcome to Cool Stuff Company. We provide innovative solutions and professional services to help your business grow.',
    // images: ['/og-image.jpg'],
    creator: '@coolstuffcompany',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <CompanyHero />
    </main>
  );
}
