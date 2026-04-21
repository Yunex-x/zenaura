"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExploreCard, { Item } from "./ExploreCard";

type PositionedItem = Item & {
  x: number;
  y: number;
};

const ITEMS: PositionedItem[] = [
  {
    id: "1",
    image: "/HomePage/ExploreMore/explore-1.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    width: "300px",
    aspectRatio: "300 / 220",
    x: -420,
    y: 140,
  },
  {
    id: "2",
    image: "/HomePage/ExploreMore/explore-4.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    width: "300px",
    aspectRatio: "300 / 220",
    x: -220,
    y: -110,
  },
  {
    id: "3",
    image: "/HomePage/ExploreMore/explore-2.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    width: "300px",
    aspectRatio: "300 / 220",
    x: 0,
    y: 0,
  },
  {
    id: "4",
    image: "/HomePage/ExploreMore/explore-3.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    width: "300px",
    aspectRatio: "300 / 220",
    x: 420,
    y: -100,
  },
  {
    id: "5",
    image: "/HomePage/ExploreMore/explore-5.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    width: "300px",
    aspectRatio: "300 / 220",
    x: 320,
    y: 170,
  },
];

function ArrowOutline({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Previous"
      className="rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
      style={{
        width: "clamp(80px, 13vw, 184px)",
        height: "clamp(40px, 5vw, 72px)",
      }}
    >
      ←
    </button>
  );
}

function ArrowSolid({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Next"
      className="rounded-full bg-white flex items-center justify-center text-[#8E52FF] transition-all duration-300 hover:scale-[1.03]"
      style={{
        width: "clamp(80px, 13vw, 184px)",
        height: "clamp(40px, 5vw, 72px)",
      }}
    >
      →
    </button>
  );
}

function Dots({
  total,
  current,
  onChange,
}: {
  total: number;
  current: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`rounded-full transition-all duration-300 ${
            i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}

export default function ExploreMore() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [direction, setDirection] = useState(1);

  const selectPrev = () => {
    setDirection(-1);
    setSelectedIndex((prev) => (prev === 0 ? ITEMS.length - 1 : prev - 1));
  };

  const selectNext = () => {
    setDirection(1);
    setSelectedIndex((prev) => (prev === ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div
        aria-hidden
        className="absolute left-[-15%] bottom-[-20%] w-[40vw] max-w-[620px] h-[40vw] max-h-[620px] rounded-full bg-[#6F2CFF]/20 blur-[220px] pointer-events-none"
      />

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-10 sm:pt-14 md:pt-16 lg:pt-[80px] xl:pt-[110px] pb-12 sm:pb-16 lg:pb-20">

        {/* HEADER ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
        >
          <div>
            <h2
              className="text-white font-semibold tracking-[0.02em]"
              style={{ fontSize: "clamp(28px, 4.2vw, 58px)", lineHeight: "1.15" }}
            >
              Explore more
            </h2>

            <h3
              className="mt-1 sm:mt-2 font-semibold tracking-[0.02em]"
              style={{ fontSize: "clamp(28px, 4.2vw, 58px)", lineHeight: "1.15" }}
            >
              <span className="text-white">ZENAURA</span>{" "}
              <span className="text-white/80">Moments</span>
            </h3>
          </div>

          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <ArrowOutline onClick={selectPrev} />
            <ArrowSolid onClick={selectNext} />
          </div>
        </motion.div>

        {/* MOBILE SLIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden mt-10 flex flex-col items-center"
        >
          <div className="w-full max-w-[340px] sm:max-w-[380px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={ITEMS[selectedIndex].id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) selectNext();
                  else if (info.offset.x > 50) selectPrev();
                }}
                className="w-full"
              >
                <ExploreCard
                  item={{
                    ...ITEMS[selectedIndex],
                    width: "100%",
                    aspectRatio: "300 / 220",
                  }}
                  isSelected
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <Dots
            total={ITEMS.length}
            current={selectedIndex}
            onChange={(i) => {
              setDirection(i > selectedIndex ? 1 : -1);
              setSelectedIndex(i);
            }}
          />
        </motion.div>

        {/* DESKTOP COLLAGE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center items-center mt-12 xl:mt-[88px]"
        >
          <div
            className="relative origin-center scale-[0.72] xl:scale-[0.86] 2xl:scale-100"
            style={{ width: "1200px", height: "720px" }}
          >
            {ITEMS.map((item, i) => (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2 cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) translate(${item.x}px, ${item.y}px)`,
                  zIndex: selectedIndex === i ? 30 : 1,
                }}
                onMouseEnter={() => setSelectedIndex(i)}
                onClick={() => setSelectedIndex(i)}
              >
                <ExploreCard item={item} isSelected={selectedIndex === i} />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}