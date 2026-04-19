"use client";

import React, { JSX, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ShopHero from "../../components/Shop/ShopHero";
import ShopFilterBar from "../../components/Shop/ShopFilterBar";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import AllProductsSection from "@/app/components/Shop/shopcaroussel/AllProductsSection";
import BundleSection from "@/app/components/Shop/shopcaroussel/BundleSection";
import ZenExperienceSection from "@/app/components/Shop/shopcaroussel/ZenExperienceSection";
import ZenQuietSection from "@/app/components/Shop/shopcaroussel/ZenQuietSection";
import ZeenSleepSection from "@/app/components/Shop/shopcaroussel/ZeenSleepSection";
import ZenSwitchSection from "@/app/components/Shop/shopcaroussel/ZenSwitchSection";
import CartSidebar from "@/app/components/cart/CartSidebar";

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

export default function ShopPage(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

  const renderSection = () => {
    switch (activeFilter) {
      case "all":
        return (
          <>
            <AllProductsSection onAddToCart={handleAddToCart} />
            <BundleSection onAddToCart={handleAddToCart} />
            <ZenExperienceSection onAddToCart={handleAddToCart} />
            <ZenSwitchSection onAddToCart={handleAddToCart} />
            <ZenQuietSection onAddToCart={handleAddToCart} />
            <ZeenSleepSection onAddToCart={handleAddToCart} />
          </>
        );

      case "products":
        return <AllProductsSection onAddToCart={handleAddToCart} />;

      case "bundles":
        return <BundleSection onAddToCart={handleAddToCart} />;

      case "experience":
        return <ZenExperienceSection onAddToCart={handleAddToCart} />;

      case "switch":
        return <ZenSwitchSection onAddToCart={handleAddToCart} />;

      case "quiet":
        return <ZenQuietSection onAddToCart={handleAddToCart} />;

      case "sleep":
        return <ZeenSleepSection onAddToCart={handleAddToCart} />;

      default:
        return (
          <>
            <AllProductsSection onAddToCart={handleAddToCart} />
            <BundleSection onAddToCart={handleAddToCart} />
            <ZenExperienceSection onAddToCart={handleAddToCart} />
            <ZenSwitchSection onAddToCart={handleAddToCart} />
            <ZenQuietSection onAddToCart={handleAddToCart} />
            <ZeenSleepSection onAddToCart={handleAddToCart} />
          </>
        );
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-black">
      <header className="relative z-50 w-full">
        <Navbar />
      </header>

      <ShopHero />

      <section className="relative w-full bg-[#0D0D0D] pt-12 sm:pt-16 lg:pt-20">
        <ShopFilterBar onFilterChange={handleFilterChange} />
      </section>

      <section
        id="products"
        className="relative min-h-[70vh] w-full bg-[#0D0D0D] py-12 sm:py-16 lg:min-h-[120vh] lg:py-20"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </section>

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