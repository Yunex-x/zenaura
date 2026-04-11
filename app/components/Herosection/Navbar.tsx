"use client";
import React, { JSX, useState } from "react";
import Image from "next/image";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";

/**
 * Navbar - Tailwind-only
 * - Desktop: left links, centered logo, right icons + account
 * - Mobile: hamburger menu with dropdown
 * - Matches typography spec using .font-poppins and explicit font weights/sizes
 */
export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Use Cases", href: "#" },
    { label: "About", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <header className="w-full bg-black">
      <div className="max-w-[1825px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-[56px]">
          {/* Left: mobile menu button + desktop links */}
          <div className="flex items-center gap-4">
            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 text-white/90"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop nav (Group 2 / Group 3) */}
            <nav className="hidden md:flex items-center gap-6 w-[546px] h-[28px]">
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="font-poppins font-[500] text-[20px] leading-[30px] text-white"
                >
                  Home
                </a>

                <span className="w-[6px] h-[6px] bg-white rounded-full block" aria-hidden />
              </div>

              <a className="font-poppins font-[300] text-[20px] leading-[30px] text-white/70" href="#">
                Shop
              </a>

              <a className="font-poppins font-[300] text-[20px] leading-[30px] text-white/70" href="#">
                Use Cases
              </a>

              <a className="font-poppins font-[300] text-[20px] leading-[30px] text-white/70" href="#">
                About
              </a>

              <a className="font-poppins font-[300] text-[20px] leading-[30px] text-white/70" href="#">
                FAQ
              </a>
            </nav>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[56px] flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <Image
                src="/logo.svg"
                alt="ZENAURA logo (replace)"
                width={163}
                height={56}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right icons + account frame */}
          <div className="flex items-center gap-3">
            <button aria-label="Cart" className="w-8 h-8 flex items-center justify-center text-white/90">
              <ShoppingCart size={20} strokeWidth={1.5} />
            </button>

            <button aria-label="Favorites" className="w-8 h-8 flex items-center justify-center text-white/90">
              <Heart size={20} strokeWidth={1.5} />
            </button>

            <div className="hidden sm:flex items-center gap-3 px-3 h-[40px] border border-white/20 rounded-full bg-transparent min-w-[120px]">
              <div className="w-6 h-6 text-white/100">
                <User size={18} strokeWidth={1.5} />
              </div>
              <span className="font-poppins font-[400] text-[18px] leading-[27px] text-white">Account</span>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden mt-2 bg-[#0D0D0D] border-t border-white/6 py-4 z-40">
            <div className="flex flex-col items-center gap-3">
              {links.map((l) => {
                const isHome = l.label === "Home";
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`w-full max-w-[320px] text-center font-poppins ${
                      isHome ? "font-[500] text-white" : "font-[300] text-white/70"
                    } text-[20px] leading-[30px] py-2`}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}