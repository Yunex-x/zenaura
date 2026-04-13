import React, { JSX } from "react";
import ShopHero from "../../components/Shop/ShopHero";
import ShopFilterBar from "../../components/Shop/ShopFilterBar";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";

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

      {/* Product Grid (placeholder) */}
      <section
        id="products"
        className="relative w-full bg-[#0D0D0D] min-h-[400px]"
      >
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[113px] py-12 sm:py-16 lg:py-[80px]">
          {/* Product cards will go here */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}