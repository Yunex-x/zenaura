"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqItems = [
  {
    id: 1,
    question: "Live chat",
    answer: "Open daily, 3:00 AM – 9:00 PM CET.",
  },
  {
    id: 2,
    question: "Meet Aura",
    answer:
      "Our AI agent is the quickest and easiest way to get help. If Aura can't solve it, a Customer Happiness Champion will jump in.",
  },
  {
    id: 3,
    question: "Your chat may move to email",
    answer:
      "If chat is busy, we'll turn your message into an email ticket so you don't need to wait around. Don't worry, it'll still be top priority.",
  },
  {
    id: 4,
    question: "Stay on one thread",
    answer:
      "First-in, first-out. Please stick to one email thread so we can help you faster. If you need to add details, you can always reply on the same ticket.",
  },
  {
    id: 5,
    question: "Email response times",
    answer:
      "We'll aim to answer you within three business days. This may be a little longer during busier periods, but we make sure we reply to everyone.",
  },
];

function ArrowIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="w-8 h-8 rounded-full bg-white/[0.01] flex items-center justify-center flex-shrink-0"
    >
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
      >
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

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  function toggleItem(id: number) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="w-full flex justify-center py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1262px] px-4 flex flex-col items-center gap-14 sm:gap-16 lg:gap-[88px]">
        {/* Title */}
        <h2
          className="w-full text-center font-montserrat font-[700] uppercase bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62, 62, 62, 0.21) 143.55%)",
            fontSize: "clamp(28px, 5vw, 64px)",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="w-full flex flex-col gap-8 sm:gap-10 lg:gap-[61px]">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="w-full">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left flex items-center justify-between gap-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-montserrat font-[600] text-white text-[18px] sm:text-[22px] lg:text-[24px] leading-[1.2]">
                    {item.question}
                  </span>

                  <ArrowIcon isOpen={isOpen} />
                </button>

                <div className="mt-6 border-b border-white/40" />

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 text-white/60 font-montserrat font-[400] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] tracking-[0.02em] max-w-[808px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}