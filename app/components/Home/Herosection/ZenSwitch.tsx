import React, { JSX } from "react";

export default function ZenSwitch(): JSX.Element {
  return (
    <div
      className="
        absolute left-0 right-0 w-full overflow-hidden
        top-[380px] sm:top-[500px] md:top-[650px] lg:top-[871px]
        z-0
        pointer-events-none
      "
    >
      <h2
        aria-hidden
        className="
          w-full
          text-center
          font-montserrat font-[700] uppercase select-none pointer-events-none
          tracking-[-0.03em]
          bg-[linear-gradient(360deg,#151515_28.9%,#E1CBFF_83.82%)]
          bg-clip-text text-transparent
          opacity-[0.33]
          leading-[1.1]
          whitespace-nowrap
        "
        style={{
          fontSize: "clamp(40px, 18vw, 320px)",
        }}
      >
        ZEN SWITCH
      </h2>
    </div>
  );
}