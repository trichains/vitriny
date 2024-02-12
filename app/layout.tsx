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
    <>
      <Head>
        <meta property="og:image" content={metadata.image} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </>
  );
}
