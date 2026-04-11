import React, { JSX } from "react";
import Navbar from "./components/Herosection/Navbar";
import HeroSection from "./components/Herosection/HeroSection";
import PopulairSection from "./components/Populairproduct/PopulairSection";

/**
 * app/page.tsx — renders Navbar, HeroSection, then PopulairSection as a separate section below the hero.
 * - Navbar remains reusable and client-side (ensure components/Herosection/Navbar.tsx starts with "use client";)
 * - HeroSection is rendered inside a relatively positioned hero wrapper to preserve absolute children
 * - PopulairSection is rendered after the hero in its own section so it appears below
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

      {/* Main content area (below PopulairSection) */}
      <main className="bg-[#0D0D0D]">
        <div className="max-w-[1200px] mx-auto px-4 py-16">
          {/* Replace with your real page sections */}
          <section>
            <h2 className="font-poppins text-[28px] text-white mb-6">Features</h2>
            <p className="text-white/80">Your content goes here...</p>
          </section>
        </div>
      </main>
    </>
  );
}