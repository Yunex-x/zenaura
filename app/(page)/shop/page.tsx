"use client";

import React, { JSX, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ShopHero from "../../components/Shop/ShopHero";
import ShopFilterBar from "../../components/Shop/ShopFilterBar";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import AllProductsSection from "@/app/components/Shop/shopcaroussel/AllProductsSection";
import BundleSection from "@/app/components/Shop/shopcaroussel/BundleSection";
import ZenExperienceSection from "@/app/components/Shop/shopcaroussel/ZenExperienceSection";
import ZenQuietSection from "@/app/components/Shop/shopcaroussel/ZenQuietSection";
import ZeenSleepSection from "@/app/components/Shop/shopcaroussel/ZeenSleepSection";
import ZenSwitchSection from "@/app/components/Shop/shopcaroussel/ZenSwitchSection";

export default function ShopPage(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const renderSection = () => {
    switch (activeFilter) {
      case "all":
        return (
          <>
            <AllProductsSection />
            <BundleSection />
            <ZenExperienceSection />
            <ZenSwitchSection />
            <ZenQuietSection />
            <ZeenSleepSection />
          </>
        );

      case "products":
        return <AllProductsSection />;

      case "bundles":
        return <BundleSection />;

      case "experience":
        return <ZenExperienceSection />;

      case "switch":
        return <ZenSwitchSection />;

      case "quiet":
        return <ZenQuietSection />;

      case "sleep":
        return <ZeenSleepSection />;

      default:
        return (
          <>
            <AllProductsSection />
            <BundleSection />
            <ZenExperienceSection />
            <ZenSwitchSection />
            <ZenQuietSection />
            <ZeenSleepSection />
          </>
        );
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-black">
      <header className="relative z-50 w-full">
        <Navbar />
      </header>

      <ShopHero />

      <section className="relative w-full bg-[#0D0D0D] pt-12 sm:pt-16 lg:pt-20">
        <ShopFilterBar onFilterChange={handleFilterChange} />
      </section>

      <section
        id="products"
        className="relative w-full bg-[#0D0D0D] min-h-[70vh] lg:min-h-[120vh] py-12 sm:py-16 lg:py-20"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}