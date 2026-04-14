"use client";

import React from "react";
import Image from "next/image";

type CTAItem = {
  title: string;
  subtitle: string;
  icon: string; // 🔥 بدل ReactNode → path
  buttonLabel: string;
  buttonVariant: "light" | "purple";
};

const items: CTAItem[] = [
  {
    title: "Chat with us",
    subtitle: "Start a chat with our team",
    icon: "/icons/chat.svg",
    buttonLabel: "Explore Now",
    buttonVariant: "light",
  },
  {
    title: "Email support",
    subtitle: "hello@zenearplugs.com",
    icon: "/icons/mail.svg",
    buttonLabel: "Explore Now",
    buttonVariant: "purple",
  },
];

export default function ContactCTA() {
  return (
    <section className="flex w-full justify-center py-[80px] lg:py-[120px]">
      <div className="w-full max-w-[1262px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center gap-[56px] lg:gap-[88px]">
          
          {/* TITLE */}
          <div className="flex w-full justify-center">
            <h2
              className="text-center font-montserrat font-[700] bg-clip-text text-transparent"
              style={{
                width: "min(669px, 100%)",
                backgroundImage:
                  "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62, 62, 62, 0.21) 143.55%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "clamp(30px, 5vw, 64px)",
                lineHeight: "1.875",
                letterSpacing: "-0.02em",
                textTransform: "capitalize",
              }}
            >
              Still need help?
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            {items.map((item, i) => (
              <article
                key={i}
                className="flex min-h-[140px] w-full items-center justify-between gap-5 bg-[#1B1A1A] px-6 py-4"
              >
                {/* LEFT */}
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  
                  {/* ICON */}
                  <div
                    className="flex h-[72px] w-[72px]  items-center justify-center "
                    
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex min-w-0 flex-col items-start gap-[19px]">
                    <h3
                      className="font-poppins font-normal text-white"
                      style={{
                        fontSize: "24px",
                        lineHeight: "36px",
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
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>

                </div>

                {/* BUTTON */}
                <button
                  type="button"
                  className={`h-[64px] min-w-[187px] shrink-0 rounded-[40px] font-poppins text-[16px] font-semibold leading-[24px] tracking-[0.02em] transition-transform duration-300 hover:scale-[1.03] ${
                    item.buttonVariant === "light"
                      ? "bg-white text-[#845CF2]"
                      : "bg-[#845CF2] text-white"
                  }`}
                >
                  {item.buttonLabel}
                </button>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}