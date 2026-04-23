"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type ContactItem = {
  title: string;
  email: string;
  icon: string;
  size?: number;
};

const contacts: ContactItem[] = [
  { title: "Collaborations", email: "ambassadors@zenearplugs.com", icon: "/icons/collaborations.png" },
  { title: "Partnerships", email: "partnerships@zenearplugs.com", icon: "/icons/partnership.svg" },
  { title: "Business", email: "business@zenearplugs.com", icon: "/icons/business.png"},
  { title: "Press", email: "press@zenearplugs.com", icon: "/icons/press.svg" },
];

export default function OtherContacts() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
      rotateY: i % 2 === 0 ? -15 : 15,
    }),
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 180, damping: 20 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(6px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="flex w-full justify-center py-[80px] lg:py-[120px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      <div className="w-full max-w-[1520px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center gap-[56px] lg:gap-[88px]">
          <motion.div variants={titleVariants} className="flex w-full justify-center">
            <h2
              className="bg-clip-text text-center font-montserrat font-[700] text-transparent"
              style={{
                width: "min(496px, 100%)",
                backgroundImage:
                  "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62, 62, 62, 0.21) 143.55%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "clamp(30px, 5vw, 64px)",
                lineHeight: "1.875",
                letterSpacing: "-0.02em",
              }}
            >
              Other Contacts
            </h2>
          </motion.div>

          {/* MOBILE SLIDER */}
          <motion.div className="w-full sm:hidden" variants={containerVariants}>
            <div
              className="
                flex gap-4 overflow-x-auto
                snap-x snap-mandatory scroll-smooth
                [scrollbar-width:none] [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {contacts.map((item, i) => (
                <motion.article
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  className="
                    group h-[262px] w-[85%] max-w-[320px] shrink-0 snap-center
                    bg-[#1B1A1A] transition-colors duration-300 hover:bg-[#222]
                  "
                >
                  <div className="flex h-full flex-col items-center px-6 pt-[30px]">
                    <div className="flex h-[70px] w-[70px] items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={item.size || 70}
                        height={item.size || 70}
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-[50px] flex flex-col items-center gap-[24px] text-center">
                      <h3 className="font-poppins text-white" style={{ fontSize: "24px", lineHeight: "36px" }}>
                        {item.title}
                      </h3>
                      <p className="font-poppins text-white/60" style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "0.02em" }}>
                        {item.email}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* TABLET + DESKTOP GRID */}
          <motion.div
            className="hidden w-full grid-cols-2 justify-items-center gap-6 sm:grid xl:grid-cols-4"
            variants={containerVariants}
          >
            {contacts.map((item, i) => (
              <motion.article
                key={i}
                custom={i}
                variants={cardVariants}
                className="group h-[262px] w-full max-w-[362px] bg-[#1B1A1A] transition-colors duration-300 hover:bg-[#222]"
              >
                <div className="flex h-full flex-col items-center px-6 pt-[30px]">
                  <div className="flex h-[70px] w-[70px] items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={item.size || 70}
                      height={item.size || 70}
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-[50px] flex flex-col items-center gap-[24px] text-center">
                    <h3 className="font-poppins text-white" style={{ fontSize: "24px", lineHeight: "36px" }}>
                      {item.title}
                    </h3>
                    <p className="font-poppins text-white/60" style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "0.02em" }}>
                      {item.email}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}