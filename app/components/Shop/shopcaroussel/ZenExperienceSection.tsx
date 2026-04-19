"use client";

import { experienceProducts } from "../data/shopProducts";
import ShopCarouselSection from "./ShopCarouselSection";

export default function ExperienceSection() {
  return (
    <ShopCarouselSection
      title="Zen Experience"
      products={experienceProducts}
    />
  );
}