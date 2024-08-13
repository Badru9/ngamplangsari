'use client';

import Image from 'next/image';
import Link from 'next/link';
import { List } from '@phosphor-icons/react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const listMenu = [
    { name: 'Sekolah', href: '#sekolah' },
    { name: 'UMKM', href: '#umkm' },
    { name: 'Wisata', href: '#wisata' },
    // { name: 'Home Industry', href: '#home-industry' },
  ];

  return (
    <nav className="w-full h-fit py-3 flex justify-between fixed top-0 bg-white z-50 shadow-sm">
      <div className="w-full flex justify-between container mx-auto">
        <Link
          href={'/'}
          className="ml-4 lg:ml-0 flex gap-5 items-center cursor-pointer"
        >
          <Image
            src={'/logo-garut.svg'}
            alt="logo"
            width={1000}
            height={1000}
            className="h-fit w-10"
          />
          <h1 className="text-lg font-semibold">Desa Ngamplangsari</h1>
        </Link>
        <div>
          <ul className="gap-5 items-center h-full hidden lg:flex">
            {listMenu.map((item: any, index: number) => (
              <Link
                href={item.href}
                key={index}
                className="cursor-pointer hover:opacity-100 opacity-60 font-medium px-2"
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <ul className="flex gap-5 items-center h-full lg:hidden relative">
            <List
              size={24}
              onClick={() => setOpen(!open)}
              className="mr-4 cursor-pointer"
            />
            {open && (
              <div className="flex flex-col absolute top-10 right-5 bg-white shadow-md px-5 py-2 gap-3 rounded-md">
                {listMenu.map((item: any, index: number) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="cursor-pointer hover:opacity-100 opacity-60 font-medium px-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
