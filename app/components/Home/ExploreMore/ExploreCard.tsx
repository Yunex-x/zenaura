"use client";

import React from "react";
import Image from "next/image";

type Size = "small" | "medium" | "large";

export type Item = {
  id: string;
  image?: string;
  title?: string;
  subtitle?: string;
  size?: Size;
  className?: string;
  blurred?: boolean;
};

/*
  Responsive sizing:
  - small:  clamp(120px, 14vw, 183px) wide,  aspect 183/145
  - medium: clamp(180px, 22vw, 294px) wide,  aspect 294/210
  - large:  clamp(240px, 28vw, 384px) wide,  aspect 384/292
*/
function sizeStyles(size?: Size): { width: string; aspectRatio: string } {
  switch (size) {
    case "large":
      return { width: "clamp(240px, 28vw, 384px)", aspectRatio: "384 / 292" };
    case "medium":
      return { width: "clamp(180px, 22vw, 294px)", aspectRatio: "294 / 210" };
    default:
      return { width: "clamp(120px, 14vw, 183px)", aspectRatio: "183 / 145" };
  }
}

export default function ExploreCard({
  item,
  isSelected = false,
}: {
  item: Item;
  isSelected?: boolean;
}) {
  const styles = sizeStyles(item.size);

  return (
    <div
      className={`
        group relative overflow-hidden rounded-[2px] bg-[#0B0B0B]
        will-change-transform transform-gpu
        transition-all duration-500 ease-out
        ${isSelected ? "scale-[1.05] opacity-100 z-30" : "scale-[0.92] opacity-[0.55]"}
        hover:-translate-y-2 hover:scale-[1.05] hover:opacity-100
        ${item.className ?? ""}
      `}
      style={{
        width: styles.width,
        aspectRatio: styles.aspectRatio,
      }}
    >
      <div className="relative w-full h-full">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title || "Explore image"}
            fill
            sizes="(min-width:1280px) 384px, (min-width:1024px) 28vw, (min-width:768px) 300px, 80vw"
            className={`
              object-cover transition-all duration-700 ease-out
              ${isSelected ? "scale-105 blur-0" : "scale-100 blur-[1.8px]"}
              group-hover:scale-105 group-hover:blur-0
            `}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-black" />
        )}

        <div
          className={`
            absolute inset-0 transition-all duration-500
            ${
              isSelected
                ? "bg-black/10"
                : item.blurred
                ? "bg-black/45"
                : "bg-black/35"
            }
            group-hover:bg-black/10
          `}
        />
      </div>

      {item.title && item.subtitle && (
        <>
          <div className="absolute left-0 right-0 bottom-0 h-[60%] bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />

          <div
            className={`
              absolute left-2 sm:left-3 lg:left-4 bottom-2 sm:bottom-3 lg:bottom-4
              transition-all duration-500
              ${isSelected ? "opacity-100 translate-y-0" : "opacity-70 translate-y-[2px]"}
              group-hover:opacity-100 group-hover:translate-y-[-2px]
            `}
          >
            <h3
              className="text-white font-medium"
              style={{ fontSize: "clamp(11px, 1.2vw, 15px)", lineHeight: "1.45" }}
            >
              {item.title}
            </h3>
            <p
              className="mt-0.5 sm:mt-1 text-white/60"
              style={{ fontSize: "clamp(9px, 0.9vw, 11px)", lineHeight: "1.45" }}
            >
              {item.subtitle}
            </p>
          </div>

          <button
            aria-label={`Open ${item.title}`}
            className={`
              absolute right-2 sm:right-3 lg:right-4 bottom-2 sm:bottom-3 lg:bottom-4
              w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full
              border border-[#6F2CFF]
              flex items-center justify-center
              text-[#8E52FF]
              transition-all duration-500
              ${
                isSelected
                  ? "opacity-100 scale-100 shadow-[0_0_18px_rgba(111,44,255,0.35)]"
                  : "opacity-70 scale-95"
              }
              group-hover:scale-110 group-hover:rotate-6
              group-hover:opacity-100
              group-hover:shadow-[0_0_18px_rgba(111,44,255,0.35)]
            `}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5">
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}