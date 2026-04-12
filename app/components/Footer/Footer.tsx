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
    <footer className="relative w-screen max-w-full overflow-hidden bg-[#0D0D0D] text-white">

      {/* ══════ Decorative background layer ══════ */}
      <div className="pointer-events-none absolute inset-0">
        {/* Purple glow */}
        <div
          className="
            absolute left-[-12%] top-[-18%] rotate-[35deg] rounded-full
            bg-[#AA6AFF]/16 blur-[120px] sm:blur-[140px] lg:blur-[160px]
          "
          style={{
            width: "clamp(200px, 28vw, 520px)",
            height: "clamp(500px, 80vw, 1450px)",
          }}
        />

        {/* Background text "YOUR VOLUME" */}
        <div className="absolute inset-x-0 top-[50px] sm:top-[60px] md:top-[70px] lg:top-[90px] xl:top-[110px] overflow-hidden flex justify-center">
          <span
            className="select-none whitespace-nowrap font-space-grotesk font-bold uppercase leading-none tracking-[-0.04em] text-white/[0.035]"
            style={{ fontSize: "clamp(60px, 16vw, 320px)" }}
          >
            YOUR VOLUME
          </span>
        </div>

        {/* Product image — centered, scales */}
        <div className="absolute z-40 inset-x-0 top-[10px] sm:top-[15px] md:top-[20px] xl:top-[30px] flex justify-center">
          <div
            className="relative"
            style={{
              width: "clamp(220px, 50vw, 760px)",
              height: "clamp(220px, 50vw, 760px)",
            }}
          >
            <Image
              src="/footer/earpods-footer.png"
              alt="Zenaura earplugs"
              fill
              priority
              className="object-contain"
              sizes="(min-width:1280px) 760px, 50vw"
            />
          </div>
        </div>
      </div>

      {/* ══════ Layout frame ══════ */}
      <div
        className="relative z-10"
        style={{ minHeight: "clamp(700px, 80vw, 1168px)" }}
      >
        {/* Push footer content to the bottom */}
        <div
          className="flex items-end"
          style={{ minHeight: "clamp(700px, 80vw, 1168px)" }}
        >
          <div className="w-full bg-black">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
              <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[110px] xl:pt-[156px] pb-0">

                {/* ── Main content: left block + right links ── */}
                <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 xl:flex-row xl:items-start xl:justify-between xl:gap-12">

                  {/* Left block */}
                  <div className="w-full xl:max-w-[748px] flex-shrink-0">
                    {/* Logo */}
                    <div className="mb-5 sm:mb-6 lg:mb-8">
                      <Image
                        src="/logo.svg"
                        alt="Zenaura"
                        width={233}
                        height={80}
                        className="h-auto w-[140px] sm:w-[170px] md:w-[190px] lg:w-[233px]"
                        priority
                      />
                    </div>

                    {/* Tagline */}
                    <p
                      className="mb-8 sm:mb-10 lg:mb-14 max-w-[360px] font-space-grotesk font-medium uppercase leading-[1.2] tracking-[-0.01em] text-white/60"
                      style={{ fontSize: "clamp(13px, 1.3vw, 16px)" }}
                    >
                      Premium earplugs for life&apos;s loud moments.
                    </p>

                    {/* Email form */}
                    <form className="flex w-full max-w-[748px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
                      <input
                        id="footer-email"
                        type="email"
                        placeholder="Enter your email address"
                        aria-label="Enter your email address"
                        className="
                          w-full rounded-[14px] border border-transparent
                          bg-white/[0.08] px-4 sm:px-5
                          font-poppins text-white placeholder:text-white/40
                          outline-none focus:border-white/20
                          transition
                        "
                        style={{
                          height: "clamp(48px, 5vw, 64px)",
                          fontSize: "clamp(14px, 1.3vw, 16px)",
                        }}
                      />

                      <button
                        type="submit"
                        className="
                          w-full sm:w-auto rounded-[50px] bg-[#882EFF]
                          font-poppins font-semibold text-white
                          transition hover:opacity-95
                          flex-shrink-0
                        "
                        style={{
                          height: "clamp(48px, 5vw, 64px)",
                          minWidth: "clamp(140px, 16vw, 233px)",
                          fontSize: "clamp(15px, 1.5vw, 20px)",
                        }}
                      >
                        Submit
                      </button>
                    </form>

                    {/* Social links */}
                    <div className="mt-8 sm:mt-10 lg:mt-[44px] flex items-center gap-3 sm:gap-4">
                      {socialLinks.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          aria-label={item.label}
                          className="
                            flex items-center justify-center rounded-full
                            border border-white/30 text-white transition
                            hover:border-white/60 hover:text-white
                            w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] lg:w-[44px] lg:h-[44px]
                          "
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right block — link columns */}
                  <div className="w-full xl:flex xl:justify-end">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-[76px]">
                      {footerLinks.map((group) => (
                        <div key={group.title}>
                          <h3
                            className="mb-4 sm:mb-6 lg:mb-8 font-space-grotesk font-bold uppercase leading-none tracking-[-0.01em] text-white"
                            style={{ fontSize: "clamp(18px, 1.8vw, 24px)" }}
                          >
                            {group.title}
                          </h3>

                          <ul>
                            {group.links.map((link) => (
                              <li key={link}>
                                <a
                                  href="#"
                                  className="font-space-grotesk font-medium tracking-[-0.01em] text-white/60 transition hover:text-white"
                                  style={{
                                    fontSize: "clamp(15px, 1.5vw, 20px)",
                                    lineHeight: "2.2",
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

                {/* Divider */}
                <div className="mt-8 sm:mt-10 lg:mt-[50px] border-t border-white/[0.16]" />

                {/* Bottom bar — copyright + legal links */}
                <div className="flex flex-col gap-2 sm:gap-3 py-4 sm:py-5 md:flex-row md:items-center md:justify-between">
                  <p
                    className="font-space-grotesk font-medium tracking-[-0.01em] text-white/40"
                    style={{
                      fontSize: "clamp(12px, 1.2vw, 16px)",
                      lineHeight: "2",
                    }}
                  >
                    © 2026 Zenaura. All rights reserved.
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-1 md:justify-end">
                    {["Privacy", "Terms", "Cookies"].map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="font-space-grotesk font-medium tracking-[-0.01em] text-white/40 transition hover:text-white"
                        style={{
                          fontSize: "clamp(12px, 1.2vw, 16px)",
                          lineHeight: "2",
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