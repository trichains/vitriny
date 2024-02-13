// app/layout.tsx

import { ReactNode } from 'react';
import Head from 'next/head';
import { Footer, Navbar } from '@/components';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Vitriny - Aluguel de Carros',
  description: 'Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem.',
  image: 'https://i.ibb.co/CnPhpKM/vitriny.png'
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </>
  );
}
