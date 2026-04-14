import React, { JSX } from "react";
import Image from "next/image";

export default function AboutSection(): JSX.Element {
  return (
    <section
      aria-labelledby="about-title"
      className="w-full overflow-x-auto bg-[#0D0D0D]"
    >
      <div
        className="
          relative mx-auto overflow-hidden
          w-[1920px] h-[967px]
          bg-[radial-gradient(45.78%_100%_at_50%_0%,#111014_0%,#0D0D0D_100%)]
        "
      >
        {/* Left glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            w-[280px] h-[220px]
            left-[538px] top-[250px]
            rounded-full
            bg-[rgba(170,106,255,0.37)]
            blur-[200px]
            pointer-events-none
          "
        />

        {/* Right glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            w-[353.4px] h-[848.12px]
            left-[1323px] top-[191px]
            rounded-full
            bg-[rgba(170,106,255,0.17)]
            blur-[175px]
            pointer-events-none
            [transform:rotate(78deg)_skewX(-12deg)]
            origin-center
          "
        />

        {/* Left product image block */}
        <div className="absolute left-[154px] top-0 w-[645px] h-[967px]">
          {/* blurred back image */}
          <Image
            src="/HomePage/AboutSection/about-left.png"
            alt=""
            fill
            priority
            className="object-cover  blur-[20px]"
            sizes="645px"
          />

          {/* front image / mask feel */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/HomePage/AboutSection/about-left.png"
              alt="product showcase"
              fill
              priority
              className="object-cover "
              sizes="645px"
            />
          </div>

          {/* gradient mask overlay */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-[linear-gradient(180deg,rgba(217,217,217,0)_46.9%,rgba(115,115,115,0)_93.12%)]
              pointer-events-none
            "
          />

          {/* optional soft fade like figma mask group */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.02)_55%,rgba(0,0,0,0.18)_100%)]
              pointer-events-none
            "
          />
        </div>

        {/* Title */}
        <h2
          id="about-title"
          className="
            absolute
            left-[848px] top-[200px]
            w-[590px]
            font-montserrat font-semibold
            tracking-[-0.02em]
            text-[64px] leading-[120px]
            bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)]
            bg-clip-text text-transparent
          "
        >
          About the product
        </h2>

        {/* Paragraph */}
        <p
          className="
            absolute
            left-[848px] top-[343px]
            w-[856px] h-[244px]
            font-montserrat font-medium
            tracking-[-0.01em]
            text-[40px] leading-[54px]
            text-white
          "
        >
          A stylish lifestyle accessory that effortlessly combines comfort with
          elegance. You can wear them anywhere and at any time, making them a
          versatile addition to your wardrobe.
        </p>

        {/* CTA */}
        <a
          href="#"
          className="
            absolute
            left-[848px] top-[703px]
            w-[234px] h-[64px]
            rounded-[40px]
            bg-[#845CF2]
            flex items-center justify-center
            font-poppins font-semibold
            text-[20px] leading-[30px]
            tracking-[0.02em]
            text-white
            no-underline
          "
        >
          Explore Now
        </a>
      </div>
    </section>
  );
}