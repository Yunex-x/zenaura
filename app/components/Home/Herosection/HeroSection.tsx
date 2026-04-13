import React, { JSX } from "react";
import HeroHeading from "./HeroHeading";
import ImageShowcase from "./ImageShowcase";
import ProductCard from "./ProductCard";
import ZenSwitch from "./ZenSwitch";
import StatsBar from "./StatsBar";

export default function HeroSection(): JSX.Element {
  return (
    <>
      {/* Hero heading */}
      <HeroHeading />

      {/* Large faint background word */}
      <ZenSwitch />

      {/* Hero image */}
      <ImageShowcase />

      {/* Product card (hidden below lg) */}
      <ProductCard />

      {/* Decorative purple blurred ellipse (hidden on small screens) */}
      <div
        className="
          hidden md:block absolute left-1/2 -translate-x-1/2
          top-[300px] md:top-[380px] lg:top-[432px]
          w-[250px] md:w-[350px] lg:w-[446px]
          h-[400px] md:h-[530px] lg:h-[664px]
          rounded-full bg-[rgba(170,106,255,0.37)] filter blur-[200px] z-10
        "
      />

      {/* Stats bar */}
      <StatsBar />
    </>
  );
}