import { JSX } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const rows = [
  "Reduces background noise",
  "Earplugs for every occasion",
  "Reusable and durable",
  "Comfy & customizable fit",
  "Dozens of bold colors",
  "2-year warranty",
];

export default function ZenDifferenceSection(): JSX.Element {
  /* ================= CONTROLS ================= */

  const topImage = {
    right: "-360px",
    top: "-240px",
    width: 650,
    height: 650,
  };

  const bottomImage = {
    left: "-280px",
    bottom: "-300px",
    width: 748,
    height: 748,
  };

  const table = {
    padding: "64px",
    radius: "32px",
  };

  const gapBetweenCols = "111px";

  const checkGap = "58px";

  /* =========================================== */

  return (
    <section className="w-full bg-black py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-[1920px] mb-16 px-5 md:px-8 lg:px-[150px]">
        <div className="relative mx-auto max-w-[1262px]">
          
          {/* TITLE */}
          <h2 className="
            text-center
            font-bold tracking-[0.02em]

            text-[36px] leading-[44px]
            md:text-[48px] md:leading-[58px]
            lg:text-[64px] lg:leading-[76px]

            bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)]
            bg-clip-text text-transparent
          ">
            The Zen Difference
          </h2>

          {/* WRAPPER (images tied here) */}
          <div className="relative mt-10 lg:mt-[88px]">

            {/* ===== TOP RIGHT IMAGE ===== */}
            <div
              className="absolute hidden lg:block pointer-events-none"
              style={{
                right: topImage.right,
                top: topImage.top,
                width: topImage.width,
                height: topImage.height,
              }}
            >
              <Image
                src="/use-cases/zen-diff-top.png"
                alt=""
                fill
                className="object-contain scale-x-[-1]"
              />
            </div>

            {/* ===== BOTTOM LEFT IMAGE ===== */}
            <div
              className="absolute hidden lg:block pointer-events-none"
              style={{
                left: bottomImage.left,
                bottom: bottomImage.bottom,
                width: bottomImage.width,
                height: bottomImage.height,
              }}
            >
              <Image
                src="/use-cases/zen-diff-bottom.png"
                alt=""
                fill
                className="object-contain "
              />
            </div>

            {/* ===== TABLE ===== */}
            <div
              className="relative z-20 bg-[#1B1A1A]"
              style={{
                borderRadius: table.radius,
                padding: table.padding,
              }}
            >
              <div
                className="hidden lg:grid"
                style={{
                  gridTemplateColumns: "411px 300px 160px",
                  columnGap: gapBetweenCols,
                }}
              >
                {/* LEFT */}
                <div className="flex flex-col gap-[64px]">
                  <h3 className="text-[32px] leading-[44px] bg-gradient-to-r from-white to-[#3E3E3E] bg-clip-text text-transparent">
                    The Zen Difference
                  </h3>

                  <div className="flex flex-col gap-[32px]">
                    {rows.map((row) => (
                      <div
                        key={row}
                        className="border-b border-black/20 pb-4 text-[24px] font-semibold text-white"
                      >
                        {row}
                      </div>
                    ))}
                  </div>
                </div>

                {/* MIDDLE */}
                <div>
                  <h3 className="text-center text-[32px] bg-gradient-to-r from-white to-[#3E3E3E] bg-clip-text text-transparent">
                    The Zen Difference
                  </h3>

                  <div className="mt-10 rounded-[16px] bg-[#845CF2]/5 py-6">
                    <div
                      className="flex flex-col items-center"
                      style={{ gap: checkGap }}
                    >
                      {rows.map((row) => (
                        <div
                          key={row}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#882EFF]"
                        >
                          <Check className="h-4 w-4 text-black" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <h3 className="text-center text-[32px] bg-gradient-to-r from-white to-[#3E3E3E] bg-clip-text text-transparent">
                    Foamies
                  </h3>

                  <div className="mt-10">
                    <div
                      className="flex flex-col items-center"
                      style={{ gap: checkGap }}
                    >
                      {rows.map((row) => (
                        <div
                          key={row}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                        >
                          <Check className="h-4 w-4 text-black/60" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE VERSION */}
              <div className="grid grid-cols-[1fr_60px_60px] gap-4 lg:hidden">
                {rows.map((row) => (
                  <div key={row} className="contents">
                    <div className="border-b border-black/20 py-3 text-[16px] text-white">
                      {row}
                    </div>

                    <div className="flex items-center justify-center border-b border-black/20">
                      <div className="h-6 w-6 rounded-full bg-[#882EFF]" />
                    </div>

                    <div className="flex items-center justify-center border-b border-black/20">
                      <div className="h-6 w-6 rounded-full bg-white/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}