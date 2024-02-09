import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components';

export const metadata: Metadata = {
  title: 'Vitriny',
  description: 'Descubra os melhores carros do mundo.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
