"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import LovedCard, { Product } from "./LovedCard";
import { useCarousel } from "@/app/hooks/useCarousel";

function ArrowLeftSvg() {
  return (
    <svg className="w-[24px] h-[12px] sm:w-[30px] sm:h-[14px] lg:w-[46px] lg:h-[20px]" viewBox="0 0 46 20" fill="none">
      <path
        d="M45 10H1M1 10L10 1M1 10L10 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightSvg() {
  return (
    <svg className="w-[24px] h-[12px] sm:w-[30px] sm:h-[14px] lg:w-[46px] lg:h-[20px]" viewBox="0 0 46 20" fill="none">
      <path
        d="M1 10H45M45 10L36 1M45 10L36 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: "l1",
    title: "ZEN SWITCH",
    tag: "Sleep",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/HomePage/lovedsection/loved-1.png",
  },
  {
    id: "l2",
    title: "McLaren Racing x Zen Switch 2",
    tag: "Focus",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/HomePage/lovedsection/loved-2.png",
  },
  {
    id: "l3",
    title: "ZEN SLEEP",
    tag: "Noise Sensitive",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/HomePage/lovedsection/loved-3.png",
  },
];

export default function LovedCarousel({ products }: { products?: Product[] }) {
  const items = products?.length ? products : MOCK_PRODUCTS;

  const {
    index,
    direction,
    next,
    prev,
    getPosition,
    isActive,
  } = useCarousel({
    length: items.length,
    initialIndex: 1,
  });

  return (
    <div className="w-full flex flex-col items-center">
      {/* Mobile / Tablet */}
      <div className="lg:hidden w-full flex justify-center px-4 sm:px-6">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={items[index].id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 60 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full max-w-[400px] sm:max-w-[460px] md:max-w-[500px]"
          >
            <LovedCard product={items[index]} position="center" isActive />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex w-full justify-center">
        <div className="grid grid-cols-3 gap-4 xl:gap-6 2xl:gap-8 px-4 xl:px-8 2xl:px-12 w-full max-w-[1700px]">
          {items.map((product, i) => {
            const active = isActive(i);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{
                  opacity: active ? 1 : 0.86,
                  scale: active ? 1 : 0.94,
                  y: active ? -18 : 0,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ zIndex: active ? 50 : 10 }}
              >
                <LovedCard
                  product={product}
                  position={getPosition(i)}
                  isActive={active}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full flex items-center justify-center">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <button
            onClick={prev}
            aria-label="Previous"
            className="rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
            style={{
              width: "clamp(80px, 13vw, 184px)",
              height: "clamp(40px, 5vw, 72px)",
            }}
          >
            <ArrowLeftSvg />
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="rounded-full bg-white flex items-center justify-center text-[#8E52FF] transition-all duration-300 hover:scale-[1.03]"
            style={{
              width: "clamp(80px, 13vw, 184px)",
              height: "clamp(40px, 5vw, 72px)",
            }}
          >
            <ArrowRightSvg />
          </button>
        </div>
      </div>
    </div>
  );
}