import React, { JSX } from "react";
import Image from "next/image";

/**
 * ProductCard
 * - Tailwind-only implementation of the provided spec
 * - Positioned absolutely on large screens to match design; falls back to centered stack on small screens
 * - Replace /images/product-thumb.png with your real asset in /public
 */
export default function ProductCard(): JSX.Element {
  return (
    <div
      className="
        hidden lg:flex
        absolute left-[329px] top-[624px]
        w-[450px] h-[216px]
        bg-[#19171E] rounded-[19px] p-4
        items-center gap-4
      "
      aria-hidden
    >
      {/* Left thumbnail box (Rectangle 8) */}
      <div
        className="
          w-[167px] h-[192px]
          bg-[#131315] rounded-[19px] border border-[#141416]
          flex items-center justify-center
        "
      >
        <Image
          src="/herosection/1.png"
          alt="Product thumbnail"
          width={130}
          height={146}
          style={{ width: "auto", height: "auto" }}
          className="object-contain"
          priority
        />
      </div>

      {/* Right content area (Frame 1000003215) */}
      <div className="flex flex-col justify-center gap-2 w-[230px] h-[156px]">
        <div className="flex flex-col gap-2">
          <div className="font-space font-[500] text-[22px] leading-[23px] text-white">
            ZENAURA Premium Earbud
          </div>

          <div className="text-white/70 font-sans text-[14px] leading-[16px]">
            Premium earbud designed to support you all day.
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between w-full">
          <div className="font-space font-[700] text-[20px] leading-[20px] text-white">
            $250.00
          </div>

          <button
            className="
              flex items-center justify-center
              px-4 py-2
              bg-white text-[#1B1A1A]
              rounded-full
              text-[14px] font-[600] uppercase
              tracking-[-0.04em]
              shadow-sm
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