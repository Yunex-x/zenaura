"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FAQHero({
  search,
  onSearchChange,
  isSearching,
  hasFocusedResult,
  onExitSearch,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  isSearching: boolean;
  hasFocusedResult: boolean;
  onExitSearch: () => void;
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const searchVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, delay: 0.2 },
    },
    pulse: {
      scale: [1, 1.02, 1],
      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
    },
  };

  return (
    <motion.section
      className="flex w-full justify-center pt-20 sm:pt-24 lg:pt-[120px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      <div className="flex w-full max-w-[792px] flex-col items-center gap-16 px-4 sm:gap-20">
        <div className="flex w-full flex-col items-center gap-10 text-center sm:gap-14">
          <motion.h1
            variants={itemVariants}
            className="bg-clip-text text-transparent font-montserrat font-[700] uppercase"
            style={{
              backgroundImage:
                "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
              fontSize: "clamp(28px, 5vw, 64px)",
              lineHeight: "1.4",
              letterSpacing: "-0.03em",
            }}
          >
            Question? We’re all ears
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-[456px] text-[16px] leading-[1.8] tracking-[0.02em] text-white/60 sm:text-[18px] lg:text-[20px]"
          >
            Find quick answers about ZENAURA earplugs, orders, and support.
          </motion.p>
        </div>

        <motion.div
          variants={searchVariants}
          whileHover="pulse"
          className="w-full max-w-[748px]"
        >
          <div className="flex h-[60px] w-full items-center rounded-[14px] border border-white/10 bg-white/8 px-5 sm:h-[70px] sm:px-6 lg:h-[80px]">
            <div className="flex w-full items-center gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-white/40 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 20L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>

              <input
                type="text"
                value={search || ""}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-transparent text-[16px] text-white outline-none placeholder:text-white/40 sm:text-[18px]"
              />

              {isSearching && (
                <span className="h-4 w-4 flex-shrink-0 animate-spin rounded-full border border-white/30 border-t-white" />
              )}

              {hasFocusedResult && !isSearching && (
                <button
                  type="button"
                  onClick={onExitSearch}
                  className="flex-shrink-0 rounded-full border border-white/15 px-3 py-1.5 text-[12px] text-white/80 transition hover:border-white/30 hover:text-white sm:text-[13px]"
                >
                  Exit
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}