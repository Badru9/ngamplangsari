'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const listMenu = [
    { name: 'Sekolah', href: '#sekolah' },
    { name: 'UMKM', href: '#umkm' },
    { name: 'Wisata', href: '#wisata' },
    { name: 'Home Industry', href: '#home-industry' },
  ];

  return (
    <nav className="w-full h-fit py-3 flex justify-between fixed top-0 bg-white z-50 shadow-sm">
      <div className="w-full flex justify-between container mx-auto">
        <Link href={'/'} className="flex gap-5 items-center cursor-pointer">
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
          <ul className="flex gap-5 items-center h-full">
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
        </div>
      </div>
    </nav>
  );
}
