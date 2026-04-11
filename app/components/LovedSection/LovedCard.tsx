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
  // FRAME = Rectangle 6 (keeps the dark frame behind the artwork)
  const FRAME_W = 467;
  const FRAME_H = 434;

  // Artwork sizes: default (small) and active (larger)
  const DEFAULT_W = 266;
  const DEFAULT_H = 266;
  const ACTIVE_W = 360; // size when selected / center card
  const ACTIVE_H = 418;

  // vertical offsets for animation
  const DEFAULT_Y = -20; // slightly lifted from frame origin when not active
  const ACTIVE_Y = -120; // raised more when active to float above card

  // card transform when active
  const cardTransformY = isActive ? -18 : 0;
  const cardScale = isActive ? 1 : 0.96;
  const z = isActive ? 50 : 10;

  // Icon colors (tuned)
  const ICON_BG = "rgba(255,255,255,0.01)";
  const ICON_BORDER = "rgba(255,255,255,0.06)";
  const ICON_FG = "#575757";

  return (
    <div
      aria-hidden={!isActive}
      className="relative w-[538px] h-[702px] rounded-sm"
      style={{
        transform: `translateY(${cardTransformY}px) scale(${cardScale})`,
        zIndex: z,
        background: "#1B1A1A", // full card background set here
      }}
    >
      {/* IMAGE FRAME (Rectangle 6) - keep frame background, but allow overflow so artwork can break out */}
      <div
        className="absolute left-[50%] -translate-x-1/2 top-[68px] rounded-sm"
        style={{
          width: `${FRAME_W}px`,
          height: `${FRAME_H}px`,
          background: "#1B1A1A",
          overflow: "visible", // allow artwork to float outside the frame
        }}
      >
        {/* Top-right icons inside the frame (favorite + cart) */}
        <div className="absolute right-4 top-4 flex flex-col gap-4 z-40">
          <button
            aria-label="favorite"
            className="w-[56px] h-[56px] rounded-full flex items-center justify-center transition-all"
            style={{
              background: ICON_BG,
              border: `1px solid ${ICON_BORDER}`,
              opacity: 0.8,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M12 21s-7.333-4.667-10-8.333C-1 6.667 4.333 3 7.333 6c1.667 1.667 4.667 4 4.667 4s3-2.333 4.667-4C19.667 3 25 6.667 22 12.667 19.333 16.333 12 21 12 21z"
                fill={ICON_FG}
                style={{ transition: "fill .18s ease" }}
              />
            </svg>
          </button>

          <button
            aria-label="add-to-cart"
            className="w-[56px] h-[56px] rounded-full flex items-center justify-center transition-all"
            style={{
              background: ICON_BG,
              border: `1px solid ${ICON_BORDER}`,
              opacity: 0.8,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
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

        {/* Artwork wrapper — animates width/height and vertical position */}
        <motion.div
          initial={{
            width: DEFAULT_W,
            height: DEFAULT_H,
            y: DEFAULT_Y,
            opacity: 1,
          }}
          animate={{
            width: isActive ? ACTIVE_W : DEFAULT_W,
            height: isActive ? ACTIVE_H : DEFAULT_H,
            y: isActive ? ACTIVE_Y : DEFAULT_Y,
            opacity: 1,
          }}
          transition={{ duration: 0.45, ease: "circOut" }}
          className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
          style={{ overflow: "visible" }}
        >
          {/* Parent must have explicit pixel size for next/image fill */}
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes={`${isActive ? ACTIVE_W : DEFAULT_W}px`}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Card content area */}
      <div className="absolute left-6 right-6 top-[520px] z-20">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1 text-[#FFA024]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="text-white/60 text-[14px]">{product.reviews}</div>
            </div>

            <div className="font-montserrat font-[600] text-[22px] leading-[26px] text-white">
              {product.title}
            </div>
            <div className="mt-2 text-white/60 text-[15px] max-w-[360px]">
              {product.subtitle}
            </div>
          </div>

          {/* Tag pill */}
          {product.tag && (
            <div className="ml-4 mt-1">
              <div className="px-3 py-1 bg-[rgba(255,255,255,0.06)] text-[13px] text-white rounded-[8px]">
                {product.tag}
              </div>
            </div>
          )}
        </div>

        {/* Price + CTA */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <div className="font-poppins font-[600] text-[24px] text-white">{product.price}</div>
            {product.compareAt && (
              <div className="text-white/30 text-[16px] line-through">{product.compareAt}</div>
            )}
          </div>

          <button
            aria-label={`Buy ${product.title}`}
            className={`px-8 py-3 rounded-[40px] font-montserrat font-[700] text-[16px] transition
              ${isActive ? "bg-[#845CF2] text-white" : "border border-white/20 text-white/80 bg-transparent"}
            `}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}