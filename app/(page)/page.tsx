"use client";

import React, { JSX, useState } from "react";
import Navbar from "../components/ui/Navbar";
import HeroSection from "../components/Home/Herosection/HeroSection";
import PopulairSection from "../components/Home/Populairproduct/PopulairSection";
import FeaturesSection from "../components/Home/FeaturesSection/FeaturesSection";
import LovedSection from "../components/Home/LovedSection/LovedSection";
import ShowcaseSection from "../components/Home/ShowcaseSection/ShowcaseSection";
import AboutSection from "../components/Home/AboutSection/AboutSection";
import ExploreMore from "../components/Home/ExploreMore/ExploreMore";
import Footer from "../components/ui/Footer";
import CartSidebar from "../components/cart/CartSidebar";

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

export default function Page(): JSX.Element {
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
    <div className="relative w-full overflow-x-hidden">
      <header className="relative z-50 w-full">
        <Navbar />
      </header>

      <section className="relative h-[700px] w-full overflow-hidden bg-[#0D0D0D] sm:h-[900px] md:h-[1100px] lg:h-[1400px] xl:h-[1500px]">
        <div className="relative mx-auto h-full w-full">
          <HeroSection />
        </div>
      </section>

      <PopulairSection />
      <LovedSection onAddToCart={handleAddToCart} />
      <FeaturesSection />
      <ShowcaseSection />
      <AboutSection />
      <ExploreMore />
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