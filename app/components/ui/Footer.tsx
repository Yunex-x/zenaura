import React, { JSX } from "react";
import Image from "next/image";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3V2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zM18.5 6a1 1 0 1 0-1-1 1 1 0 0 0 1 1z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.9 14.56L2 22l5.63-1.08A10 10 0 1 0 12 2zm0 18a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3.34.64.7-3.25-.19-.33A8 8 0 1 1 12 20zm4.39-5.47c-.24-.12-1.4-.69-1.62-.76-.22-.08-.38-.12-.54.12s-.62.76-.76.92-.28.18-.52.06a6.5 6.5 0 0 1-3.18-2.78c-.24-.41.24-.38.69-1.27a.44.44 0 0 0-.02-.42c-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46a.89.89 0 0 0-.64.3 2.7 2.7 0 0 0-.84 2c0 1.18.86 2.32.98 2.48s1.7 2.6 4.12 3.64a13.7 13.7 0 0 0 1.38.51 3.3 3.3 0 0 0 1.52.1c.46-.07 1.4-.57 1.6-1.13s.2-1.03.14-1.13-.22-.16-.46-.28z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const footerLinks = [
  {
    title: "SHOP",
    links: ["All products", "Earplugs", "Help me choose"],
  },
  {
    title: "SUPPORT",
    links: ["FAQ", "CGV", "Shipping & Returns"],
  },
  {
    title: "COMPANY",
    links: ["About Us", "Shop"],
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "WhatsApp", href: "#", icon: <WhatsAppIcon /> },
  { label: "X", href: "#", icon: <XIcon /> },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      {/* =========================
          LAYER 1: DECORATIVE BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* top dark panel */}
        <div className="absolute inset-x-0 top-0 h-[140px] bg-[#0D0D0D] min-[420px]:h-[160px] sm:h-[190px] md:h-[220px] lg:h-[260px] xl:h-[464px]" />

        {/* glow */}
        <div className="absolute left-[-30%] top-[-12%] h-[420px] w-[220px] rotate-[35deg] rounded-full bg-[#AA6AFF]/16 blur-[90px] min-[420px]:h-[500px] min-[420px]:w-[260px] sm:h-[620px] sm:w-[300px] sm:blur-[110px] md:h-[760px] md:w-[360px] md:blur-[130px] lg:h-[900px] lg:w-[420px] lg:blur-[150px] xl:left-[-12%] xl:top-[-18%] xl:h-[1450px] xl:w-[520px] xl:blur-[160px]" />

        {/* background text */}
        <div className="absolute inset-x-0 top-[22px] flex justify-center overflow-hidden min-[420px]:top-[28px] sm:top-[36px] md:top-[46px] lg:top-[60px] xl:top-[110px]">
          <span
            className="
              select-none whitespace-nowrap font-space-grotesk font-bold uppercase
              leading-none tracking-[-0.04em] text-white/[0.035]
              text-[56px]
              min-[420px]:text-[68px]
              sm:text-[86px]
              md:text-[112px]
              lg:text-[150px]
              xl:text-[320px]
            "
          >
            YOUR VOLUME
          </span>
        </div>
      </div>

      {/* =========================
          LAYER 2: EARPODS IMAGE ABOVE EVERYTHING
      ========================== */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[30] flex justify-center overflow-visible">
        <div
          className="
            relative
            h-[190px] w-[190px]
            min-[420px]:h-[220px] min-[420px]:w-[220px]
            sm:h-[260px] sm:w-[260px]
            md:h-[360px] md:w-[360px]
            lg:h-[520px] lg:w-[520px]
            xl:h-[760px] xl:w-[760px]
          "
        >
          <Image
            src="/footer/earpods-footer.png"
            alt="Zenaura earplugs"
            fill
            priority
            className="object-contain"
            sizes="(min-width:1280px) 760px, (min-width:1024px) 520px, (min-width:768px) 360px, (min-width:640px) 260px, 220px"
          />
        </div>
      </div>

      {/* =========================
          LAYER 3: CONTENT
      ========================== */}
      <div className="relative z-10">
        <div className="pt-[180px] min-[420px]:pt-[210px] sm:pt-[250px] md:pt-[330px] lg:pt-[470px] xl:pt-[620px]">
          <div className="w-full bg-black">
            <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
              <div className="pb-0">
                <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:justify-between xl:gap-12">
                  {/* Left block */}
                  <div className="w-full xl:max-w-[780px] xl:flex-shrink-0">
                    <div className="mb-5 sm:mb-6 lg:mb-8">
                      <Image
                        src="/logo.svg"
                        alt="Zenaura"
                        width={233}
                        height={80}
                        priority
                        className="h-auto w-[150px] sm:w-[170px] md:w-[190px] lg:w-[210px] xl:w-[233px]"
                      />
                    </div>

                    <p
                      className="mb-8 max-w-[380px] font-space-grotesk font-medium uppercase leading-[1.2] tracking-[-0.01em] text-white/60 sm:mb-10 lg:mb-14"
                      style={{ fontSize: "clamp(14px, 1.2vw, 16px)" }}
                    >
                      Premium earplugs for life&apos;s loud moments.
                    </p>

                    <form className="flex w-full max-w-[748px] flex-col gap-3 sm:flex-row sm:items-center">
                      <input
                        id="footer-email"
                        type="email"
                        placeholder="Enter your email address"
                        aria-label="Enter your email address"
                        className="w-full rounded-[14px] border border-transparent bg-white/[0.08] px-4 font-poppins text-white placeholder:text-white/40 outline-none transition focus:border-white/20 sm:px-5"
                        style={{
                          height: "clamp(52px, 5vw, 64px)",
                          fontSize: "clamp(14px, 1.3vw, 16px)",
                        }}
                      />

                      <button
                        type="submit"
                        className="flex h-[52px] w-full flex-shrink-0 items-center justify-center rounded-[50px] bg-[#882EFF] font-poppins font-semibold text-white transition hover:opacity-95 sm:w-auto"
                        style={{
                          minWidth: "clamp(160px, 16vw, 233px)",
                          height: "clamp(52px, 5vw, 64px)",
                          fontSize: "clamp(16px, 1.5vw, 20px)",
                        }}
                      >
                        Submit
                      </button>
                    </form>

                    <div className="mt-8 flex items-center gap-3 sm:mt-10 sm:gap-4 lg:mt-[44px]">
                      {socialLinks.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          aria-label={item.label}
                          className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white/60 hover:text-white sm:h-[40px] sm:w-[40px] lg:h-[44px] lg:w-[44px]"
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right block */}
                  <div className="w-full xl:flex xl:justify-end">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:gap-x-12 xl:gap-x-[76px]">
                      {footerLinks.map((group) => (
                        <div key={group.title}>
                          <h3
                            className="mb-4 font-space-grotesk font-bold uppercase leading-none tracking-[-0.01em] text-white sm:mb-6 lg:mb-8"
                            style={{ fontSize: "clamp(18px, 1.6vw, 24px)" }}
                          >
                            {group.title}
                          </h3>

                          <ul className="space-y-3 sm:space-y-4">
                            {group.links.map((link) => (
                              <li key={link}>
                                <a
                                  href="#"
                                  className="font-space-grotesk font-medium tracking-[-0.01em] text-white/60 transition hover:text-white"
                                  style={{
                                    fontSize: "clamp(15px, 1.3vw, 20px)",
                                    lineHeight: "1.35",
                                  }}
                                >
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/[0.16] sm:mt-12 lg:mt-[50px]" />

                <div className="flex flex-col gap-3 py-4 sm:py-5 md:flex-row md:items-center md:justify-between">
                  <p
                    className="font-space-grotesk font-medium tracking-[-0.01em] text-white/40"
                    style={{
                      fontSize: "clamp(12px, 1.1vw, 16px)",
                      lineHeight: "1.8",
                    }}
                  >
                    © 2026 Zenaura. All rights reserved.
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 sm:gap-x-8 lg:gap-x-10 md:justify-end">
                    {["Privacy", "Terms", "Cookies"].map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="font-space-grotesk font-medium tracking-[-0.01em] text-white/40 transition hover:text-white"
                        style={{
                          fontSize: "clamp(12px, 1.1vw, 16px)",
                          lineHeight: "1.8",
                        }}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}