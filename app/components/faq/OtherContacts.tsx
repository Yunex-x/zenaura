"use client";

import React from "react";
import Image from "next/image";

type ContactItem = {
  title: string;
  email: string;
  icon: string;
  size?: number;
};

const contacts: ContactItem[] = [
  {
    title: "Collaborations",
    email: "ambassadors@zenearplugs.com",
    icon: "/icons/collaborations.png",
  },
  {
    title: "Partnerships",
    email: "partnerships@zenearplugs.com",
    icon: "/icons/partnership.svg",
  },
  {
    title: "Business",
    email: "business@zenearplugs.com",
    icon: "/icons/business.svg",
    size: 48,
  },
  {
    title: "Press",
    email: "press@zenearplugs.com",
    icon: "/icons/press.svg",
  },
];

export default function OtherContacts() {
  return (
    <section className="flex w-full justify-center py-[80px] lg:py-[120px]">
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center gap-[56px] lg:gap-[88px]">
          <div className="flex w-full justify-center">
            <h2
              className="bg-clip-text text-center font-montserrat font-[700] text-transparent"
              style={{
                width: "min(496px, 100%)",
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
              Other Contacts
            </h2>
          </div>

          {/* MOBILE SLIDER */}
          <div className="w-full sm:hidden">
            <div
              className="
                flex gap-4 overflow-x-auto
                snap-x snap-mandatory scroll-smooth
                [scrollbar-width:none] [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {contacts.map((item, i) => (
                <article
                  key={i}
                  className="
                    group h-[262px] w-[85%] max-w-[320px] shrink-0 snap-center
                    bg-[#1B1A1A] transition-colors duration-300 hover:bg-[#222]
                  "
                >
                  <div className="flex h-full flex-col items-center px-6 pt-[30px]">
                    <div className="flex h-[70px] w-[70px] items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={item.size ||70 }
                        height={item.size || 70}
                        className="object-contain"
                      />
                    </div>

                    <div className="mt-[50px] flex flex-col items-center gap-[24px] text-center">
                      <h3
                        className="font-poppins text-white"
                        style={{
                          fontSize: "24px",
                          lineHeight: "36px",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="font-poppins text-white/60"
                        style={{
                          fontSize: "16px",
                          lineHeight: "24px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.email}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* TABLET + DESKTOP GRID */}
          <div className="hidden w-full grid-cols-2 justify-items-center gap-6 sm:grid xl:grid-cols-4">
            {contacts.map((item, i) => (
              <article
                key={i}
                className="group h-[262px] w-full max-w-[362px] bg-[#1B1A1A] transition-colors duration-300 hover:bg-[#222]"
              >
                <div className="flex h-full flex-col items-center px-6 pt-[30px]">
                  <div className="flex h-[70px] w-[70px] items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={item.size || 70}
                      height={item.size || 70}
                      className="object-contain"
                    />
                  </div>

                  <div className="mt-[50px] flex flex-col items-center gap-[24px] text-center">
                    <h3
                      className="font-poppins text-white"
                      style={{
                        fontSize: "24px",
                        lineHeight: "36px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="font-poppins text-white/60"
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.email}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}