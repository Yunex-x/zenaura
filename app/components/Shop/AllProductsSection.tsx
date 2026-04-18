"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import LovedCard, { Product } from "../Home/LovedSection/LovedCard";
import { useCarousel } from "@/app/hooks/useCarousel";

const allProducts: Product[] = [
  {
    id: "zen-switch-adjustable",
    title: "ZEN SWITCH ADJUSTABLE",
    tag: "Sleep",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/shopPage/product-1.png",
  },
  {
    id: "zen-sleep",
    title: "ZEN SLEEP",
    tag: "Focus",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/shopPage/product-2.png",
  },
  {
    id: "zen-quiet",
    title: "ZEN QUIET",
    tag: "Sleep",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/shopPage/product-3.png",
  },
  {
    id: "zen-flow",
    title: "ZEN FLOW (Concert / Festival)",
    tag: "Sleep",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/shopPage/product-4.png",
  },
];

function ArrowLeftSvg() {
  return (
    <svg
      className="w-[28px] h-[12px] sm:w-[42px] sm:h-[16px] lg:w-[80px] lg:h-[20px]"
      viewBox="0 0 80 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M79 10H1M1 10L10 1M1 10L10 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightSvg() {
  return (
    <svg
      className="w-[28px] h-[12px] sm:w-[42px] sm:h-[16px] lg:w-[80px] lg:h-[20px]"
      viewBox="0 0 80 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M1 10H79M79 10L70 1M79 10L70 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowOutline({
  onClick,
  children,
}: {
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="w-[110px] h-[44px] sm:w-[160px] sm:h-[56px] lg:w-[233px] lg:h-[80px] rounded-[89px] border border-white/20 flex items-center justify-center text-white/60 hover:border-white/35 hover:text-white transition"
      aria-label="previous"
      type="button"
    >
      {children}
    </button>
  );
}

function ArrowSolid({
  onClick,
  children,
}: {
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="w-[110px] h-[44px] sm:w-[160px] sm:h-[56px] lg:w-[233px] lg:h-[80px] rounded-[89px] bg-white flex items-center justify-center text-[#845CF2] shadow-lg hover:scale-[1.02] transition"
      aria-label="next"
      type="button"
    >
      {children}
    </button>
  );
}

export default function AllProductsSection() {
  const items = allProducts;

  const { index, direction, next, prev, getPosition, isActive } = useCarousel({
    length: items.length,
    initialIndex: 1,
  });

  return (
    <section className="relative w-full bg-[#0D0D0D]  overflow-hidden py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6  lg:px-8">
        {/* Heading + Controls */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:gap-6 mb-35 lg:flex-row lg:items-center lg:justify-between">
          <h2
            className="font-montserrat font-[700] uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
              fontSize: "clamp(28px, 5vw, 64px)",
              lineHeight: "1.875",
              letterSpacing: "-0.03em",
            }}
          >
            All Products
          </h2>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <ArrowOutline onClick={prev}>
              <ArrowLeftSvg />
            </ArrowOutline>

            <ArrowSolid onClick={next}>
              <ArrowRightSvg />
            </ArrowSolid>
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden w-full flex justify-center">
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
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-5 xl:gap-6 2xl:gap-8">
            {items.map((product, i) => {
              const active = isActive(i);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{
                    opacity: active ? 1 : 0.86,
                    scale: active ? 1.04 : 0.94,
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
      </div>
    </section>
  );
}