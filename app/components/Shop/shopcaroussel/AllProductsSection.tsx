"use client";

import { allProducts } from "../data/shopProducts";
import ShopCarouselSection from "./ShopCarouselSection";

export default function AllProductsSection() {
  return (
    <ShopCarouselSection
      title="All Products"
      products={allProducts}
    />
  );
}