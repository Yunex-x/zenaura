"use client";

import React, { useState, useCallback, JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSlide from "./HeroSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * HeroCarousel - interactive client carousel with arrows and motion
 * - Duplicated 3 product items for now (waiting API)
 * - Click arrows to change product; wrap-around enabled
 * - Keyboard left/right supported
 */

const PRODUCTS = [
  {
    id: "p1",
    title: "McLaren Racing x\nZen Switch™ 2",
    subtitle: "Tune out the noise and accelerate your productivity with the first official earplugs of McLaren Racing.",
    description: "",
    image: "/product-1.png",
    ctaLabel: "Buy Now",
  },
  {
    id: "p2",
    title: "ZENAURA Premium Earbud",
    subtitle: "Designed for all-day comfort and crisp clarity — engineered with advanced noise reduction.",
    description: "",
    image: "/product-2.png",
    ctaLabel: "Buy Now",
  },
  {
    id: "p3",
    title: "Zen Switch Pro",
    subtitle: "A studio-grade listening experience tuned for focused work and distraction-free environments.",
    description: "",
    image: "/product-3.png",
    ctaLabel: "Buy Now",
  },
];

export default function HeroCarousel(): JSX.Element {
  const [index, setIndex] = useState(0);
  // direction used to determine animation axis (1 forward, -1 back)
  const [direction, setDirection] = useState(1);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return PRODUCTS.length - 1;
        if (next >= PRODUCTS.length) return 0;
        return next;
      });
    },
    []
  );

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    },
    [paginate]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Content viewport */}
      <div className="relative w-full min-h-[640px] flex items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={PRODUCTS[index].id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <HeroSlide product={PRODUCTS[index]} direction={direction} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls: arrows (positioned bottom-left area) and small pager */}
      <div className="absolute left-12 bottom-10 flex items-center gap-6 z-40">
        <button
          aria-label="Previous product"
          onClick={() => paginate(-1)}
          className="w-[120px] h-[56px] rounded-[40px] border border-white/12 flex items-center justify-center text-white/80 bg-transparent hover:border-white/20"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          aria-label="Next product"
          onClick={() => paginate(1)}
          className="w-[120px] h-[56px] rounded-[40px] bg-white flex items-center justify-center text-[#5B2ED6] shadow-lg"
        >
          <ChevronRight size={20} />
        </button>

        {/* pager dots */}
        <div className="ml-4 flex items-center gap-2">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => {
                if (i === index) return;
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}