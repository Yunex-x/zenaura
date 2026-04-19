"use client";

import LovedCard from "../Home/LovedSection/LovedCard";
import { allProducts } from "./data/shopProducts";
import ShopCarouselSection from "./shopcaroussel/ShopCarouselSection";

export default function AllProductsSection() {
  return (
    <ShopCarouselSection
      title="All Products"
      products={allProducts}
    />

  );
}