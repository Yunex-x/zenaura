"use client";

import { sleepProducts } from "../data/shopProducts";
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

export default function SleepSection({ onAddToCart }: Props) {
  return (
    <ShopCarouselSection
      title="Zen Sleep"
      products={sleepProducts}
      onAddToCart={onAddToCart}
    />
  );
}