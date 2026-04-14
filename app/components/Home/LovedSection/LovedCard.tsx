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
    <motion.div
      aria-hidden={!isActive}
      initial={false}
      className="group relative w-full aspect-[538/660] overflow-visible rounded-sm"
      style={{ background: "#1B1A1A" }}
    >
      {/* TOP RIGHT ICONS */}
      <div className="absolute right-4 top-4 z-50 flex flex-col gap-3 sm:right-5 sm:top-5 lg:right-6 lg:top-6 lg:gap-4">
        <button
          type="button"
          aria-label="favorite"
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full transition-all sm:h-[48px] sm:w-[48px] lg:h-[56px] lg:w-[56px]"
          style={{
            background: ICON_BG,
            border: `1px solid ${ICON_BORDER}`,
            opacity: 0.9,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="h-4 w-4 lg:h-[18px] lg:w-[18px]"
          >
            <path
              d="M12 21s-7.333-4.667-10-8.333C-1 6.667 4.333 3 7.333 6c1.667 1.667 4.667 4 4.667 4s3-2.333 4.667-4C19.667 3 25 6.667 22 12.667 19.333 16.333 12 21 12 21z"
              fill={ICON_FG}
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="add-to-cart"
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full transition-all sm:h-[48px] sm:w-[48px] lg:h-[56px] lg:w-[56px]"
          style={{
            background: ICON_BG,
            border: `1px solid ${ICON_BORDER}`,
            opacity: 0.9,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="h-4 w-4 lg:h-[18px] lg:w-[18px]"
          >
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

      {/* IMAGE AREA */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-12%] w-[87%] -translate-x-1/2"
        style={{
          aspectRatio: "467 / 434",
          overflow: "visible",
        }}
      >
        <motion.div
          initial={false}
          animate={{
  width: isActive ? "70%" : "54%",
  height: isActive ? "90%" : "60%",
  y: isActive ? "-14%" : "-4%",
  scale: isActive ? 1.05 : 1,
}}
          whileHover={
  isActive
    ? {
        width: "62%",
        height: "82%",
        y: "-14%",
        scale: 1,
      }
    : {}
}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute left-1/2 top-0 z-30 -translate-x-1/2"
          style={{ overflow: "visible" }}
        >
          <div className="relative h-full w-full overflow-visible">
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

      {/* CARD CONTENT */}
      <div className="absolute bottom-[6%] left-4 right-4 z-20 sm:left-5 sm:right-5 lg:left-6 lg:right-6">
        <div className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-1.5 flex items-center gap-1.5 sm:mb-2 sm:gap-2 lg:mb-3 lg:gap-3">
              <div
                className="flex items-center gap-0.5 text-[#FFA024]"
                style={{ fontSize: "clamp(10px, 1.2vw, 16px)" }}
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <div
                className="text-white/60"
                style={{ fontSize: "clamp(10px, 1.1vw, 14px)" }}
              >
                {product.reviews}
              </div>
            </div>

            <div
              className="font-montserrat leading-[1.2] text-white"
              style={{
                fontSize: "clamp(14px, 1.8vw, 22px)",
                fontWeight: 600,
              }}
            >
              {product.title}
            </div>

            <div
              className="mt-1 text-white/60 sm:mt-2"
              style={{ fontSize: "clamp(11px, 1.2vw, 15px)" }}
            >
              {product.subtitle}
            </div>
          </div>

          {product.tag && (
            <div className="ml-2 mt-1 flex-shrink-0 sm:ml-3 lg:ml-4">
              <div
                className="rounded-[8px] bg-[rgba(255,255,255,0.06)] px-2 py-0.5 text-white sm:px-3 sm:py-1"
                style={{ fontSize: "clamp(10px, 1vw, 13px)" }}
              >
                {product.tag}
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 sm:mt-4 sm:gap-3 lg:mt-6 lg:gap-4">
          <div className="min-w-0">
            <div
              className="font-poppins text-white"
              style={{
                fontSize: "clamp(16px, 1.8vw, 24px)",
                fontWeight: 600,
              }}
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
            type="button"
            aria-label={`Buy ${product.title}`}
            className={`flex-shrink-0 whitespace-nowrap rounded-[40px] font-montserrat transition ${
              isActive
                ? "bg-[#845CF2] text-white"
                : "border border-white/20 bg-transparent text-white/80"
            }`}
            style={{
              fontSize: "clamp(12px, 1.2vw, 16px)",
              fontWeight: 700,
              padding: "clamp(8px, 1vw, 12px) clamp(16px, 2.5vw, 32px)",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}