import type { Metadata } from 'next';
import Head from 'next/head';
import { Footer, Navbar } from '@/components';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vitriny - Aluguel de Carros',
  description: 'Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem.',
  openGraph: {
    title: 'Vitriny - Aluguel de Carros',
    description: 'Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem.',
    url: 'https://vitriny.vercel.app/',
    siteName: 'Vitriny - Aluguel de Carros',
    images: [
      {
        url: 'https://i.ibb.co/CnPhpKM/vitriny.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'pt-BR',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Vitriny - Aluguel de Carros</title>
        <meta property="og:title" content="Vitriny - Aluguel de Carros" />
        <meta
          name="description"
          content="Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem."
        />
        <meta
          property="og:description"
          content="Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem."
        />
        <meta property="og:url" content="https://vitriny.vercel.app/" />
        <meta property="og:image" content="https://i.ibb.co/CnPhpKM/vitriny.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </>
  );
}
