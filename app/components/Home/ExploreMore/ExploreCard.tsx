"use client";

import React from "react";
import Image from "next/image";

export type Item = {
  id: string;
  image?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  width?: string;
  aspectRatio?: string;
};

export default function ExploreCard({
  item,
  isSelected = false,
}: {
  item: Item;
  isSelected?: boolean;
}) {
  return (
    <div
      className={`
        group relative transition-all duration-500 ease-out
        ${isSelected ? "scale-[1.05] opacity-100 z-30" : "scale-100 opacity-80"}
        hover:scale-[1.05] hover:opacity-100
        ${item.className ?? ""}
      `}
      style={{ width: item.width }}
    >
      <div
        className="relative overflow-hidden rounded-[2px]"
        style={{ aspectRatio: item.aspectRatio }}
      >
        <Image
          src={item.image || ""}
          alt={item.title || "image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 294px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-white text-[14px] font-medium leading-[1.45]">
            {item.title}
          </h3>
          <p className="text-white/60 text-[11px] mt-1 leading-[1.45]">
            {item.subtitle}
          </p>
        </div>

        <button
          aria-label={`Open ${item.title}`}
          className={`
            shrink-0 w-11 h-11 rounded-full border border-[#6F2CFF]
            flex items-center justify-center text-[#8E52FF]
            transition-all duration-300
            ${isSelected
              ? "shadow-[0_0_18px_rgba(111,44,255,0.35)]"
              : "opacity-80"
            }
            group-hover:scale-110
          `}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}