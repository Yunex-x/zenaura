"use client";

import { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

function RatingRow(): JSX.Element {
  return (
    <div className="flex items-center justify-center gap-[10px] lg:justify-start">
      {Array.from({ length: 4 }).map((_, i) => (
        <Star
          key={i}
          className="h-[34px] w-[34px] fill-[#FFBE4C] text-[#FFBE4C]"
          strokeWidth={1.8}
        />
      ))}

      <div className="relative h-[34px] w-[34px]">
        <Star
          className="absolute inset-0 h-[34px] w-[34px] text-[#FFBE4C]"
          strokeWidth={1.8}
        />
        <div className="absolute inset-y-0 left-0 overflow-hidden w-1/2">
          <Star
            className="h-[34px] w-[34px] fill-[#FFBE4C] text-[#FFBE4C]"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </div>
  );
}

type TestimonialCardProps = {
  title: string;
  text: string;
};

function TestimonialCard({
  title,
  text,
}: TestimonialCardProps): JSX.Element {
  return (
    <article
      className="
        w-full bg-[#1B1A1A]
        px-[30px] py-[32px]
        min-h-[359px]
        flex flex-col
      "
    >
      <div className="flex flex-1 flex-col">
        <RatingRow />

        <h3
          className="
            mt-[28px]
            text-center font-[Montserrat]
            text-[34px] font-semibold
            leading-[1.12] tracking-[0.03em]
            text-white
            lg:text-left lg:text-[32px]
            xl:text-[42px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-[34px]
            whitespace-pre-line
            font-[Poppins]
            text-[17px]
            leading-[1.45]
            text-white
            lg:text-[22px]
            lg:leading-[1.58]
          "
        >
          {text}
        </p>
      </div>
    </article>
  );
}

export default function TestimonialsSection(): JSX.Element {
  // Animation variants with proper typing and 'as const' for ease array
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.section
      className="w-full bg-[#0D0D0D] py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      <div className="mx-auto w-full max-w-[1920px] px-5 md:px-8 lg:px-[150px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-[40px]">
          <motion.div variants={cardVariants} className="flex-1">
            <TestimonialCard
              title="I wish I had found them sooner!"
              text={`I can’t imagine not using my Zen Experience Plus again. I struggle with noise sensitivity and distraction from ADHD, where a lot of weight is on sound too much. Being able to drown out background noise so that I can focus on conversations has been a game changer.

Also, wearing them underneath headphones makes the entire noise canceling experience better. Now I can hear my music perfectly but no outside sounds.`}
            />
          </motion.div>

          <motion.div variants={cardVariants} className="flex-1">
            <TestimonialCard
              title="Amazing earplugs for sound sensitivity"
              text={`These are great for daily use if you’re bothered by high-pitched sounds.

Another great thing is that your internal sounds (chewing, breathing) aren’t as amplified as with most earplugs. You can barely tell they’re in, until you take them out. That’s when you realize how loud things used to be without them.`}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}