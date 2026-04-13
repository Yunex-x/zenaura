import React, { JSX } from "react";
import Image from "next/image";

export default function AboutSection(): JSX.Element {
  return (
    <section
      className="
        relative
        w-screen max-w-full
        overflow-hidden
        bg-[radial-gradient(45.78%_100%_at_50%_0%,#111014_0%,#0D0D0D_100%)]
      "
      aria-labelledby="about-title"
    >
      {/* Decorative left blurred ellipse */}
      <div
        aria-hidden
        className="
          absolute
          left-[-5%] lg:left-[calc(50%_-_662px)]
          top-[15%] lg:top-[250px]
          w-[200px] lg:w-[280px]
          h-[160px] lg:h-[220px]
          rounded-full
          bg-[rgba(170,106,255,0.37)]
          blur-[150px] lg:blur-[200px]
          pointer-events-none
        "
      />

      {/* Decorative right tall blur */}
      <div
        aria-hidden
        className="
          absolute
          right-[-10%] lg:right-[-5%]
          top-[10%] lg:top-[191px]
          w-[200px] lg:w-[353px]
          h-[400px] lg:h-[848px]
          rounded-full
          bg-[rgba(170,106,255,0.17)]
          blur-[120px] lg:blur-[175px]
          -scale-x-100
          pointer-events-none
        "
      />

      {/* ===== MOBILE / TABLET (< lg): stacked layout ===== */}
      <div className="lg:hidden w-full px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14 md:pb-16">
        {/* Image — full width, aspect-ratio preserved */}
        <div className="relative w-full aspect-[645/967] max-w-[500px] mx-auto mb-8 sm:mb-10 md:mb-12 overflow-hidden rounded-sm">
          <Image
            src="/AboutSection/about-left.png"
            alt="product showcase"
            fill
            className="object-cover"
            sizes="(min-width:640px) 500px, 90vw"
            priority
          />
        </div>

        {/* Text content */}
        <div className="text-center sm:text-left max-w-[600px] mx-auto sm:mx-0">
          <h3
            id="about-title"
            className="
              font-montserrat font-semibold
              bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)]
            "
            style={{
              fontSize: "clamp(28px, 5vw, 64px)",
              lineHeight: "1.5",
            }}
          >
            About the product
          </h3>

          <p
            className="mt-4 sm:mt-6 font-montserrat font-medium text-white"
            style={{
              fontSize: "clamp(16px, 3vw, 40px)",
              lineHeight: "1.35",
            }}
          >
            A stylish lifestyle accessory that effortlessly combines comfort with elegance. You can wear them
            anywhere and at any time, making them a versatile addition to your wardrobe.
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="#"
              className="
                inline-flex items-center justify-center
                rounded-[40px] bg-[#845CF2] text-white
                font-poppins font-semibold
                no-underline shadow-md
                hover:brightness-105 transition
              "
              style={{
                width: "clamp(160px, 20vw, 234px)",
                height: "clamp(48px, 5vw, 64px)",
                fontSize: "clamp(14px, 1.6vw, 20px)",
              }}
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP (lg+): side-by-side layout ===== */}
      <div className="hidden lg:flex w-full min-h-[700px] xl:min-h-[967px]">
        {/* Left image column — positioned, scales with viewport */}
        <div
          className="
            relative
            w-[40%] xl:w-[45%]
            min-h-full
            overflow-hidden
            ml-[5%] xl:ml-[8%]
          "
        >
          <Image
            src="/AboutSection/about-left.png"
            alt="product showcase"
            fill
            className="object-cover object-center"
            sizes="(min-width:1280px) 645px, 40vw"
            priority
          />
        </div>

        {/* Right content column */}
        <div
          className="
            flex flex-col justify-center
            w-[55%] xl:w-[50%]
            px-8 xl:px-12 2xl:px-16
            py-12 xl:py-[200px]
          "
        >
          <h3
            id="about-title"
            className="
              font-montserrat font-semibold
              bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)]
            "
            style={{
              fontSize: "clamp(36px, 4vw, 64px)",
              lineHeight: "1.5",
            }}
          >
            About the product
          </h3>

          <p
            className="mt-6 xl:mt-8 font-montserrat font-medium text-white max-w-[856px]"
            style={{
              fontSize: "clamp(22px, 2.8vw, 40px)",
              lineHeight: "1.35",
            }}
          >
            A stylish lifestyle accessory that effortlessly combines comfort with elegance. You can wear them
            anywhere and at any time, making them a versatile addition to your wardrobe.
          </p>

          <div className="mt-8 xl:mt-10">
            <a
              href="#"
              className="
                inline-flex items-center justify-center
                rounded-[40px] bg-[#845CF2] text-white
                font-poppins font-semibold
                no-underline shadow-md
                hover:brightness-105 transition
              "
              style={{
                width: "clamp(180px, 16vw, 234px)",
                height: "clamp(52px, 4.5vw, 64px)",
                fontSize: "clamp(16px, 1.4vw, 20px)",
              }}
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}