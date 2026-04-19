"use client";

import { quietProducts } from "../data/shopProducts";
import ShopCarouselSection from "./ShopCarouselSection";

export default function QuietSection() {
  return (
    <ShopCarouselSection
      title="Zen Quiet"
      products={quietProducts}
    />
  );
}