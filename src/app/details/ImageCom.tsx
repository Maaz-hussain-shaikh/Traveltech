"use client";

import Image from "next/image";

type ImageProps = {
  src: { imgurl1: string ,imgurl2: string,imgurl3: string ,imgurl4: string}[];
};

export default function ImageCom({ src }: ImageProps) {
  

  return (
    <>
      <section className="max-w-screen-xl px-2 w-full mx-auto sm:h-144 sm:block hidden">
        <section className="relative w-full h-full shadow-md z-20">
          <div className="grid grid-cols-4 grid-rows-3 gap-1 sm:rounded-lg overflow-hidden w-full h-full">
            <div className="w-full h-full row-span-1 col-span-1">
              <Image
                src={src[0].imgurl1}
                alt="Image 1"
                width={300}
                height={200}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
            <div className="w-full h-full row-span-3 col-span-3">
              <Image
                src={src[0].imgurl2}
                alt="Image 2"
                width={900}
                height={600}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1">
              <Image
                src={src[0].imgurl3}
                alt="Image 3"
                width={300}
                height={200}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1">
              <Image
                src={src[0].imgurl4}
                alt="Image 4"
                width={300}
                height={200}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </section>
      </section>
      <section className="max-w-screen-xl w-full mx-auto h-96 sm:h-120 sm:hidden">
        <section className="relative w-full h-full shadow-md">
          <div className="grid grid-cols-2 grid-rows-2 gap-1 sm:rounded-lg overflow-hidden w-full h-full">
            <div className="w-full h-full row-span-1 col-span-2">
              <Image
                src={src[0].imgurl4}
                alt="Image 1"
                width={600}
                height={400}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1">
              <Image
                src={src[0].imgurl4}
                alt="Image 2"
                width={300}
                height={200}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1">
              <Image
                src={src[0].imgurl4}
                alt="Image 3"
                width={300}
                height={200}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
