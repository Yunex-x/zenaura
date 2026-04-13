"use client";

import React from "react";

const contacts = [
  {
    title: "Collaborations",
    email: "ambassadors@zenearplugs.com",
  },
  {
    title: "Partnerships",
    email: "partnerships@zenearplugs.com",
  },
  {
    title: "Business",
    email: "business@zenearplugs.com",
  },
  {
    title: "Press",
    email: "press@zenearplugs.com",
  },
];

export default function OtherContacts() {
  return (
    <section className="w-full flex justify-center py-20 sm:py-24 lg:py-28">
      <div className="w-full max-w-[1520px] px-4 flex flex-col items-center gap-16 sm:gap-20">

        {/* TITLE */}
        <h2
          className="text-center font-montserrat font-[700] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62,62,62,0.21) 143.55%)",
            fontSize: "clamp(28px,5vw,64px)",
            letterSpacing: "-0.02em",
          }}
        >
          Other ways to reach us
        </h2>

        {/* GRID */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {contacts.map((item, i) => (
            <div
              key={i}
              className="bg-[#1B1A1A] rounded-[12px] h-[200px] sm:h-[220px] flex flex-col items-center justify-center gap-6 hover:bg-[#222] transition cursor-pointer"
            >
              {/* ICON */}
              <div className="w-[70px] h-[70px] rounded-[12px] bg-[#845CF2] flex items-center justify-center">
                <div className="w-[24px] h-[24px] bg-white/80 rounded-sm" />
              </div>

              {/* TEXT */}
              <div className="flex flex-col items-center text-center gap-2">
                <h3 className="text-white text-[18px] sm:text-[20px] font-medium">
                  {item.title}
                </h3>

                <p className="text-white/60 text-[13px] sm:text-[14px] tracking-[0.02em]">
                  {item.email}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}