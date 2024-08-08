'use client';

import Image from 'next/image';
import Map from './components/Map';
import Navbar from './components/Navbar';
import {
  Almukhtaariyah,
  BestariUtami,
  AsySyuhada,
  DarulArqam,
  ArRohimah,
  SMPAsySyuhada,
  SMKAsySyuhada,
  SDN1Ngamplangsari,
  SDN2Ngamplangsari,
  MangOno,
  Dodol,
  Kerajinan,
  KerupukKetumbar,
  Pempek,
} from './images/image';
import Link from 'next/link';
import Card from './components/Card';

export default function Home() {
  const listSchool = [
    {
      id: 1,
      name: 'Pondok Pesantren Darul Arqam Muhammadiyah Garut',
      img: DarulArqam,
      classname: 'col-span-2 px-5',
    },
    {
      id: 2,
      name: 'TK - SDS Al-Mukhtaariyah',
      img: Almukhtaariyah,
      classname: '',
    },
    {
      id: 3,
      name: 'PAUD KOBER - TK ASY-SYUHADA',
      img: AsySyuhada,
      classname: 'col-span-3 px-5',
    },
    {
      id: 4,
      name: 'SD - SMP Bestari Utami',
      img: BestariUtami,
      classname: '',
    },
    {
      id: 5,
      name: 'RA Ar-Rohimah',
      img: ArRohimah,
      classname: '',
    },
    {
      id: 6,
      name: 'SMP Plus ASY-SYUHADA',
      img: SMPAsySyuhada,
      classname: '',
    },
    {
      id: 7,
      name: 'SMK Plus ASY-SYUHADA',
      img: SMKAsySyuhada,
      classname: 'col-span-2 px-5',
    },
    {
      id: 8,
      name: 'SDN 1 / 2 / 3 Ngamplangsari',
      img: SDN1Ngamplangsari,
      classname: '',
    },
  ];

  const listUMKM = [
    {
      id: 1,
      name: 'Mang Ono',
      img: MangOno,
      classname: 'col-span-2 px-5',
    },
    {
      id: 2,
      name: 'Dodol',
      img: Dodol,
      classname: '',
    },
    {
      id: 3,
      name: 'Kerajinan Kayu Jati Belanda',
      img: Kerajinan,
      classname: '',
    },
    {
      id: 4,
      name: 'Kerupuk Ketumbar',
      img: KerupukKetumbar,
      classname: 'col-span-2 px-5',
    },
    {
      id: 5,
      name: 'Pempek',
      img: Pempek,
      classname: 'col-span-3 px-5',
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-primary text-black relative items-center">
      <Navbar />
      <Map />
      <div className="w-full container mx-auto relative my-24">
        <div className="w-full h-full rounded-2xl bg-black/30 absolute top-0 left-0 z-10"></div>
        <Image
          src={'/background-image.png'}
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
        <p className="text-justify text-black/70 indent-2 leading-6">
          Desa Ngamplangsari, yang terletak di Kecamatan Cilawu, Kabupaten
          Garut, merupakan sebuah desa yang aktif dan dinamis. Berdasarkan
          laporan penduduk bulan <b>Juni 2024</b>, desa ini memiliki total
          penduduk sebanyak <b>5864 jiwa</b>, yang terdiri dari <b>2987 </b>
          laki-laki dan <b>2873</b> perempuan. Desa Ngamplangsari juga memiliki
          beberapa usaha mikro, kecil, dan menengah ( UMKM ) yang berkontribusi
          pada perekonomian lokal. UMKM tersebut mencakup bidang kuliner Selain
          itu, terdapat beberapa sekolah yang menyediakan fasilitas pendidikan
          bagi anak-anak dan remaja di desa ini, seperti{' '}
          <b>
            {' '}
            TK - SDS Al-Mukhtaariyah, Pondok Pesantren Darul Arqam Muhammadiyah
            Garut, SMP - SMK PLUS ASY-SYUHADA,{' '}
          </b>
          dan lain-lain. Untuk mendukung perekonomian warga, terdapat pula
          beberapa industri rumahan (home industry) yang bergerak di bidang
          Aksesoris dan Alat. Dengan aktivitas dan jumlah penduduk yang cukup
          banyak, Desa Ngamplangsari menunjukkan potensi perkembangan yang baik
          dalam berbagai sektor.
        </p>
      </div>
      <div id="sekolah" className="w-full container mx-auto my-20 space-y-5">
        <h1 className="text-2xl font-semibold text-center">Sekolah</h1>
        <div className="w-full grid grid-cols-3 gap-10" id="sekolah">
          {listSchool.map((item: any, index: number) => (
            <Card
              id={index}
              key={index}
              href={`/sekolah/${item.id}`}
              {...item}
            />
          ))}
        </div>
      </div>
      <div id="umkm" className="w-full container mx-auto my-20 space-y-5">
        <h1 className="text-2xl font-semibold text-center">UMKM</h1>
        <div className="w-full grid grid-cols-3 gap-10" id="umkm">
          {listUMKM.map((item: any, index: number) => (
            <Card id={index} key={index} href={`/umkm/${item.id}`} {...item} />
          ))}
        </div>
      </div>
      <div id="wisata" className="w-full container mx-auto my-20 space-y-5">
        <h1 className="text-2xl font-semibold text-center">Wisata</h1>
        <p className="text-justify text-black/70 indent-2 leading-6">
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
        <p className="text-justify text-black/70 indent-2 leading-6">
          Di Desa ini juga terdapat beberapa Home Industry seperti
          <b> Pengrajin Kayu Jati Belanda, .</b>
        </p>
      </div>
      <Image src={''} alt="bg-image" />
    </main>
  );
}
