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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={(metadata.title as string) ?? 'teste'} />
        <meta name="description" content={(metadata.description as string) ?? 'teste desc'} />
        <meta name="keywords" content="Vitriny, Aluguel de Carros, Viagem" />
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </>
  );
}
