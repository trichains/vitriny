'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { SearchManufacturer } from './';
import Image from 'next/image';

const SearchButton = ({ otherClasses }: { otherClasses?: string }) => {
  return (
    <button type="submit" className={`-ml-14 z-10 ${otherClasses}`}>
      <Image src="/magnifying-glass.svg" width={40} height={40} className="object-contain" alt="lupa" />
    </button>
  );
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' || model === '') {
      return alert('Por favor, preencha o fabricante e o modelo.');
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchButton otherClasses={'sm:hidden'} />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.svg"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="modelo do carro"
        />
        <input
          type="text"
          name="model"
          value={model}
          placeholder="Modelo"
          className="searchbar__input"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
