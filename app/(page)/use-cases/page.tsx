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
import HeroCases from "@/app/components/cases/HeroCases";
import NoiseReducing from "@/app/components/cases/NoiseReducing";
import McLarenSection from "@/app/components/cases/McLarenSection";
import BannerSection from "@/app/components/cases/BannerSection";
import BestEarplugsSection from "@/app/components/cases/BestEarplugsSection";
import FAQAccordion from "@/app/components/faq/FAQAccordion";
import TestimonialsSection from "@/app/components/cases/TestimonialsSection";
import ZenDifferenceSection from "@/app/components/cases/ZenDifferenceSection";
import OtherUseCasesSection from "@/app/components/cases/OtherUseCasesSection";
import RelatedBlogsSection from "@/app/components/cases/RelatedBlogsSection";

export default function ShopPage(): JSX.Element {
  return (
    <div className="w-full overflow-x-hidden bg-black">
      {/* Navbar */}
      <header className="relative z-50 w-full">
        <Navbar />
      </header>

{/* Hero Section */}
    <HeroCases /> 
    <NoiseReducing />   
    <McLarenSection />  
    <BannerSection />
    <BestEarplugsSection />
    <TestimonialsSection />
            <FAQAccordion />
    <ZenDifferenceSection />
    <OtherUseCasesSection />
    <RelatedBlogsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}