'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, drive, make, model, transmission, year } = car;

  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">R$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/dia</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateCarImageUrl(car)} fill priority className="object-contain" alt="modelo do carro" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="volante" />
            <p className="text-[14px]">{transmission === 'a' ? 'Automático' : 'Manual'}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="pneu" />
            <p className="text-[14px]">
              {drive.toUpperCase() === 'FWD'
                ? 'Tração Dianteira'
                : drive.toUpperCase() === 'RWD'
                ? 'Tração Traseira'
                : drive.toUpperCase() === 'AWD'
                ? 'Tração Integral'
                : 'Tração 4x4'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="combustível" />
            <p className="text-[14px]">{city_mpg} km/L</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Veja mais"
            containerStyles="w-full py-[16px] rounded-full bg-primary-purple"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
