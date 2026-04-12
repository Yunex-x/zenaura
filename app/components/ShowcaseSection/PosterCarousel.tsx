"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PosterCard from "./PosterCard";

const ITEMS = [
  { id: "1", tag: "ZEN QUITE 2", quote: "\u201CThe shape of the product simply changed my listening\u201D", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
  { id: "2", tag: "ZEN SWITCH 2", quote: "\u201CThe shape of the product simply changed my listening\u201D", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
  { id: "3", tag: "ZEN DREAM", quote: "\u201CThe shape of the product simply changed my listening\u201D", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
  { id: "4", tag: "ZEN QUITE 2", quote: "\u201CThe shape of the product simply changed my listening\u201D", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
  { id: "5", tag: "ZEN SWITCH 2", quote: "\u201CThe shape of the product simply changed my listening\u201D", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
];

/* ── Arrow components matching ExploreMore style ── */
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

export default function PosterCarousel({ items = ITEMS }: { items?: typeof ITEMS }) {
  const data = useMemo(() => items, [items]);
  const [index, setIndex] = useState(2);
  const [direction, setDirection] = useState(1);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((s) => (s - 1 + data.length) % data.length);
  }, [data.length]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((s) => (s + 1) % data.length);
  }, [data.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="relative w-full">

      {/* ── Header row: title left, arrows right (ExploreMore style) ── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-[88px]">
        {/* Title */}
        <div>
          <h2
            className="font-montserrat font-semibold text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 4.2vw, 58px)", lineHeight: "1.15" }}
          >
            Worn by You, Loved
          </h2>
          <h3
            className="mt-1 sm:mt-2 font-montserrat font-semibold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 4.2vw, 58px)", lineHeight: "1.15" }}
          >
            <span className="text-white">by</span>{" "}
            <span className="text-white/80">Everyone.</span>
          </h3>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 flex-shrink-0">
          <ArrowOutline onClick={prev} />
          <ArrowSolid onClick={next} />
        </div>
      </div>

      {/* ── MOBILE / TABLET (< lg): single card at a time ── */}
      <div className="lg:hidden w-full">
        <div className="flex justify-center px-2 sm:px-4">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={data[index].id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[440px] aspect-[428/715]"
            >
              <PosterCard item={data[index]} active />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pager dots */}
        <div className="mt-6 flex justify-center gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP (lg+): all cards in a row ── */}
      <div className="hidden lg:block w-full overflow-hidden">
        <div className="flex items-center justify-center gap-3 xl:gap-5 2xl:gap-8 select-none">
          {data.map((item, i) => {
            const distance = Math.abs(i - index);
            const isCenter = distance === 0;
            const isNear = distance === 1;

            return (
              <motion.div
                key={item.id}
                animate={{
                  scale: isCenter ? 1 : isNear ? 0.9 : 0.75,
                  opacity: isCenter ? 1 : isNear ? 0.6 : 0.2,
                  y: isCenter ? -16 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex-shrink-0"
                style={{
                  width: isCenter
                    ? "clamp(300px, 24vw, 428px)"
                    : isNear
                    ? "clamp(250px, 20vw, 360px)"
                    : "clamp(200px, 16vw, 300px)",
                  aspectRatio: "428 / 715",
                  zIndex: isCenter ? 40 : 10,
                }}
                role="group"
              >
                <PosterCard item={item} active={isCenter} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}