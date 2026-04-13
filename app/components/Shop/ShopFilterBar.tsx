"use client";

import React, { JSX, useState } from "react";

const FILTERS = [
  { label: "Shop All", value: "all" },
  { label: "Earplugs", value: "earplugs" },
  { label: "Bundles", value: "bundles" },
  { label: "Accessories", value: "accessories" },
  { label: "Limited Edition", value: "limited" },
  { label: "Collaboration", value: "collaboration" },
];

export default function ShopFilterBar({
  onFilterChange,
}: {
  onFilterChange?: (value: string) => void;
}): JSX.Element {
  const [active, setActive] = useState("all");

  const handleClick = (value: string) => {
    setActive(value);
    onFilterChange?.(value);
  };

  return (
    <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[113px]">
      {/* Outer wrapper — relative for the active indicator line */}
      <div className="relative pb-6 border-b border-white/[0.16]">
        {/* Scrollable row on mobile, flex-wrap on desktop */}
        <div
          className="
            flex items-center gap-4 sm:gap-5 lg:gap-8
            overflow-x-auto scrollbar-hide
            -mx-1 px-1
          "
        >
          {FILTERS.map((filter) => {
            const isActive = active === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => handleClick(filter.value)}
                className={`
                  relative flex-shrink-0
                  flex items-center justify-center
                  px-5 lg:px-5
                  h-[48px] sm:h-[54px] lg:h-[62px]
                  rounded-[99px]
                  font-poppins
                  text-[16px] sm:text-[18px] lg:text-[20px]
                  leading-[30px]
                  whitespace-nowrap
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-[#0D0D0D] font-medium"
                      : "bg-[#171717] text-white font-normal hover:bg-[#222222]"
                  }
                `}
              >
                {filter.label}

                {/* Active indicator line — purple bar under active pill */}
                {isActive && (
                  <span
                    className="
                      absolute -bottom-6
                      left-0 w-full h-[2px]
                      bg-[#845CF2]
                    "
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}