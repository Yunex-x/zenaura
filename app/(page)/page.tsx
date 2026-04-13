import React, { JSX } from "react";
import Navbar from "../components/Herosection/Navbar";
import HeroSection from "../components/Herosection/HeroSection";
import PopulairSection from "../components/Populairproduct/PopulairSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import LovedSection from "../components/LovedSection/LovedSection";
import ShowcaseSection from "../components/ShowcaseSection/ShowcaseSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ExploreMore from "../components/ExploreMore/ExploreMore";
import Footer from "../components/Footer/Footer";

export default function Page(): JSX.Element {
  return (
    <div className="w-full overflow-x-hidden">
      <header className="relative z-50 w-full">
        <Navbar />
      </header>

      <section className="relative bg-[#0D0D0D] overflow-hidden w-full h-[700px] sm:h-[900px] md:h-[1100px] lg:h-[1400px] xl:h-[1500px]">
        <div className="relative w-full h-full mx-auto">
          <HeroSection />
        </div>
      </section>

      <PopulairSection />
      <LovedSection />
      <FeaturesSection />
      <ShowcaseSection />
      <AboutSection />
      <ExploreMore />
      <Footer />
    </div>
  );
}