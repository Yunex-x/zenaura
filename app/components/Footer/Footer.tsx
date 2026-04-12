import React from "react";
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
      <path d="M12 2a10 10 0 0 0-8.9 14.56L2 22l5.63-1.08A10 10 0 1 0 12 2zm0 18a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3.34.64.7-3.25-.19-.33A8 8 0 1 1 12 20zm4.39-5.47c-.24-.12-1.4-.69-1.62-.76-.22-.08-.38-.12-.54.12-.16.24-.62.76-.76.91-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99 0 1.17.86 2.3.98 2.46.12.16 1.69 2.57 4.09 3.61.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z" />
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
    <footer className="relative overflow-hidden bg-[#0D0D0D] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Purple glow */}
        <div className="absolute left-[-12%] top-[-18%] h-[900px] w-[340px] rotate-[35deg] rounded-full bg-[#AA6AFF]/16 blur-[160px] md:h-[1100px] md:w-[420px] xl:h-[1450px] xl:w-[520px]" />

        {/* Background text */}
        <div className="absolute inset-x-0 top-[70px] hidden justify-center md:flex lg:top-[90px] xl:top-[110px]">
          <span className="select-none whitespace-nowrap font-space-grotesk text-[120px] font-bold uppercase leading-none tracking-[-0.04em] text-white/[0.035] lg:text-[180px] xl:text-[240px] 2xl:text-[270px]">
            YOUR VOLUME
          </span>
        </div>

        {/* Product image - stays above black box */}
        <div className="absolute z-40 inset-x-0 top-[10px] flex justify-center md:top-[20px] xl:top-[30px]">
          <div className="relative h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] md:h-[500px] md:w-[500px] lg:h-[640px] lg:w-[640px] xl:h-[760px] xl:w-[760px]">
            <Image
              src="/footer/earpods-footer.png"
              alt="Zenaura earplugs"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Layout frame */}
      <div className="relative z-10 min-h-[1100px] lg:min-h-[1168px]">
        {/* Push footer black band down */}
        <div className="flex min-h-[1100px] lg:min-h-[1168px] items-end">
          <div className="w-full bg-black">
            {/* Full width content with edge padding */}
            <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 xl:px-44 ">
              <div className="pt-[110px] pb-0 lg:pt-[156px]">
                <div className="flex flex-col gap-16 xl:flex-row xl:items-start xl:justify-between xl:gap-12">
                  {/* Left block */}
                  <div className="w-full max-w-[748px] flex-shrink-0">
                    <div className="mb-8">
                      <Image
                        src="/logo.svg"
                        alt="Zenaura"
                        width={233}
                        height={80}
                        className="h-auto w-[170px] sm:w-[190px] lg:w-[233px]"
                        priority
                      />
                    </div>

                    <p className="mb-14 max-w-[360px] font-space-grotesk text-[16px] font-medium uppercase leading-[1.2] tracking-[-0.01em] text-white/60">
                      Premium earplugs for life&apos;s loud moments.
                    </p>

                    <form className="flex w-full max-w-[748px] flex-col gap-3 md:flex-row md:items-center md:gap-3">
                      <input
                        id="footer-email"
                        type="email"
                        placeholder="Enter your email address"
                        aria-label="Enter your email address"
                        className="h-[64px] w-full rounded-[14px] border border-transparent bg-white/[0.08] px-5 font-poppins text-[16px] leading-[24px] text-white placeholder:text-white/40 outline-none transition focus:border-white/15 focus:ring-2 focus:ring-[#882EFF]/40 md:max-w-[503px]"
                      />

                      <button
                        type="submit"
                        className="h-[64px] w-full rounded-[50px] bg-[#882EFF] font-poppins text-[20px] font-semibold leading-[30px] text-white transition hover:opacity-95 md:w-[233px] md:min-w-[233px]"
                      >
                        Submit
                      </button>
                    </form>

                    <div className="mt-[44px] flex items-center gap-4">
                      {socialLinks.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          aria-label={item.label}
                          className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white/60 hover:text-white"
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right block */}
                  <div className="w-full xl:flex xl:justify-end">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-[151px_181px_111px] xl:gap-[76px]">
                      {footerLinks.map((group) => (
                        <div key={group.title}>
                          <h3 className="mb-8 font-space-grotesk text-[24px] font-bold uppercase leading-none tracking-[-0.01em] text-white">
                            {group.title}
                          </h3>

                          <ul>
                            {group.links.map((link) => (
                              <li key={link}>
                                <a
                                  href="#"
                                  className="font-space-grotesk text-[20px] font-medium leading-[45px] tracking-[-0.01em] text-white/60 transition hover:text-white"
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

                <div className="mt-[50px] border-t border-white/16" />

                <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
                  <p className="font-space-grotesk text-[16px] font-medium leading-[45px] tracking-[-0.01em] text-white/40">
                    © 2026 Zenaura. All rights reserved.
                  </p>

                  <div className="flex flex-wrap items-center gap-x-10 gap-y-1 md:justify-end">
                    <a
                      href="#"
                      className="font-space-grotesk text-[16px] font-medium leading-[45px] tracking-[-0.01em] text-white/40 transition hover:text-white"
                    >
                      Privacy
                    </a>
                    <a
                      href="#"
                      className="font-space-grotesk text-[16px] font-medium leading-[45px] tracking-[-0.01em] text-white/40 transition hover:text-white"
                    >
                      Terms
                    </a>
                    <a
                      href="#"
                      className="font-space-grotesk text-[16px] font-medium leading-[45px] tracking-[-0.01em] text-white/40 transition hover:text-white"
                    >
                      Cookies
                    </a>
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