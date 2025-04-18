'use client';

import { useState } from 'react';
import { ChevronDown, WifiHigh } from 'lucide-react';

type DropdownItem = {
  label: string;
  items: string[];
};

export default function MultipleDropdowns() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdowns: DropdownItem[] = [
    
    /* First dropDownMenuAndListItems */
    {
      label: 'Listings Categories',
      items: [
        'Agriculture & Animals',
        'Arts & Sport',
        'Baby & Technical Equipment',
        'Commercial & Technical Equipment',
      ],
    },

    /* second dropDownMenuAndListItems */
    {
      label: 'Quick Links',
      items: ['About', 'Blog', 'Privacy Policy', 'Refund and Return Policy'],
    },

    /* Third dropDownMenuAndListItems */
    {
      label: 'Customer Care',
      items: ['My Account', 'Track Your Order', 'Dashboard', 'Cart'],
    },
  ];

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className=" p-7 bg-gray-200">
      {dropdowns.map((dropdown, index) => (
        <div key={index} className="relative mb-4">
          <button
            onClick={() => toggleDropdown(dropdown.label)}
            className="w-full border rounded-2xl p-2 bg-white font-medium text-gray-900"
          >
            {dropdown.label} <ChevronDown className="inline-flex ml-2" />
          </button>

          {openDropdown === dropdown.label && (
            <div className="absolute w-full bg-white z-10 shadow-lg rounded">
              {dropdown.items.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-m text-blue-600"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
      <WifiHigh className='rotate-40 text-red-500 h-7 w-7 ml-33'/>
    </div>
  );
}
