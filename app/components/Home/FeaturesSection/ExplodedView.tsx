"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExplodedView({
  src = "/HomePage/featuresSection/exploded.png",
  alt = "exploded product",
}: {
  src?: string;
  alt?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress relative to this component’s position in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // animates while entering/exiting
  });

  // Scroll‑linked transforms
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      // Existing entrance animation (runs once on mount)
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      // Scroll‑linked values applied via style (they update continuously)
      style={{ y, scale, opacity }}
      className="
        w-[88vw] h-[88vw]
        max-w-[560px] max-h-[560px]
        sm:w-[82vw] sm:h-[82vw]
        sm:max-w-[640px] sm:max-h-[640px]
        md:w-[70vw] md:h-[70vw]
        md:max-w-[760px] md:max-h-[760px]
        lg:max-w-[600px] lg:max-h-[600px]
        xl:max-w-[748px] xl:max-h-[748px]
        mx-auto pointer-events-none
      "
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(min-width:1280px) 748px, (min-width:1024px) 600px, (min-width:768px) 500px, 70vw"
          priority
        />
      </div>
    </motion.div>
  );
}