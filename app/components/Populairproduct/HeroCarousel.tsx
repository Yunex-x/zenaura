"use client";

import React, { useState, useCallback, useEffect, JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSlide from "./HeroSlide";

const PRODUCTS = [
  {
    id: "p1",
    title: "McLaren Racing x\nZen Switch™ 2",
    subtitle:
      "Tune out the noise and accelerate your productivity with the first official earplugs of McLaren Racing.",
    description: "",
    image: "/populair/product-1.png",
    ctaLabel: "Buy Now",
  },
  {
    id: "p2",
    title: "ZENAURA Premium Earbud",
    subtitle:
      "Designed for all-day comfort and crisp clarity — engineered with advanced noise reduction.",
    description: "",
    image: "/populair/product-2.png",
    ctaLabel: "Buy Now",
  },
  {
    id: "p3",
    title: "Zen Switch Pro",
    subtitle:
      "A studio-grade listening experience tuned for focused work and distraction-free environments.",
    description: "",
    image: "/populair/product-3.png",
    ctaLabel: "Buy Now",
  },
];

function ArrowLeftSvg() {
  return (
    <svg className="w-[24px] h-[12px] sm:w-[30px] sm:h-[14px] lg:w-[46px] lg:h-[20px]" viewBox="0 0 46 20" fill="none">
      <path d="M45 10H1M1 10L10 1M1 10L10 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightSvg() {
  return (
    <svg className="w-[24px] h-[12px] sm:w-[30px] sm:h-[14px] lg:w-[46px] lg:h-[20px]" viewBox="0 0 46 20" fill="none">
      <path d="M1 10H45M45 10L36 1M45 10L36 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Slide-level variants — smooth crossfade with directional slide */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir * 120,
    opacity: 0,
    scale: 0.92,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (dir: number) => ({
    x: dir * -120,
    opacity: 0,
    scale: 0.92,
    filter: "blur(8px)",
  }),
};

export default function HeroCarousel(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return PRODUCTS.length - 1;
      if (next >= PRODUCTS.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Content viewport */}
      <div className="relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[640px] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={PRODUCTS[index].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 28, mass: 0.8 },
              opacity: { duration: 0.4, ease: "easeInOut" },
              scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              filter: { duration: 0.4 },
            }}
            className="w-full"
          >
            <HeroSlide product={PRODUCTS[index]} direction={direction} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls — ExploreMore style */}
      <div
        className="
          relative md:absolute md:left-0 lg:left-2 md:bottom-6 lg:bottom-10
          mt-4 sm:mt-5 md:mt-0
          flex items-center justify-center md:justify-start
          gap-3 sm:gap-4 lg:gap-5
          z-40 w-full md:w-auto
        "
      >
        <motion.button
          aria-label="Previous product"
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="
            rounded-full border border-white/20
            flex items-center justify-center
            text-white/70 transition-colors duration-300
            hover:text-white
          "
          style={{ width: "clamp(80px, 13vw, 184px)", height: "clamp(40px, 5vw, 72px)" }}
        >
          <ArrowLeftSvg />
        </motion.button>

        <motion.button
          aria-label="Next product"
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="
            rounded-full bg-white
            flex items-center justify-center
            text-[#8E52FF]
            shadow-[0_0_20px_rgba(142,82,255,0.15)]
            hover:shadow-[0_0_30px_rgba(142,82,255,0.3)]
            transition-shadow duration-300
          "
          style={{ width: "clamp(80px, 13vw, 184px)", height: "clamp(40px, 5vw, 72px)" }}
        >
          <ArrowRightSvg />
        </motion.button>

      </div>
    </div>
  );
}