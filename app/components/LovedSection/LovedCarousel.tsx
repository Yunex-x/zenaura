"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LovedCard, { Product } from "./LovedCard";

/* ── Arrow SVG components matching ExploreMore style ── */
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
    image: "/lovedsection/loved-1.png",
  },
  {
    id: "l2",
    title: "McLaren Racing x Zen Switch 2",
    tag: "Focus",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/lovedsection/loved-2.png",
  },
  {
    id: "l3",
    title: "ZEN SLEEP",
    tag: "Noise Sensitive",
    subtitle: "Dream better with our beautiful earplug",
    price: "€19.99",
    compareAt: "€24.99",
    reviews: "12 reviews",
    image: "/lovedsection/loved-3.png",
  },
];

export default function LovedCarousel({ products }: { products?: Product[] }) {
  const items = products && products.length === 3 ? products : MOCK_PRODUCTS;
  const len = items.length;
  const [index, setIndex] = useState(1);
  const [direction, setDirection] = useState(1);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((s) => (s - 1 + len) % len);
  }, [len]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((s) => (s + 1) % len);
  }, [len]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="w-full flex flex-col items-center">

      {/* ===== MOBILE / TABLET: single card at a time (< lg) ===== */}
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
            <LovedCard product={items[index]} position="center" isActive={true} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===== DESKTOP: 3-card grid (lg+) ===== */}
      <div className="hidden lg:flex w-full justify-center">
        <div
          className="
            grid grid-cols-3
            gap-4 xl:gap-6 2xl:gap-8
            px-4 xl:px-8 2xl:px-12
            w-full max-w-[1700px]
          "
        >
          {items.map((p, i) => {
            const leftIndex = (index - 1 + len) % len;
            const pos = i === index ? "center" : i === leftIndex ? "left" : "right";
            const isActive = i === index;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{
                  opacity: isActive ? 1 : 0.86,
                  scale: isActive ? 1 : 0.94,
                  y: isActive ? -18 : 0,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ zIndex: isActive ? 50 : 10 }}
              >
                <LovedCard product={p} position={pos as "left" | "center" | "right"} isActive={isActive} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pager dots — mobile only */}
      <div className="lg:hidden flex items-center justify-center gap-2 mt-4">
        {items.map((p, i) => (
          <button
            key={p.id}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Go to card ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>

      {/* Arrows — ExploreMore style, centered below cards */}
      <div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full flex items-center justify-center">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          {/* Outline arrow (previous) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="
              rounded-full border border-white/20
              flex items-center justify-center
              text-white/70
              transition-all duration-300 hover:border-white/40 hover:text-white
            "
            style={{
              width: "clamp(80px, 13vw, 184px)",
              height: "clamp(40px, 5vw, 72px)",
            }}
          >
            <ArrowLeftSvg />
          </button>

          {/* Solid arrow (next) */}
          <button
            onClick={next}
            aria-label="Next"
            className="
              rounded-full bg-white
              flex items-center justify-center
              text-[#8E52FF]
              transition-all duration-300 hover:scale-[1.03]
            "
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