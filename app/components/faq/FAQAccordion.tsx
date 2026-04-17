"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FAQItem } from "@/app/faq/page";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text: string, query: string) {
  const trimmed = query.trim();

  if (!trimmed) return text;

  const safeQuery = escapeRegExp(trimmed);
  const regex = new RegExp(`(${safeQuery})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === trimmed.toLowerCase() ? (
      <span
        key={`${part}-${index}`}
        className="rounded bg-[#845CF2]/35 px-1 text-white shadow-[0_0_8px_rgba(132,92,242,0.35)]"
      >
        {part}
      </span>
    ) : (
      <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
    )
  );
}

function ArrowIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.01]"
    >
      <svg
        className="h-5 w-5 text-white"
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

export default function FAQAccordion({
  id,
  items,
  search,
  title = "Frequently Asked Questions",
  emptyMessage = "No questions found.",
  singleOpen = false,
}: {
  id?: string;
  items: FAQItem[];
  search: string;
  title?: string;
  emptyMessage?: string;
  singleOpen?: boolean;
}) {
  const [openId, setOpenId] = useState<number | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) {
      setOpenId(null);
      return;
    }

    if (singleOpen) {
      setOpenId(items[0].id);
      return;
    }

    const currentStillExists = items.some((item) => item.id === openId);
    if (!currentStillExists) {
      setOpenId(items[0].id);
    }
  }, [items, openId, singleOpen]);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id={id} className="flex w-full justify-center py-16 sm:py-20 lg:py-24">
      <div className="flex w-full max-w-[1262px] flex-col items-center gap-14 px-4 sm:gap-16 lg:gap-[88px]">
        <h2
          className="w-full bg-clip-text text-center text-transparent font-montserrat font-[700] uppercase"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62, 62, 62, 0.21) 143.55%)",
            fontSize: "clamp(28px, 5vw, 64px)",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>

        <div className="flex w-full flex-col gap-8 sm:gap-10 lg:gap-[61px]">
          {items.length === 0 ? (
            <p className="text-center text-[16px] text-white/60 sm:text-[18px] lg:text-[20px]">
              {emptyMessage}
            </p>
          ) : (
            items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="w-full">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="text-[18px] leading-[1.2] text-white font-montserrat font-[600] sm:text-[22px] lg:text-[24px]">
                      {highlightText(item.question, search)}
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
                        <p className="max-w-[808px] pt-6 text-[16px] leading-[1.5] tracking-[0.02em] text-white/60 font-montserrat font-[400] sm:text-[18px] lg:text-[20px]">
                          {highlightText(item.answer, search)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}