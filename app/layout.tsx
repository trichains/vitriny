import './globals.css';
import { Footer, Navbar } from '@/components';
import { Helmet } from 'react-helmet';

export const metadata = {
  title: 'Vitriny - Aluguel de Carros',
  description: 'Encontre os melhores carros para alugar e tenha a experiência perfeita em sua viagem.',
  imageUrl: 'https://i.ibb.co/CnPhpKM/vitriny.png'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Helmet>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
        <meta property="og:image:alt" content={metadata.title} />
        <meta property="og:type" content="website" />
      </Helmet>

      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </>
  );
}
