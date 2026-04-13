"use client";

import React from "react";

const items = [
  { title: "Products", subtitle: "11 Categories | 12 Articles" },
  { title: "How-to", subtitle: "5 Articles" },
  { title: "Shipping", subtitle: "8 Articles" },
  { title: "Orders", subtitle: "17 Articles" },
  { title: "Partnerships", subtitle: "3 categories" },
  { title: "B2B", subtitle: "8 Articles" },
  { title: "Klarna", subtitle: "7 Articles" },
  { title: "Zen Circle", subtitle: "4 categories 12 articles" },
];

export default function HelpCategories() {
  return (
    <section className="w-full flex justify-center py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1400px] px-4">

        {/* TITLE */}
        <h2
          className="text-center font-montserrat font-[700] uppercase bg-clip-text text-transparent mb-12 sm:mb-16"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62,62,62,0.21) 143.55%)",
            fontSize: "clamp(24px, 4vw, 48px)",
            letterSpacing: "-0.02em",
          }}
        >
          How we can help you
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#1B1A1A] rounded-[12px] h-[200px] sm:h-[220px] flex flex-col items-center justify-center gap-5 hover:bg-[#222] transition cursor-pointer"
            >
              {/* ICON */}
              <div className="w-[60px] h-[60px] rounded-full border border-[#845CF2] flex items-center justify-center">
                <div className="w-[24px] h-[24px] bg-[#845CF2] rounded-sm" />
              </div>

              {/* TEXT */}
              <div className="flex flex-col items-center text-center gap-2">
                <h3 className="text-white text-[18px] sm:text-[20px] font-medium">
                  {item.title}
                </h3>

                <p className="text-white/60 text-[13px] sm:text-[14px] tracking-[0.02em]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}