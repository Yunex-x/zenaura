"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const faqItems = [
  {
    id: 1,
    question: "What makes Zen earplugs different from foam earplugs?",
    answer:
      "Unlike foam earplugs that block all sound, Zen earplugs filter noise – reducing volume while keeping clarity. They're reusable, comfortable for all-day wear, and designed for noise sensitivity.",
  },
  {
    id: 2,
    question: "Can I wear Zen earplugs while sleeping?",
    answer:
      "Yes! Our Sleep & Rest models are designed for side sleepers with a soft, low-profile fit. They stay comfortable all night.",
  },
  {
    id: 3,
    question: "How do I clean my Zen earplugs?",
    answer:
      "Simply wash them with mild soap and warm water, then let them air dry. Do not use alcohol or abrasive cleaners.",
  },
  {
    id: 4,
    question: "Do Zen earplugs work for concerts?",
    answer:
      "Absolutely. Our Concert & Events models provide even noise reduction (up to 21 dB) while preserving music quality – perfect for festivals and gigs.",
  },
];

function ArrowIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.01]"
    >
      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M5 8L10 13L15 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export default function StaticFAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(faqItems[0]?.id || null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="flex w-full justify-center py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      <div className="flex w-full max-w-[1262px] flex-col items-center gap-14 px-4 sm:gap-16 lg:gap-[88px]">
        <motion.h2
          variants={titleVariants}
          className="w-full bg-clip-text text-center text-transparent font-montserrat font-[700] uppercase"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62, 62, 62, 0.21) 143.55%)",
            fontSize: "clamp(28px, 5vw, 64px)",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="flex w-full flex-col gap-8 sm:gap-10 lg:gap-[61px]"
          variants={containerVariants}
        >
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div key={item.id} variants={itemVariants} className="w-full">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[18px] leading-[1.2] text-white font-montserrat font-[600] sm:text-[22px] lg:text-[24px]">
                    {item.question}
                  </span>
                  <ArrowIcon isOpen={isOpen} />
                </button>

                <div className="mt-6 border-b border-white/40" />

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[808px] pt-6 text-[16px] leading-[1.5] tracking-[0.02em] text-white/60 font-montserrat font-[400] sm:text-[18px] lg:text-[20px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}