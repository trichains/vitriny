import { Footer, Navbar } from '@/components';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </>
  );
}
