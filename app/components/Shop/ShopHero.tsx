"use client";

import React, { JSX } from "react";
import Image from "next/image";

export default function ShopHero(): JSX.Element {
  return (
    <section className="relative w-full bg-[#0D0D0D] overflow-hidden">
      {/* Container — keeps content within 1920px design frame */}
      <div
        className="relative w-full mx-auto"
        style={{ height: "clamp(500px, 58vw, 892px)" }}
      >
        {/* ── Hero image — right-center positioned ──
            Figma: 892×892 at left:528 top:220 on 1920 canvas
            → left offset ≈ 27.5%, image covers right side */}
        <div
          className="
            absolute
            right-[-10%] sm:right-[-5%] md:right-0
            top-[5%] sm:top-[8%] md:top-[10%]
            w-[85vw] h-[85vw]
            sm:w-[70vw] sm:h-[70vw]
            md:w-[55vw] md:h-[55vw]
            lg:w-[50vw] lg:h-[50vw]
            max-w-[892px] max-h-[892px]
            pointer-events-none
          "
        >
          <Image
            src="/shopPage/shop-hero.png"
            alt="Zenaura earplugs floating"
            fill
            className="object-contain"
            sizes="(min-width:1280px) 892px, (min-width:1024px) 50vw, (min-width:768px) 55vw, 85vw"
            priority
          />
        </div>

        {/* ── Text content — left-aligned ──
            Figma: title at left:110 top:265, button at left:110 top:552
            → left offset ≈ 5.7% */}
        <div
          className="
            relative z-10
            flex flex-col justify-center
            h-full
            px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[110px]
            pt-16 sm:pt-20 md:pt-24
          "
        >
          {/* ── Heading ──
              Figma: Montserrat 700, 88px, line-height 120px,
              letter-spacing -0.03em, uppercase,
              gradient: linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%) */}
          <h1
            className="
              font-montserrat font-bold uppercase
              bg-clip-text text-transparent
              max-w-[845px]
            "
            style={{
              fontSize: "clamp(32px, 6vw, 88px)",
              lineHeight: "1.36",
              letterSpacing: "-0.03em",
              backgroundImage:
                "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
            }}
          >
            Sound That
            <br />
            Moves With You.
          </h1>

          {/* ── CTA Button ──
              Figma: 313×64, bg #845CF2, border-radius 40px
              Text: Montserrat 700, 20px, tracking 0.02em, white */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            <a
              href="#products"
              className="
                inline-flex items-center justify-center
                rounded-[40px] bg-[#845CF2] text-white
                font-montserrat font-bold
                tracking-[0.02em]
                no-underline
                transition-all duration-300
                hover:brightness-110 hover:scale-[1.02]
                active:scale-[0.98]
              "
              style={{
                width: "clamp(220px, 22vw, 313px)",
                height: "clamp(48px, 4.5vw, 64px)",
                fontSize: "clamp(14px, 1.4vw, 20px)",
              }}
            >
              Explore All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}