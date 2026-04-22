"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const rows = [
  "Reduces background noise",
  "Earplugs for every occasion",
  "Reusable and durable",
  "Comfy & customizable fit",
  "Dozens of bold colors",
  "2-year warranty",
];

export default function ZenDifferenceSection(): JSX.Element {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  const tableVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
    },
  };

  return (
    <motion.section
      className="w-full overflow-hidden bg-black py-14 md:py-16 lg:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-10 xl:px-16">
        <div className="relative mx-auto max-w-[1180px]">
          {/* TITLE */}
          <motion.h2
            variants={titleVariants}
            className="
              text-center font-bold tracking-[-0.02em]
              text-[28px] leading-[1.15]
              md:text-[40px] md:leading-[1.15]
              lg:text-[52px] lg:leading-[1.12]
              xl:text-[58px] xl:leading-[1.1]
              bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)]
              bg-clip-text text-transparent
            "
          >
            The Zen Difference
          </motion.h2>

          <div className="relative mt-8 md:mt-10 lg:mt-14">
            {/* =======================
                DECORATIVE IMAGES
                always behind table
                ======================= */}

            {/* top right */}
            <motion.div
              variants={imageVariants}
              className="pointer-events-none absolute -right-[18px] -top-[42px] z-0 h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] lg:-right-[110px] lg:-top-[90px] lg:h-[210px] lg:w-[210px] xl:-right-[130px] xl:-top-[110px] xl:h-[250px] xl:w-[250px]"
            >
              <Image
                src="/use-cases/zen-diff-top.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 250px"
                className="object-contain scale-x-[-1]"
              />
            </motion.div>

            {/* bottom left */}
            <motion.div
              variants={imageVariants}
              className="pointer-events-none absolute -bottom-[34px] -left-[28px] z-0 h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] lg:-bottom-[70px] lg:-left-[55px] lg:h-[110px] lg:w-[110px] xl:-bottom-[90px] xl:-left-[70px] xl:h-[140px] xl:w-[140px]"
            >
              <Image
                src="/use-cases/zen-diff-bottom.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 140px"
                className="object-contain"
              />
            </motion.div>

            {/* =======================
                MOBILE / TABLET
                ======================= */}
            <motion.div
              variants={tableVariants}
              className="relative z-20 rounded-[16px] bg-[#1B1A1A] px-3 pb-4 pt-12 sm:px-4 lg:hidden"
            >
              {/* headers */}
              <div className="absolute left-3 right-3 top-4 z-30 grid grid-cols-[1fr_98px_76px] items-center sm:left-4 sm:right-4">
                <div className="bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)] bg-clip-text font-['Space_Grotesk'] text-[14px] font-medium tracking-[-0.02em] text-transparent sm:text-[15px]">
                  Features
                </div>

                <div className="text-center bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)] bg-clip-text font-['Space_Grotesk'] text-[14px] font-medium tracking-[-0.02em] text-transparent sm:text-[15px]">
                  The Zen
                </div>

                <div className="text-center bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)] bg-clip-text font-['Space_Grotesk'] text-[14px] font-medium tracking-[-0.02em] text-transparent sm:text-[15px]">
                  Foamies
                </div>
              </div>

              <div className="relative z-20 grid grid-cols-[1fr_98px_76px] gap-0">
                {/* purple middle column background */}
                <div className="pointer-events-none absolute bottom-0 left-[calc(100%-174px)] top-0 z-0 w-[98px] rounded-[16px] bg-[#845CF2]/[0.04]" />

                {rows.map((row, index) => (
                  <motion.div
                    key={row}
                    variants={itemVariants}
                    className="contents"
                  >
                    {/* feature text */}
                    <div
                      className={`relative z-20 flex min-h-[62px] items-center border-b border-[rgba(93,93,93,0.16)] pr-3 ${index === rows.length - 1 ? "border-b-0" : ""
                        }`}
                    >
                      <p className="max-w-[132px] font-[Poppins] text-[14px] font-medium leading-[22px] text-white sm:max-w-[160px]">
                        {row}
                      </p>
                    </div>

                    {/* zen check */}
                    <div
                      className={`relative z-20 flex min-h-[62px] items-center justify-center border-b border-[rgba(93,93,93,0.16)] ${index === rows.length - 1 ? "border-b-0" : ""
                        }`}
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#882EFF]">
                        <Check className="h-3.5 w-3.5 text-black" strokeWidth={3} />
                      </div>
                    </div>

                    {/* foamies check */}
                    <div
                      className={`relative z-20 flex min-h-[62px] items-center justify-center border-b border-[rgba(93,93,93,0.16)] ${index === rows.length - 1 ? "border-b-0" : ""
                        }`}
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                        <Check
                          className="h-3.5 w-3.5 text-black/60"
                          strokeWidth={3}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =======================
                DESKTOP LG / XL
                ======================= */}
            <motion.div
              variants={tableVariants}
              className="relative z-20 hidden rounded-[24px] bg-[#1B1A1A] px-8 py-8 lg:block xl:rounded-[28px] xl:px-10 xl:py-10"
            >
              <div className="grid grid-cols-[minmax(320px,1fr)_220px_120px] gap-8 xl:grid-cols-[minmax(360px,1fr)_250px_140px] xl:gap-10">
                {/* LEFT */}
                <div>
                  <h3 className="bg-gradient-to-r from-white to-[#3E3E3E] bg-clip-text text-[22px] leading-[1.2] text-transparent xl:text-[26px]">
                    The Zen Difference
                  </h3>

                  <div className="mt-8 flex flex-col gap-0 xl:mt-10">
                    {rows.map((row, index) => (
                      <motion.div
                        key={row}
                        variants={itemVariants}
                        className={`border-b border-black/20 py-5 text-[18px] font-semibold text-white xl:py-6 xl:text-[20px] ${index === rows.length - 1 ? "border-b-0 pb-0" : ""
                          }`}
                      >
                        {row}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* MIDDLE */}
                <div>
                  <h3 className="text-center bg-gradient-to-r from-white to-[#3E3E3E] bg-clip-text text-[22px] leading-[1.2] text-transparent xl:text-[26px]">
                    The Zen Difference
                  </h3>

                  <div className="mt-8 rounded-[16px] bg-[#845CF2]/5 py-6 xl:mt-10 xl:py-7">
                    <div className="flex flex-col items-center gap-[36px] xl:gap-[40px]">
                      {rows.map((row) => (
                        <motion.div
                          key={row}
                          variants={itemVariants}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#882EFF] xl:h-8 xl:w-8"
                        >
                          <Check className="h-3.5 w-3.5 text-black xl:h-4 xl:w-4" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <h3 className="text-center bg-gradient-to-r from-white to-[#3E3E3E] bg-clip-text text-[22px] leading-[1.2] text-transparent xl:text-[26px]">
                    Foamies
                  </h3>

                  <div className="mt-8 xl:mt-10">
                    <div className="flex flex-col items-center gap-[36px] xl:gap-[40px]">
                      {rows.map((row) => (
                        <motion.div
                          key={row}
                          variants={itemVariants}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 xl:h-8 xl:w-8"
                        >
                          <Check className="h-3.5 w-3.5 text-black/60 xl:h-4 xl:w-4" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* end desktop */}
          </div>
        </div>
      </div>
    </motion.section>
  );
}