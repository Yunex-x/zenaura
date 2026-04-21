"use client";

import { JSX } from "react";
import { motion } from "framer-motion";

export default function BannerSection(): JSX.Element {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      <div
        className="
          relative
          w-full
          h-[300px]

          sm:h-[500px]
          md:h-[500px]
          lg:h-[700px]
          xl:h-[900px]
          2xl:h-[1500px]

          bg-[#F3F3F3]
          overflow-hidden
        "
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="
            absolute inset-0
            bg-[url('/use-cases/bg.png')]
            bg-cover
            bg-top
          "
        />

        {/* OPTIONAL OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT (you can add text/CTA here) */}
        <div className="relative z-10 h-full flex items-center justify-center">
          {/* Optional: add a title or button */}
        </div>
      </div>
    </motion.section>
  );
}