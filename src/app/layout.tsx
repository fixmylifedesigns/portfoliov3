import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Irving Duran | Software Engineer & Creative Technologist',
  description:
    'The portfolio of Irving Duran – software engineer, designer, and creative technologist. Explore innovative projects, technical skills, and unique ideas.',
  keywords: [
    'Irving Duran',
    'software engineer',
    'web developer',
    'portfolio',
    'creative technologist',
    'React developer',
    'Next.js developer',
    'frontend engineer',
  ],
  authors: [{ name: 'Irving Duran' }],
  creator: 'Irving Duran',
  metadataBase: new URL('https://irvingduran.dev'), // ← replace with your real domain
  openGraph: {
    title: 'Irving Duran | Software Engineer & Creative Technologist',
    description:
      'Explore the creative and technical works of Irving Duran — software engineer and designer.',
    url: 'https://irvingduran.dev', // ← replace
    siteName: 'Irving Duran Portfolio',
    images: [
      {
        url: '/og-image.png', // optional: add this in public/
        width: 1200,
        height: 630,
        alt: 'Irving Duran Portfolio Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irving Duran | Software Engineer & Creative Technologist',
    description:
      'Explore the creative and technical works of Irving Duran — software engineer and designer.',
    images: ['/og-image.png'], // optional: same as above
    creator: '@yourTwitterHandle', // optional
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
