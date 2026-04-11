import React, { JSX } from "react";
import HeroCarousel from "./HeroCarousel";

/**
 * PopulairSection - page hero wrapper with decorative background and the dynamic carousel.
 * - This component is a server component but includes the client HeroCarousel.
 * - It provides a centered container and background vignette similar to Image 2.
 */
export default function PopulairSection(): JSX.Element {
  return (
    <section className="relative w-full bg-[#0D0D0D] overflow-hidden">
      {/* Left subtle purple vignette */}
      <div
        aria-hidden
        className="absolute left-0 top-0 w-[55%] h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(137,87,238,0.18) 0%, rgba(13,13,13,0) 45%)",
          mixBlendMode: "normal",
        }}
      />

      {/* Large soft purple blur on the right */}
      <div
        aria-hidden
        className="absolute right-[-8%] top-[18%] w-[38%] h-[80%] rounded-full filter blur-[140px] pointer-events-none"
        style={{ background: "rgba(130,80,242,0.18)" }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 py-[80px]">
        {/* Carousel (handles slides and product visuals) */}
        <HeroCarousel />
      </div>
    </section>
  );
}