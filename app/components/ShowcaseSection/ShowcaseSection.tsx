import React, { JSX } from "react";
import ShowcaseCarouselClient from "./ShowcaseCarouselClient";

export default function ShowcaseSection(): JSX.Element {
    return (
        <section className="relative bg-[#0D0D0D] overflow-visible">
            <div className="max-w-[1520px] mx-auto px-12 py-24">
                <div className="flex items-start justify-between">
                    {/* Left title (in normal flow) */}
                    <h2 className="font-montserrat font-bold text-[64px] leading-[87px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 max-w-[700px]">
                        Worn by You, <span className="text-white/90">Loved</span>
                        <br />
                        by Everyone.
                    </h2>

                    {/* Empty placeholder so carousel controls visually align right */}
                    <div className="w-[520px]" aria-hidden />
                </div>

                {/* 160px gap below title */}
                <div className="mt-[160px]">
                    <ShowcaseCarouselClient />
                </div>
            </div>
        </section>
    );
}