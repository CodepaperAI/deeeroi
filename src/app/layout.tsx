import type { Metadata } from 'next';
import { fontDisplay, fontBody } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Deeroi Constructions | Construction Company in Brampton, Ontario',
    template: '%s | Deeroi Constructions',
  },
  description:
    'Deeroi Constructions is a Brampton construction company serving Ontario with commercial build-outs, restaurant renovations, custom homes, kitchens, and bathrooms.',
  metadataBase: new URL('https://www.deeroiconstructions.com'),
  keywords: [
    'construction company Brampton',
    'commercial construction Ontario',
    'restaurant build-outs GTA',
    'residential construction Brampton',
    'kitchen renovations Ontario',
    'bathroom renovations GTA',
  ],
  openGraph: {
    title: 'Deeroi Constructions | Brampton Construction Company',
    description:
      'Commercial and residential construction across Brampton, the GTA, and Ontario.',
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
