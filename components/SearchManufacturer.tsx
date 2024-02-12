'use client';

import Image from 'next/image';
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';
import React from 'react';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="Carro Logo" />
          </Combobox.Button>

          {/* Campo de entrada para pesquisa */}
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen..."
            displayValue={(item: string) => item}
            onChange={(e) => setQuery(e.target.value)} // Atualiza a consulta de pesquisa quando a entrada for alterada
          />

          {/* Transição para exibir as opções de pesquisa */}
          <Transition
            as={Fragment} // agrupar vários elementos sem introduzir um DOM node, ou seja, <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')} // Limpa a consulta de pesquisa quando a transição terminar
          >
            <Combobox.Options
              className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static>
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option value={query} className="search-manufacturer__option">
                  Adicionar "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? 'bg-primary-purple text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}>
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item}</span>

                        {/* Mostra uma cor de fundo roxa quando a opção estiver selecionada */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-primary-purple'
                            }`}></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
