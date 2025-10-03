import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { CompanyFooter } from '../components/company-footer';
import { SiteHeader } from '../components/sitewide-header';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vercel Academy Foundation - Web',
  description: 'VAF Web',
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container mx-auto px-4 py-8 ${roboto.className}`}>
        <SiteHeader />
        {children}
        <CompanyFooter />
      </body>
    </html>
  );
}
