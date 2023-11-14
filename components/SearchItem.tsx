import React from 'react';
import { SearchVendorProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';

const SearchItem = ({ vendor, searchVendor }: SearchVendorProps) => {
  const [query, setQuery] = useState('');
  const filteredVendors = query === "" ? manufacturers :
    manufacturers.filter((item) => (
      item.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')
        )))

  return (
    <div className="search-vendor">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-14px">
            <Image
              src="car-logo.svg"
              alt="muivooke logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-vendor__input"
            placeholder="vendor"
            displayValue={(vendor: string) => vendor}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            show={query.length > 0}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}>
         
            <Combobox.Options>
            {filteredVendors.length ===0 && query!=="" && (
              <Combobox.Option
                value={query}
                className="search-vendor__option"
                >
                  create="{query}"
              </Combobox.Option>
            )
          
          }
            
            

            </Combobox.Options>
          </Transition>
        </div>

      </Combobox>

    </div>
  );
};

export default SearchItem;
