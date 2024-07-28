"use client";

import Image from "next/image";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-primary text-black relative items-center">
      <Navbar />
      <Map />
      <div className="w-full container mx-auto relative my-24">
        <div className="w-full h-full rounded-2xl bg-black/30 absolute top-0 left-0 z-10"></div>
        <Image
          src={"/background-image.png"}
          alt="background"
          width={1000}
          height={1000}
          quality={100}
          className="w-full rounded-2xl"
        />
      </div>
      <div className="w-full container mx-auto my-20 space-y-5">
        <h1 className="text-2xl font-semibold text-center">
          Tentang Desa Ngamplangsari
        </h1>
        <p className="text-justify text-black/70 indent-2">
          Merupakan desa di Kecamatan Cilawu, Kabupaten Garut, Jawa Barat,
          Indonesia. Desa ini dikenal sebagai desa penghasil Kuliner,
          diantaranya adalah{" "}
          <b>Baso Tahu M. Uken, Bakso Ciwang Mang Ono, Dodol ... , .</b>
        </p>
        <p className="text-justify text-black/70 indent-2">
          Di Desa ini juga terdapat beberapa Home Industry seperti
          <b> Pengrajin Kayu Jati Belanda, .</b>
        </p>
      </div>
      <div id="sekolah" className="w-full container mx-auto my-20 space-y-5">
        <h1 className="text-2xl font-semibold text-center">Sekolah</h1>
        <p className="text-justify text-black/70 indent-2">
          Ada beberapa sekolah di Desa Ngamplangsari, diantaranya adalah{" "}
          <b>
            Pondok Pesantren Darul Arqam Muhammadiyah Garut, SMK PLUS
            ASY-SYUHADA
          </b>
        </p>
      </div>
      <div id="umkm" className="w-full container mx-auto my-20 space-y-5">
        <h1 className="text-2xl font-semibold text-center">UMKM</h1>
        <p className="text-justify text-black/70 indent-2">
          Desa Ngamplangsari memiliki UMKM yang menarik diantaranya adalah{" "}
          <b>Pengrajin Kayu Jati Belanda, .</b>
        </p>
      </div>
      <div id="wisata" className="w-full container mx-auto my-20 space-y-5">
        <h1 className="text-2xl font-semibold text-center">Wisata</h1>
        <p className="text-justify text-black/70 indent-2">
          Wisata yang berada di Desa Ngamplangsari merupakan wisata yang jarang
          diketahui keberadaannya oleh banyak orang. Wisata tersebut adalah
          <b>Talangseng.</b>
        </p>
      </div>
      <div
        id="home-industry"
        className="w-full container mx-auto my-20 space-y-5"
      >
        <h1 className="text-2xl font-semibold text-center">Home Industry</h1>
        <p className="text-justify text-black/70 indent-2">
          Di Desa ini juga terdapat beberapa Home Industry seperti
          <b> Pengrajin Kayu Jati Belanda, .</b>
        </p>
      </div>
    </main>
  );
}
