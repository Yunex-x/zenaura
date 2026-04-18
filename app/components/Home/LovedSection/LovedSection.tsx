import React, { JSX } from "react";
import LovedCarousel from "./LovedCarousel";

export default function LovedSection(): JSX.Element {
  return (
    <section className="relative w-screen max-w-full bg-[#0D0D0D] overflow-hidden py-10 sm:py-14 md:py-16 lg:py-[80px]">
      {/* Soft purple blur */}
      <div
        aria-hidden
        className="absolute left-[-10%] top-[30%] w-[300px] sm:w-[350px] md:w-[404px] h-[600px] sm:h-[800px] md:h-[1224px] rounded-full filter blur-[250px] sm:blur-[350px] pointer-events-none"
        style={{ background: "rgba(170,106,255,0.17)" }}
      />

      {/* Title */}
      <div className="w-full text-center mb-40 px-4">
        <h2
          className="font-montserrat font-[700] text-white bg-clip-text"
          style={{
            fontSize: "clamp(28px, 5vw, 64px)",
            lineHeight: "1.5",
          }}
        >
          Most Loved Earplugs
        </h2>
      </div>

      {/* Carousel — full width */}
      <div className="w-full">
        <LovedCarousel />
      </div>
    </section>
  );
}