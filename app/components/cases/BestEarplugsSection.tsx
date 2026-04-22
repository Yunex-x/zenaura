"use client";

import Image from "next/image";
import { JSX } from "react";
import { motion } from "framer-motion";

export default function BestEarplugsSection(): JSX.Element {
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
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  return (
    <motion.section
      className="relative w-full bg-[#0D0D0D] overflow-hidden py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      {/* GLOW */}
      <div className="absolute left-[calc(50%-140px-522px)] top-[250px] w-[280px] h-[220px] bg-[#AA6AFF]/30 blur-[200px]" />

      {/* CONTAINER */}
      <div className="mx-auto w-full mt-16 max-w-[1920px] px-5 md:px-8 lg:px-[150px]">
        {/* TITLE */}
        <motion.h2
          variants={itemVariants}
          className="
            w-full
            max-w-[786px]
            mb-0
            lg:-mb-28
            xl:-mb-34
            2xl:-mb-0
            text-[36px]
            leading-[46px]
            font-bold
            tracking-[0.02em]

            bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)]
            bg-clip-text
            text-transparent

            lg:w-[786px]
            lg:text-[64px]
            lg:leading-[84px]
          "
        >
          Best earplugs for noise sensitivity
        </motion.h2>

        {/* CONTENT */}
        <div
          className="
            mt-[60px]
            flex flex-col items-start gap-8

            md:grid md:grid-cols-[320px_minmax(0,1fr)] md:items-start md:gap-8

            lg:flex lg:flex-row lg:items-start lg:gap-[80px]
          "
        >
          {/* IMAGE */}
          <motion.div
            variants={imageVariants}
            className="
              relative
              w-full
              max-w-[420px]
              h-[420px]
              rounded-[16px]
              overflow-hidden

              md:w-[320px]
              md:max-w-none
              md:h-[465px]

              lg:w-[130vw]
              lg:h-[650px]

              xl:w-[896px]
              xl:h-[938px]
            "
          >

            <Image
              src="/use-cases/earplugs-detail.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 896px"
              className="object-contain"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={textVariants}
            className="
              w-full
              max-w-[420px]
              self-start
              mt-0
              text-[18px]
              leading-[30px]
              font-medium
              text-white/60
              tracking-[0.06em]
              md:max-w-none
              md:min-w-0
              md:text-[18px]
              md:leading-[23px]
              lg:mt-16
              lg:w-[1200px]
              lg:text-[16px]
              lg:leading-[26px]
              xl:mt-28
              xl:text-[30px]
              xl:leading-[34px]
              2xl:-mt-6
              2xl:text-[36px]
              2xl:leading-[60px]
            "
          >
            <p>
              <span className="text-white">
                Unlike foam earplugs that block sound
              </span>{" "}
              Zen Earplugs filter it, making them ideal for noise-sensitive users.
              Their advanced design lets you hear clearly while reducing overall volume.
              <br /><br />

              Choose from different options based on your needs:
              <br /><br />

              <span className="text-white font-semibold">Engage:</span>{" "}
              Reduces everyday background noise for better focus in social settings (16 dB).
              <br /><br />

              <span className="text-white font-semibold">Engage Plus:</span>{" "}
              Adds extra noise reduction for calmer, quieter experiences.
              <br /><br />

              <span className="text-white font-semibold">Switch 2:</span>{" "}
              Offers adjustable sound levels in one device—no apps or batteries required.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}