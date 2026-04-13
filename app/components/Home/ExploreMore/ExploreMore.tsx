"use client";

import React, { JSX, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExploreCard, { Item } from "./ExploreCard";

function ArrowOutline({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
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
      <svg className="w-[24px] h-[12px] sm:w-[32px] sm:h-[14px] lg:w-[46px] lg:h-[20px]" viewBox="0 0 46 20" fill="none">
        <path
          d="M45 10H1M1 10L10 1M1 10L10 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function ArrowSolid({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
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
      <svg className="w-[24px] h-[12px] sm:w-[32px] sm:h-[14px] lg:w-[46px] lg:h-[20px]" viewBox="0 0 46 20" fill="none">
        <path
          d="M1 10H45M45 10L36 1M45 10L36 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

const ITEMS: Item[] = [
  {
    id: "blur-left",
    image: "/ExploreMore/explore-4.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "small",
    blurred: true,
  },
  {
    id: "left",
    image: "/ExploreMore/explore-1.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "medium",
  },
  {
    id: "center",
    image: "/ExploreMore/explore-2.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "large",
  },
  {
    id: "right",
    image: "/ExploreMore/explore-3.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "medium",
  },
  {
    id: "blur-right",
    image: "/ExploreMore/explore-5.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "small",
    blurred: true,
  },
];

/*
  Desktop collage positions — percentage-based so they scale with viewport.
  Original pixel positions (inside a ~1200px content area):
    0: left:155  top:35   → 12.9%  6.3%   (small, blurred)
    1: left:0    top:252  → 0%     45%     (medium)
    2: left:405  top:112  → 33.7%  20%     (large, center)
    3: left:910  top:42   → 75.8%  7.5%   (medium)
    4: left:855  top:360  → 71.2%  64.3%  (small, blurred)
*/
const DESKTOP_POSITIONS = [
  { left: "12.9%", top: "6.3%", z: 1, opacity: 0.22, blur: true },
  { left: "0%", top: "45%", z: 5, opacity: 1, blur: false },
  { left: "33.7%", top: "20%", z: 10, opacity: 1, blur: false },
  { left: "75.8%", top: "7.5%", z: 5, opacity: 1, blur: false },
  { left: "71.2%", top: "64.3%", z: 1, opacity: 0.18, blur: true },
];

export default function ExploreMore(): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [direction, setDirection] = useState(1);

  const selectPrev = () => {
    setDirection(-1);
    setSelectedIndex((prev) => (prev === 0 ? ITEMS.length - 1 : prev - 1));
  };

  const selectNext = () => {
    setDirection(1);
    setSelectedIndex((prev) => (prev === ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-screen max-w-full overflow-hidden bg-black">
      {/* Decorative blur */}
      <div
        aria-hidden
        className="
          absolute left-[-15%] bottom-[-20%]
          w-[40vw] max-w-[620px] h-[40vw] max-h-[620px]
          rounded-full bg-[#6F2CFF]/20 blur-[220px]
          pointer-events-none
        "
      />

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-10 sm:pt-14 md:pt-16 lg:pt-[80px] xl:pt-[110px] pb-10 sm:pb-14 md:pb-16 lg:pb-[60px] xl:pb-[80px]">

        {/* ── Header: title left, arrows right ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
          <div>
            <h2
              className="text-white font-semibold tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4.2vw, 58px)", lineHeight: "1.15" }}
            >
              Explore more
            </h2>
            <h3
              className="mt-1 sm:mt-2 font-semibold tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4.2vw, 58px)", lineHeight: "1.15" }}
            >
              <span className="text-white">ZENAURA</span>{" "}
              <span className="text-white/80">Moments</span>
            </h3>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 flex-shrink-0">
            <ArrowOutline onClick={selectPrev} />
            <ArrowSolid onClick={selectNext} />
          </div>
        </div>

        {/* ===== MOBILE (< md): single card swipe ===== */}
        <div className="md:hidden mt-8 sm:mt-10">
          <div className="flex justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={ITEMS[selectedIndex].id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full max-w-[340px] sm:max-w-[380px]"
              >
                <ExploreCard item={{ ...ITEMS[selectedIndex], size: "large" }} isSelected />
              </motion.div>
            </AnimatePresence>
          </div>

         
        </div>

        {/* ===== TABLET (md, < lg): horizontal scroll row ===== */}
        <div className="hidden md:block lg:hidden mt-10 md:mt-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ITEMS.map((item, i) => (
              <div
                key={item.id}
                className="flex-shrink-0 snap-center w-[260px] md:w-[300px]"
                onClick={() => setSelectedIndex(i)}
              >
                <ExploreCard item={{ ...item, size: "large" }} isSelected={selectedIndex === i} />
              </div>
            ))}
          </div>
        </div>

        {/* ===== DESKTOP (lg+): scattered collage layout with percentage positions ===== */}
        <div className="hidden lg:block relative mt-12 xl:mt-[88px]" style={{ height: "clamp(360px, 40vw, 560px)" }}>
          {ITEMS.map((item, i) => {
            const pos = DESKTOP_POSITIONS[i];
            return (
              <div
                key={item.id}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{
                  left: pos.left,
                  top: pos.top,
                  zIndex: selectedIndex === i ? 30 : pos.z,
                  opacity: selectedIndex === i ? 1 : pos.opacity,
                  filter: pos.blur && selectedIndex !== i ? "blur(1.5px)" : "none",
                }}
                onMouseEnter={() => setSelectedIndex(i)}
                onClick={() => setSelectedIndex(i)}
              >
                <ExploreCard item={item} isSelected={selectedIndex === i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}