"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import LovedCard, { Product } from "./LovedCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* controls sized to match design */
function ArrowOutline({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-[233px] h-[80px] rounded-[89px] border border-white/12 flex items-center justify-center text-white/80 hover:border-white/20 transition"
      aria-label="previous"
    >
      <ArrowLeft size={22} />
    </button>
  );
}
function ArrowSolid({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-[233px] h-[80px] rounded-[89px] bg-white flex items-center justify-center shadow-2xl"
      aria-label="next"
    >
      <div className="text-[#845CF2]">
        <ArrowRight size={22} />
      </div>
    </button>
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
  const [index, setIndex] = useState(1); // center index
  const prev = useCallback(() => setIndex((s) => (s - 1 + len) % len), [len]);
  const next = useCallback(() => setIndex((s) => (s + 1) % len), [len]);

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
      {/* Cards row */}
      <div className="w-full flex justify-center">
        <div className="relative grid grid-cols-3 gap-8 px-6">
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
                <LovedCard product={p} position={pos as any} isActive={isActive} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Arrows centered below cards */}
      <div className="relative mt-12 w-full flex items-center justify-center">
        <div className="flex items-center gap-6">
          <ArrowOutline onClick={prev} />
          <ArrowSolid onClick={next} />
        </div>
      </div>

     
    </div>
  );
}