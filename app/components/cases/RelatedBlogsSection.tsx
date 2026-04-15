"use client";

import Image from "next/image";
import { JSX, useRef } from "react";

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
    <section className="relative w-full overflow-hidden bg-[#0D0D0D] py-16 lg:py-24">
      <div className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[420px] w-[420px] rotate-[45deg] bg-[#AA6AFF]/10 blur-[180px] lg:h-[560px] lg:w-[560px] lg:blur-[260px]" />

      <div className="mx-auto w-full max-w-[1920px] px-5 md:px-8 lg:px-[150px]">
        <div className="mx-auto w-full max-w-[1529px]">
          {/* Header */}
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

            {/* Buttons */}
            <div className="flex items-center gap-4 md:gap-6 self-start">
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                aria-label="Previous slide"
                className="
                  relative flex h-[56px] w-[96px] items-center justify-center
                  rounded-[89px] border border-white/20 bg-[rgba(0,0,0,0.004)]
                  transition hover:bg-white/[0.03]
                  md:h-[64px] md:w-[140px]
                  lg:h-[80px] lg:w-[233px]
                "
              >
                <span className="relative block h-0 w-[34px] md:w-[52px] lg:w-[80px]">
                  <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-white/60" />
                  <span className="absolute left-0 top-0 block h-[2.5px] w-[12px] -rotate-45 bg-white/60 origin-left md:w-[14px] lg:w-[18px]" />
                  <span className="absolute left-0 top-0 block h-[2.5px] w-[12px] rotate-45 bg-white/60 origin-left md:w-[14px] lg:w-[18px]" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                aria-label="Next slide"
                className="
                  relative flex h-[56px] w-[96px] items-center justify-center
                  rounded-[89px] bg-white transition hover:opacity-95
                  md:h-[64px] md:w-[140px]
                  lg:h-[80px] lg:w-[233px]
                "
              >
                <span className="relative block h-0 w-[34px] md:w-[52px] lg:w-[80px]">
                  <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-[#845CF2]" />
                  <span className="absolute right-0 top-0 block h-[2.5px] w-[12px] rotate-45 bg-[#845CF2] origin-right md:w-[14px] lg:w-[18px]" />
                  <span className="absolute right-0 top-0 block h-[2.5px] w-[12px] -rotate-45 bg-[#845CF2] origin-right md:w-[14px] lg:w-[18px]" />
                </span>
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="mt-12 lg:mt-[88px]">
            <div
              ref={trackRef}
              className="
                flex gap-6 overflow-x-auto scroll-smooth
                [scrollbar-width:none] [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
                cursor-grab active:cursor-grabbing
              "
            >
              {ITEMS.map((item) => (
                <article
                  key={item.id}
                  data-card
                  className="
                    shrink-0
                    w-[260px]
                    sm:w-[300px]
                    md:w-[340px]
                    lg:w-[400px]
                    xl:w-[464px]
                  "
                >
                  <div className="flex flex-col items-start gap-6 md:gap-8">
                    <div
                      className="
                        relative w-full overflow-hidden rounded-[20px]
                        h-[220px]
                        sm:h-[260px]
                        md:h-[300px]
                        lg:h-[360px]
                        xl:h-[432px]
                      "
                    >
                      <div className="absolute inset-0 bg-[url('/use-cases/checker.png')] bg-cover bg-center opacity-20" />
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, (max-width: 1280px) 400px, 464px"
                      />
                    </div>

                    <div className="w-full">
                      <h3 className="font-[Montserrat] text-[20px] font-semibold leading-[130%] tracking-[0.04em] text-white md:text-[22px] xl:text-[24px]">
                        {item.title}
                      </h3>

                      <p className="mt-[10px] font-[Poppins] text-[14px] font-medium leading-[150%] tracking-[0.02em] text-white/60 md:text-[15px] xl:text-[16px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}