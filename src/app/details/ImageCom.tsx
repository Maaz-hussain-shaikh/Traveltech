"use client";

import Image from "next/image";

type ImageProps = {
  imgurl_1: string 
  imgurl_2: string
  imgurl_3: string 
  imgurl_4: string
};


export default function ImageCom({ imgurl_1,imgurl_2,imgurl_3,imgurl_4 }: ImageProps) {
  

  return (
    <>
     <section className="  p-4 w-full mx-auto">
  {/* Desktop Layout */}
  <div className="hidden sm:block relative w-full aspect-[2.3/1] ">
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 ">
      {/* Main Image (60% width) */}
      <div className="relative row-span-3 col-span-2 h-full ">
        <Image
          src={`${imgurl_2}?w=1200&h=800&q=80&fit=crop`}
          alt="Main Image"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Side Images Grid */}
      <div className="relative row-span-1 col-span-1">
        <Image
          src={`${imgurl_1}?w=600&h=400&q=80&fit=crop`}
          alt="Image 1"
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="relative row-span-1 col-span-1">
        <Image
          src={`${imgurl_3}?w=600&h=400&q=80&fit=crop`}
          alt="Image 3"
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover rounded-xl"
        />
      </div>

      <div className="relative row-span-1 col-span-1">
        <Image
          src={`${imgurl_4}?w=600&h=400&q=80&fit=crop`}
          alt="Image 4"
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  </div>

  {/* Mobile Layout */}
  <div className="sm:hidden relative w-full aspect-square">
    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
      <div className="relative col-span-2">
        <Image
          src={`${imgurl_1}?w=800&h=600&q=80&fit=crop`}
          alt="Mobile Main"
          fill
          sizes="100vw"
          className="object-cover rounded-lg"
          priority
        />
      </div>
      
      <div className="relative">
        <Image
          src={`${imgurl_3}?w=400&h=300&q=80&fit=crop`}
          alt="Mobile Thumb 1"
          fill
          sizes="50vw"
          className="object-cover rounded-lg"
        />
      </div>
      
      <div className="relative">
        <Image
          src={`${imgurl_4}?w=400&h=300&q=80&fit=crop`}
          alt="Mobile Thumb 2"
          fill
          sizes="50vw"
          className="object-cover  rounded-lg"
        />
      </div>
    </div>
  </div>
</section>
    </>
  );
}
