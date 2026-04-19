"use client";

import { bundleProducts } from "../data/shopProducts";
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

export default function BundleSection({ onAddToCart }: Props) {
  return (
    <ShopCarouselSection
      title="Bundle & Save"
      products={bundleProducts}
      onAddToCart={onAddToCart}
    />
  );
}