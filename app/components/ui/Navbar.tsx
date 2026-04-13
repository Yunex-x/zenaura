"use client";
import React, { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full bg-black">
      <div className="max-w-[1825px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-[48px] md:h-[52px] lg:h-[56px]">
          {/* Left */}
          <div className="flex items-center gap-4">
            {/* Mobile toggle */}
            <button
              className="lg:hidden inline-flex items-center justify-center p-2 text-white/90"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-3 lg:gap-6">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative inline-flex flex-col items-center justify-center whitespace-nowrap pt-1"
                  >
                    <span
                      className={`font-poppins text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] ${
                        active ? "font-[500] text-white" : "font-[300] text-white/70"
                      }`}
                    >
                      {link.label}
                    </span>

                    <span
                      className={`mt-[2px] h-[6px] w-[6px] rounded-full bg-white transition-opacity duration-200 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <Link href="/" aria-label="Go to homepage">
                <Image
                  src="/logo.svg"
                  alt="ZENAURA logo"
                  width={163}
                  height={56}
                  className="object-contain w-[110px] sm:w-[130px] md:w-[145px] lg:w-[163px] h-auto"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/favorites"
              aria-label="Favorites"
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white/90"
            >
              <Heart size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
            </Link>

            <Link
              href="/cart"
              aria-label="Cart"
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white/90"
            >
              <ShoppingCart size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
            </Link>

            <Link
              href="/account"
              className="hidden lg:flex items-center gap-3 px-3 h-[36px] lg:h-[40px] border border-white/20 rounded-full bg-transparent"
              aria-label="Account"
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 text-white/100">
                <User size={16} strokeWidth={1.5} className="lg:w-[18px] lg:h-[18px]" />
              </div>
              <span className="font-poppins font-[400] text-[15px] lg:text-[18px] leading-[27px] text-white">
                Account
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 bg-[#0D0D0D] border-t border-white/6 py-4 z-40">
            <div className="flex flex-col items-center gap-3">
              {links.map((l) => {
                const active = isActive(l.href);

                return (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex flex-col items-center justify-center w-full max-w-[320px] py-2"
                  >
                    <span
                      className={`text-center font-poppins ${
                        active ? "font-[500] text-white" : "font-[300] text-white/70"
                      } text-[18px] leading-[28px]`}
                    >
                      {l.label}
                    </span>

                    <span
                      className={`mt-[4px] h-[6px] w-[6px] rounded-full bg-white ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                  </Link>
                );
              })}

              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 mt-2 px-4 py-2 border border-white/20 rounded-full"
              >
                <User size={16} strokeWidth={1.5} className="text-white" />
                <span className="font-poppins font-[400] text-[16px] text-white">
                  Account
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}