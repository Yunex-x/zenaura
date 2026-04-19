"use client";

import React from "react";
import Image from "next/image";

type Item = {
  title: string;
  subtitle: string;
  icon: string;
};

const items: Item[] = [
  {
    title: "Products",
    subtitle: "11 Categories | 12 Articles",
    icon: "/icons/products.svg",
  },
  {
    title: "How-to",
    subtitle: "5 Articles",
    icon: "/icons/howto.svg",
  },
  {
    title: "Shipping",
    subtitle: "8 Articles",
    icon: "/icons/shipping.svg",
  },
  {
    title: "Orders",
    subtitle: "17 Articles",
    icon: "/icons/orders.svg",
  },
  {
    title: "Partnerships",
    subtitle: "3 categories",
    icon: "/icons/partnerships.svg",
  },
  {
    title: "B2B",
    subtitle: "8 Articles",
    icon: "/icons/b2b.svg",
  },
  {
    title: "Klarna",
    subtitle: "7 Articles",
    icon: "/icons/klarna.svg",
  },
  {
    title: "Zen Circle",
    subtitle: "4 categories 12 articles",
    icon: "/icons/zen.svg",
  },
];

export default function HelpCategories() {
  return (
    <section className="w-full flex justify-center py-[80px] lg:py-[120px]">
      <div className="w-full max-w-[1520px]">
        {/* TITLE */}
        <div className="flex justify-center px-4 sm:px-6 lg:px-0">
          <h2
            className="text-center font-montserrat font-[700] uppercase bg-clip-text text-transparent"
            style={{
              width: "min(695px, 100%)",
              backgroundImage:
                "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62, 62, 62, 0.21) 143.55%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "clamp(30px, 5vw, 64px)",
              lineHeight: "1.875",
              letterSpacing: "-0.02em",
            }}
          >
            How we can help you
          </h2>
        </div>

        {/* MOBILE SLIDER */}
        <div className="mt-[56px] sm:hidden">
          <div
            className="
              flex gap-[16px] overflow-x-auto px-4
              snap-x snap-mandatory scroll-smooth
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {items.map((item, i) => (
              <article
                key={i}
                className="
                  group shrink-0 snap-center
                  w-[85%] max-w-[362px] h-[232px]
                  bg-[#1B1A1A] transition-colors duration-300 hover:bg-[#222222]
                "
              >
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <div className="mb-[24px] flex h-[70px] w-[70px] items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[24px]">
                    <h3
                      className="text-white font-poppins font-normal"
                      style={{
                        fontSize: "24px",
                        lineHeight: "36px",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="font-poppins font-normal text-white/60"
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0.02em",
                        textAlign: "center",
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* TABLET + DESKTOP GRID */}
        <div className="mt-[56px] hidden sm:grid grid-cols-2 justify-items-center gap-[24px] px-4 sm:px-6 lg:px-0 xl:grid-cols-4">
          {items.map((item, i) => (
            <article
              key={i}
              className="group w-full max-w-[362px] h-[232px] bg-[#1B1A1A] transition-colors duration-300 hover:bg-[#222222]"
            >
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="mb-[24px] flex h-[70px] w-[70px] items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col items-center gap-[24px]">
                  <h3
                    className="text-white font-poppins font-normal"
                    style={{
                      fontSize: "24px",
                      lineHeight: "36px",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="font-poppins font-normal text-white/60"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textAlign: "center",
                    }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}