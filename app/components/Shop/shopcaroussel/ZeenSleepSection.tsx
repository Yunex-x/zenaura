"use client";

import { sleepProducts } from "../data/shopProducts";
import ShopCarouselSection from "./ShopCarouselSection";

export default function SleepSection() {
  return (
    <ShopCarouselSection
      title="Zen Sleep"
      products={sleepProducts}
    />
  );
}