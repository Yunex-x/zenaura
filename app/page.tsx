import React, { JSX } from "react";
import Navbar from "./components/Herosection/Navbar";
import HeroSection from "./components/Herosection/HeroSection";
import PopulairSection from "./components/Populairproduct/PopulairSection";
import LovedSection from "./components/LovedSection/LovedSection";

/**
 * app/page.tsx — renders Navbar, HeroSection, then PopulairSection and LovedSection as separate sections.
 * - Navbar remains reusable and client-side (ensure components/Herosection/Navbar.tsx starts with "use client";)
 * - HeroSection is rendered inside a relatively positioned hero wrapper to preserve absolute children
 * - PopulairSection and LovedSection are rendered after the hero in their own sections so they appear below
 */
export default function Page(): JSX.Element {
  return (
    <>
      {/* Navbar (reusable client component) */}
      <header className="relative z-50">
        <Navbar />
      </header>

      {/* Hero wrapper: provides relative context for absolutely-positioned hero children */}
      <section className="relative bg-[#0D0D0D] overflow-hidden w-full min-h-screen">
        <div className="relative max-w-[1920px] w-full mx-auto">
          <HeroSection />
        </div>
      </section>

      {/* PopulairSection as a separate section below the hero */}
      <section className="bg-[#0D0D0D] w-full">
        <div className="relative max-w-[1920px] w-full mx-auto">
          <PopulairSection />
        </div>
      </section>

      {/* LovedSection (Most Loved Earplugs) below PopulairSection */}
      <section className="bg-[#0D0D0D] w-full">
        <div className="relative max-w-[1920px] w-full mx-auto">
          <LovedSection />
        </div>
      </section>
    </>
  );
}