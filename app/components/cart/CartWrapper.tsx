"use client";

import { useCart } from "@/app/context/cart-context";
import { useEffect } from "react";
import CartSidebar from "./CartSidebar";

export default function CartWrapper() {
  const { isOpen, closeCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed inset-y-0 right-0 z-[120] w-screen transition-transform duration-300 sm:max-w-[520px] lg:max-w-[748px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CartSidebar isOpen={isOpen} onClose={closeCart} />
      </div>
    </>
  );
}