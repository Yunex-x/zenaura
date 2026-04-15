"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Product = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  ctaLabel?: string;
};

type Props = {
  product: Product;
  direction: number;
};

/* ── Stagger container for left text ── */
const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

/* ── Individual text element variants ── */
const textItemVariants: Variants = {
  hidden: (dir: number) => ({
    opacity: 0,
    x: dir * -40,
    y: 12,
    filter: "blur(4px)",
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.6,
    },
  },
};

/* ── CTA button variants ── */
const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 16,
      delay: 0.4,
    },
  },
};

/* ── Image variants ── */
const imageVariants: Variants = {
  hidden: (dir: number) => ({
    opacity: 0,
    x: dir * 80,
    scale: 0.85,
    rotate: dir * 3,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.9,
      delay: 0.08,
    },
  },
};

export default function HeroSlide({ product, direction }: Props) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">

      {/* ── Left content with staggered reveal ── */}
      <motion.div
        className="w-full md:w-1/2 max-w-[670px] px-4 sm:px-6 md:pl-6 lg:pl-12"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
        custom={direction}
      >
        {/* Title — split into lines for staggered entrance */}
<motion.h1
  custom={direction}
  variants={textItemVariants}
  className="
    font-montserrat
    font-[600]
    whitespace-pre-line
    tracking-[-0.02em]
    bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)]
    bg-clip-text
    text-transparent
    max-w-[589px]
  "
  style={{
    fontSize: "clamp(34px, 4.1vw, 64px)",
    lineHeight: "clamp(42px, 4.8vw, 78px)",
  }}
>
  {product.title}
</motion.h1>


{product.subtitle && (
  <motion.p
    custom={direction}
    variants={textItemVariants}
className="mt-4 sm:mt-5 lg:mt-6 font-poppins text-white/70 max-w-[760px]"style={{
  fontSize: "18px",
  lineHeight: "44px",
  letterSpacing: "0.02em",
}}  >
    {product.subtitle}
  </motion.p>
)}
        {/* CTA — springs in with glow */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 sm:mt-7 lg:mt-16 mb-[150px]"
        >
 <motion.a
  href="#buy"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="
    inline-flex items-center justify-center
    rounded-full
    font-montserrat font-[700]
    text-white
    bg-[linear-gradient(90deg,#9667FF_0%,#7B5AF5_100%)]
    shadow-[0_8px_24px_rgba(132,92,242,0.28)]
    transition-all duration-300
  "
  style={{
    width: "clamp(180px, 14vw, 211px)",
    height: "clamp(58px, 4.8vw, 68px)",
    fontSize: "clamp(18px, 1.7vw, 22px)",
    lineHeight: "1",
  }}
>
  Buy Now
</motion.a>
        </motion.div>
      </motion.div>

      {/* ── Right visual — spring entrance with floating idle animation ── */}
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end md:pr-6 lg:pr-12">
        <motion.div
          custom={direction}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative flex items-center justify-center"
          style={{
            width: "clamp(260px, 40vw, 700px)",
            height: "clamp(260px, 40vw, 700px)",
          }}
        >
          {/* Soft glow behind the product */}
          <motion.div
            className="absolute inset-[10%] rounded-full pointer-events-none"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0, 0.4, 0.25],
              scale: [0.6, 1.1, 1],
            }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
              delay: 0.3,
            }}
            style={{
              background: "radial-gradient(circle, rgba(132,92,242,0.2) 0%, transparent 70%)",
            }}
          />

          {/* Floating idle animation on the image */}
          <motion.div
            className="relative w-full h-full"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 0.5, 0, -0.5, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              sizes="(min-width:1024px) 640px, 40vw"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}