"use client";

import React, { JSX, useState } from "react";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import HeroCases from "@/app/components/cases/HeroCases";
import NoiseReducing from "@/app/components/cases/NoiseReducing";
import BannerSection from "@/app/components/cases/BannerSection";
import BestEarplugsSection from "@/app/components/cases/BestEarplugsSection";
import TestimonialsSection from "@/app/components/cases/TestimonialsSection";
import ZenDifferenceSection from "@/app/components/cases/ZenDifferenceSection";
import OtherUseCasesSection from "@/app/components/cases/OtherUseCasesSection";
import RelatedBlogsSection from "@/app/components/cases/RelatedBlogsSection";
import McLarenSection from "@/app/components/cases/McLarenSection";
import CartSidebar from "@/app/components/cart/CartSidebar";
import StaticFAQAccordion from "@/app/components/cases/StaticFAQAccordion";

type CartItem = {
  id: string;
  productId: string;
  title: string;
  variantTitle?: string;
  price: number;
  quantity: number;
  image: string;
  colorLabel?: string;
  colorHex?: string;
};

type AddToCartPayload = {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  colorLabel: string;
  colorHex: string;
};

export default function UseCases(): JSX.Element {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (newItem: AddToCartPayload): void => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.productId === newItem.productId &&
          item.colorLabel === newItem.colorLabel
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          id: `${newItem.productId}-${newItem.colorLabel}-${Date.now()}`,
          productId: newItem.productId,
          title: newItem.title,
          variantTitle: newItem.colorLabel,
          price: newItem.price,
          quantity: newItem.quantity,
          image: newItem.image,
          colorLabel: newItem.colorLabel,
          colorHex: newItem.colorHex,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const handleIncreaseQty = (itemId: string): void => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQty = (itemId: string): void => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (itemId: string): void => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-black">
      <header className="relative z-50 w-full">
        <Navbar />
      </header>

      <HeroCases />
      <NoiseReducing />

      <McLarenSection onAddToCart={handleAddToCart} />

      <BannerSection />
      <BestEarplugsSection />
      <TestimonialsSection />
      <StaticFAQAccordion />
      <ZenDifferenceSection />
      <OtherUseCasesSection />
      <RelatedBlogsSection />

      <Footer />

      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 z-[90] bg-black/50"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="fixed right-0 top-0 z-[100] h-screen w-full max-w-[520px]">
            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              data={{
                items: cartItems,
                suggestedProducts: [],
                shippingLabel: "Free",
                shippingAmount: 0,
                currency: "EUR",
              }}
              onIncreaseQty={handleIncreaseQty}
              onDecreaseQty={handleDecreaseQty}
              onRemoveItem={handleRemoveItem}
            />
          </div>
        </>
      )}
    </div>
  );
}