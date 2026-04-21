"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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

/* ── Stagger container for left text (unchanged) ── */
const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

/* ── Individual text element variants (unchanged) ── */
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

/* ── CTA button variants (unchanged) ── */
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

/* ── Image variants (unchanged) ── */
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

function ArrowLeftSvg() { /* unchanged */ }
function ArrowRightSvg() { /* unchanged */ }

export default function HeroSlide({ product, direction }: Props) {
  // ── Scroll‑linked animation setup ──
  const slideRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["start end", "end start"], // animation runs while slide enters/exits viewport
  });

  // Transform values based on scroll progress
  const slideY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textX = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const leftGlowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);
  const rightGlowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <div ref={slideRef} className="relative w-full">
      {/* ================= MOBILE ================= */}
      <motion.div
        className="relative mx-auto block h-[374px] w-full max-w-[393px] overflow-hidden md:hidden"
        style={{ y: slideY }} // whole mobile slide moves vertically with scroll
      >
        {/* left glow with scroll‑linked opacity */}
        <motion.div
          className="absolute left-[-18px] top-[52px] h-[120px] w-[34px] rotate-[75deg] bg-[rgba(170,106,255,0.14)] blur-[42px]"
          style={{ opacity: leftGlowOpacity }}
        />
        {/* right glow with scroll‑linked scale */}
        <motion.div
          className="absolute right-[36px] top-[76px] h-[155px] w-[155px] rounded-full bg-[rgba(170,106,255,0.28)] blur-[72px]"
          style={{ scale: rightGlowScale }}
        />

        {/* text container – existing animations untouched, but container moves horizontally with scroll */}
        <motion.div
          className="absolute left-[16px] top-[58px] z-20 w-[178px]"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          custom={direction}
          style={{ x: textX }}
        >
          <motion.h1
            custom={direction}
            variants={textItemVariants}
            className="font-montserrat font-semibold text-white tracking-[0.04em] leading-[0.98] text-[21px]"
          >
            {product.title}
          </motion.h1>

          {product.subtitle && (
            <motion.p
              custom={direction}
              variants={textItemVariants}
              className="mt-[24px] font-poppins text-white/58 text-[12px] leading-[1.55] tracking-[0.02em]"
            >
              {product.subtitle}
            </motion.p>
          )}

          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            className="mt-[34px]"
          >
            <motion.a
              href="#buy"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-[43px] w-[138px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#9667FF_0%,#7B5AF5_100%)] font-montserrat text-[16px] font-bold text-white shadow-[0_10px_30px_rgba(132,92,242,0.22)]"
            >
              Buy Now
            </motion.a>
          </motion.div>
        </motion.div>

        {/* product visual – existing floating animation kept, plus scroll‑linked horizontal movement */}
        <motion.div
          custom={direction}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="absolute right-[-2px] top-[42px] z-10 h-[338px] w-[212px]"
          style={{ x: imageX }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={{
              y: [0, -6, 0],
              rotate: [0, 0.4, 0, -0.4, 0],
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
              priority
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              sizes="212px"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ================= DESKTOP ================= */}
      <motion.div
        className="hidden w-full md:flex flex-row items-center justify-between gap-6 sm:gap-8"
        style={{ y: slideY }} // whole desktop container moves vertically with scroll
      >
        {/* Left content with scroll‑linked horizontal shift */}
        <motion.div
          className="w-full md:w-1/2 max-w-[670px] px-4 sm:px-6 md:pl-6 lg:pl-12"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          custom={direction}
          style={{ x: textX }}
        >
          <motion.h1
            custom={direction}
            variants={textItemVariants}
            className="font-montserrat font-[600] whitespace-pre-line tracking-[-0.02em] bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)] bg-clip-text text-transparent max-w-[589px]"
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
              className="mt-4 sm:mt-5 lg:mt-6 font-poppins text-white/70 max-w-[760px]"
              style={{
                fontSize: "18px",
                lineHeight: "44px",
                letterSpacing: "0.02em",
              }}
            >
              {product.subtitle}
            </motion.p>
          )}

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
              className="inline-flex items-center justify-center rounded-full font-montserrat font-[700] text-white bg-[linear-gradient(90deg,#9667FF_0%,#7B5AF5_100%)] shadow-[0_8px_24px_rgba(132,92,242,0.28)] transition-all duration-300"
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

        {/* Right visual with scroll‑linked horizontal movement */}
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
              x: imageX,
            }}
          >
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
                background:
                  "radial-gradient(circle, rgba(132,92,242,0.2) 0%, transparent 70%)",
              }}
            />

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
      </motion.div>
    </div>
  );
}