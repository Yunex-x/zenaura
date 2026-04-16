"use client";

import Image from "next/image";
import { JSX, useEffect, useMemo, useRef, useState } from "react";

type BlogItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ITEMS: BlogItem[] = [
  {
    id: 1,
    title: "Are misophonia and ADHD connected?",
    description:
      "Is misophonia a form of ADHD? We explore the possible connections between the two conditions and answer all your ques...",
    image: "/use-cases/blog-1.png",
  },
  {
    id: 2,
    title: "How to cope with noise Anxiety",
    description:
      "Struggle with noise? Learn how to cope with noise anxiety and reclaim your peace of mind with our actionable tips.",
    image: "/use-cases/blog-2.jpg",
  },
  {
    id: 3,
    title: "How To Deal With Misophonia At Work?",
    description:
      "Don't let bothersome sounds disrupt your workday! Discover how to conquer misophonia and reclaim your focus.",
    image: "/use-cases/blog-3.jpg",
  },
  {
    id: 4,
    title: "How to cope with noise Anxiety",
    description:
      "Is misophonia a form of ADHD? We explore the possible connections between the two conditions and answer all your ques...",
    image: "/use-cases/blog-4.jpg",
  },
];

export default function RelatedBlogsSection(): JSX.Element {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const hasInitializedRef = useRef(false);

  const loopedItems = useMemo(() => [...ITEMS, ...ITEMS, ...ITEMS], []);
  const baseLength = ITEMS.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(baseLength);

  const getCards = (): HTMLElement[] => {
    if (!trackRef.current) return [];
    return Array.from(
      trackRef.current.querySelectorAll("[data-card]")
    ) as HTMLElement[];
  };

  const centerCard = (
    card: HTMLElement,
    behavior: ScrollBehavior = "smooth"
  ): void => {
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
  ): void => {
    const cards = getCards();
    const target = cards[loopedIndex];
    if (!target) return;
    centerCard(target, behavior);
  };

  const getClosestCardIndex = (): number => {
    const track = trackRef.current;
    const cards = getCards();

    if (!track || !cards.length) return 0;

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

    return closestIndex;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track || hasInitializedRef.current) return;

    const init = () => {
      const middleStart = baseLength;
      centerByLoopedIndex(middleStart, "auto");
      setActiveIndex(0);
      setCenterIndex(middleStart);
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
      if (!cards.length || !track) return;

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

      setCenterIndex(closestIndex);
      setActiveIndex(closestIndex % baseLength);

      const middleStart = baseLength;
      const lastStart = baseLength * 2;

      if (closestIndex < middleStart) {
        const targetIndex = closestIndex + baseLength;
        const target = cards[targetIndex];

        if (target) {
          const nextLeft =
            target.offsetLeft - (track.clientWidth - target.clientWidth) / 2;

          track.scrollTo({
            left: nextLeft,
            behavior: "auto",
          });

          setCenterIndex(targetIndex);
          setActiveIndex(targetIndex % baseLength);
        }
      } else if (closestIndex >= lastStart) {
        const targetIndex = closestIndex - baseLength;
        const target = cards[targetIndex];

        if (target) {
          const nextLeft =
            target.offsetLeft - (track.clientWidth - target.clientWidth) / 2;

          track.scrollTo({
            left: nextLeft,
            behavior: "auto",
          });

          setCenterIndex(targetIndex);
          setActiveIndex(targetIndex % baseLength);
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

  const goToNext = (): void => {
    const closestIndex = getClosestCardIndex();
    centerByLoopedIndex(closestIndex + 1, "smooth");
  };

  const goToPrev = (): void => {
    const closestIndex = getClosestCardIndex();
    centerByLoopedIndex(closestIndex - 1, "smooth");
  };

  const goToDot = (index: number): void => {
    centerByLoopedIndex(baseLength + index, "smooth");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0D0D0D] py-16 lg:py-24">
      <div className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[420px] w-[420px] rotate-[45deg] bg-[#AA6AFF]/10 blur-[180px] lg:h-[560px] lg:w-[560px] lg:blur-[260px]" />

      <div className="mx-auto w-full max-w-[1920px] px-5 md:px-8 lg:px-[150px]">
        <div className="mx-auto w-full max-w-[1529px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <h2
              className="
                max-w-[450px]
                bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)]
                bg-clip-text text-transparent
                text-[36px] font-bold leading-[1.1] tracking-[0.02em]
                md:text-[48px]
                lg:text-[64px] lg:leading-[87px]
              "
            >
              Related Blogs
            </h2>

            <div className="hidden lg:flex items-center gap-6 self-start">
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous slide"
                className="
                  relative flex h-[80px] w-[233px] items-center justify-center
                  rounded-[89px] border border-white/20 bg-[rgba(0,0,0,0.004)]
                  transition hover:bg-white/[0.03]
                "
              >
                <span className="relative block h-0 w-[80px]">
                  <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-white/60" />
                  <span className="absolute left-0 top-0 block h-[2.5px] w-[18px] -rotate-45 bg-white/60 origin-left" />
                  <span className="absolute left-0 top-0 block h-[2.5px] w-[18px] rotate-45 bg-white/60 origin-left" />
                </span>
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="
                  relative flex h-[80px] w-[233px] items-center justify-center
                  rounded-[89px] bg-white transition hover:opacity-95
                "
              >
                <span className="relative block h-0 w-[80px]">
                  <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-[#845CF2]" />
                  <span className="absolute right-0 top-0 block h-[2.5px] w-[18px] rotate-45 bg-[#845CF2] origin-right" />
                  <span className="absolute right-0 top-0 block h-[2.5px] w-[18px] -rotate-45 bg-[#845CF2] origin-right" />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-12 lg:mt-[88px]">
            <div
              ref={trackRef}
              className="
                flex items-start gap-6 overflow-x-auto scroll-smooth
                [scrollbar-width:none] [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
                cursor-grab active:cursor-grabbing
              "
            >
              {loopedItems.map((item, index) => {
                const isCenter = index === centerIndex;

                return (
                  <article
                    key={`${item.id}-${index}`}
                    data-card
                    className={`
                      shrink-0 transform transition-all duration-500 ease-out
                      ${
                        isCenter
                          ? "w-[260px] sm:w-[300px] md:w-[360px] lg:w-[430px] xl:w-[494px] opacity-100"
                          : "w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[464px] opacity-70"
                      }
                    `}
                  >
                    <div className="flex flex-col items-start gap-6 md:gap-8">
                      <div
                        className={`
                          relative w-full overflow-hidden rounded-[20px] transition-all duration-500 ease-out
                          ${
                            isCenter
                              ? "h-[240px] sm:h-[280px] md:h-[320px] lg:h-[390px] xl:h-[462px]"
                              : "h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px] xl:h-[432px]"
                          }
                        `}
                      >
                        <div className="absolute inset-0 bg-[url('/use-cases/checker.png')] bg-cover bg-center opacity-20" />

                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 360px, (max-width: 1280px) 430px, 494px"
                        />
                      </div>

                      <div className="w-full transition-all duration-500 ease-out">
                        <h3
                          className={`
                            font-[Montserrat] font-semibold leading-[130%] tracking-[0.04em] text-white transition-all duration-500 ease-out
                            ${isCenter ? "text-[22px] md:text-[24px] xl:text-[26px]" : "text-[20px] md:text-[22px] xl:text-[24px]"}
                          `}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`
                            mt-[10px] font-[Poppins] font-medium leading-[150%] tracking-[0.02em] transition-all duration-500 ease-out
                            ${isCenter ? "text-white/75 text-[15px] xl:text-[16px]" : "text-white/60 text-[14px] xl:text-[16px]"}
                          `}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}