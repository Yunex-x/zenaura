import Image from "next/image";
import { JSX } from "react";

export default function McLarenSection(): JSX.Element {

  /* ================= CONTROLS ================= */
  const imageSize = 1000;

  const title = {
    top: 154,
    left: -220,
    width: 606,
  };

  const description = {
    top: 358,
    left: -220,
    width: 493,
  };

  const controls = {
    top: 540,
    left: -220,
  };

  const price = {
    top: 520,
    right: -80,
  };

  /* =========================================== */

  return (
    <section className="w-full bg-[#0D0D0D] py-20 flex justify-center">
      
      {/* IMAGE = MAIN REFERENCE */}
      <div
        className="relative"
        style={{
          width: imageSize,
          height: imageSize,
        }}
      >
        {/* IMAGE */}
        <Image
          src="/use-cases/mclaren.png"
          alt=""
          fill
          className="object-contain"
        />

        {/* TITLE */}
        <h2
          className="
            absolute
            font-bold
            text-[64px]
            leading-[77px]
            tracking-[-0.02em]

            bg-gradient-to-r from-white to-[#7D7D7D]
            bg-clip-text
            text-transparent
          "
          style={{
            top: title.top,
            left: title.left,
            width: title.width,
          }}
        >
          McLaren Racing x Noise Cancellation
        </h2>

        {/* DESCRIPTION */}
        <p
          className="absolute text-[20px] leading-[36px] text-white/60"
          style={{
            top: description.top,
            left: description.left,
            width: description.width,
          }}
        >
          Experience adjustable noise control with the official earplug of
          McLaren Racing.
        </p>

        {/* LEFT CONTROLS */}
        <div
          className="absolute flex flex-col gap-10"
          style={{
            top: controls.top,
            left: controls.left,
          }}
        >
          {/* Color */}
            <p className="mb-3 text-[22px] text-white">
    Color :
  </p>

         <div className="flex gap-3">
  {[
    "/colors/green.png",
    "/colors/black.png",
    "/colors/gold.png",
    "/colors/silver.png",
  ].map((src, i) => (
    <div
      key={i}
      className="relative w-[45px] h-[45px] rounded-full overflow-hidden border border-transparent hover:border-white transition"
    >
      <Image
        src={src}
        alt="color"
        fill
        className="object-cover"
      />
    </div>
  ))}
</div>

          {/* Collection */}
  <p className="mb-3 text-[22px] text-white">
    McLaren Collection
  </p>

  <div className="relative w-[45px] h-[45px] rounded-full overflow-hidden border border-white/20 hover:border-white transition">
    <Image
      src="/colors/mclaren.png"
      alt="McLaren Collection"
      fill
      className="object-cover"
    />
  </div>
</div>

        {/* PRICE + ACTION */}
        <div
          className="absolute flex flex-col gap-6"
          style={{
            top: price.top,
            right: price.right,
          }}
        >
          <div>
            <p className="text-[22px] text-white">Price:</p>
            <p className="text-[44px] font-bold text-white">€40.00</p>
          </div>

          {/* cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border text-amber-50 border-white rounded-full px-4 py-2 gap-4">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="border text-amber-50 border-white rounded-full px-6 py-3">
              Add to Cart
            </button>
          </div>

          {/* buy */}
          <button className="w-[260px] h-[64px] rounded-full bg-[#882EFF] text-white font-semibold">
            Buy with Shop
          </button>

          <p className="text-white underline text-center">
            More Payment Options
          </p>
        </div>
      </div>
    </section>
  );
}