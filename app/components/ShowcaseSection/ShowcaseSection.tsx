import React, { JSX } from "react";
import ShowcaseCarouselClient from "./ShowcaseCarouselClient";

export default function ShowcaseSection(): JSX.Element {
  return (
    <section className="relative w-screen max-w-full bg-[#0D0D0D] overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-10 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24 pb-10 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24">
        <ShowcaseCarouselClient />
      </div>
    </section>
  );
}