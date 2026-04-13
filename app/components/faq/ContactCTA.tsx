"use client";

import React from "react";

export default function ContactCTA() {
  return (
    <section className="w-full flex justify-center py-20 sm:py-24 lg:py-28">
      <div className="w-full max-w-[1262px] px-4 flex flex-col items-center gap-16 sm:gap-20">

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
          Still need help?
        </h2>

        {/* CARDS */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* CHAT CARD */}
          <div className="bg-[#1B1A1A] rounded-[12px] p-6 flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* ICON */}
              <div className="w-[72px] h-[72px] rounded-[12px] border border-white/20 flex items-center justify-center">
                <div className="w-[32px] h-[32px] border-2 border-[#575757] rounded-md" />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[20px] sm:text-[22px] font-medium">
                  Chat with us
                </h3>
                <p className="text-white/60 text-[14px] sm:text-[16px]">
                  Start a chat with our team
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <button className="bg-white text-[#845CF2] px-6 py-3 rounded-full font-semibold hover:scale-[1.03] transition">
              Explore Now
            </button>
          </div>

          {/* EMAIL CARD */}
          <div className="bg-[#1B1A1A] rounded-[12px] p-6 flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* ICON */}
              <div className="w-[72px] h-[72px] rounded-[12px] border border-white/20 flex items-center justify-center">
                <div className="w-[32px] h-[32px] border-2 border-[#575757] rounded-md" />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[20px] sm:text-[22px] font-medium">
                  Email support
                </h3>
                <p className="text-white/60 text-[14px] sm:text-[16px]">
                  hello@zenearplugs.com
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <button className="bg-[#845CF2] text-white px-6 py-3 rounded-full font-semibold hover:scale-[1.03] transition">
              Explore Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}