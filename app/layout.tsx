import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'GeoAICon Brand Portal',
  description: 'The central brand hub for GeoAICon showcasing past editions, upcoming events, intersession, and ecosystem.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="geoaicon-light">
      <body className="flex flex-col min-h-screen bg-base-100 text-base-content antialiased">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
