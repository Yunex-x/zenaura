"use client";

import React from "react";

export default function FAQHero() {
  return (
    <section className="w-full flex justify-center pt-20 sm:pt-24 lg:pt-[120px]">
      <div className="w-full max-w-[792px] px-4 flex flex-col items-center gap-16 sm:gap-20">

        {/* TEXT BLOCK */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 text-center w-full">

          {/* TITLE */}
          <h1
            className="font-montserrat font-[700] uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
              fontSize: "clamp(28px, 5vw, 64px)",
              lineHeight: "1.4",
              letterSpacing: "-0.03em",
            }}
          >
            Question? We’re all ears
          </h1>

          {/* SUBTITLE */}
          <p className="max-w-[456px] text-white/60 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.8] tracking-[0.02em]">
            Find quick answers about ZENAURA earplugs, orders, and support.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="w-full max-w-[748px]">
          <div className="w-full h-[60px] sm:h-[70px] lg:h-[80px] bg-white/8 rounded-[14px] flex items-center px-5 sm:px-6">

            <div className="flex items-center gap-3 w-full">

              {/* ICON */}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white/40 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 20L17 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* INPUT */}
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full bg-transparent outline-none text-white placeholder:text-white/40 text-[16px] sm:text-[18px]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}