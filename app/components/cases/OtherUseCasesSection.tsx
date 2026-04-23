"use client";

import Image from "next/image";
import { JSX, useEffect, useMemo, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

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
  const hasInitializedRef = useRef(false);

  const loopedItems = useMemo(() => [...ITEMS, ...ITEMS, ...ITEMS], []);
  const baseLength = ITEMS.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const getCards = (): HTMLElement[] => {
    if (!trackRef.current) return [];
    return Array.from(
      trackRef.current.querySelectorAll("[data-card]")
    ) as HTMLElement[];
  };

  const centerCard = (card: HTMLElement, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;

    const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;

    track.scrollTo({
      left,
      behavior,
    });
  };

  const centerByLoopedIndex = (
    loopedIndex: number,
    behavior: ScrollBehavior = "smooth"
  ) => {
    const cards = getCards();
    const target = cards[loopedIndex];
    if (!target) return;
    centerCard(target, behavior);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track || hasInitializedRef.current) return;

    const init = () => {
      const middleStart = baseLength;
      const initialIndex = middleStart;

      centerByLoopedIndex(initialIndex, "auto");
      setActiveIndex(0);
      hasInitializedRef.current = true;
    };

    const id = requestAnimationFrame(init);
    return () => cancelAnimationFrame(id);
  }, [baseLength]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;

    const updateActiveAndLoop = () => {
      const cards = getCards();
      if (!cards.length) return;

      const containerCenter = track.scrollLeft + track.clientWidth / 2;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      const realIndex = closestIndex % baseLength;
      setActiveIndex(realIndex);

      const firstSetStart = 0;
      const middleSetStart = baseLength;
      const lastSetStart = baseLength * 2;

      if (closestIndex < middleSetStart) {
        const equivalentIndex = closestIndex + baseLength;
        const equivalentCard = cards[equivalentIndex];
        if (equivalentCard) {
          const nextLeft =
            equivalentCard.offsetLeft -
            (track.clientWidth - equivalentCard.clientWidth) / 2;
          track.scrollTo({ left: nextLeft, behavior: "auto" });
        }
      } else if (closestIndex >= lastSetStart) {
        const equivalentIndex = closestIndex - baseLength;
        const equivalentCard = cards[equivalentIndex];
        if (equivalentCard) {
          const nextLeft =
            equivalentCard.offsetLeft -
            (track.clientWidth - equivalentCard.clientWidth) / 2;
          track.scrollTo({ left: nextLeft, behavior: "auto" });
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        updateActiveAndLoop();
        ticking = false;
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveAndLoop);

    updateActiveAndLoop();

    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveAndLoop);
    };
  }, [baseLength]);

  const goToNext = () => {
    const cards = getCards();
    if (!cards.length || !trackRef.current) return;

    const track = trackRef.current;
    const containerCenter = track.scrollLeft + track.clientWidth / 2;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    centerByLoopedIndex(closestIndex + 1, "smooth");
  };

  const goToPrev = () => {
    const cards = getCards();
    if (!cards.length || !trackRef.current) return;

    const track = trackRef.current;
    const containerCenter = track.scrollLeft + track.clientWidth / 2;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    centerByLoopedIndex(closestIndex - 1, "smooth");
  };

  const goToDot = (index: number) => {
    centerByLoopedIndex(baseLength + index, "smooth");
  };

  // Animation variants with proper typing and 'as const' for ease arrays
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const carouselVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
    },
  };

  return (
    <motion.section
      className="w-full overflow-hidden bg-black py-16 lg:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      <div className="mx-auto w-full max-w-[1920px] px-5 md:px-8 lg:px-[120px]">
        <div className="mx-auto w-full max-w-[2011px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <motion.h2
              variants={itemVariants}
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
                md:text-[38px]
                lg:text-[43px]
                lg:leading-[120px]
                xl:text-[54px]
              "
            >
              Other Use Cases
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="hidden items-center mt-6 gap-6 self-start lg:flex"
            >
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous slide"
                className="
                  relative flex h-[80px] w-[233px] lg:w-[100px] lg:h-[60px] xl:w-[233px] xl:h-[80px] items-center justify-center
                  rounded-[89px] border border-white/20
                  bg-transparent transition hover:bg-white/[0.03]
                "
              >
                <span className="relative block h-0 w-[80px]">
                  <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-white/60" />
                  <span className="absolute left-0 top-0 block h-[2.5px] w-[18px] origin-left -rotate-45 bg-white/60" />
                  <span className="absolute left-0 top-0 block h-[2.5px] w-[18px] origin-left rotate-45 bg-white/60" />
                </span>
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="
                  relative flex h-[80px] w-[233px] lg:w-[100px] lg:h-[60px] xl:w-[233px] xl:h-[80px] items-center justify-center
                  rounded-[89px] bg-white transition hover:opacity-95
                "
              >
                <span className="relative block h-0 w-[80px]">
                  <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-[#845CF2]" />
                  <span className="absolute right-0 top-0 block h-[2.5px] w-[18px] origin-right rotate-45 bg-[#845CF2]" />
                  <span className="absolute right-0 top-0 block h-[2.5px] w-[18px] origin-right -rotate-45 bg-[#845CF2]" />
                </span>
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={carouselVariants}
            className="mt-12 lg:mt-[88px]"
          >
            <div
              ref={trackRef}
              className="
                flex items-end gap-6 overflow-x-auto scroll-smooth
                [scrollbar-width:none] [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
                cursor-grab active:cursor-grabbing
              "
            >
              {loopedItems.map((item, index) => {
                const isActive = index % baseLength === activeIndex;

                return (
                  <div
                    key={`${item.id}-${index}`}
                    data-card
                    className={`shrink-0 overflow-hidden transition-all duration-500 ease-out ${
                      isActive
                        ? "h-[300px] w-[320px] rounded-[24px] md:h-[380px] md:w-[420px] lg:h-[500px] lg:w-[538px]"
                        : "h-[260px] w-[260px] rounded-[20px] md:h-[320px] md:w-[320px] lg:h-[434px] lg:w-[467px]"
                    }`}
                  >
                    <CarouselCard item={item} />
                  </div>
                );
              })}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center gap-3 lg:hidden"
            >
              {ITEMS.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={isActive}
                    onClick={() => goToDot(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      isActive ? "w-8 bg-white" : "w-3 bg-white/35"
                    }`}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function CarouselCard({ item }: { item: UseCaseItem }): JSX.Element {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[inherit]">
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