"use client";

import { bundleProducts } from "../data/shopProducts";
import ShopCarouselSection from "./ShopCarouselSection";

export default function BundleSection() {
  return (
    <ShopCarouselSection
      title="Bundle & Save"
      products={bundleProducts}
    />
  );
}