import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import JsonLd from '../components/layout/JsonLd';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://geoaicon.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'GeoAICon Brand Portal | Advancing Geospatial AI',
    template: '%s | GeoAICon'
  },
  description: 'The central brand hub for GeoAICon. Uniting academic minds, government leaders, and industry pioneers to build scalable geospatial AI solutions for global impact.',
  keywords: ['GeoAI', 'Geospatial AI', 'Conference', 'GIS', 'Artificial Intelligence', 'Machine Learning', 'Spatial Data Science', 'Earth Observation'],
  authors: [{ name: 'GeoAICon Team' }],
  creator: 'GeoAICon',
  publisher: 'GeoAICon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'GeoAICon Brand Portal',
    title: 'GeoAICon | Advancing Geospatial AI for Global Impact',
    description: 'The central hub for the GeoAICon conference series, connecting the global geospatial AI community.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GeoAICon Brand Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeoAICon | Advancing Geospatial AI',
    description: 'The central brand hub for GeoAICon conference series and geospatial AI ecosystem.',
    images: ['/og-image.png'],
    creator: '@GeoAICon',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="geoaicon-light">
      <body className="flex flex-col min-h-screen bg-base-100 text-base-content antialiased">
        <JsonLd />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
