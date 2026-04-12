import React, { JSX } from "react";
import Image from "next/image";

export default function AboutSection(): JSX.Element {
  return (
    <section
      className="
        relative
        w-full
        min-h-[967px]
        overflow-hidden
        bg-[radial-gradient(45.78%_100%_at_50%_0%,#111014_0%,#0D0D0D_100%)]
      "
      aria-labelledby="about-title"
    >
      {/* Decorative left blurred ellipse
          left: calc(50% - 280px/2 - 522px)  => left-[calc(50%_-_662px)]
      */}
      <div
        aria-hidden
        className="
          absolute
          left-[calc(50%_-_662px)]
          top-[250px]
          w-[280px]
          h-[220px]
          rounded-full
          bg-[rgba(170,106,255,0.37)]
          blur-[200px]
          pointer-events-none
        "
      />

      {/* Decorative right tall blur (Ellipse 3) */}
      <div
        aria-hidden
        className="
          absolute
          left-[1323px]
          top-[191px]
          w-[353.4px]
          h-[848.12px]
          rounded-full
          bg-[rgba(170,106,255,0.17)]
          blur-[175px]
          -scale-x-100
          pointer-events-none
        "
      />

      {/* Left visual mask / artwork column */}
      <div className="absolute left-[154px] top-0 w-[645px] h-[967px] overflow-hidden">
        {/* blurred background image (mirrored) */}
        <div className="relative w-full h-full ">
          <Image
            src="/AboutSection/about-left.png"
            alt="product showcase"
            fill
            priority
          />
        </div>

      </div>

      {/* Right content column */}
      <div className="absolute left-[848px] top-[200px] max-w-[856px]">
        {/* Heading (gradient text) */}
        <h3
          id="about-title"
          className="
            font-montserrat
            font-semibold
            text-[64px]
            leading-[120px]
            bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)]
          "
        >
          About the product
        </h3>

        {/* Body paragraph */}
        <p className="mt-8 text-[40px] leading-[54px] font-montserrat font-medium text-white max-w-[856px]">
          A stylish lifestyle accessory that effortlessly combines comfort with elegance. You can wear them
          anywhere and at any time, making them a versatile addition to your wardrobe.
        </p>

        {/* CTA group */}
        <div className="mt-10">
          <a
            href="#"
            className="
              inline-flex
              items-center
              justify-center
              w-[234px]
              h-[64px]
              rounded-[40px]
              bg-[#845CF2]
              text-white
              font-poppins
              font-semibold
              text-[20px]
              leading-[30px]
              no-underline
              shadow-md
              hover:brightness-105
              transition
            "
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}