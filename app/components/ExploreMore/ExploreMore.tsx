"use client";

import React, { JSX, useState } from "react";
import ExploreCard, { Item } from "./ExploreCard";

function ArrowOutline({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Previous"
      className="
        w-[184px] h-[72px]
        rounded-full border border-white/20
        flex items-center justify-center
        text-white/70
        transition-all duration-300 hover:border-white/40 hover:text-white
      "
    >
      <svg width="46" height="20" viewBox="0 0 46 20" fill="none">
        <path
          d="M45 10H1M1 10L10 1M1 10L10 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function ArrowSolid({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Next"
      className="
        w-[184px] h-[72px]
        rounded-full bg-white
        flex items-center justify-center
        text-[#8E52FF]
        transition-all duration-300 hover:scale-[1.03]
      "
    >
      <svg width="46" height="20" viewBox="0 0 46 20" fill="none">
        <path
          d="M1 10H45M45 10L36 1M45 10L36 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

const ITEMS: Item[] = [
  {
    id: "blur-left",
    image: "/ExploreMore/explore-4.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "small",
    blurred: true,
  },
  {
    id: "left",
    image: "/ExploreMore/explore-1.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "medium",
  },
  {
    id: "center",
    image: "/ExploreMore/explore-2.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "large",
  },
  {
    id: "right",
    image: "/ExploreMore/explore-3.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "medium",
  },
  {
    id: "blur-right",
    image: "/ExploreMore/explore-5.png",
    title: "Earplugs for Sleeping",
    subtitle: "Lorem ipsum dolor sit amet",
    size: "small",
    blurred: true,
  },
];

export default function ExploreMore(): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const selectPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? ITEMS.length - 1 : prev - 1));
  };

  const selectNext = () => {
    setSelectedIndex((prev) => (prev === ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-[980px] overflow-hidden bg-black">
      <div
        aria-hidden
        className="
          absolute left-[-240px] bottom-[-260px]
          w-[620px] h-[620px]
          rounded-full bg-[#6F2CFF]/20 blur-[220px]
          pointer-events-none
        "
      />

      <div className="relative max-w-[1440px] mx-auto px-[120px] pt-[110px] pb-[80px]">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-white font-semibold text-[58px] leading-[1.15] tracking-[-0.02em]">
              Explore more
            </h2>
            <h3 className="mt-2 text-[58px] leading-[1.15] tracking-[-0.02em] font-semibold">
              <span className="text-white">ZENAURA</span>{" "}
              <span className="text-white/80">Moments</span>
            </h3>
          </div>

          <div className="flex items-center gap-5 pt-1">
            <ArrowOutline onClick={selectPrev} />
            <ArrowSolid onClick={selectNext} />
          </div>
        </div>

        <div className="relative mt-[88px] h-[560px]">
          <div
            className="absolute left-[155px] top-[35px] z-[1] opacity-[0.22] blur-[1.5px]"
            onMouseEnter={() => setSelectedIndex(0)}
          >
            <ExploreCard item={ITEMS[0]} isSelected={selectedIndex === 0} />
          </div>

          <div
            className="absolute left-[0px] top-[252px] z-[5]"
            onMouseEnter={() => setSelectedIndex(1)}
          >
            <ExploreCard item={ITEMS[1]} isSelected={selectedIndex === 1} />
          </div>

          <div
            className="absolute left-[405px] top-[112px] z-[10]"
            onMouseEnter={() => setSelectedIndex(2)}
          >
            <ExploreCard item={ITEMS[2]} isSelected={selectedIndex === 2} />
          </div>

          <div
            className="absolute left-[910px] top-[42px] z-[5]"
            onMouseEnter={() => setSelectedIndex(3)}
          >
            <ExploreCard item={ITEMS[3]} isSelected={selectedIndex === 3} />
          </div>

          <div
            className="absolute left-[855px] top-[360px] z-[1] opacity-[0.18] blur-[1.5px]"
            onMouseEnter={() => setSelectedIndex(4)}
          >
            <ExploreCard item={ITEMS[4]} isSelected={selectedIndex === 4} />
          </div>
        </div>
      </div>
    </section>
  );
}