"use client";

import Image from "next/image";
import { JSX, useRef } from "react";

type UseCaseItem = {
  id: number;
  title: string;
  image: string;
};

const ITEMS: UseCaseItem[] = [
  {
    id: 1,
    title: "Work & Focus",
    image: "/use-cases/other-1.png",
  },
  {
    id: 2,
    title: "Travel & Transit",
    image: "/use-cases/other-2.jpg",
  },
  {
    id: 3,
    title: "Sleep & Rest",
    image: "/use-cases/other-3.png",
  },
  {
    id: 4,
    title: "Concerts & Events",
    image: "/use-cases/other-4.png",
  },
];

export default function OtherUseCasesSection(): JSX.Element {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "left" | "right"): void => {
    if (!trackRef.current) return;

    const card = trackRef.current.querySelector("[data-card]") as HTMLElement | null;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24;
    const amount = cardWidth + gap;

    trackRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-black py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1920px] px-5 md:px-8 lg:px-[150px] ">
        <div className="mx-auto w-full max-w-[2011px]">
          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <h2
              className="
                max-w-[712px]
                bg-[linear-gradient(93.31deg,#FFFFFF_40.77%,#98979C_83.66%)]
                bg-clip-text
                text-[36px]
                font-bold
                uppercase
                leading-[1.1]
                tracking-[0.03em]
                text-transparent
                md:text-[48px]
                lg:text-[64px]
                lg:leading-[120px]
              "
            >
              Other Use Cases
            </h2>

            {/* Buttons */}
            <div className="flex items-center gap-6 self-start">
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                aria-label="Previous slide"
                className="
                  relative flex h-[64px] w-[110px] items-center justify-center
                  rounded-[89px] border border-white/20
                  bg-transparent transition hover:bg-white/[0.03]
                  lg:h-[80px] lg:w-[233px]
                "
              >
                <span className="relative block h-0 w-[42px] lg:w-[80px]">
                  <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-white/60" />
                  <span className="absolute left-0 top-0 block h-[2.5px] w-[14px] -rotate-45 bg-white/60 origin-left lg:w-[18px]" />
                  <span className="absolute left-0 top-0 block h-[2.5px] w-[14px] rotate-45 bg-white/60 origin-left lg:w-[18px]" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                aria-label="Next slide"
                className="
                  relative flex h-[64px] w-[110px] items-center justify-center
                  rounded-[89px] bg-white transition hover:opacity-95
                  lg:h-[80px] lg:w-[233px]
                "
              >
                <span className="relative block h-0 w-[42px] lg:w-[80px]">
                  <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-[#845CF2]" />
                  <span className="absolute right-0 top-0 block h-[2.5px] w-[14px] rotate-45 bg-[#845CF2] origin-right lg:w-[18px]" />
                  <span className="absolute right-0 top-0 block h-[2.5px] w-[14px] -rotate-45 bg-[#845CF2] origin-right lg:w-[18px]" />
                </span>
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="mt-12 lg:mt-[88px]">
            <div
              ref={trackRef}
              className="
                flex items-end gap-6 overflow-x-auto scroll-smooth
                [scrollbar-width:none] [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
                cursor-grab active:cursor-grabbing
              "
            >
              {ITEMS.map((item, index) => {
                const isMiddle = index === 1;

                return (
                  <div
                    key={item.id}
                    data-card
                    className={`shrink-0 overflow-hidden ${
                      isMiddle
                        ? "h-[300px] w-[320px] rounded-[24px] md:h-[380px] md:w-[420px] lg:h-[500px] lg:w-[538px]"
                        : "h-[260px] w-[260px] rounded-[20px] md:h-[320px] md:w-[320px] lg:h-[434px] lg:w-[467px]"
                    }`}
                  >
                    <CarouselCard item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselCard({ item }: { item: UseCaseItem }): JSX.Element {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[inherit]">
      <div className="absolute inset-0 bg-[url('/use-cases/checker.png')] bg-cover bg-center opacity-20" />

      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition duration-300 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 467px"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 lg:p-6">
        <div className="inline-flex rounded-full bg-black/45 px-4 py-2 backdrop-blur-sm">
          <span className="font-[Montserrat] text-sm font-semibold text-white md:text-base lg:text-[18px]">
            {item.title}
          </span>
        </div>
      </div>
    </div>
  );
}