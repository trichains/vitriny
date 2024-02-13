import './globals.css';
import Head from 'next/head';

import { Footer, Navbar } from '@/components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Vitriny - Aluguel de Carros</title>
        <meta
          name="description"
          content="Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem."
        />
        <meta property="og:image" content="https://i.ibb.co/CnPhpKM/vitriny.png" />
        {/* Adicione outras meta tags necessárias aqui */}
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </>
  );
}
