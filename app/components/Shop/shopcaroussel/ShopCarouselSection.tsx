"use client";

import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LovedCard, { Product } from "../../Home/LovedSection/LovedCard";
import { useCarousel } from "@/app/hooks/useCarousel";

/* ================= TYPES ================= */

type AddToCartPayload = {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  colorLabel: string;
  colorHex: string;
};

type Props = {
  title: string;
  products: Product[];
  onAddToCart?: (item: AddToCartPayload) => void;
};

/* ================= ARROWS ================= */

function ArrowLeftSvg() {
  return (
    <svg
      className="h-[12px] w-[28px] sm:h-[16px] sm:w-[42px] lg:h-[20px] lg:w-[80px]"
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
      className="h-[12px] w-[28px] sm:h-[16px] sm:w-[42px] lg:h-[20px] lg:w-[80px]"
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

function ArrowOutline({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[44px] w-[110px] items-center justify-center rounded-[89px] border border-white/20 text-white/60 transition hover:border-white/35 hover:text-white sm:h-[56px] sm:w-[160px] lg:h-[80px] lg:w-[233px]"
    >
      <ArrowLeftSvg />
    </button>
  );
}

function ArrowSolid({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[44px] w-[110px] items-center justify-center rounded-[89px] bg-white text-[#845CF2] shadow-lg transition hover:scale-[1.02] sm:h-[56px] sm:w-[160px] lg:h-[80px] lg:w-[233px]"
    >
      <ArrowRightSvg />
    </button>
  );
}

/* ================= HELPERS ================= */

const parsePrice = (value: string): number => {
  const cleaned = value.replace(/[^\d.,]/g, "").replace(",", ".");
  const num = Number(cleaned);
  return Number.isNaN(num) ? 0 : num;
};

/* ================= COMPONENT ================= */

export default function ShopCarouselSection({
  title,
  products,
  onAddToCart,
}: Props) {
  const { index, direction, next, prev, getPosition, isActive } = useCarousel({
    length: products.length,
    initialIndex: 1,
  });

  const desktopTrackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = desktopTrackRef.current;
    const activeCard = cardRefs.current[index];

    if (!container || !activeCard) return;

    const containerWidth = container.clientWidth;
    const cardLeft = activeCard.offsetLeft;
    const cardWidth = activeCard.offsetWidth;

    const targetScroll = cardLeft - containerWidth / 2 + cardWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  }, [index]);

  const handleAddProduct = (product: Product): void => {
    onAddToCart?.({
      productId: product.id,
      title: product.title,
      price: parsePrice(product.price),
      quantity: 1,
      image: product.image,
      colorLabel: product.colorLabel ?? "Default",
      colorHex: product.colorHex ?? "#111111",
    });
  };

  return (
    <section className="w-full bg-[#0D0D0D] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mb-30 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-center lg:justify-between">
          <h2
            className="bg-clip-text font-montserrat font-[700] uppercase text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
              fontSize: "clamp(28px, 5vw, 64px)",
            }}
          >
            {title}
          </h2>

          <div className="hidden gap-4 lg:flex">
            <ArrowOutline onClick={prev} />
            <ArrowSolid onClick={next} />
          </div>
        </div>

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
              <LovedCard
                product={products[index]}
                position="center"
                isActive
                onAddToCart={() => handleAddProduct(products[index])}
              />
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  if (i === index) return;
                  if (i > index) next();
                  else prev();
                }}
                className={`rounded-full ${
                  i === index
                    ? "h-[8px] w-[28px] bg-[#8B5CF6]"
                    : "h-[8px] w-[8px] bg-white/25"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div
            ref={desktopTrackRef}
            className="scrollbar-none flex gap-8 overflow-x-auto overflow-y-hidden pt-32"
          >
            {products.map((product, i) => {
              const active = isActive(i);

              return (
                <motion.div
                  key={product.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  animate={{
                    scale: active ? 1.04 : 0.94,
                    y: active ? -18 : 0,
                    opacity: active ? 1 : 0.8,
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -18,
                    opacity: 1,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-[360px] flex-shrink-0 xl:w-[400px]"
                >
                  <LovedCard
                    product={product}
                    position={getPosition(i)}
                    isActive={active}
                    onAddToCart={() => handleAddProduct(product)}
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