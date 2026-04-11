import React, { JSX } from "react";

/**
 * ZenSwitch
 * - Large background word "ZEN SWITCH" placed behind the hero image.
 * - Tailwind-only styling, low z-index (z-0) so it's behind ImageShowcase (which uses a higher z).
 */
export default function ZenSwitch(): JSX.Element {
  return (
    <h2
      aria-hidden
      className="
        absolute left-1/2 -translate-x-1/2 top-[871px]
        w-[2060px] max-w-[2060px] h-[390px]
        text-center
        font-montserrat font-[700] uppercase select-none pointer-events-none
        tracking-[-0.03em]
        bg-[linear-gradient(360deg,#151515_28.9%,#E1CBFF_83.82%)]
        bg-clip-text text-transparent
        opacity-[0.33]
        z-0
        text-[100px] sm:text-[160px] md:text-[320px]
        leading-[120px] sm:leading-[200px] md:leading-[390px]
      "
    >
      ZEN SWITCH
    </h2>
  );
}