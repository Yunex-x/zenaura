import React, { JSX } from "react";
import Image from "next/image";

export default function ImageShowcase(): JSX.Element {
  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2
        top-[180px] sm:top-[240px] md:top-[300px] lg:top-[344px]
        w-[92%] max-w-[1157px]
        h-[350px] sm:h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1054px]
        z-20
      "
    >
      <div className="relative w-full h-full">
        <Image
          src="/herosection/heroimg.svg"
          alt="Hero image"
          fill
          className="object-cover"
          sizes="(min-width:1157px) 1157px, 92vw"
          priority
        />
      </div>
    </div>
  );
}