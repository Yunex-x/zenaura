"use client";
import React, { JSX, useState } from "react";
import Image from "next/image";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";

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
        <div className="relative flex items-center justify-between h-[48px] md:h-[52px] lg:h-[56px]">
          {/* Left: mobile/md menu button + desktop links */}
          <div className="flex items-center gap-4">
            {/* Mobile + md toggle (visible below lg) */}
            <button
              className="lg:hidden inline-flex items-center justify-center p-2 text-white/90"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop nav (visible at lg+) */}
            <nav className="hidden lg:flex items-center gap-3 lg:gap-6">
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="font-poppins font-[500] text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-white whitespace-nowrap"
                >
                  Home
                </a>
                <span className="w-[5px] h-[5px] lg:w-[6px] lg:h-[6px] bg-white rounded-full block" aria-hidden />
              </div>

              <a className="font-poppins font-[300] text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-white/70 whitespace-nowrap" href="#">
                Shop
              </a>
              <a className="font-poppins font-[300] text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-white/70 whitespace-nowrap" href="#">
                Use Cases
              </a>
              <a className="font-poppins font-[300] text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-white/70 whitespace-nowrap" href="#">
                About
              </a>
              <a className="font-poppins font-[300] text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-white/70 whitespace-nowrap" href="#">
                FAQ
              </a>
            </nav>
          </div>

          {/* Center logo — scales per breakpoint */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <Image
                src="/logo.svg"
                alt="ZENAURA logo"
                width={163}
                height={56}
                className="object-contain w-[110px] sm:w-[130px] md:w-[145px] lg:w-[163px] h-auto"
                priority
              />
            </div>
          </div>

          {/* Right icons + account frame */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button aria-label="Cart" className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white/90">
              <ShoppingCart size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
            </button>

            <button aria-label="Favorites" className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white/90">
              <Heart size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
            </button>

            <div className="hidden lg:flex items-center gap-3 px-3 h-[36px] lg:h-[40px] border border-white/20 rounded-full bg-transparent">
              <div className="w-5 h-5 lg:w-6 lg:h-6 text-white/100">
                <User size={16} strokeWidth={1.5} className="lg:w-[18px] lg:h-[18px]" />
              </div>
              <span className="font-poppins font-[400] text-[15px] lg:text-[18px] leading-[27px] text-white">Account</span>
            </div>
          </div>
        </div>

        {/* Mobile + md dropdown (visible below lg) */}
        {open && (
          <div className="lg:hidden mt-2 bg-[#0D0D0D] border-t border-white/6 py-4 z-40">
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
                    } text-[18px] leading-[28px] py-2`}
                  >
                    {l.label}
                  </a>
                );
              })}

              {/* Account link in mobile menu */}
              <div className="flex items-center gap-2 mt-2 px-4 py-2 border border-white/20 rounded-full">
                <User size={16} strokeWidth={1.5} className="text-white" />
                <span className="font-poppins font-[400] text-[16px] text-white">Account</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}