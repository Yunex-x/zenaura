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

function ArrowOutline({ onClick, children }: any) {
  return (
    <button
      onClick={onClick}
      className="w-[110px] h-[44px] sm:w-[160px] sm:h-[56px] lg:w-[233px] lg:h-[80px] rounded-[89px] border border-white/20 flex items-center justify-center text-white/60 hover:border-white/35 hover:text-white transition"
    >
      {children}
    </button>
  );
}

function ArrowSolid({ onClick, children }: any) {
  return (
    <button
      onClick={onClick}
      className="w-[110px] h-[44px] sm:w-[160px] sm:h-[56px] lg:w-[233px] lg:h-[80px] rounded-[89px] bg-white flex items-center justify-center text-[#845CF2]"
    >
      {children}
    </button>
  );
}

export default function SwitchSection() {
  const { index, direction, next, prev, getPosition, isActive } =
    useCarousel({
      length: switchProducts.length,
      initialIndex: 1,
    });

  return (
    <section className="w-full bg-[#0D0D0D] py-20">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <h2
            className="font-montserrat font-[700] uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
              fontSize: "clamp(28px,5vw,64px)",
            }}
          >
            Zen Switch
          </h2>

          <div className="flex gap-4">
            <ArrowOutline onClick={prev}>
              <ArrowLeftSvg />
            </ArrowOutline>

            <ArrowSolid onClick={next}>
              <ArrowRightSvg />
            </ArrowSolid>
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={switchProducts[index].id}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
            >
              <LovedCard
                product={switchProducts[index]}
                position="center"
                isActive
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {switchProducts.map((p, i) => {
            const active = isActive(i);

            return (
              <motion.div
                key={p.id}
                animate={{
                  scale: active ? 1.05 : 0.94,
                  y: active ? -18 : 0,
                  opacity: active ? 1 : 0.85,
                }}
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