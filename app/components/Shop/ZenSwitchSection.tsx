"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import LovedCard, { Product } from "../Home/LovedSection/LovedCard";
import { useCarousel } from "@/app/hooks/useCarousel";

const switchProducts: Product[] = [
  {
    id: "zen-switch-emerald",
    title: "ZEN SWITCH EMRALD",
    tag: "Sleep",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/shopPage/product-1.png",
  },
  {
    id: "zen-switch-black",
    title: "ZEN SWITCH BLACK",
    tag: "Focus",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/shopPage/product-2.png",
  },
  {
    id: "zen-switch-white",
    title: "ZEN SWITCH WHITE",
    tag: "Sleep",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/shopPage/product-3.png",
  },
  {
    id: "zen-switch-gold",
    title: "ZEN SWITCH GOLD",
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
    >
      <path
        d="M79 10H1M1 10L10 1M1 10L10 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
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
    >
      <path
        d="M1 10H79M79 10L70 1M79 10L70 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowOutline({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[42px] w-[96px] items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/35 hover:text-white sm:h-[50px] sm:w-[130px] lg:h-[64px] lg:w-[180px] xl:h-[80px] xl:w-[233px]"
    >
      {children}
    </button>
  );
}

function ArrowSolid({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[42px] w-[96px] items-center justify-center rounded-full bg-white text-[#845CF2] transition sm:h-[50px] sm:w-[130px] lg:h-[64px] lg:w-[180px] xl:h-[80px] xl:w-[233px]"
    >
      {children}
    </button>
  );
}

export default function SwitchSection() {
  const { index, direction, next, prev, getPosition, isActive } = useCarousel({
    length: switchProducts.length,
    initialIndex: 1,
  });

  return (
    <section className="w-full overflow-x-hidden bg-[#0D0D0D] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between lg:mb-12">
          <h2
            className="font-montserrat bg-clip-text text-[28px] font-[700] uppercase leading-[1.05] text-transparent sm:text-[40px] md:text-[52px] lg:text-[64px]"
            style={{
              backgroundImage:
                "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
            }}
          >
            Zen Switch
          </h2>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <ArrowOutline onClick={prev}>
              <ArrowLeftSvg />
            </ArrowOutline>

            <ArrowSolid onClick={next}>
              <ArrowRightSvg />
            </ArrowSolid>
          </div>
        </div>

        <div className="flex justify-center lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={switchProducts[index].id}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-[420px]"
            >
              <LovedCard
                product={switchProducts[index]}
                position="center"
                isActive
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {switchProducts.map((p, i) => {
            const active = isActive(i);

            return (
              <motion.div
                key={p.id}
                animate={{
                  scale: active ? 1.03 : 0.96,
                  y: active ? -14 : 0,
                  opacity: active ? 1 : 0.88,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="min-w-0"
              >
                <LovedCard
                  product={p}
                  position={getPosition(i)}
                  isActive={active}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}