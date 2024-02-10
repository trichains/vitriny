import { Hero } from '@/components';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="bg-black">
        <Hero />
      </div>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogo de carros</h1>
          <p>Descubra alguns dos carros que você pode gostar</p>
        </div>
      </div>
    </main>
  );
}
