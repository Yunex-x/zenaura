import React, { JSX } from "react";
import LovedCarousel from "./LovedCarousel";

type AddToCartPayload = {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  colorLabel: string;
  colorHex: string;
};

type LovedSectionProps = {
  onAddToCart: (item: AddToCartPayload) => void;
};

export default function LovedSection({
  onAddToCart,
}: LovedSectionProps): JSX.Element {
  return (
    <section className="relative w-screen max-w-full overflow-hidden bg-[#0D0D0D] py-10 sm:py-14 md:py-16 lg:py-[80px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[30%] h-[600px] w-[300px] rounded-full filter blur-[250px] sm:h-[800px] sm:w-[350px] sm:blur-[350px] md:h-[1224px] md:w-[404px]"
        style={{ background: "rgba(170,106,255,0.17)" }}
      />

      <div className="mb-40 w-full px-4 text-center">
        <h2
          className="bg-clip-text font-montserrat font-[700] text-white"
          style={{
            fontSize: "clamp(28px, 5vw, 64px)",
            lineHeight: "1.5",
          }}
        >
          Most Loved Earplugs
        </h2>
      </div>

      <div className="w-full">
        <LovedCarousel onAddToCart={onAddToCart} />
      </div>
    </section>
  );
}