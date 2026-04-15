import React, { JSX } from "react";
import Image from "next/image";

export default function ProductCard(): JSX.Element {
  return (
    <div
      className="
        hidden lg:flex
        absolute
        left-[10%] lg:left-[15%] xl:left-[329px]
        top-[50%] lg:top-[55%] xl:top-[624px]
        w-[380px] lg:w-[420px] xl:w-[450px]
        h-[200px] lg:h-[210px] xl:h-[216px]
        bg-[#19171E] rounded-[19px] p-4
        items-center gap-4
        z-30
      "
      aria-hidden
    >
      {/* Left thumbnail box */}
      <div
        className="
          w-[140px] lg:w-[155px] xl:w-[167px]
          h-[170px] lg:h-[182px] xl:h-[192px]
          bg-[#131315] rounded-[19px] border border-[#141416]
          flex items-center justify-center flex-shrink-0
        "
      >
        <Image
          src="/HomePage/herosection/1.png"
          alt="Product thumbnail"
          width={130}
          height={146}
          style={{ width: "auto", height: "auto" }}
          className="object-contain"
          priority
        />
      </div>

      {/* Right content area */}
      <div className="flex flex-col justify-center gap-2 flex-1 min-w-0">
        <div className="flex flex-col gap-2">
          <div className="font-space font-[500] text-[18px] lg:text-[20px] xl:text-[22px] leading-[23px] text-white">
            ZENAURA Premium Earbud
          </div>
          <div className="text-white/70 font-sans text-[13px] lg:text-[14px] leading-[16px]">
            Premium earbud designed to support you all day.
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between w-full gap-2">
          <div className="font-space font-[700] text-[18px] lg:text-[20px] leading-[20px] text-white">
            $250.00
          </div>
          <button
            className="
              flex items-center justify-center
              px-3 lg:px-4 py-2
              bg-white text-[#1B1A1A]
              rounded-full
              text-[13px] lg:text-[14px] font-[600] uppercase
              tracking-[0.04em]
              shadow-sm whitespace-nowrap
            "
            aria-label="Buy now"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}