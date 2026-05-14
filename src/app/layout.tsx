import type { Metadata } from 'next';
import { fontDisplay, fontBody } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Deeroi Constructions — Commercial & Residential Construction',
    template: '%s | Deeroi Constructions',
  },
  description: 'Full-service construction and renovation company in Brampton, Ontario. Trusted by Walmart, Tim Hortons, Five Guys, and more. Commercial build-outs, residential renovations, custom homes.',
  metadataBase: new URL('https://www.deeroiconstructions.com'),
  keywords: ['construction company Brampton', 'commercial renovation Ontario', 'residential construction GTA', 'restaurant build-out', 'office renovation'],
  openGraph: {
    title: 'Deeroi Constructions',
    description: 'Building Your Dreams Into Reality. Trusted by national brands since 2018.',
    url: 'https://www.deeroiconstructions.com',
    siteName: 'Deeroi Constructions',
    type: 'website',
    locale: 'en_CA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
