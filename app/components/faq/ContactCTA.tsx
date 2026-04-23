"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type CTAItem = {
  title: string;
  subtitle: string;
  icon: string;
  buttonLabel: string;
  buttonVariant: "light" | "purple";
};

const items: CTAItem[] = [
  {
    title: "Chat with us",
    subtitle: "Start a chat with our team",
    icon: "/icons/chat.svg",
    buttonLabel: "Explore Now",
    buttonVariant: "light",
  },
  {
    title: "Email Support",
    subtitle: "hello@zenauraplugs.com",
    icon: "/icons/mail.svg",
    buttonLabel: "Explore Now",
    buttonVariant: "purple",
  },
];

export default function ContactCTA() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.92, rotateY: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="flex w-full justify-center py-[80px] lg:py-[120px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      <div className="w-full max-w-[1262px] px-4 sm:px-6 lg:px-0">
        <motion.div
          className="flex flex-col items-center gap-[56px] lg:gap-[88px]"
          variants={containerVariants}
        >
          {/* TITLE */}
          <motion.div variants={titleVariants} className="flex w-full justify-center">
            <h2
              className="bg-clip-text text-center font-montserrat font-[700] text-transparent"
              style={{
                width: "min(669px, 100%)",
                backgroundImage:
                  "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62, 62, 62, 0.21) 143.55%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "clamp(30px, 5vw, 64px)",
                lineHeight: "1.875",
                letterSpacing: "-0.02em",
                textTransform: "capitalize",
              }}
            >
              Still need help?
            </h2>
          </motion.div>

          {/* CARDS */}
          <motion.div
            className="grid w-full grid-cols-1 justify-items-center lg:grid-cols-2"
            variants={containerVariants}
          >
            {items.map((item, i) => (
              <motion.article
                key={i}
                variants={cardVariants}
                className="
                  flex min-h-[114px] w-full max-w-[520px]
                  items-center justify-between gap-4
                  bg-[#1B1A1A] px-4 py-4
                  sm:px-5
                  lg:min-h-[112px] lg:px-5 lg:py-3
                "
              >
                {/* LEFT */}
                <div className="flex min-w-0 flex-1 flex-col items-start gap-[12px]">
                  <div
                    className="
                      flex h-[40px] w-[40px] items-center justify-center
                      rounded-[12px] border border-white/20 bg-white/[0.01]
                    "
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-[6px]">
                    <h3 className="font-poppins text-[16px] font-medium leading-[24px] text-white">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-[14px] leading-[21px] tracking-[0.02em] text-white/60">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="button"
                  className={`
                    flex h-[36px] w-[126px] shrink-0 items-center justify-center
                    rounded-[40px] font-poppins text-[14px] font-semibold
                    leading-[21px] tracking-[0.02em]
                    transition-transform duration-300 hover:scale-[1.03]
                    sm:h-[40px] sm:w-[138px]
                    lg:h-[64px] lg:w-[187px] lg:text-[16px] lg:leading-[24px]
                    ${
                      item.buttonVariant === "light"
                        ? "bg-white text-[#845CF2]"
                        : "bg-[#845CF2] text-white"
                    }
                  `}
                >
                  {item.buttonLabel}
                </button>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}