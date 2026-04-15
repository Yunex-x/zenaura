import { JSX } from "react";

export default function BannerSection(): JSX.Element {
  return (
    <section className="w-full">
      
      <div
        className="
          relative
          w-full
          h-[300px]

          sm:h-[500px]
          md:h-[500px]
          lg:h-[700px]
          xl:h-[900px]
          2xl:h-[1500px]

          bg-[#F3F3F3]
          overflow-hidden
        "
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="
            absolute inset-0
            bg-[url('/use-cases/bg.png')]
            bg-cover
            bg-top
          "
        />

        {/* OPTIONAL OVERLAY (باش تزيد contrast) */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT (إلا بغيتي تحط شي text فوق) */}
        <div className="relative z-10 h-full flex items-center justify-center">
          {/* تقدر تزيد title / CTA هنا */}
        </div>
      </div>
    </section>
  );
}