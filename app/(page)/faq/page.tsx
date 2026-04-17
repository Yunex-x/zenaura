"use client";

import React, { useEffect, useMemo, useState } from "react";
import ContactCTA from "@/app/components/faq/ContactCTA";
import FAQAccordion from "@/app/components/faq/FAQAccordion";
import FAQHero from "@/app/components/faq/FAQHero";
import HelpCategories from "@/app/components/faq/HelpCategories";
import OtherContacts from "@/app/components/faq/OtherContacts";
import Footer from "@/app/components/ui/Footer";
import Navbar from "@/app/components/ui/Navbar";

export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
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

export default function FAQPage() {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const [focusedResultId, setFocusedResultId] = useState<number | null>(null);

  useEffect(() => {
    const trimmed = search.trim();

    if (!trimmed) {
      setIsSearching(false);
      setDebouncedSearch("");
      setFocusedResultId(null);
      return;
    }

    setIsSearching(true);

    const timer = window.setTimeout(() => {
      setDebouncedSearch(trimmed);

      const normalized = trimmed.toLowerCase();

      const firstMatch =
        faqItems.find(
          (item) =>
            item.question.toLowerCase().includes(normalized) ||
            item.answer.toLowerCase().includes(normalized)
        ) ?? null;

      setFocusedResultId(firstMatch ? firstMatch.id : null);
      setIsSearching(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (focusedResultId !== null) {
      document.getElementById("faq-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [focusedResultId]);

  const filteredItems = useMemo(() => {
    const normalized = debouncedSearch.toLowerCase();

    if (!normalized) return faqItems;

    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(normalized) ||
        item.answer.toLowerCase().includes(normalized)
    );
  }, [debouncedSearch]);

  const focusedItem =
    focusedResultId !== null
      ? faqItems.find((item) => item.id === focusedResultId) ?? null
      : null;

  const handleExitSearch = () => {
    setSearch("");
    setDebouncedSearch("");
    setFocusedResultId(null);
    setIsSearching(false);

    document.getElementById("faq-top")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      id="faq-top"
      className="relative w-full min-h-screen overflow-x-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-[400px] h-[664px] w-[446px] -translate-x-1/2 rounded-full blur-[420px]"
          style={{ background: "rgba(170,106,255,0.37)" }}
        />

        <div
          className="absolute left-[-600px] top-[1400px] h-[1500px] w-[520px] blur-[400px]"
          style={{
            background: "rgba(170,106,255,0.17)",
            transform: "rotate(45deg)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <FAQHero
          search={search}
          onSearchChange={setSearch}
          isSearching={isSearching}
          hasFocusedResult={!!focusedItem}
          onExitSearch={handleExitSearch}
        />

        {!focusedItem && debouncedSearch === "" ? (
          <>
            <HelpCategories />
            <FAQAccordion
              id="faq-results"
              items={faqItems}
              search=""
              title="Frequently Asked Questions"
              emptyMessage="No questions found."
            />
            <ContactCTA />
            <OtherContacts />
          </>
        ) : focusedItem ? (
          <FAQAccordion
            id="faq-results"
            items={[focusedItem]}
            search={debouncedSearch}
            title="Search Result"
            emptyMessage="No questions found."
            singleOpen
          />
        ) : (
          <FAQAccordion
            id="faq-results"
            items={filteredItems}
            search={debouncedSearch}
            title="No Exact Match"
            emptyMessage="No questions found."
            singleOpen={false}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}