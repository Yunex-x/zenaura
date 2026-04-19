"use client";

import { allProducts } from "../data/shopProducts";
import ShopCarouselSection from "./ShopCarouselSection";

type AddToCartPayload = {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  colorLabel: string;
  colorHex: string;
};

type Props = {
  onAddToCart?: (item: AddToCartPayload) => void;
};

export default function AllProductsSection({ onAddToCart }: Props) {
  return (
    <ShopCarouselSection
      title="All Products"
      products={allProducts}
      onAddToCart={onAddToCart}
    />
  );
}