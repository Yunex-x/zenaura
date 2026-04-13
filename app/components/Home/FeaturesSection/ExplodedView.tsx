"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExplodedView({
  src = "/HomePage/featuresSection/exploded.png",
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
      className="
        w-[70vw] h-[70vw]
        max-w-[320px] max-h-[320px]
        sm:max-w-[400px] sm:max-h-[400px]
        md:max-w-[500px] md:max-h-[500px]
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