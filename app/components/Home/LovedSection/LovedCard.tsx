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
  const imageScale =
    position === "center" ? (isActive ? 1.2 : 1.08) : isActive ? 1.08 : 0.98;

  const imageY =
    position === "center" ? (isActive ? -26 : -16) : isActive ? -18 : -10;

  return (
    <motion.article
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.94,
        opacity: isActive ? 1 : 0.82,
        y: isActive ? 0 : 8,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full max-w-[538px]"
      aria-hidden={!isActive}
    >
<div className="
  relative
  h-[400px]
  sm:h-[460px]
  md:h-[450px]
  lg:h-[380px]
  xl:h-[420px]
  w-full
  overflow-visible
  rounded-[2px]
  bg-[#141414]
">        {/* subtle premium card shading */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_20%,rgba(0,0,0,0.18)_100%)]" />

        {/* right actions */}
        <div className="absolute right-4 top-5 z-30 flex flex-col gap-3 sm:right-5 sm:top-6 lg:right-6 lg:gap-4">
          <ActionIcon label="favorite">
            <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px]">
              <path
                d="M12 20.5s-6.9-4.33-9.35-7.73C.02 9.04 2.24 5.5 6.15 5.5c2.07 0 3.41 1.05 4.29 2.2.88-1.15 2.22-2.2 4.29-2.2 3.91 0 6.13 3.54 3.5 7.27C18.9 16.17 12 20.5 12 20.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </ActionIcon>

          <ActionIcon label="add-to-cart">
            <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px]">
              <path
                d="M3.75 5.25h2.1l1.5 9h10.35l1.5-6.75H7.05"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="18.25" r="1.35" fill="currentColor" />
              <circle cx="17.25" cy="18.25" r="1.35" fill="currentColor" />
            </svg>
          </ActionIcon>
        </div>

        {/* product visual */}
        <div className="pointer-events-none absolute inset-x-0 top-[-18%] z-20 flex justify-center overflow-visible">
          <motion.div
            initial={false}
            animate={{
              scale: imageScale,
              y: imageY,
              rotate: position === "left" ? -5 : position === "right" ? 5 : 0,
            }}
            whileHover={
              isActive
                ? {
                  y: imageY - 6,
                  scale: imageScale + 0.03,
                }
                : {}
            }
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${position === "center"
              ? "h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] lg:h-[180px] lg:w-[180px] xl:h-[200px] xl:w-[200px]"
              : "h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] lg:h-[180px] lg:w-[180px] xl:h-[200px] xl:w-[200px]"
              } `}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              sizes="(min-width: 1280px) 430px, (min-width: 768px) 350px, 300px"
              className="object-contain"
            />
          </motion.div>
        </div>

{/* content */}
<div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-5 sm:px-5 sm:pb-6 lg:px-7 lg:pb-7">
  <div className="flex min-h-[210px] flex-col justify-end">
    {/* rating + tag */}
    <div className="mb-4 flex items-start justify-between gap-3">
      <div>
        <div className="flex items-center gap-1 text-[#F6A623]">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-[15px] leading-none">
              ★
            </span>
          ))}
        </div>
        <p className="mt-1 text-[14px] font-medium text-white/58">
          {product.reviews ?? "12 reviews"}
        </p>
      </div>

      {product.tag ? (
        <span className="mt-1 shrink-0 rounded-[10px] border border-white/14 bg-white/[0.06] px-4 py-2 text-[14px] font-medium text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
          {product.tag}
        </span>
      ) : null}
    </div>

    {/* title + subtitle */}
    <div className="min-w-0">
      <h3
        className="
          text-[22px]
          sm:text-[26px]
          md:text-[30px]
          lg:text-[10px]
          xl:text-[18px]
          2xl:text-[22px]
          leading-[1.05]
          tracking-[0.04em]
          font-semibold
          text-white
        "
      >
        {product.title}
      </h3>

      <p
        className="
          mt-4
          text-[13px]
          sm:text-[14px]
          md:text-[15px]
          lg:text-[10px]
          xl:text-[14px]
          text-white/60
          leading-[1.35]
        "
      >
        {product.subtitle}
      </p>
    </div>

    {/* price + button */}
    <div className="mt-7 flex items-end justify-between gap-4">
      <div>
        <div className="text-[28px] font-semibold leading-none tracking-[-0.04em] text-white">
          {product.price}
        </div>
        {product.compareAt ? (
          <div className="mt-2 text-[18px] leading-none text-white/24 line-through">
            {product.compareAt}
          </div>
        ) : null}
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: isActive ? 1.02 : 1.01 }}
        type="button"
        aria-label={`Buy ${product.title}`}
        className={`inline-flex h-[52px] min-w-[136px] lg:min-w-[146px] items-center justify-center rounded-full px-8 text-[18px] font-semibold tracking-[0.02em] transition-all duration-300 ${
          isActive
            ? "bg-[#8B5CF6] text-white shadow-[0_12px_30px_rgba(139,92,246,0.35)]"
            : "border border-white/28 bg-transparent text-white/72"
        }`}
      >
        Buy Now
      </motion.button>
    </div>
  </div>
</div>
        {/* very soft bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/22 to-transparent" />
      </div>
    </motion.article>
  );
}

function ActionIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/14 bg-white/[0.02] text-white/38 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:text-white/60"
    >
      {children}
    </button>
  );
}