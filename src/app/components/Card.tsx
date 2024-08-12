import Image from 'next/image';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { type CldImageProps } from 'next-cloudinary';

const CardImage = (props: CldImageProps) => <CldImage {...props} />;

interface CardProps {
  // href: string;
  name: string;
  img: string;
  classname: string;
  id: number;
  quality?: number;
  imgClassName?: string;
  // onclick?: () => void;
}

export default function Card({
  // href,
  name,
  img,
  classname,
  id,
  quality = 50,
  // onclick,
  imgClassName,
}: CardProps) {
  return (
    <div
      // href={href}
      key={id}
      className={`w-full flex flex-col border border-black gap-5 items-center min-h-60 cursor-pointer font-semibold rounded-2xl px-10 py-5 group hover:border-none hover:shadow-md transition-all duration-200 ease-in-out ${classname}`}
      // onClick={onclick}
    >
      <CardImage
        src={img}
        alt="background"
        width={1000}
        height={1000}
        quality={quality}
        loading="lazy"
        className={`w-full h-[200px] max-h-full min-w-[350px] object-cover rounded-2xl group-hover:scale-100 scale-95 transition-all duration-200 ease-in-out ${imgClassName}`}
      />
      <h1 className="text-lg text-center">{name}</h1>
    </div>
  );
}
