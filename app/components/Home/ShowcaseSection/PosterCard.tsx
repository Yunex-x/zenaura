"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PosterCard({
  item,
  active,
}: {
  item: { image: string; tag?: string; quote?: string; cta?: string };
  active?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll‑linked values – animation runs while card enters/exits viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.02, 0.94]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative h-full w-full rounded-sm overflow-hidden bg-[#0B0B0B] ${
        active ? "shadow-[0_30px_60px_rgba(0,0,0,0.6)]" : ""
      }`}
      style={{
        y: cardY,
        opacity: cardOpacity,
        scale: cardScale,
        position: "relative",
      }}
    >
      {/* Poster image */}
      <div className="absolute inset-0">
        <Image
          src={item.image}
          alt={item.tag ?? ""}
          fill
          sizes="(min-width:1280px) 428px, (min-width:768px) 360px, 80vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Tag pill top-left */}
      <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
        <span
          className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-white/80 font-medium"
          style={{ fontSize: "clamp(10px, 1vw, 12px)" }}
        >
          {item.tag}
        </span>
      </div>

      {/* Centered play button */}
      <button
        aria-label="Play testimonial"
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[72px] lg:h-[72px]
          rounded-full bg-black/40 border border-white/10
          flex items-center justify-center backdrop-blur-sm
        "
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className="sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4">
            <path d="M8 5v14l11-7-11-7z" fill="white" />
          </svg>
        </div>
      </button>

      {/* Bottom quote + CTA */}
      <div className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 lg:left-6 lg:right-6 lg:bottom-6 text-left">
        <p
          className="text-white/90 font-medium mb-1.5 sm:mb-2 lg:mb-3"
          style={{
            fontSize: "clamp(13px, 1.6vw, 20px)",
            lineHeight: "1.4",
          }}
        >
          {item.quote}
        </p>
        <button
          className="text-white underline font-medium"
          style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
        >
          {item.cta}
        </button>
      </div>
    </motion.div>
  );
}