import React from "react";
import Navbar from "./components/navbar";
import HeroHeading from "./components/HeroHeading";
import ImageShowcase from "./components/ImageShowcase";
import ProductCard from "./components/ProductCard";
import ZenSwitch from "./components/ZenSwitch";

/**
 * MainSectionFrame - composes Navbar + HeroHeading + ImageShowcase + ProductCard
 * - All positioning and styling use Tailwind utilities
 */
type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function MainSectionFrame({ children, className = "" }: Props) {
  return (
    <section
      aria-label="Zenaur main frame"
      className={`relative bg-[#0D0D0D] overflow-hidden w-full min-h-screen ${className}`}
    >
      <div className="relative max-w-[1920px] w-full mx-auto">
        {/* Navbar */}
        <div className="absolute inset-x-0 top-4 md:top-[40px] pointer-events-auto z-50">
          <Navbar />
        </div>

        {/* Hero heading (above the big background word) */}
        <HeroHeading />

        {/* Place ZenSwitch BEFORE the ImageShowcase and give it lower z so it sits behind */}
        <ZenSwitch />

        {/* Hero image (ImageShowcase) with higher z so it displays in front */}
        <ImageShowcase />

        {/* Product card (positioned from spec, hidden on small screens) */}
        <ProductCard />

        {/* Decorative purple blurred ellipse (hidden on small screens), sits between hero and main content */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[432px] w-[446px] h-[664px] rounded-full bg-[rgba(170,106,255,0.37)] filter blur-[200px] z-10" />

        {/* Main content area - ensure it's above background word and below navbar as needed */}
        <main className="pt-[420px] md:pt-[520px] relative z-30">
          {children}
        </main>
      </div>
    </section>
  );
}