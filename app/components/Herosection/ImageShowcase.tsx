import React, { JSX } from "react";
import Image from "next/image";

/**
 * ImageShowcase
 * - Hero image container now has a higher z-index (z-20) so it sits above ZenSwitch.
 * - Removed decorative dots as requested.
 */
export default function ImageShowcase(): JSX.Element {
  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 top-[344px]
        w-[90%] max-w-[1157px] h-[1054px]
        z-20
      "
    >
      <div className="relative w-full h-full">
        <Image
          src="/herosection/heroimg.svg"
          alt="Hero image (replace)"
          fill
          className="object-cover"
          sizes="(min-width:1157px) 1157px, 90vw"
          priority
        />
      </div>
    </div>
  );
}