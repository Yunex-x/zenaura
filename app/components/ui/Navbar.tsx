"use client";

import React, { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { useCart } from "@/app/context/cart-context";
export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openCart } = useCart();

  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 z-[100] w-full border-b border-white/10 bg-black/30 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
      <div className="mx-auto max-w-[1825px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[48px] items-center justify-between md:h-[52px] lg:h-[56px]">
          {/* Left */}
          <div className="flex items-center gap-4">
            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-white/90 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-3 lg:flex lg:gap-6">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative inline-flex flex-col items-center justify-center whitespace-nowrap pt-1"
                  >
                    <span
                      className={`font-poppins text-[16px] leading-[30px] md:text-[18px] lg:text-[14px] xl:text-[22px] ${
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
          <div className="pointer-events-none absolute left-1/2 top-0 flex h-full -translate-x-1/2 items-center justify-center">
            <div className="pointer-events-auto">
              <Link href="/" aria-label="Go to homepage">
                <Image
                  src="/logo.svg"
                  alt="ZENAURA logo"
                  width={163}
                  height={56}
                  className="h-auto w-[110px] object-contain sm:w-[130px] md:w-[145px] lg:w-[163px]"
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
              className="flex h-7 w-7 items-center justify-center text-white/90 sm:h-8 sm:w-8"
            >
              <Heart size={18} strokeWidth={1.5} className="sm:h-5 sm:w-5" />
            </Link>

            <button
              type="button"
              aria-label="Cart"
              onClick={openCart}
              className="flex h-7 w-7 items-center justify-center text-white/90 sm:h-8 sm:w-8"
            >
              <ShoppingCart
                size={18}
                strokeWidth={1.5}
                className="sm:h-5 sm:w-5"
              />
            </button>

            <Link
              href="/account"
              className="hidden h-[36px] items-center gap-3 rounded-full border border-white/20 bg-transparent px-3 lg:flex lg:h-[40px]"
              aria-label="Account"
            >
              <div className="h-5 w-5 text-white/100 lg:h-6 lg:w-6">
                <User
                  size={16}
                  strokeWidth={1.5}
                  className="lg:h-[18px] lg:w-[18px]"
                />
              </div>
              <span className="font-poppins text-[15px] font-[400] leading-[27px] text-white lg:text-[18px]">
                Account
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="z-40 mt-2 border-t border-white/6 bg-[#0D0D0D] py-4 lg:hidden">
            <div className="flex flex-col items-center gap-3">
              {links.map((l) => {
                const active = isActive(l.href);

                return (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex w-full max-w-[320px] flex-col items-center justify-center py-2"
                  >
                    <span
                      className={`font-poppins text-center text-[18px] leading-[28px] ${
                        active ? "font-[500] text-white" : "font-[300] text-white/70"
                      }`}
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

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openCart();
                }}
                className="mt-1 flex items-center gap-2 px-4 py-2 text-white/90"
                aria-label="Open cart"
              >
                <ShoppingCart size={16} strokeWidth={1.5} className="text-white" />
                <span className="font-poppins text-[16px] font-[400] text-white">
                  Cart
                </span>
              </button>

              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-full border border-white/20 px-4 py-2"
              >
                <User size={16} strokeWidth={1.5} className="text-white" />
                <span className="font-poppins text-[16px] font-[400] text-white">
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