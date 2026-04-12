import React, { JSX } from "react";
import Navbar from "./components/Herosection/Navbar";
import HeroSection from "./components/Herosection/HeroSection";
import PopulairSection from "./components/Populairproduct/PopulairSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import LovedSection from "./components/LovedSection/LovedSection";
import ShowcaseSection from "./components/ShowcaseSection/ShowcaseSection";

/**
 * app/page.tsx — renders the full page:
 * Navbar -> HeroSection -> PopulairSection -> LovedSection -> FeaturesSection
 */
export default function Page(): JSX.Element {
  return (
    <>
      {/* Navbar */}
      <header className="relative z-50">
        <Navbar />
      </header>

      {/* Hero wrapper */}
      <section className="relative bg-[#0D0D0D] overflow-hidden w-full min-h-screen">
        <div className="relative max-w-[1920px] w-full mx-auto">
          <HeroSection />
        </div>
      </section>

      {/* Populair / popular products section */}
      <section className="bg-[#0D0D0D] w-full">
        <div className="relative max-w-[1920px] w-full mx-auto">
          <PopulairSection />
        </div>
      </section>

      {/* Most loved products */}
      <section className="bg-[#0D0D0D] w-full">
        <div className="relative max-w-[1920px] w-full mx-auto">
          <LovedSection />
        </div>
      </section>

      {/* Features section (new) */}
      <section className="bg-[#0D0D0D] w-full">
        <div className="relative max-w-[1920px] w-full mx-auto">
          <FeaturesSection />
        </div>
      </section>
      <section className="bg-[#0D0D0D] w-full">
        <div className="relative max-w-[1920px] w-full mx-auto">
          <ShowcaseSection />
        </div>
      </section>
    </>
  );
}