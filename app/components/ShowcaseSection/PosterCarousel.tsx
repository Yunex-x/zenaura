"use client";

import React, { useCallback, useMemo, useState } from "react";
import PosterCard from "./PosterCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* Mock items — replace image paths with your actual images in public/images/ */
const ITEMS = [
  { id: "1", tag: "ZEN QUITE 2", quote: "“The shape of the product simply changed my listening”", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
  { id: "2", tag: "ZEN SWITCH 2", quote: "“The shape of the product simply changed my listening”", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
  { id: "3", tag: "ZEN DREAM", quote: "“The shape of the product simply changed my listening”", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
  { id: "4", tag: "ZEN QUITE 2", quote: "“The shape of the product simply changed my listening”", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
  { id: "5", tag: "ZEN SWITCH 2", quote: "“The shape of the product simply changed my listening”", cta: "Buy Zen Switch2 Now", image: "/ShowcaseSection/showcase-poster.png" },
];

export default function PosterCarousel({ items = ITEMS }: { items?: typeof ITEMS }) {
  const data = useMemo(() => items, [items]);
  const [index, setIndex] = useState<number>(2); // center on third item by default

  const prev = useCallback(() => setIndex((s) => Math.max(0, s - 1)), []);
  const next = useCallback(() => setIndex((s) => Math.min(data.length - 1, s + 1)), [data.length]);

  return (
    <div className="relative">
      {/* Top-right arrow controls */}
      <div className="absolute right-0 -top-10 flex items-center gap-6">
        <button
          onClick={prev}
          aria-label="previous"
          className="w-[233px] h-[80px] rounded-[89px] border border-white/12 flex items-center justify-center text-white/80 hover:border-white/20 transition"
        >
          <ArrowLeft size={22} />
        </button>

        <button
          onClick={next}
          aria-label="next"
          className="w-[233px] h-[80px] rounded-[89px] bg-white flex items-center justify-center shadow-2xl"
        >
          <div className="text-[#845CF2]">
            <ArrowRight size={22} />
          </div>
        </button>
      </div>

      {/* Carousel viewport */}
      <div className="w-full overflow-visible">
        <div className="flex items-center justify-center gap-8 select-none">
          {data.map((item, i) => {
            const distance = Math.abs(i - index);
            const isCenter = distance === 0;
            const isNear = distance === 1;

            // Tailwind-only class variants for size/opacity/translation
            const sizeClass = isCenter ? "w-[428px] h-[715px]" : isNear ? "w-[360px] h-[600px]" : "w-[300px] h-[500px]";
            const translateClass = isCenter ? "-translate-y-4" : "translate-y-0";
            const scaleClass = isCenter ? "scale-100" : isNear ? "scale-90" : "scale-75";
            const opacityClass = isCenter ? "opacity-100" : isNear ? "opacity-60" : "opacity-20";
            const zClass = isCenter ? "z-40" : "z-10";

            return (
              <div
                key={item.id}
                className={`flex-shrink-0 ${sizeClass} ${translateClass} ${scaleClass} ${opacityClass} ${zClass} transition-all duration-300 ease-out`}
                role="group"
              >
                <PosterCard item={item} active={isCenter} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Pager dots */}
      <div className="mt-8 flex justify-center gap-3">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}