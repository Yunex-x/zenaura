"use client";

import Image from "next/image";
import { JSX } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.94, x: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

export default function ZenQuietSection(): JSX.Element {
  return (
    <motion.section
      className="w-full bg-[#0D0D0D] py-12 md:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        {/* Breadcrumb */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs text-white/70 md:text-sm">
          <span>Use Cases</span>
          <ChevronRight className="h-4 w-4 text-white" />
          <span className="text-white">Noise Reducing</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="
            mt-4
            max-w-[340px]
            bg-gradient-to-r from-white to-[#3E3E3E]
            bg-clip-text
            text-[28px]
            font-semibold
            leading-[36px]
            tracking-[0.02em]
            text-transparent

            sm:max-w-[420px] sm:text-[32px] sm:leading-[42px]

            md:max-w-[520px] md:text-[34px] md:leading-[54px]

            lg:max-w-[700px] lg:text-[46px] lg:leading-[60px]

            xl:max-w-[786px] xl:text-[44px] xl:leading-[64px]
          "
        >
          Noise-reducing earplugs
          <br />
          for sensitive hearing
        </motion.h2>

        {/* Content */}
        <div
          className="
            mt-8
            flex flex-col gap-8
            md:flex-row md:items-start md:gap-16
          "
        >
          {/* Image - added mb-8 on mobile, remove on desktop */}
          <motion.div
            variants={imageVariants}
            className="w-full md:w-[50%] flex justify-center md:justify-start mb-8 md:mb-0"
          >
            <div
              className="
                relative
                w-[260px] h-[260px]

                sm:w-[300px] sm:h-[300px]

                md:w-[420px] md:h-[520px]

                lg:w-[520px] lg:h-[700px]

                xl:w-[645px] xl:h-[884px]

                overflow-hidden rounded-2xl
              "
            >
              <Image
                src="/use-cases/noise-reducing.png"
                alt="Noise reducing earplugs"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={textVariants}
            className="
              w-full
              max-w-[500px]

              md:max-w-none md:w-[50%] md:pt-[60px]
              lg:pt-[80px]
            "
          >
            <p
              className="
                font-montserrat

                text-[15px] leading-[24px]
                text-white/80
                -mt-16
                sm:text-[16px] sm:leading-[26px]

                md:text-[18px] md:leading-[26px]

                lg:text-[22px] lg:leading-[39px]

                xl:text-[28px] xl:leading-[48px]
              "
            >
              <span className="text-white font-medium">
                The world is full of noise—from conversations
              </span>{" "}
              and commutes to traffic, cafés, and parks. For people sensitive to
              sound, this can be difficult to manage.
              <br /><br />
              Noise sensitivity varies. Some find everyday sounds like chewing
              unbearable, while others are only affected by louder noises like
              concerts or sudden shouting.
              <br /><br />
              This sensitivity can make daily life challenging, holding you back
              from fully enjoying experiences.
              <br /><br />
              Earplugs for sensitive ears offer a simple solution, helping reduce
              noise so you can enjoy life more comfortably.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}