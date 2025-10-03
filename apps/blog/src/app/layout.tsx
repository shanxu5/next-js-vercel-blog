import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Vercel Academy Foundation - Blog',
  description: 'VAF Blog',
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
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
