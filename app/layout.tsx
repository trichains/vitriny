import './globals.css';

import Head from 'next/head';

import { Footer, Navbar } from '@/components';

export const metadata = {
  title: 'Vitriny - Aluguel de Carros',
  description: 'Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem.',
  image: 'https://i.ibb.co/CnPhpKM/vitriny.png'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
