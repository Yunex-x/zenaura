"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import LovedCard, { Product } from "../../Home/LovedSection/LovedCard";
import { useCarousel } from "@/app/hooks/useCarousel";

/* ================= ARROWS ================= */

function ArrowLeftSvg() {
  return (
    <svg
      className="w-[28px] h-[12px] sm:w-[42px] sm:h-[16px] lg:w-[80px] lg:h-[20px]"
      viewBox="0 0 80 20"
      fill="none"
    >
      <path d="M79 10H1M1 10L10 1M1 10L10 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
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
      <path d="M1 10H79M79 10L70 1M79 10L70 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowOutline({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-[110px] h-[44px] sm:w-[160px] sm:h-[56px] lg:w-[233px] lg:h-[80px] rounded-[89px] border border-white/20 flex items-center justify-center text-white/60 hover:border-white/35 hover:text-white transition"
    >
      <ArrowLeftSvg />
    </button>
  );
}

function ArrowSolid({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-[110px] h-[44px] sm:w-[160px] sm:h-[56px] lg:w-[233px] lg:h-[80px] rounded-[89px] bg-white flex items-center justify-center text-[#845CF2] shadow-lg hover:scale-[1.02] transition"
    >
      <ArrowRightSvg />
    </button>
  );
}

/* ================= COMPONENT ================= */

type Props = {
  title: string;
  products: Product[];
};

export default function ShopCarouselSection({ title, products }: Props) {
  const { index, direction, next, prev, getPosition, isActive } = useCarousel({
    length: products.length,
    initialIndex: 1,
  });

  return (
    <section className="w-full bg-[#0D0D0D] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col gap-5 mb-30 lg:mb-16 lg:flex-row lg:items-center lg:justify-between">
          <h2
            className="font-montserrat font-[700] uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
              fontSize: "clamp(28px, 5vw, 64px)",
            }}
          >
            {title}
          </h2>

          {/* arrows desktop only */}
          <div className="hidden lg:flex gap-4">
            <ArrowOutline onClick={prev} />
            <ArrowSolid onClick={next} />
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col items-center lg:hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={products[index].id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                else if (info.offset.x > 80) prev();
              }}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              className="w-full max-w-[420px]"
            >
              <LovedCard product={products[index]} position="center" isActive />
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="mt-5 flex gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => (i > index ? next() : prev())}
                className={`rounded-full ${i === index
                    ? "w-[28px] h-[8px] bg-[#8B5CF6]"
                    : "w-[8px] h-[8px] bg-white/25"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <div className="flex overflow-x-auto gap-8 scrollbar-none pt-32">
            {products.map((product, i) => {
              const active = isActive(i);

              return (
                <motion.div
                  key={product.id}
                  animate={{
                    scale: active ? 1.04 : 0.94,
                    y: active ? -18 : 0,
                    opacity: active ? 1 : 0.8,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-shrink-0 w-[360px] xl:w-[400px]"
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