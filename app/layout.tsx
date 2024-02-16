import { Footer, Navbar } from '@/components';
import Head from 'next/head';

import './globals.css';

export const metadata = {
  title: 'Vitriny - Aluguel de Carros',
  description: 'Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem.',
  url: 'https://vitriny.vercel.app/',
  openGraph: {
    title: 'Vitriny - Aluguel de Carros',
    description: 'Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem.',
    siteName: 'Vitriny - Aluguel de Carros',
    images: [
      {
        url: 'https://i.ibb.co/CnPhpKM/vitriny.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'pt-BR',
    type: 'website',
    url: 'https://vitriny.vercel.app/'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Adicione outras metatags conforme necessário */}
      </Head>
      <div className="relative">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
