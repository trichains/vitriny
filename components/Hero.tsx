'use client';

import Image from 'next/image';
import { CustomButton } from '@/components';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title color-hero">
          Encontre, reserve, alugue um carro — de <span className="text-primary-purple">forma rápida e fácil!</span>
        </h1>

        <p className="hero__subtitle subtitle-hero">
          Facilite seu aluguel de carros com nosso processo de reserva simplificado.
        </p>

        <CustomButton
          title="Explore Agora"
          containerStyles="bg-primary-purple text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.webp" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
