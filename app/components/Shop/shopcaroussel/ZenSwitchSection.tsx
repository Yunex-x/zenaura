"use client";

import { switchProducts } from "../data/shopProducts";
import ShopCarouselSection from "./ShopCarouselSection";

export default function SwitchSection() {
  return (
    <ShopCarouselSection
      title="Zen Switch"
      products={switchProducts}
    />
  );
}