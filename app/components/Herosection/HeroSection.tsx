import React, { JSX } from "react";
import HeroHeading from "./HeroHeading";
import ImageShowcase from "./ImageShowcase";
import ProductCard from "./ProductCard";
import ZenSwitch from "./ZenSwitch";
import StatsBar from "./StatsBar";

/**
 * HeroSection
 * - Contains the hero area only (no Navbar)
 * - Includes: HeroHeading, ZenSwitch (bg word), ImageShowcase, ProductCard, StatsBar
 * - Intended to be rendered inside a relative page wrapper (MainSectionFrame)
 */
export default function HeroSection(): JSX.Element {
  return (
    <>
      {/* Hero heading (above the big background word) */}
      <HeroHeading />

      {/* Large faint background word behind the hero */}
      <ZenSwitch />

      {/* Hero image (on top of ZenSwitch) */}
      <ImageShowcase />

      {/* Product card (positioned from spec; hidden on small inside component) */}
      <ProductCard />

      {/* Decorative purple blurred ellipse (hidden on small screens) */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[432px] w-[446px] h-[664px] rounded-full bg-[rgba(170,106,255,0.37)] filter blur-[200px] z-10" />

      {/* Stats bar (placed under hero) */}
      <StatsBar />
    </>
  );
}