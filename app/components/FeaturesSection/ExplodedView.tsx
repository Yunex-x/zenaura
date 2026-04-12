"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * ExplodedView - centered artwork in the middle column
 * Use src prop to swap the exploded image (public/images/exploded.png by default)
 */
export default function ExplodedView({
  src = "/featuresSection/exploded.png",
  alt = "exploded product",
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-[748px] h-[748px] mx-auto pointer-events-none"
    >
      <div className="relative w-full h-full">
        <Image src={src} alt={alt} fill className="object-contain" sizes="748px" priority />
      </div>
    </motion.div>
  );
}