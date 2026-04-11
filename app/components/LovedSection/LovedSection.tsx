import React, { JSX } from "react";
import LovedCarousel from "./LovedCarousel";

/**
 * LovedSection wrapper — title + decorative background + carousel
 */
export default function LovedSection(): JSX.Element {
  return (
    <section className="relative w-full bg-[#0D0D0D] overflow-hidden py-[80px]">
      {/* right soft purple blur */}
      <div
        aria-hidden
        className="absolute right-[1112.5px] top-[401.67px] w-[404.23px] h-[1224.14px] rounded-full filter blur-[350px] pointer-events-none"
        style={{ background: "rgba(170,106,255,0.17)" }}
      />

      <div className="max-w-[1200px] mx-auto text-center mb-10">
        <h2
          className="font-montserrat font-[700] text-[64px] leading-[120px] text-white bg-clip-text"
         
        >
          Most Loved Earplugs
        </h2>
      </div>

      <div className="max-w-[1520px] mx-auto">
        <LovedCarousel />
      </div>
    </section>
  );
}