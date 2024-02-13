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
        <meta property="og:title" content="Vitriny" />
        <meta
          property="og:description"
          content="Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem."
        />
        <meta property="og:image" content="https://i.ibb.co/CnPhpKM/vitriny.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vitriny.vercel.app" />
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </>
  );
}
