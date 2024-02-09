import { Hero } from '@/components';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="bg-hero">
        <Hero />
      </div>
    </main>
  );
}
