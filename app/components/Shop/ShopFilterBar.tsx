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
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[113px]">
      <div className="relative border-b border-white/[0.16] pb-6">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-5">
          {FILTERS.map((filter) => {
            const isActive = active === filter.value;

            return (
              <button
                key={filter.value}
                onClick={() => handleClick(filter.value)}
                className={`
                  relative inline-flex items-center justify-center
                  rounded-[99px]
                  px-4 sm:px-5 lg:px-6
                  h-[44px] sm:h-[48px] lg:h-[54px]
                  text-center
                  font-poppins
                  text-[14px] sm:text-[16px] lg:text-[18px]
                  leading-none
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-[#0D0D0D] font-medium"
                      : "bg-[#171717] text-white font-normal hover:bg-[#222222]"
                  }
                `}
              >
                {filter.label}

                {isActive && (
                  <span
                    className="absolute left-0 right-0 -bottom-6 h-[2px] bg-[#845CF2]"
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