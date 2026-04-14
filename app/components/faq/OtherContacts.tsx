"use client";

import React from "react";
import Image from "next/image";

type ContactItem = {
  title: string;
  email: string;
  icon: string; // 🔥 path بدل SVG
  size?: number; // optional (business icon bigger)
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
    size: 48, // 🔥 bigger icon (كان 104px فـ Figma)
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
          
          {/* TITLE */}
          <div className="flex w-full justify-center">
            <h2
              className="text-center font-montserrat font-[700] bg-clip-text text-transparent"
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

          {/* GRID */}
          <div className="grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {contacts.map((item, i) => (
              <article
                key={i}
                className="group w-full max-w-[362px] h-[262px] bg-[#1B1A1A] transition-colors duration-300 hover:bg-[#222]"
              >
                <div className="flex h-full flex-col items-center px-6 pt-[30px]">
                  
                  {/* ICON */}
                  <div className="flex h-[70px] w-[70px] items-center justify-center ">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={item.size || 32}
                      height={item.size || 32}
                      className="object-contain"
                    />
                  </div>

                  {/* TEXT */}
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