import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string; // public path e.g. /images/product-1.png
  ctaLabel?: string;
};

type Props = {
  product: Product;
  direction: number; // used by parent to animate entry direction
};

/**
 * HeroSlide - presentational slide component
 * - Provides layout: left text/CTA, right large product image
 * - Uses framer-motion's motion.div children for subtle entrance/exit micro-animations
 */
export default function HeroSlide({ product, direction }: Props) {
  // direction: 1 = forward, -1 = backward (for subtle image offset)
  const imgOffset = direction * 40;

  return (
    <div className="w-full flex items-center justify-between gap-8">
      {/* Left content */}
      <div className="w-1/2 max-w-[670px] pl-12">
        <motion.h1
          key={product.id + "-title"}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="font-montserrat font-[700] text-[56px] leading-[72px] text-white tracking-[-0.02em] md:text-[64px] lg:text-[72px]"
        >
          {product.title}
        </motion.h1>

        {product.subtitle && (
          <motion.p
            key={product.id + "-subtitle"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ delay: 0.06, duration: 0.45 }}
            className="mt-6 font-poppins text-[18px] text-white/70 max-w-[540px] leading-[30px]"
          >
            {product.subtitle}
          </motion.p>
        )}

        {product.description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="mt-6 font-poppins text-[16px] text-white/60 max-w-[520px] leading-[28px]"
          >
            {product.description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="mt-8"
        >
          <a
            href="#buy"
            className="inline-block bg-[#845CF2] hover:bg-[#6e44db] text-white font-montserrat font-[700] text-[16px] px-8 py-4 rounded-[36px] shadow-lg"
          >
            {product.ctaLabel ?? "Buy Now"}
          </a>
        </motion.div>
      </div>

      {/* Right visual */}
      <div className="w-1/2 flex items-center justify-end pr-12">
        <motion.div
          key={product.id + "-image"}
          initial={{ opacity: 0, x: imgOffset, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -imgOffset, scale: 0.96 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative w-[520px] h-[520px] md:w-[640px] md:h-[640px] lg:w-[700px] lg:h-[700px] flex items-center justify-center"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(min-width:1024px) 640px, 80vw"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}