import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type Product = {
  id: string;
  title: string;
  tag?: string;
  subtitle?: string;
  price: string;
  compareAt?: string;
  reviews?: string;
  image: string;
};

export default function LovedCard({
  product,
  position,
  isActive,
}: {
  product: Product;
  position: "left" | "center" | "right";
  isActive: boolean;
}) {
  const ICON_BG = "rgba(255,255,255,0.01)";
  const ICON_BORDER = "rgba(255,255,255,0.06)";
  const ICON_FG = "#575757";

  return (
    <div
      aria-hidden={!isActive}
      className="
        relative w-full rounded-sm
        aspect-[538/702]
      "
      style={{
        background: "#1B1A1A",
      }}
    >
      {/* IMAGE FRAME — aspect-ratio based, centered */}
      <div
        className="
          absolute left-[50%] -translate-x-1/2
          top-[9.5%]
          w-[87%]
          aspect-[467/434]
          rounded-sm
        "
        style={{
          background: "#1B1A1A",
          overflow: "visible",
        }}
      >
        {/* Top-right icons */}
        <div className="absolute right-2 sm:right-3 lg:right-4 top-2 sm:top-3 lg:top-4 flex flex-col gap-2 sm:gap-3 lg:gap-4 z-40">
          <button
            aria-label="favorite"
            className="
              w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] lg:w-[56px] lg:h-[56px]
              rounded-full flex items-center justify-center transition-all
            "
            style={{
              background: ICON_BG,
              border: `1px solid ${ICON_BORDER}`,
              opacity: 0.8,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden className="sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]">
              <path
                d="M12 21s-7.333-4.667-10-8.333C-1 6.667 4.333 3 7.333 6c1.667 1.667 4.667 4 4.667 4s3-2.333 4.667-4C19.667 3 25 6.667 22 12.667 19.333 16.333 12 21 12 21z"
                fill={ICON_FG}
                style={{ transition: "fill .18s ease" }}
              />
            </svg>
          </button>

          <button
            aria-label="add-to-cart"
            className="
              w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] lg:w-[56px] lg:h-[56px]
              rounded-full flex items-center justify-center transition-all
            "
            style={{
              background: ICON_BG,
              border: `1px solid ${ICON_BORDER}`,
              opacity: 0.8,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden className="sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]">
              <path
                d="M6 6h15l-1.5 9h-12z"
                stroke={ICON_FG}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="10" cy="20" r="1.4" fill={ICON_FG} />
              <circle cx="18" cy="20" r="1.4" fill={ICON_FG} />
            </svg>
          </button>
        </div>

        {/* Artwork — centered, animates size */}
        <motion.div
          initial={{ width: "57%", height: "61%", y: "-5%", opacity: 1 }}
          animate={{
            width: isActive ? "77%" : "57%",
            height: isActive ? "96%" : "61%",
            y: isActive ? "-28%" : "-5%",
            opacity: 1,
          }}
          transition={{ duration: 0.45, ease: "circOut" }}
          className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
          style={{ overflow: "visible" }}
        >
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(min-width:1024px) 400px, 300px"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Card content — positioned relative to card bottom */}
      <div className="absolute left-4 right-4 sm:left-5 sm:right-5 lg:left-6 lg:right-6 bottom-[6%] z-20">
        <div className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 mb-1.5 sm:mb-2 lg:mb-3">
              <div className="flex items-center gap-0.5 text-[#FFA024]" style={{ fontSize: "clamp(10px, 1.2vw, 16px)" }}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div className="text-white/60" style={{ fontSize: "clamp(10px, 1.1vw, 14px)" }}>
                {product.reviews}
              </div>
            </div>

            <div
              className="font-montserrat font-[600] text-white leading-[1.2]"
              style={{ fontSize: "clamp(14px, 1.8vw, 22px)" }}
            >
              {product.title}
            </div>
            <div
              className="mt-1 sm:mt-2 text-white/60"
              style={{ fontSize: "clamp(11px, 1.2vw, 15px)" }}
            >
              {product.subtitle}
            </div>
          </div>

          {/* Tag pill */}
          {product.tag && (
            <div className="ml-2 sm:ml-3 lg:ml-4 mt-1 flex-shrink-0">
              <div
                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[rgba(255,255,255,0.06)] text-white rounded-[8px]"
                style={{ fontSize: "clamp(10px, 1vw, 13px)" }}
              >
                {product.tag}
              </div>
            </div>
          )}
        </div>

        {/* Price + CTA */}
        <div className="mt-3 sm:mt-4 lg:mt-6 flex items-center justify-between gap-2 sm:gap-3 lg:gap-4">
          <div className="min-w-0">
            <div
              className="font-poppins font-[600] text-white"
              style={{ fontSize: "clamp(16px, 1.8vw, 24px)" }}
            >
              {product.price}
            </div>
            {product.compareAt && (
              <div
                className="text-white/30 line-through"
                style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}
              >
                {product.compareAt}
              </div>
            )}
          </div>

          <button
            aria-label={`Buy ${product.title}`}
            className={`
              rounded-[40px] font-montserrat font-[700] transition whitespace-nowrap flex-shrink-0
              ${isActive ? "bg-[#845CF2] text-white" : "border border-white/20 text-white/80 bg-transparent"}
            `}
            style={{
              fontSize: "clamp(12px, 1.2vw, 16px)",
              padding: "clamp(8px, 1vw, 12px) clamp(16px, 2.5vw, 32px)",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}