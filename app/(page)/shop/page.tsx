import React, { JSX } from "react";
import ShopHero from "../../components/Shop/ShopHero";
import ShopFilterBar from "../../components/Shop/ShopFilterBar";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import AllProductsSection from "@/app/components/Shop/AllProductsSection";
import BundleSection from "@/app/components/Shop/BundleSection";
import ZenExperienceSection from "@/app/components/Shop/ZenExperienceSection";
import ZenQuietSection from "@/app/components/Shop/ZenQuietSection";
import ZeenSleepSection from "@/app/components/Shop/ZeenSleepSection";
import ZenSwitchSection from "@/app/components/Shop/ZenSwitchSection";

export default function ShopPage(): JSX.Element {
  return (
    <div className="w-full overflow-x-hidden bg-black">
      {/* Navbar */}
      <header className="relative z-50 w-full">
        <Navbar />
      </header>

      {/* Hero Section */}
      <ShopHero />

      {/* Filter Bar */}
      <section className="relative w-full bg-[#0D0D0D] pt-12 sm:pt-16 lg:pt-20">
        <ShopFilterBar />
      </section>

      {/* All Products Carousel */}
      <section id="products" className="relative w-full bg-[#0D0D0D]">
        <AllProductsSection />
        <BundleSection />
        <ZenExperienceSection />
        <ZenSwitchSection />
        <ZenQuietSection />
        <ZeenSleepSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}