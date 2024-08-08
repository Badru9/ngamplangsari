import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  href: string;
  name: string;
  img: string;
  classname: string;
  id: number;
  onclick?: () => void;
}

export default function Card({
  href,
  name,
  img,
  classname,
  id,
  onclick,
}: CardProps) {
  return (
    <Link
      href={href}
      key={id}
      className={`w-full flex flex-col border-2 gap-5 items-center min-h-60 cursor-pointer font-semibold rounded-2xl px-10 py-5 group ${classname}`}
      onClick={onclick}
    >
      <Image
        src={img}
        alt="background"
        width={1000}
        height={1000}
        quality={100}
        loading="lazy"
        className="w-full h-full max-h-[200px] min-w-[350px] object-cover rounded-2xl group-hover:scale-100 scale-95 transition-all duration-200 ease-in-out"
      />
      <h1 className="text-lg text-center">{name}</h1>
    </Link>
  );
}
