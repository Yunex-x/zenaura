"use client";

import React, { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import PosterCard from "./PosterCard";

const ITEMS = [
  {
    id: "1",
    tag: "ZEN QUITE 2",
    quote: "“The shape of the product simply changed my listening”",
    cta: "Buy Zen Switch2 Now",
    image: "/HomePage/ShowcaseSection/showcase-poster.png",
  },
  {
    id: "2",
    tag: "ZEN SWITCH 2",
    quote: "“The shape of the product simply changed my listening”",
    cta: "Buy Zen Switch2 Now",
    image: "/HomePage/ShowcaseSection/showcase-poster.png",
  },
  {
    id: "3",
    tag: "ZEN DREAM",
    quote: "“The shape of the product simply changed my listening”",
    cta: "Buy Zen Switch2 Now",
    image: "/HomePage/ShowcaseSection/showcase-poster.png",
  },
  {
    id: "4",
    tag: "ZEN QUITE 2",
    quote: "“The shape of the product simply changed my listening”",
    cta: "Buy Zen Switch2 Now",
    image: "/HomePage/ShowcaseSection/showcase-poster.png",
  },
  {
    id: "5",
    tag: "ZEN SWITCH 2",
    quote: "“The shape of the product simply changed my listening”",
    cta: "Buy Zen Switch2 Now",
    image: "/HomePage/ShowcaseSection/showcase-poster.png",
  },
];

/* ── Arrow components ── */
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
      <svg
        className="w-[24px] h-[12px] sm:w-[32px] sm:h-[14px] lg:w-[46px] lg:h-[20px]"
        viewBox="0 0 46 20"
        fill="none"
      >
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
      <svg
        className="w-[24px] h-[12px] sm:w-[32px] sm:h-[14px] lg:w-[46px] lg:h-[20px]"
        viewBox="0 0 46 20"
        fill="none"
      >
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

export default function PosterCarousel({
  items = ITEMS,
}: {
  items?: typeof ITEMS;
}) {
  const data = useMemo(() => items, [items]);
  const [index, setIndex] = useState(2);
  const [direction, setDirection] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll‑linked scrub for the whole carousel
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start end", "end start"],
  });
  const carouselY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const carouselScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.01, 0.98]);

  // Entrance animation (fades in once when carousel enters viewport)
  const entranceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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

  const getWrappedDistance = (itemIndex: number) => {
    const raw = itemIndex - index;
    const altPositive = raw + data.length;
    const altNegative = raw - data.length;
    return [raw, altPositive, altNegative].reduce((closest, current) =>
      Math.abs(current) < Math.abs(closest) ? current : closest
    );
  };

  const CARD_WIDTH = 320;
  const GAP = 28;
  const STEP = CARD_WIDTH + GAP;

  return (
    <motion.div
      ref={carouselRef}
      className="relative w-full"
      variants={entranceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      style={{
        y: carouselY,
        scale: carouselScale,
        position: "relative",
      }}
    >
      {/* Header (unchanged) */}
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-start sm:justify-between sm:gap-6 md:mb-12 lg:mb-8 ">
        <div>
          <h2
            className="font-montserrat font-semibold text-white tracking-[0.02em]"
            style={{ fontSize: "clamp(28px, 4.2vw, 58px)", lineHeight: "1.15" }}
          >
            Worn by You, Loved
          </h2>
          <h3
            className="mt-1 font-montserrat font-semibold tracking-[0.02em] sm:mt-2"
            style={{ fontSize: "clamp(28px, 4.2vw, 58px)", lineHeight: "1.15" }}
          >
            <span className="text-white">by</span>{" "}
            <span className="text-white/80">Everyone.</span>
          </h3>
        </div>

        <div className="flex flex-shrink-0 items-center gap-3 sm:gap-4 lg:gap-5">
          <ArrowOutline onClick={prev} />
          <ArrowSolid onClick={next} />
        </div>
      </div>

      {/* MOBILE / TABLET */}
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
              className="w-full max-w-[360px] aspect-[428/715] sm:max-w-[400px] md:max-w-[440px]"
            >
              <PosterCard item={data[index]} active />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* DESKTOP CENTER MODE – unchanged logic, only outer container gets scroll effects */}
      <div className="hidden lg:block w-full overflow-visible">
        <div className="relative mx-auto flex h-[900px] w-full max-w-[1600px] -mb-32 items-center justify-center overflow-visible">
          <motion.div
            animate={{ x: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="relative h-full w-full overflow-visible"
          >
            {data.map((item, i) => {
              const distance = getWrappedDistance(i);
              const isCenter = distance === 0;

              let scale = 0.8;
              let opacity = 0.2;
              let y = 0;

              if (distance === 0) {
                scale = 1.16;
                opacity = 1;
                y = -18;
              } else if (Math.abs(distance) === 1) {
                scale = 0.88;
                opacity = 0.55;
                y = 4;
              } else if (Math.abs(distance) === 2) {
                scale = 0.76;
                opacity = 0.18;
                y = 8;
              }

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: distance * STEP,
                    scale,
                    opacity,
                    y,
                  }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 origin-center overflow-visible"
                  style={{
                    width: `${CARD_WIDTH}px`,
                    aspectRatio: "428 / 715",
                    zIndex: isCenter ? 50 : 10 - Math.abs(distance),
                    marginLeft: `${-CARD_WIDTH / 2}px`,
                    marginTop: `${-715 / 2}px`,
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  <PosterCard item={item} active={isCenter} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}