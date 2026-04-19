"use client";

import { experienceProducts } from "../data/shopProducts";
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

export default function ExperienceSection({ onAddToCart }: Props) {
  return (
    <ShopCarouselSection
      title="Zen Experience"
      products={experienceProducts}
      onAddToCart={onAddToCart}
    />
  );
}