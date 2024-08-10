'use client';

import Link from 'next/link';
import { MapPinArea } from '@phosphor-icons/react';
import { useState } from 'react';

export default function Map() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Link
      href="https://www.google.com/maps/place/Kantor+Desa+Ngamplang+Sari/@-7.244311,107.9074727,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68b1d51c1fac97:0x846a2d0618955d51!8m2!3d-7.244311!4d107.9074727!16s%2Fg%2F11cnd9mrgg?entry=ttu"
      target="_blank"
    >
      <div className="rounded-full hover:shadow-md transition-all duration-200 fixed bottom-10 right-10 border border-black hover:border-none bg-white">
        <MapPinArea
          weight="bold"
          size={24}
          width={1000}
          height={1000}
          className="w-12 h-12 p-2"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        />
      </div>
      {!show && (
        <p className="fixed bottom-11 border-black border right-[100px] whitespace-nowrap cursor-default bg-white px-4 py-2 rounded-2xl z-50">
          Lihat di Maps
        </p>
      )}
    </Link>
  );
}
