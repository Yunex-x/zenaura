"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FeatureStat({
  title,
  subtitle,
  iconSvg,
  align = "left",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  iconSvg?: React.ReactNode;
  align?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress relative to this card's position in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // animation runs while card enters/exits
  });

  // Scroll‑linked transforms – adjust the ranges to your liking
  const cardY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.02, 0.92]);

  return (
    <motion.div
      ref={ref}
      className={`relative w-full max-w-[362px] ${
        align === "right" ? "text-right ml-auto" : "text-left"
      }`}
      style={{
        y: cardY,
        opacity: cardOpacity,
        scale: cardScale,
      }}
    >
      {/* Icon circle – no extra animation, it moves with the card */}
      <div
        className={`
          w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[64px] lg:h-[64px]
          rounded-full flex items-center justify-center
          bg-white/[0.04] border border-white/[0.06]
          ${align === "right" ? "ml-auto" : ""}
        `}
      >
        <div className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] lg:w-[32px] lg:h-[32px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
          {iconSvg ?? <div className="w-full h-full rounded-sm bg-white/8" />}
        </div>
      </div>

      {/* Text block – also moves with the card, no extra staggered delay */}
      <div className="mt-3 sm:mt-4 lg:mt-5">
        <div
          className="font-montserrat font-semibold text-white tracking-[0.03em]"
          style={{
            fontSize: "clamp(18px, 2.2vw, 32px)",
            lineHeight: "1.22",
          }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            className="mt-2 sm:mt-2.5 lg:mt-3 font-montserrat font-normal text-white/60 tracking-[0.01em]"
            style={{
              fontSize: "clamp(12px, 1.1vw, 14px)",
              lineHeight: "1.43",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </motion.div>
  );
}