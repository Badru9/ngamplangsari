"use client";

import Link from "next/link";
import { MapPinArea } from "@phosphor-icons/react";
import { useState } from "react";

export default function Map() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Link href="https://maps.app.goo.gl/2y6Jv2o3qnPQxjta9" target="_blank">
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
        <p className="fixed bottom-[54px] right-[100px] whitespace-nowrap cursor-default">
          Lihat di Maps
        </p>
      )}
    </Link>
  );
}
